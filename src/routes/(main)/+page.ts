import type { PageLoad } from './$types';
import Content from '$lib/content/Content';

export const load = (async ({ params }) => {

    const allProjects = await Content.fullIndex();
    return {
        projects: allProjects
    };
}) satisfies PageLoad;