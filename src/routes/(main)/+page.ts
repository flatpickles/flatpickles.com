import type { PageLoad } from './$types';
import Content from '$lib/content/Content';

export const load = (async ({ params }) => {

    const allProjects = await Content.all();
    return {
        projects: allProjects
    };
}) satisfies PageLoad;