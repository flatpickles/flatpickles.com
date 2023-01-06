import type { PageLoad } from './$types';
import Content from '$lib/content/Content';

export const load = (async ({ params }) => {
    return {
        project: Content.mediaProject(params.slug)
    };
}) satisfies PageLoad;