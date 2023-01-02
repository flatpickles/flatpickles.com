/**
 * ProjectRecord
 * 
 * Handcrafted project metadata in an index file.
 * All properties are strings.
 */
export interface ProjectRecord {
    title: string;
    filename: string;
    date: string;
}

/**
 * ProjectData
 * 
 * Parsed data from a ProjectRecord, delivered for use on a page.
 */
export interface ProjectData {
    title: string;
    path: string;
    timestamp: Date;
}