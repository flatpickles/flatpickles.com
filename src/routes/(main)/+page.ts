import type { PageLoad } from './$types';
import Content from '$lib/Content';

export const load = (async ({ params }) => {
    return {
        projects: Content.all
    };
}) satisfies PageLoad;