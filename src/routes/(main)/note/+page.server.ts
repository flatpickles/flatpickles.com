import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (() => {
    // Redirect to first page of notes
    throw redirect(307, 'notes/1');
}) satisfies PageServerLoad;