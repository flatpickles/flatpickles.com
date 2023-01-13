import type { PageLoad } from './$types';
import Content from '$lib/Content';

export const load = (() => {
    return {
        notes: Content.notesIndex()
    }
}) satisfies PageLoad;