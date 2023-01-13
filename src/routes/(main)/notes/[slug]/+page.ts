import type { PageLoad } from './$types';
import Content from '$lib/Content';
import { redirect } from '@sveltejs/kit';

export const load = (({ params }) => {
    const pageNumber = parseInt(params.slug);
    try {
        const currentPage = Content.notesPage(pageNumber);
        return {
            page: currentPage
        }
    } catch {
        // Redirect to first page of notes if anything goes awry
        throw redirect(307, '1');
    }
}) satisfies PageLoad;
