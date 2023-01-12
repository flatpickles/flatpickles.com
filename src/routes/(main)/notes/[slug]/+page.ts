import type { PageLoad } from './$types';
import Content from '$lib/content/Content';

export const load = (async ({ params }) => {
    const note = await Content.note(params.slug);
    return {
        note: note
    }
}) satisfies PageLoad;
