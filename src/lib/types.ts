import type { ZonedDateTime } from '@js-joda/core';

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

export interface ProjectData {
    title: string;
    url: string;
    date: ZonedDateTime;
    type: ProjectType;
    assetPath?: string;
    component?: ConstructorOfATypedSvelteComponent;
}

export interface NoteData {
    title: string;
    url: string;
    date: ZonedDateTime;
    updated?: ZonedDateTime;
    component: ConstructorOfATypedSvelteComponent;
}

export interface NotesPage {
    notes: NoteData[];
    currentPage: number;
    pageCount: number;
}
