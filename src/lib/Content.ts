import { type ProjectData, type NoteData, ProjectType, type NotesPage } from './types';

import { mediaProjects } from './content/media';
import { externalProjects } from './content/external';

export default class Content {
    static async fullIndex(): Promise<ProjectData[]> {
        const writingIndex: ProjectData[] = await this.writingIndex();
        const allContents: ProjectData[] = this.mediaIndex().concat(this.externalIndex()).concat(writingIndex);
        return allContents.sort((a, b) => b.date.getTime() - a.date.getTime());
    }

    static mediaIndex(): ProjectData[] {
        return Object.values(mediaProjects);
    }

    static externalIndex(): ProjectData[] {
        return externalProjects;
    }

    static async writingIndex(): Promise<ProjectData[]> {
        const allWritingFiles = import.meta.glob('./content/writing/*.md');
        const iterableWritingFiles = Object.entries(allWritingFiles);
        return await Promise.all(
            iterableWritingFiles.map(async ([path, resolver]) => {
                const { metadata } = await resolver() as any;
                const key = this.keyFromPath(path);
                return this.makeWritingProject(key, metadata);
            })
        );
    }

    static notesIndex(): NoteData[] {
        const allNotesFiles = import.meta.glob('./content/notes/*.md', { eager: true });
        const iterableNotesFiles = Object.entries(allNotesFiles);
        return iterableNotesFiles.map(([path, module]) => {
            const key = this.keyFromPath(path);
            return this.makeNote(key, module as Record<string, any>); // ??
        });
    }

    static async notesPage(pageNum: number): Promise<NotesPage> {
        const allNotesFiles = import.meta.glob('./content/notes/*.md');
        const iterableNotes = Object.entries(allNotesFiles);
        const sortedNotes = iterableNotes.sort(([pathA], [pathB]) => {
            return pathA.localeCompare(pathB);
        });

        const pageFiles = [sortedNotes[pageNum - 1]];

        return {
            notes: await Promise.all(
                pageFiles.map(async ([path, resolver]) => {
                    const module = await resolver() as any;
                    const key = this.keyFromPath(path);
                    return this.makeNote(key, module);
                })
            ),
            currentPage: pageNum,
            pageCount: 8
        }
    }
    
    static mediaProject(key: string): ProjectData | null {
        return mediaProjects[key];
    }

    static async writingProject(key: string): Promise<ProjectData> {
        const module = await import(`./content/writing/${key}.md`);
        const project = this.makeWritingProject(key, module.metadata);
        project.component = module.default;
        return project;
    }

    static async note(key: string): Promise<NoteData> {
        const module = await import(`./content/notes/${key}.md`);
        return this.makeNote(key, module);
    }

    /*** Private Utilities ***/

    private static keyFromPath(path: string): string {
        return path.split('/').pop()?.split('.').shift() as string; // ??
    }

    private static makeWritingProject(key: string, metadata: Record<string, any>): ProjectData {
        return {
            title: metadata.title,
            url: `/writing/${key}`,
            date: new Date(metadata.date),
            type: ProjectType.Writing
        };
    }

    private static makeNote(key: string, module: Record<string, any>): NoteData {
        return {
            title: module.metadata.title,
            url: `/note/${key}`,
            date: new Date(module.metadata.date),
            // updated: todo
            component: module.default
        };
    }
}
