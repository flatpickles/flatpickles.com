import type { ZonedDateTime } from '@js-joda/core';

export enum ProjectType {
    Image = 'Image',
    Video = 'Video',
    Audio = 'Audio',
    Live = 'Live Graphics',
    Generative = 'Algorithmic Art',
    WebApp = 'Web App',
    Landing = 'Landing Page',
    VideoEffect = 'Video Effect',
    Writing = 'Writing',
    Playlist = 'Playlist',
    Transcription = 'Transcription',
    Notebook = 'Notebook',
    Note = 'Note',
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

export interface NoteData extends ProjectData {
    title: string;
    url: string;
    date: ZonedDateTime;
    updated?: ZonedDateTime;
    draft?: boolean;
    archived?: boolean;
    component: ConstructorOfATypedSvelteComponent;
}

export interface NotesPage {
    notes: NoteData[];
    currentPage: number;
    pageCount: number;
}
