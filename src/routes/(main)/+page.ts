import type { PageLoad } from './$types';
import Content from '$lib/content/Content';

export const load = (async ({ params }) => {
    return {
        projects: Content.all
    };
}) satisfies PageLoad;