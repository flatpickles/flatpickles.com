import type { PageLoad } from './$types';
import Content from '$lib/Content';

export const load = (async ({ params }) => {
    const project = await Content.writingProject(params.slug);
    return {
        project: project
    }
}) satisfies PageLoad;