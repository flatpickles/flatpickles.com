import type { PageLoad } from './$types';
import Content from '$lib/Content';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
    try {
        const project = await Content.writingProject(params.slug);
        return {
            project: project
        }
    } catch {
        throw error(404, {
            message: `Writing project not found with key "${params.slug}".`
        });
    }
}) satisfies PageLoad;