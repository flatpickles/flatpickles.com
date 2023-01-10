export enum ProjectType {
    Image = "Image",
    Video = "Video",
    Audio = "Audio",
    Live = "Live Graphics",
    WebApp = "Web App",
    VideoEffect = "Video Effect",
    Writing = "Writing",
    Playlist = "Playlist",
    Transcription = "Transcription",
    Other = "Other"
}

export enum HeaderType {
    FlatPickles,
    NotesAndSuch,
    MattNichols
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
    date: Date;
    type: ProjectType;
    assetPath?: string;
    component?: ConstructorOfATypedSvelteComponent;
}
