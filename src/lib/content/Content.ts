import { type ProjectData, ProjectType } from '../types';

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
        // return [];
        const allPostFiles = import.meta.glob('./writing/*.md');
        const iterablePostFiles = Object.entries(allPostFiles);
        const allPosts = await Promise.all(
            iterablePostFiles.map(async ([path, resolver]) => {
                const { metadata } = await resolver() as any;
                const key: string = path.split('/').pop()?.split('.').shift() as string;
                return this.makeWritingProject(key, metadata);
            })
        );
        return allPosts;
    }
    
    static mediaProject(key: string): ProjectData | null {
        return mediaProjects[key];
    }

    static async writingProject(key: string): Promise<ProjectData> {
        const post = await import(`./writing/${key}.md`);
        const project = this.makeWritingProject(key, post.metadata);
        project.component = post.default;
        return project;
    }

    private static makeWritingProject(key: string, metadata: any): ProjectData {
        return {
            title: metadata.title,
            url: `/writing/${key}`,
            date: new Date(metadata.date),
            type: ProjectType.Writing
        };
    }
}
