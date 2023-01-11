import type { PageLoad } from './$types';
import Content from '$lib/content/Content';

export const load = (() => {
    return {
        notes: Content.notesIndex()
    }
}) satisfies PageLoad;