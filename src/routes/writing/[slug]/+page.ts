import type { PageLoad } from './$types';
import Content from '$lib/Content';

export const load = (async ({ params }) => {
    return {
        project: Content.writingProject(params.slug),
        mdString: `
            # Title

            And a body

            And more body
        `
    };
}) satisfies PageLoad;