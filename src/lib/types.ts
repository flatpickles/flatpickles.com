export enum ProjectType {
    Image = "Image",
    Video = "Video",
    Audio = "Audio",
    Other = "Other"
}

export const MediaTypes = [
    ProjectType.Image,
    ProjectType.Video,
    ProjectType.Audio
];

export interface ProjectData {
    title: string;
    url: string;
    assetPath?: string;
    timestamp: Date;
    type: ProjectType;
}
