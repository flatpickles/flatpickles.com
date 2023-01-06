import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (() => {
    // Redirect to homepage
    throw redirect(307, '/');
}) satisfies PageServerLoad;