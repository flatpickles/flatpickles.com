import type { PageLoad } from './$types';
import type { ProjectData, ProjectRecord } from 'src/lib/types';

export const load = (async ({ params }) => {
    const index: { [key: string]: ProjectRecord } = (await import(`../index.json`)).default;
    const project: ProjectRecord = index[params.slug];

    return {
        title: project.title,
        path: "/projects/media/" + project.filename,
        timestamp: new Date(project.date)
    } as ProjectData;
}) satisfies PageLoad;