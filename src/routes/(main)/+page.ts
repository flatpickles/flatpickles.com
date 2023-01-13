import type { PageLoad } from './$types';
import Content from '$lib/Content';

export const load = (async ({ params }) => {

    const allProjects = await Content.fullIndex();
    return {
        projects: allProjects
    };
}) satisfies PageLoad;