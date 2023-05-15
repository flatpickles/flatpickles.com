import type { ZonedDateTime } from '@js-joda/core';

export enum ProjectType {
    Image = 'Image',
    Video = 'Video',
    Audio = 'Audio',
    Live = 'Live Graphics',
    Generative = 'Generative Art',
    WebApp = 'Web App',
    VideoEffect = 'Video Effect',
    Writing = 'Writing',
    Playlist = 'Playlist',
    Transcription = 'Transcription',
    Notebook = 'Notebook',
    Other = 'Other',
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
    draft?: boolean;
    component: ConstructorOfATypedSvelteComponent;
}

export interface NotesPage {
    notes: NoteData[];
    currentPage: number;
    pageCount: number;
}
