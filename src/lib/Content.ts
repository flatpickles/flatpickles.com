import type { ProjectData, ProjectRecord, ProjectType } from "./types";

export default class Content {
    static async all() {
        // todo
    }

    static async media() {
        // todo
    }

    static async mediaProject(key: string): Promise<ProjectData> {
        const record: ProjectRecord = (await this.recordsMap())[key]; // todo: filter for media
        return this.dataFromRecord(record);
    }

    static async writing() {
        // todo
    }

    static async writingProject(key: string) {
        // todo
    }

    private static async recordsMap(): Promise<{ [key: string]: ProjectRecord }> {
        return (await import(`../projects.json`)).default;
    }

    private static dataFromRecord(record: ProjectRecord): ProjectData {
        return {
            title: record.title,
            url: "/projects/media/" + record.filename, // todo: generalize
            timestamp: new Date(record.date),
            type: record.type as ProjectType
        };
    }
}
