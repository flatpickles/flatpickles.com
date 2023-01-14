import Config from './Config';
import { type ProjectData, type NoteData, ProjectType, type NotesPage } from './types';

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
        return allContents.sort((a, b) => b.date.getTime() - a.date.getTime());
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
        const allNotesFiles = import.meta.glob('./content/notes/*.md', { eager: true });
        const iterableNotes: [string, any][] = Object.entries(allNotesFiles);
        const hydratedNotes: NoteData[] = iterableNotes.map(([path, module]) => {
            const key = this.keyFromPath(path);
            return this.makeNote(key, module as Record<string, any>); // ??
        })
        const sortedNotes = hydratedNotes.sort((noteA, noteB) => {
            const dateA: Date = noteA.updated ?? noteA.date;
            const dateB: Date = noteB.updated ?? noteB.date;
            return dateB.getTime() - dateA.getTime();
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
        const project = this.makeWritingProject(key, module);
        return project;
    }

    static async note(key: string): Promise<NoteData> {
        const module = await import(`./content/notes/${key}.md`);
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
            date: new Date(module.metadata.date),
            type: ProjectType.Writing,
            component: module.default
        };
    }

    private static makeNote(key: string, module: Record<string, any>): NoteData {
        return {
            title: module.metadata.title,
            url: `/note/${key}`,
            date: new Date(module.metadata.date),
            updated: module.metadata.updated ? new Date(module.metadata.updated) : undefined,
            component: module.default
        };
    }
}
