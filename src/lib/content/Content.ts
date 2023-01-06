import { type ProjectData, ProjectType, MediaTypes } from '../types';
import { projects } from '../../index';

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
    static get all(): ProjectData[] {
        const allContents: ProjectData[] = this.media.concat(this.external).concat(this.writing);
        return allContents.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    }

    static get media(): ProjectData[] {
        return Object.values(mediaProjects);
    }

    static get external(): ProjectData[] {
        return externalProjects;
    }

    static get writing(): ProjectData[] {
        return [];
    }
    
    static mediaProject(key: string): ProjectData | null {
        key = key.replaceAll('-', '_');
        const candidate = projects[key];
        return (candidate && MediaTypes.indexOf(candidate.type) >= 0) ? candidate : null;
    }

    static writingProject(key: string): ProjectData | null {
        return null
    }
}
