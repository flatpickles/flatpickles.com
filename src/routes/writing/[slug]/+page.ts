import type { PageLoad } from './$types';
import Content from '$lib/content/Content';

export const load = (async ({ params }) => {
    // todo: move to Content maybe?
    const post = await import(`../../../lib/content/writing/${params.slug}.md`);
    const { title, date } = post.metadata;
    const content = post.default;
  
    return {
        title: title,
        date: new Date(date),
        content: content
    }
}) satisfies PageLoad;