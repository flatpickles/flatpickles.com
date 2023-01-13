import type { PageLoad } from './$types';
import Content from '$lib/Content';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ params }) => {
    const pageNumber = parseInt(params.slug);
    if (isNaN(pageNumber)) {
        throw redirect(307, '1');
    }

    const currentPage = await Content.notesPage(pageNumber);
    // todo: redirect (as above) if pageNumber isn't valid (notesPage should error)
    return {
        page: currentPage
    }
}) satisfies PageLoad;
