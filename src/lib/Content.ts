import { type ProjectData, ProjectType, MediaTypes } from './types';
import { projects } from '../index';

export default class Content {
    static get all(): ProjectData[] {
        return Object.values(projects);
    }

    static get media(): ProjectData[] {
        return this.all.filter((project: ProjectData) => MediaTypes.indexOf(project.type) >= 0);
    }
    
    static mediaProject(key: string): ProjectData | null {
        key = key.replace('-', '_');
        const candidate = projects[key];
        return MediaTypes.indexOf(candidate.type) >= 0 ? candidate : null;
    }

    static writing() {
        // todo
    }

    static writingProject(key: string) {
        // todo
    }
}
