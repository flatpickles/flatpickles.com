import Content from '$lib/Content';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
    const allProjects = Content.projects();
    return {
        projects: allProjects
    };
}) satisfies PageLoad;