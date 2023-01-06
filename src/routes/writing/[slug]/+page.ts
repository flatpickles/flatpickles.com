import type { PageLoad } from './$types';
import Content from '$lib/content/Content';

export const load = (async ({ params }) => {
    const post = await import(`../../../lib/content/writing/${params.slug}.md`)
    return {
        project: Content.writingProject(params.slug),
        content: post.default
    };
}) satisfies PageLoad;