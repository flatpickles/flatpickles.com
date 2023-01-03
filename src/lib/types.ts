export enum ProjectType {
    Image = "Image",
    Video = "Video",
    Audio = "Audio",
    Live = "Live Sketch",
    WebApp = "Web App",
    VideoEffect = "Video Effect",
    Writing = "Writing",
    Playlist = "Playlist",
    Transcription = "Transcription",
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
