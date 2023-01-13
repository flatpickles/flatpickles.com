import type { PageLoad } from './$types';
import Content from '$lib/Content';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ params }) => {
    const pageNumber = parseInt(params.slug);
    const currentPage = await Content.notesPage(pageNumber);
    // todo: redirect if notesPage returned in error
    // throw redirect(307, '1');

    return {
        page: currentPage
    }
}) satisfies PageLoad;
