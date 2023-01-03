import type { PageLoad } from './$types';
import Content from '$lib/Content';

export const load = (async ({ params }) => {
    return Content.mediaProject(params.slug);
}) satisfies PageLoad;