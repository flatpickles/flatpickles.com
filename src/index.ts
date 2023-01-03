import { ProjectType, type ProjectData } from '$lib/types'

export const projects: Record<string, ProjectData> = {
    'ethereal_goop': {
        'title': 'Ethereal Goop',
        'url': '/media/ethereal-goop',
        'assetPath': '/projects/media/ethereal-goop.jpg',
        'timestamp': new Date('2021-05-08'),
        'type': ProjectType.Image
    },
    'mandelbrot_render': {
        'title': 'Mandelbrot Render',
        'url': '/media/mandelbrot-render',
        'assetPath': '/projects/media/mandelbrot-render.png',
        'timestamp': new Date('2022-06-26'),
        'type': ProjectType.Image
    }
} as const;
