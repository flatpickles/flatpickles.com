import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (() => {
    // Redirect to homepage
    throw redirect(307, '/');
}) satisfies PageServerLoad;