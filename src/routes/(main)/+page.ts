import type { PageLoad } from './$types';
import Content from '$lib/Content';

export const load = (({ params }) => {
    const allProjects = Content.projects();
    return {
        projects: allProjects
    };
}) satisfies PageLoad;