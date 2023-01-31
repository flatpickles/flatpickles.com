import Content from '$lib/Content';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
    try {
        const note = await Content.note(params.slug);
        return {
            note: note
        }
    } catch {
        throw error(404, {
            message: `Note not found with key "${params.slug}".`
        });
    }

}) satisfies PageLoad;
