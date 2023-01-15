import type { PageLoad } from './$types';
import Content from '$lib/Content';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
    const project = Content.mediaProject(params.slug);
    if (!project) {
        throw error(404, {
            message: `Media project not found with key "${params.slug}".`
        });
    }
    return {
        project: project
    };
}) satisfies PageLoad;