import Config from './Config';
import DateUtils from './DateUtils';
import { type ProjectData, type NoteData, ProjectType, type NotesPage } from './types';
import type { ZonedDateTime } from '@js-joda/core';

import { mediaProjects } from './content/media';
import { externalProjects } from './content/external';

/**
 * Content is a pseudo-API for all content included on flatpickles.com! Perhaps someday
 * the site will outgrow this approach, but for now it should be sufficient & efficient.
 */
export default class Content {
    static projects(): ProjectData[] {
        const writingIndex: ProjectData[] = this.writingProjects();
        const allContents: ProjectData[] = this.mediaProjects().concat(this.externalProjects()).concat(writingIndex);
        return allContents.sort((a, b) => {
            return b.date.compareTo(a.date);
        });
    }

    /*** Entry collection requests ***/

    static mediaProjects(): ProjectData[] {
        return Object.values(mediaProjects);
    }

    static externalProjects(): ProjectData[] {
        return externalProjects;
    }

    static writingProjects(): ProjectData[] {
        const allWritingFiles = import.meta.glob('./content/writing/*.md', { eager: true });
        const iterableWritingFiles = Object.entries(allWritingFiles);
        return iterableWritingFiles.map(([path, module]) => {
            const key = this.keyFromPath(path);
            return this.makeWritingProject(key, module as Record<string, any>); // ??
        });
    }

    static notesPage(pageNumber: number): NotesPage {
        // Validate numeric input
        if (isNaN(pageNumber)) {
            throw new Error('Non-numeric page number provided.')
        }

        // Collect notes files and sort them by published or updated date
        const allNotesMd = import.meta.glob('./content/notes/*.md', { eager: true });
        const allNotesSvx = import.meta.glob('./content/notes/*.svx', { eager: true });
        const iterableNotes = Object.entries(allNotesMd).concat(Object.entries(allNotesSvx));
        const hydratedNotes: NoteData[] = iterableNotes.map(([path, module]) => {
            const key = this.keyFromPath(path);
            return this.makeNote(key, module as Record<string, any>); // ??
        });
        const filteredNotes = hydratedNotes.filter(note => !note.draft);
        const sortedNotes = filteredNotes.sort((noteA, noteB) => {
            const dateA: ZonedDateTime = noteA.updated ?? noteA.date;
            const dateB: ZonedDateTime = noteB.updated ?? noteB.date;
            return dateB.compareTo(dateA);
        });

        // Calculate page bounds and check validity
        const pageStart = (pageNumber - 1) * Config.notesPageSize;
        if (pageStart >= sortedNotes.length) {
            throw new Error(`Page ${pageNumber} does not exist.`);
        }
        const pageEnd = pageNumber * Config.notesPageSize;
        const pageFiles = sortedNotes.slice(pageStart, pageEnd);

        // Return NotesPage
        return {
            notes: pageFiles,
            currentPage: pageNumber,
            pageCount: Math.ceil(sortedNotes.length / Config.notesPageSize)
        };
    }

    /*** Single entry request */
    
    static mediaProject(key: string): ProjectData {
        return mediaProjects[key];
    }

    static async writingProject(key: string): Promise<ProjectData> {
        const module = await import(`./content/writing/${key}.md`);
        return this.makeWritingProject(key, module);
    }

    static async note(key: string): Promise<NoteData> {
        let module;
        try {
            // Attempt .md import
            module = await import(`./content/notes/${key}.md`);
        } catch {
            try {
                // Attempt .svx import
                module = await import(`./content/notes/${key}.svx`);
            } catch {
                // Note doesn't exist!
                throw new Error(`Note not found with key ${key}`);
            }
        }
        return this.makeNote(key, module);
    }

    /*** Private utilities ***/

    private static keyFromPath(path: string): string {
        return path.split('/').pop()?.split('.').shift() as string; // ??
    }

    private static makeWritingProject(key: string, module: Record<string, any>): ProjectData {
        return {
            title: module.metadata.title,
            url: `/writing/${key}`,
            date: DateUtils.pacificDate(module.metadata.date),
            type: ProjectType.Writing,
            component: module.default
        };
    }

    private static makeNote(key: string, module: Record<string, any>): NoteData {
        return {
            title: module.metadata.title,
            url: `/note/${key}`,
            date: DateUtils.pacificDate(module.metadata.date),
            updated: module.metadata.updated ? DateUtils.pacificDate(module.metadata.updated) : undefined,
            draft: module.metadata.draft ?? false,
            component: module.default
        };
    }
}
