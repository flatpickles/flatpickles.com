import { ProjectType, type ProjectData } from '$lib/types'

export const projects: Record<string, ProjectData> = {
    'ethereal_goop_v2': {
        'title': 'Ethereal Goop v2',
        'url': 'http://sketchbook.flatpickles.com/#ethereal-goop',
        'timestamp': new Date('2022-10-29'),
        'type': ProjectType.Live
    },
    'mandelbrot_set_viewer': {
        'title': 'Mandelbrot Set Viewer',
        'url': 'http://sketchbook.flatpickles.com/#mandelbrot',
        'timestamp': new Date('2022-09-29'),
        'type': ProjectType.Live
    },
    'rectilinear': {
        'title': 'Rectilinear',
        'url': 'http://sketchbook.flatpickles.com/#rectilinear',
        'timestamp': new Date('2022-09-14'),
        'type': ProjectType.Live
    },
    'no_signal': {
        'title': 'Sketchbook',
        'url': 'http://sketchbook.flatpickles.com/#no-signal',
        'timestamp': new Date('2022-08-15'),
        'type': ProjectType.WebApp
    },
    'glitchy_video_effect': {
        'title': 'Glitchy',
        'url': 'https://editor.isf.video/shaders/62bb5b57ad0a68001af75b57',
        'timestamp': new Date('2022-07-11'),
        'type': ProjectType.VideoEffect
    },
    'onward': {
        'title': 'Onward',
        'url': '/writing/onward',
        'assetPath': '/projects/writing/onward.md',
        'timestamp': new Date('2022-07-07'),
        'type': ProjectType.Writing
    },
    'mandelbrot_render': {
        'title': 'Mandelbrot Render',
        'url': '/media/mandelbrot-render',
        'assetPath': '/projects/media/mandelbrot-render.png',
        'timestamp': new Date('2022-06-26'),
        'type': ProjectType.Image
    },
    'gutenbard': {
        'title': 'GutenBard',
        'url': 'https://flatpickles.com/GutenBard',
        'timestamp': new Date('2022-06-14'),
        'type': ProjectType.WebApp
    },
    'floppy_disk': {
        'title': 'Floppy Disk',
        'url': 'http://sketchbook.flatpickles.com/#floppy-disk',
        'timestamp': new Date('2022-04-08'),
        'type': ProjectType.Live
    },
    'sauce_on_it': {
        'title': 'Sauce On It',
        'url': '/media/sauce-on-it',
        'assetPath': '/projects/media/sauce-on-it.mp3',
        'timestamp': new Date('2022-03-27'),
        'type': ProjectType.Audio
    },
    'quick_pick': {
        'title': 'Quick Pick',
        'url': '/media/quick-pick',
        'assetPath': '/projects/media/quick-pick.png',
        'timestamp': new Date('2022-02-23'),
        'type': ProjectType.Image
    },
    'new_piano_noodles': {
        'title': 'New Piano Noodles',
        'url': '/media/new-piano-noodles',
        'assetPath': '/projects/media/new-piano-noodles.mp4',
        'timestamp': new Date('2022-01-07'),
        'type': ProjectType.Video
    },
    'flat_picks_s4': {
        'title': 'Flat Picks - Season 4',
        'url': 'https://open.spotify.com/playlist/3hd6tpg5ZUsme35lzG48V2?si=0e059e9fa00e4384',
        'timestamp': new Date('2021-12-31'),
        'type': ProjectType.Playlist
    },
    'whats_old_is_new_again': {
        'title': 'What\'s Old Is New Again',
        'url': 'https://hic.af/objkt/527978',
        'timestamp': new Date('2021-11-10'),
        'type': ProjectType.Video
    },
    'whole': {
        'title': 'Whole',
        'url': '/writing/whole',
        'assetPath': '/projects/writing/whole.md',
        'timestamp': new Date('2021-11-03'),
        'type': ProjectType.Writing
    },
    'music_for_r&j': {
        'title': 'Music for Ryan & Jessica',
        'url': 'https://paper.dropbox.com/doc/Music-for-Ryan-Jessica--BQSQtmtxGhjczmXJI3UuxdaZAQ-hhmATgKFzLjcsaqbxIE5x',
        'timestamp': new Date('2021-08-08'),
        'type': ProjectType.Playlist
    },
    'ethereal_goop': {
        'title': 'Ethereal Goop',
        'url': '/media/ethereal-goop',
        'assetPath': '/projects/media/ethereal-goop.jpg',
        'timestamp': new Date('2021-05-08'),
        'type': ProjectType.Image
    },
    'what_a_day_transcription': {
        'title': 'What a Day Transcription',
        'url': 'https://www.soundslice.com/slices/qfMDc/',
        'timestamp': new Date('2021-04-21'),
        'type': ProjectType.Transcription
    },
    'minds_eye_3': {
        'title': 'Mind\'s Eye Triptych #3',
        'url': '/media/minds-eye-3',
        'assetPath': '/projects/media/minds-eye-3.png',
        'timestamp': new Date('2021-02-15'),
        'type': ProjectType.Image
    },
    'minds_eye_2': {
        'title': 'Mind\'s Eye Triptych #2',
        'url': '/media/minds-eye-2',
        'assetPath': '/projects/media/minds-eye-2.png',
        'timestamp': new Date('2021-02-15'),
        'type': ProjectType.Image
    },
    'minds_eye_1': {
        'title': 'Mind\'s Eye Triptych #1',
        'url': '/media/minds-eye-1',
        'assetPath': '/projects/media/minds-eye-1.png',
        'timestamp': new Date('2021-02-15'),
        'type': ProjectType.Image
    },
    'waveform': {
        'title': 'Waveform (Grid Triptych #3)',
        'url': '/media/waveform',
        'assetPath': '/projects/media/waveform.png',
        'timestamp': new Date('2021-01-31'),
        'type': ProjectType.Image
    },
    'crunch': {
        'title': 'Crunch (Grid Triptych #2)',
        'url': '/media/crunch',
        'assetPath': '/projects/media/crunch.png',
        'timestamp': new Date('2021-01-31'),
        'type': ProjectType.Image
    },
    'peristalsis': {
        'title': 'Peristalsis (Grid Triptych #1)',
        'url': '/media/peristalsis',
        'assetPath': '/projects/media/peristalsis.png',
        'timestamp': new Date('2021-01-31'),
        'type': ProjectType.Image
    },
    'wobbly_video_effect': {
        'title': 'Wobbly Video Effect',
        'url': 'https://editor.isf.video/shaders/624d2c1efa14610014854030',
        'timestamp': new Date('2021-01-27'),
        'type': ProjectType.VideoEffect
    },
    'cycles': {
        'title': 'Cycles',
        'url': '/writing/cycles',
        'assetPath': '/projects/writing/cycles.md',
        'timestamp': new Date('2021-01-21'),
        'type': ProjectType.Writing
    },
    'dill_gates': {
        'title': 'Dill Gates',
        'url': '/media/dill-gates',
        'assetPath': '/projects/media/dill-gates.jpg',
        'timestamp': new Date('2021-01-17'),
        'type': ProjectType.Image
    },
    'alive': {
        'title': 'Alive',
        'url': '/media/alive',
        'assetPath': '/projects/media/alive.mp4',
        'timestamp': new Date('2021-01-09'),
        'type': ProjectType.Video
    },
    'warpy_video_effect': {
        'title': 'Warpy Video Effect',
        'url': 'https://editor.isf.video/shaders/624d2c75fa14610014854058',
        'timestamp': new Date('2021-01-01'),
        'type': ProjectType.VideoEffect
    },
    'salute_the_cube': {
        'title': 'Salute The Cube',
        'url': '/media/salute-the-cube',
        'assetPath': '/projects/media/salute-the-cube.mp3',
        'timestamp': new Date('2020-12-28'),
        'type': ProjectType.Audio
    },
    'warpy_weirdness_3': {
        'title': 'Warpy Weirdness Triptych #3',
        'url': '/media/warpy-weirdness-3',
        'assetPath': '/projects/media/warpy-weirdness-3.png',
        'timestamp': new Date('2020-11-24'),
        'type': ProjectType.Image
    },
    'warpy_weirdness_2': {
        'title': 'Warpy Weirdness Triptych #2',
        'url': '/media/warpy-weirdness-2',
        'assetPath': '/projects/media/warpy-weirdness-2.png',
        'timestamp': new Date('2020-11-24'),
        'type': ProjectType.Image
    },
    'warpy_weirdness_1': {
        'title': 'Warpy Weirdness Triptych #1',
        'url': '/media/warpy-weirdness-1',
        'assetPath': '/projects/media/warpy-weirdness-1.png',
        'timestamp': new Date('2020-11-24'),
        'type': ProjectType.Image
    },
    'caged_love': {
        'title': 'Caged Love',
        'url': '/media/caged-love',
        'assetPath': '/projects/media/caged-love.mp4',
        'timestamp': new Date('2020-11-23'),
        'type': ProjectType.Video
    },
    'dark_aromas': {
        'title': 'Dark Aromas',
        'url': '/media/dark-aromas',
        'assetPath': '/projects/media/dark-aromas.mp3',
        'timestamp': new Date('2020-11-15'),
        'type': ProjectType.Audio
    },
    'sams_danze': {
        'title': 'Sam\'s Danze',
        'url': '/media/sams-danze',
        'assetPath': '/projects/media/sams-danze.mp3',
        'timestamp': new Date('2020-11-11'),
        'type': ProjectType.Audio
    },
    'rainy_daze': {
        'title': 'Rainy Daze',
        'url': '/media/rainy-daze',
        'assetPath': '/projects/media/rainy-daze.mp3',
        'timestamp': new Date('2020-10-18'),
        'type': ProjectType.Audio
    },
    'flat_picks_s3': {
        'title': 'Flat Picks - Season 3',
        'url': 'https://open.spotify.com/playlist/442CwkAO1CNU0TEnstZQc6?si=xABKoa-WS7S6vaI4RLHDIg',
        'timestamp': new Date('2021-10-10'),
        'type': ProjectType.Playlist
    },
    'flat_picks_illustration': {
        'title': 'Flat Picks Illustration',
        'url': '/media/flat-picks',
        'assetPath': '/projects/media/flat-picks.png',
        'timestamp': new Date('2020-10-10'),
        'type': ProjectType.Image
    },
    'beauty': {
        'title': 'Beauty',
        'url': '/writing/beauty',
        'assetPath': '/projects/writing/beauty.md',
        'timestamp': new Date('2020-10-03'),
        'type': ProjectType.Writing
    },
    'on_algorithmic_media': {
        'title': 'On Algorithmic Media',
        'url': '/writing/on-algorithmic-media',
        'assetPath': '/projects/writing/on-algorithmic-media.md',
        'timestamp': new Date('2020-09-05'),
        'type': ProjectType.Writing
    },
    'deluge': {
        'title': 'Deluge',
        'url': '/media/deluge',
        'assetPath': '/projects/media/deluge.mp4',
        'timestamp': new Date('2020-08-24'),
        'type': ProjectType.Video
    },
    'peaceful_piano_thoughts': {
        'title': 'Peaceful Piano Thoughts',
        'url': '/media/rainy-daze',
        'assetPath': '/projects/media/rainy-daze.mp3',
        'timestamp': new Date('2020-08-18'),
        'type': ProjectType.Audio
    },
    'intentions_for_this_website': {
        'title': 'Intentions for This Website',
        'url': '/writing/intentions-for-this-website',
        'assetPath': '/projects/writing/intentions-for-this-website.md',
        'timestamp': new Date('2020-08-17'),
        'type': ProjectType.Writing
    },
    'disassociation': {
        'title': 'Disassociation',
        'url': '/writing/disassociation',
        'assetPath': '/projects/writing/disassociation.md',
        'timestamp': new Date('2020-07-02'),
        'type': ProjectType.Writing
    },
    'not_afraid': {
        'title': 'Not Afraid',
        'url': '/media/not-afraid',
        'assetPath': '/projects/media/not-afraid.mp4',
        'timestamp': new Date('2020-06-07'),
        'type': ProjectType.Video
    },
    'on_art_and_enlightenment': {
        'title': 'On Art and Enlightenment',
        'url': '/writing/on-art-and-enlightenment',
        'assetPath': '/projects/writing/on-art-and-enlightenment.md',
        'timestamp': new Date('2020-09-05'),
        'type': ProjectType.Writing
    },
    'arrakis': {
        'title': 'Arrakis',
        'url': '/media/arrakis',
        'assetPath': '/projects/media/arrakis.mp4',
        'timestamp': new Date('2020-05-04'),
        'type': ProjectType.Video
    },
    'circular_energy_wallpaper': {
        'title': 'Circular Energy Wallpaper',
        'url': '/media/circular-energy-wallpaper',
        'assetPath': '/projects/media/circular-energy-wallpaper.png',
        'timestamp': new Date('2020-04-24'),
        'type': ProjectType.Image
    },
    'circular_energy': {
        'title': 'Circular Energy',
        'url': '/media/circular-energy',
        'assetPath': '/projects/media/circular-energy.mp4',
        'timestamp': new Date('2020-04-24'),
        'type': ProjectType.Video
    },
    'sliding_pattern': {
        'title': 'Sliding Pattern',
        'url': '/media/sliding-pattern',
        'assetPath': '/projects/media/sliding-pattern.mp4',
        'timestamp': new Date('2020-04-22'),
        'type': ProjectType.Video
    },
    'woven_colors': {
        'title': 'Woven Colors',
        'url': '/media/woven-colors',
        'assetPath': '/projects/media/woven-colors.mp4',
        'timestamp': new Date('2020-04-13'),
        'type': ProjectType.Video
    },
    'walrus_whistle': {
        'title': 'Walrus Whistle',
        'url': '/media/walrus-whistle',
        'assetPath': '/projects/media/walrus-whistle.mp4',
        'timestamp': new Date('2020-04-12'),
        'type': ProjectType.Video
    },
    'spiral_plant': {
        'title': 'Spiral Plant',
        'url': '/media/spiral-plant',
        'assetPath': '/projects/media/spiral-plant.png',
        'timestamp': new Date('2020-04-04'),
        'type': ProjectType.Image
    },
    'game_of_life': {
        'title': 'Game of Life',
        'url': '/media/game-of-life',
        'assetPath': '/projects/media/game-of-life.mp4',
        'timestamp': new Date('2020-03-30'),
        'type': ProjectType.Video
    },
    'golden_slumbers': {
        'title': 'Golden Slumbers',
        'url': '/media/golden-slumbers',
        'assetPath': '/projects/media/golden-slumbers.mp4',
        'timestamp': new Date('2020-03-29'),
        'type': ProjectType.Video
    },
    'trippy_flowers': {
        'title': 'Trippy Flowers',
        'url': '/media/trippy-flowers',
        'assetPath': '/projects/media/trippy-flowers.mp4',
        'timestamp': new Date('2020-03-28'),
        'type': ProjectType.Video
    }
} as const;
