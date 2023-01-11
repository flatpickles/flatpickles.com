import { type ProjectData, type NoteData, ProjectType } from '../types';

import { mediaProjects } from './media';
import { externalProjects } from './external';

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
        const allWritingFiles = import.meta.glob('./writing/*.md');
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
        const allNotesFiles = import.meta.glob('./notes/*.md', { eager: true });
        const iterableNotesFiles = Object.entries(allNotesFiles);
        return iterableNotesFiles.map(([path, module]) => {
            const key = this.keyFromPath(path);
            return this.makeNote(key, module as Record<string, any>); // ??
        });
    }
    
    static mediaProject(key: string): ProjectData | null {
        return mediaProjects[key];
    }

    static async writingProject(key: string): Promise<ProjectData> {
        const module = await import(`./writing/${key}.md`);
        const project = this.makeWritingProject(key, module.metadata);
        project.component = module.default;
        return project;
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
            url: `/notes/${key}`,
            date: new Date(module.metadata.date),
            // updated: todo
            component: module.default
        };
    }
}
