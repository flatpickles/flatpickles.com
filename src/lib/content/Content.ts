import { type ProjectData, ProjectType } from '../types';

import { mediaProjects } from './media';
import { externalProjects } from './external';

/* NEW LAYOUT
 In this file, we combine
 * Media (JSON specified in src/lib/content/media.ts, stored in static/)
 * External (JSON specified in src/lib/content/external.ts, linking out)
 * Writing (just md files in src/lib/content/writing, ProjectData objects are generated w/ import call)
 * Posts (probably same as Writing, put this off for a bit)

 Maybe we move away from the map in media/external to being able to just filter by key?

 We need subtypes for data, so WritingProject can contain the document content

*/

export default class Content {
    static async fullIndex(): Promise<ProjectData[]> {
        const writingIndex: ProjectData[] = await this.writingIndex();
        const allContents: ProjectData[] = this.mediaIndex().concat(this.externalIndex()).concat(writingIndex);
        return allContents.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    }

    static mediaIndex(): ProjectData[] {
        return Object.values(mediaProjects);
    }

    static externalIndex(): ProjectData[] {
        return externalProjects;
    }

    static async writingIndex(): Promise<ProjectData[]> {
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
            timestamp: new Date(metadata.date),
            type: ProjectType.Writing
        };
    }
}
