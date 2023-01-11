import type { PageLoad } from './$types';
import Content from '$lib/content/Content';

export const load = (() => {
    const allNotes = Content.notesIndex();
    console.log(allNotes);
    return {
        notes: allNotes
    }
}) satisfies PageLoad;