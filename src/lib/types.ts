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

export const extensionMap: Record<string, ProjectType> = {
    'png': ProjectType.Image,
    'jpg': ProjectType.Image,
    'svg': ProjectType.Image,
    'mp4': ProjectType.Video,
    'mp3': ProjectType.Audio,
}

export interface MediaRecord {
    title: string,
    filename: string,
    date: string
}

export interface ProjectData {
    title: string;
    url: string;
    timestamp: Date;
    type: ProjectType;
    assetPath?: string;
    content?: string;
}
