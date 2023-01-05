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
    'flat_picks': {
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
    },
    'pathogen_header': {
        'title': 'Pathogen Header',
        'url': '/media/pathogen-header',
        'assetPath': '/projects/media/pathogen-header.png',
        'timestamp': new Date('2020-03-27'),
        'type': ProjectType.Image
    },
    'pathogen': {
        'title': 'Pathogen',
        'url': '/media/pathogen',
        'assetPath': '/projects/media/pathogen.mp4',
        'timestamp': new Date('2020-03-27'),
        'type': ProjectType.Video
    },
    'amoebas': {
        'title': 'Amoebas',
        'url': '/media/amoebas',
        'assetPath': '/projects/media/amoebas.mp4',
        'timestamp': new Date('2020-03-23'),
        'type': ProjectType.Video
    },
    'keys': {
        'title': 'Keys',
        'url': '/media/keys',
        'assetPath': '/projects/media/keys.mp4',
        'timestamp': new Date('2020-03-20'),
        'type': ProjectType.Video
    },
    'keys_header': {
        'title': 'Keys',
        'url': '/media/keys-header',
        'assetPath': '/projects/media/keys-header.png',
        'timestamp': new Date('2020-03-18'),
        'type': ProjectType.Image
    },
    'cylinder_dance': {
        'title': 'Cylinder Dance',
        'url': '/media/cylinder-dance',
        'assetPath': '/projects/media/cylinder-dance.mp4',
        'timestamp': new Date('2020-03-17'),
        'type': ProjectType.Video
    },
    'squircle_grid': {
        'title': 'Squircle Grid',
        'url': '/media/squircle-grid',
        'assetPath': '/projects/media/squircle-grid.mp4',
        'timestamp': new Date('2020-03-16'),
        'type': ProjectType.Video
    },
    'circle_taurus': {
        'title': 'Circle Taurus',
        'url': '/media/circle-taurus',
        'assetPath': '/projects/media/circle-taurus.png',
        'timestamp': new Date('2020-03-10'),
        'type': ProjectType.Image
    },
    'on_love_and_marriage': {
        'title': 'On Love and Marriage',
        'url': '/writing/on-love-and-marriage',
        'assetPath': '/projects/writing/on-love-and-marriage.md',
        'timestamp': new Date('2020-02-18'),
        'type': ProjectType.Writing
    },
    'park_city_ski_run': {
        'title': 'Park City Ski Run',
        'url': '/media/park-city-ski-run',
        'assetPath': '/projects/media/park-city-ski-run.mp4',
        'timestamp': new Date('2020-02-09'),
        'type': ProjectType.Video
    },
    'pft': {
        'title': 'Pft',
        'url': '/media/pft',
        'assetPath': '/projects/media/pft.mp4',
        'timestamp': new Date('2020-01-05'),
        'type': ProjectType.Video
    },
    'hot_chocolate': {
        'title': 'Hot Chocolate',
        'url': '/media/hot-chocolate',
        'assetPath': '/projects/media/hot-chocolate.mp4',
        'timestamp': new Date('2019-12-08'),
        'type': ProjectType.Video
    },
    'strawberry_hill': {
        'title': 'Strawberry Hill',
        'url': '/media/strawberry-hill',
        'assetPath': '/projects/media/strawberry-hill.png',
        'timestamp': new Date('2019-11-13'),
        'type': ProjectType.Image
    },
    'on_happiness': {
        'title': 'On Happiness',
        'url': '/writing/on-happiness',
        'assetPath': '/projects/writing/on-happiness.md',
        'timestamp': new Date('2019-11-06'),
        'type': ProjectType.Writing
    },
    '10000_bugs': {
        'title': '10,000 Bugs',
        'url': '/media/10000-bugs',
        'assetPath': '/projects/media/10000-bugs.mp4',
        'timestamp': new Date('2019-10-31'),
        'type': ProjectType.Video
    },
    'foster_lockwood': {
        'title': 'Foster Lockwood',
        'url': '/media/foster-lockwood',
        'assetPath': '/projects/media/foster-lockwood.mp4',
        'timestamp': new Date('2019-10-17'),
        'type': ProjectType.Video
    },
    'flat_picks_s2': {
        'title': 'Flat Picks - Season 2',
        'url': 'https://open.spotify.com/playlist/5QB5698lV4DguTVmvCZY9W?si=JGKeOjC7TeS8hqx9lhnBlg',
        'timestamp': new Date('2019-10-12'),
        'type': ProjectType.Playlist
    },
    'on_self_confidence': {
        'title': 'On Self Confidence',
        'url': '/writing/on-self-confidence',
        'assetPath': '/projects/writing/on-self-confidence.md',
        'timestamp': new Date('2019-10-12'),
        'type': ProjectType.Writing
    },
    'flat_pickles_avatar': {
        'title': 'Flat Pickles Avatar',
        'url': '/media/flat-pickles-avatar',
        'assetPath': '/projects/media/flat-pickles-avatar.png',
        'timestamp': new Date('2019-10-07'),
        'type': ProjectType.Image
    },
    'late_night_noodles': {
        'title': 'Late Night Noodles',
        'url': '/media/late-night-noodles',
        'assetPath': '/projects/media/late-night-noodles.mp4',
        'timestamp': new Date('2019-10-06'),
        'type': ProjectType.Video
    },
    'pooper_no_twelve': {
        'title': 'Pooper No. Twelve',
        'url': '/media/pooper-no-twelve',
        'assetPath': '/projects/media/pooper-no-twelve.png',
        'timestamp': new Date('2019-10-04'),
        'type': ProjectType.Image
    },
    'custom_dino_socks': {
        'title': 'Custom Dino Socks',
        'url': '/media/custom-dino-socks',
        'assetPath': '/projects/media/custom-dino-socks.png',
        'timestamp': new Date('2019-09-01'),
        'type': ProjectType.Image
    },
    'on_intentionality': {
        'title': 'On Self Intentionality',
        'url': '/writing/on-intentionality',
        'assetPath': '/projects/writing/on-intentionality.md',
        'timestamp': new Date('2019-08-18'),
        'type': ProjectType.Writing
    },
    'bottles': {
        'title': 'Bottles',
        'url': '/media/bottles',
        'assetPath': '/projects/media/bottles.png',
        'timestamp': new Date('2019-08-17'),
        'type': ProjectType.Image
    },
    'self_sketch': {
        'title': 'Self Sketch',
        'url': '/media/self-sketch',
        'assetPath': '/projects/media/self-sketch.png',
        'timestamp': new Date('2019-08-10'),
        'type': ProjectType.Image
    },
    'tube_and_friend': {
        'title': 'Tube & Friend',
        'url': '/media/tube-and-friend',
        'assetPath': '/projects/media/tube-and-friend.png',
        'timestamp': new Date('2019-08-06'),
        'type': ProjectType.Image
    },
    'hang_loose': {
        'title': 'Hang Loose',
        'url': '/media/hang-loose',
        'assetPath': '/projects/media/hang-loose.png',
        'timestamp': new Date('2019-06-23'),
        'type': ProjectType.Image
    },
    'spikeball': {
        'title': 'Spikeball',
        'url': '/media/spikeball',
        'assetPath': '/projects/media/spikeball.png',
        'timestamp': new Date('2019-06-23'),
        'type': ProjectType.Image
    },
    'on_positive_feedback_cycles': {
        'title': 'On Positive Feedback Cycles',
        'url': '/writing/on-positive-feedback-cycles',
        'assetPath': '/projects/writing/on-positive-feedback-cycles.md',
        'timestamp': new Date('2019-06-23'),
        'type': ProjectType.Writing
    },
    'dino_icon': {
        'title': 'Dino Icon',
        'url': '/media/dino-icon',
        'assetPath': '/projects/media/dino-icon.svg',
        'timestamp': new Date('2019-06-23'),
        'type': ProjectType.Image
    },
    'on_disposable_time': {
        'title': 'On Disposable Time',
        'url': '/writing/on-disposable-time',
        'assetPath': '/projects/writing/on-disposable-time.md',
        'timestamp': new Date('2019-06-16'),
        'type': ProjectType.Writing
    },
    'untitled_3': {
        'title': 'Untitled',
        'url': '/writing/untitled-3',
        'assetPath': '/projects/writing/untitled-3.md',
        'timestamp': new Date('2019-03-30'),
        'type': ProjectType.Writing
    },
    'mantaur': {
        'title': 'Mantaur',
        'url': '/media/mantaur',
        'assetPath': '/projects/media/mantaur.png',
        'timestamp': new Date('2019-01-19'),
        'type': ProjectType.Image
    },
    'heavy': {
        'title': 'Heavy',
        'url': '/media/heavy',
        'assetPath': '/projects/media/heavy.png',
        'timestamp': new Date('2019-01-10'),
        'type': ProjectType.Image
    },
    'thoughts': {
        'title': 'Thoughts',
        'url': '/media/thoughts',
        'assetPath': '/projects/media/thoughts.png',
        'timestamp': new Date('2019-01-09'),
        'type': ProjectType.Image
    },
    'disintegration': {
        'title': 'Disintegration',
        'url': '/writing/disintegration',
        'assetPath': '/projects/writing/disintegration.md',
        'timestamp': new Date('2018-12-11'),
        'type': ProjectType.Writing
    },
    'nugs': {
        'title': 'NUGS',
        'url': '/media/nugs',
        'assetPath': '/projects/media/nugs.svg',
        'timestamp': new Date('2018-11-15'),
        'type': ProjectType.Image
    },
    'chili_recipe': {
        'title': 'Chili Recipe',
        'url': '/writing/chili-recipe',
        'assetPath': '/projects/writing/chili-recipe.md',
        'timestamp': new Date('2018-11-11'),
        'type': ProjectType.Writing
    },
    'breakfast_for_laura': {
        'title': 'Breakfast for Laura',
        'url': '/media/breakfast-for-laura',
        'assetPath': '/projects/media/breakfast-for-laura.svg',
        'timestamp': new Date('2018-10-15'),
        'type': ProjectType.Image
    },
    'froggo': {
        'title': 'Froggo',
        'url': '/media/froggo',
        'assetPath': '/projects/media/froggo.svg',
        'timestamp': new Date('2018-10-14'),
        'type': ProjectType.Image
    },
    'flat_picks_s1': {
        'title': 'Flat Picks - Season 1',
        'url': 'https://open.spotify.com/playlist/2FV9kc9KxDPRIPiUMgHtwv?si=wkkoRYEKQGKUTTijPh_Xcw',
        'timestamp': new Date('2018-09-29'),
        'type': ProjectType.Playlist
    },
    'bricolage': {
        'title': 'Bricolage',
        'url': '/writing/bricolage',
        'assetPath': '/projects/writing/bricolage.md',
        'timestamp': new Date('2018-08-31'),
        'type': ProjectType.Writing
    },
    'bwm': {
        'title': 'BWM',
        'url': '/media/bwm',
        'assetPath': '/projects/media/bwm.mp3',
        'timestamp': new Date('2018-03-11'),
        'type': ProjectType.Audio
    },
    'birdcrime': {
        'title': 'Birdcrime',
        'url': 'https://flatpickles.com/etc/birdcrime/index.html',
        'timestamp': new Date('2017-12-03'),
        'type': ProjectType.WebApp
    },
    'reverie': {
        'title': 'Reverie',
        'url': '/writing/reverie',
        'assetPath': '/projects/writing/reverie.md',
        'timestamp': new Date('2017-11-06'),
        'type': ProjectType.Writing
    },
    'untitled_2': {
        'title': 'Untitled',
        'url': '/writing/untitled-2',
        'assetPath': '/projects/writing/untitled-2.md',
        'timestamp': new Date('2017-09-23'),
        'type': ProjectType.Writing
    },
    'presence': {
        'title': 'Presence',
        'url': '/writing/presence',
        'assetPath': '/projects/writing/presence.md',
        'timestamp': new Date('2017-08-15'),
        'type': ProjectType.Writing
    },
    'modern_times': {
        'title': 'Modern Times',
        'url': '/writing/modern-times',
        'assetPath': '/projects/writing/modern-times.md',
        'timestamp': new Date('2017-07-28'),
        'type': ProjectType.Writing
    },
    'divine': {
        'title': 'Divine',
        'url': '/writing/divine',
        'assetPath': '/projects/writing/divine.md',
        'timestamp': new Date('2017-06-27'),
        'type': ProjectType.Writing
    },
    'thank_god_its_fried_chicken': {
        'title': 'Thank God It\'s Fried Chicken',
        'url': '/media/thank-god-its-fried-chicken',
        'assetPath': '/projects/media/thank-god-its-fried-chicken.mp3',
        'timestamp': new Date('2017-06-17'),
        'type': ProjectType.Audio
    },
    'inertia': {
        'title': 'Inertia',
        'url': '/writing/inertia',
        'assetPath': '/projects/writing/inertia.md',
        'timestamp': new Date('2017-05-26'),
        'type': ProjectType.Writing
    },
    'frames_of_reference': {
        'title': 'Frames of Reference',
        'url': '/media/frames-of-reference',
        'assetPath': '/projects/media/frames-of-reference.mp3',
        'timestamp': new Date('2017-04-09'),
        'type': ProjectType.Audio
    },
    'luxury': {
        'title': 'Luxury',
        'url': '/writing/luxury',
        'assetPath': '/projects/writing/luxury.md',
        'timestamp': new Date('2017-03-29'),
        'type': ProjectType.Writing
    },
    'enter_dependence': {
        'title': 'Enter: Dependence',
        'url': '/writing/enter-dependence',
        'assetPath': '/projects/writing/enter-dependence.md',
        'timestamp': new Date('2017-02-26'),
        'type': ProjectType.Writing
    },
    'the_solipsist': {
        'title': 'The Solipsist',
        'url': '/writing/the-solipsist',
        'assetPath': '/projects/writing/the-solipsist.md',
        'timestamp': new Date('2017-01-18'),
        'type': ProjectType.Writing
    },
    'nightmare': {
        'title': 'Nightmare',
        'url': '/writing/nightmare',
        'assetPath': '/projects/writing/nightmare.md',
        'timestamp': new Date('2017-01-15'),
        'type': ProjectType.Writing
    },
    'segfault': {
        'title': 'Segfault',
        'url': '/writing/segfault',
        'assetPath': '/projects/writing/segfault.md',
        'timestamp': new Date('2017-01-13'),
        'type': ProjectType.Writing
    },
    'lunar_drift': {
        'title': 'Lunar Drift',
        'url': '/media/lunar-drift',
        'assetPath': '/projects/media/lunar-drift.mp3',
        'timestamp': new Date('2017-01-11'),
        'type': ProjectType.Audio
    },
    'lunar_drift_art': {
        'title': 'Lunar Drift Art',
        'url': '/media/lunar-drift-art',
        'assetPath': '/projects/media/lunar-drift-art.png',
        'timestamp': new Date('2017-01-11'),
        'type': ProjectType.Image
    },
    'somniloquy': {
        'title': 'Somniloquy',
        'url': '/writing/somniloquy',
        'assetPath': '/projects/writing/somniloquy.md',
        'timestamp': new Date('2017-01-02'),
        'type': ProjectType.Writing
    },
    'foslock_and_drop_it': {
        'title': 'Foslock and Drop It',
        'url': '/media/foslock-and-drop-it',
        'assetPath': '/projects/media/foslock-and-drop-it.mp3',
        'timestamp': new Date('2016-10-18'),
        'type': ProjectType.Audio
    },
    'ascendance': {
        'title': 'Ascendance',
        'url': '/writing/ascendance',
        'assetPath': '/projects/writing/ascendance.md',
        'timestamp': new Date('2016-09-17'),
        'type': ProjectType.Writing
    },
    'untitled_1': {
        'title': 'Untitled',
        'url': '/writing/untitled-1',
        'assetPath': '/projects/writing/untitled-1.md',
        'timestamp': new Date('2016-08-04'),
        'type': ProjectType.Writing
    },
    'manimation': {
        'title': 'Manimation',
        'url': '/media/manimation',
        'assetPath': '/projects/media/manimation.mp4',
        'timestamp': new Date('2016-07-11'),
        'type': ProjectType.Video
    },
    'god_bless': {
        'title': 'God Bless',
        'url': '/media/god-bless',
        'assetPath': '/projects/media/god-bless.mp4',
        'timestamp': new Date('2016-07-04'),
        'type': ProjectType.Video
    },
    'safety_first': {
        'title': 'Safety First',
        'url': '/media/safety-first',
        'assetPath': '/projects/media/safety-first.mp3',
        'timestamp': new Date('2016-05-30'),
        'type': ProjectType.Audio
    },
    'depth_charge': {
        'title': 'Depth Charge',
        'url': '/media/depth-charge',
        'assetPath': '/projects/media/depth-charge.mp3',
        'timestamp': new Date('2016-05-05'),
        'type': ProjectType.Audio
    },
    'glitch': {
        'title': 'Glitch',
        'url': '/media/glitch',
        'assetPath': '/projects/media/glitch.png',
        'timestamp': new Date('2016-05-05'),
        'type': ProjectType.Image
    },
    'cruise_control': {
        'title': 'Cruise Control',
        'url': '/media/cruise-control',
        'assetPath': '/projects/media/cruise-control.mp3',
        'timestamp': new Date('2016-04-12'),
        'type': ProjectType.Audio
    },
    'torque': {
        'title': 'Torque',
        'url': '/media/torque',
        'assetPath': '/projects/media/torque.mp3',
        'timestamp': new Date('2016-02-25'),
        'type': ProjectType.Audio
    },
    'post_hoc_ergo_propter_hoc': {
        'title': 'Post Hoc Ergo Propter Hoc',
        'url': '/media/post-hoc-ergo-propter-hoc',
        'assetPath': '/projects/media/post-hoc-ergo-propter-hoc.mp3',
        'timestamp': new Date('2016-01-27'),
        'type': ProjectType.Audio
    },
    'chemtrails': {
        'title': 'Chemtrails',
        'url': '/media/chemtrails',
        'assetPath': '/projects/media/chemtrails.png',
        'timestamp': new Date('2016-01-27'),
        'type': ProjectType.Image
    },
    'whispers_of_solitude': {
        'title': 'Whispers of Solitude',
        'url': '/media/whispers-of-solitude',
        'assetPath': '/projects/media/whispers-of-solitude.mp3',
        'timestamp': new Date('2015-12-05'),
        'type': ProjectType.Audio
    },
    'autumn': {
        'title': 'Autumn',
        'url': '/media/autumn',
        'assetPath': '/projects/media/autumn.png',
        'timestamp': new Date('2015-11-24'),
        'type': ProjectType.Image
    },
    'pupu_platter': {
        'title': 'Pupu Platter',
        'url': '/media/pupu-platter',
        'assetPath': '/projects/media/pupu-platter.mp3',
        'timestamp': new Date('2015-11-15'),
        'type': ProjectType.Audio
    },
    'abstract_eyes': {
        'title': 'Abstract Eyes',
        'url': '/media/abstract-eyes',
        'assetPath': '/projects/media/abstract-eyes.png',
        'timestamp': new Date('2015-08-17'),
        'type': ProjectType.Image
    },
    'obae': {
        'title': 'OBAE',
        'url': '/media/obae',
        'assetPath': '/projects/media/obae.mp3',
        'timestamp': new Date('2015-07-17'),
        'type': ProjectType.Audio
    },
    'matt_hat': {
        'title': 'Matt Hat',
        'url': '/media/matt-hat',
        'assetPath': '/projects/media/matt-hat.png',
        'timestamp': new Date('2015-07-13'),
        'type': ProjectType.Image
    },
    'heads_header': {
        'title': 'Heads Header',
        'url': '/media/heads-header',
        'assetPath': '/projects/media/heads-header.png',
        'timestamp': new Date('2015-03-13'),
        'type': ProjectType.Image
    },
    'weird_eyes': {
        'title': 'Weird Eyes',
        'url': '/media/weird-eyes',
        'assetPath': '/projects/media/weird-eyes.png',
        'timestamp': new Date('2014-10-28'),
        'type': ProjectType.Image
    },
    'balls': {
        'title': 'Balls',
        'url': 'https://flatpickles.com/etc/balls/index.html',
        'timestamp': new Date('2014-09-22'),
        'type': ProjectType.WebApp
    },
    'world_population_day': {
        'title': 'World Population Day',
        'url': '/writing/world-population-day',
        'assetPath': '/projects/writing/world-population-day.md',
        'timestamp': new Date('2014-07-11'),
        'type': ProjectType.Writing
    },
    'caiman_like_a_wrecking_ball': {
        'title': 'Caiman Like A Wrecking Ball',
        'url': '/media/caiman-like-a-wrecking-ball',
        'assetPath': '/projects/media/caiman-like-a-wrecking-ball.png',
        'timestamp': new Date('2014-01-14'),
        'type': ProjectType.Image
    },
    'line_fractal_generator': {
        'title': 'Line Fractal Generator',
        'url': 'https://flatpickles.com/etc/fractal-generator/index.html',
        'timestamp': new Date('2013-07-22'),
        'type': ProjectType.WebApp
    },
    'helicopter_game': {
        'title': 'Helicopter Game',
        'url': 'https://flatpickles.com/etc/heli/index.html',
        'timestamp': new Date('2013-04-16'),
        'type': ProjectType.WebApp
    },
    'rolling_shutter': {
        'title': 'Rolling Shutter Post-Processing',
        'url': '/media/rolling-shutter',
        'assetPath': '/projects/media/rolling-shutter.mp4',
        'timestamp': new Date('2012-12-18'),
        'type': ProjectType.Video
    },
    'first_snow': {
        'title': 'First Snow',
        'url': '/media/first-snow',
        'assetPath': '/projects/media/first-snow.png',
        'timestamp': new Date('2012-12-07'),
        'type': ProjectType.Image
    },
    'impermanence': {
        'title': 'Impermanence',
        'url': '/media/impermanence',
        'assetPath': '/projects/media/impermanence.png',
        'timestamp': new Date('2012-10-02'),
        'type': ProjectType.Image
    },
    'stories': {
        'title': 'Stories',
        'url': '/writing/stories',
        'assetPath': '/projects/writing/stories.md',
        'timestamp': new Date('2012-07-29'),
        'type': ProjectType.Writing
    },
    'fog': {
        'title': 'Fog',
        'url': '/writing/fog',
        'assetPath': '/projects/writing/fog.md',
        'timestamp': new Date('2012-06-14'),
        'type': ProjectType.Writing
    },
    'wander': {
        'title': 'Wander',
        'url': '/writing/wander',
        'assetPath': '/projects/writing/wander.md',
        'timestamp': new Date('2012-05-24'),
        'type': ProjectType.Writing
    },
    'incompleteness': {
        'title': 'Incompleteness',
        'url': '/writing/incompleteness',
        'assetPath': '/projects/writing/incompleteness.md',
        'timestamp': new Date('2012-04-01'),
        'type': ProjectType.Writing
    },
    'webgl_fireworks': {
        'title': 'WebGL Fireworks',
        'url': 'http://www.goldberg.io/fireworks/',
        'timestamp': new Date('2012-01-10'),
        'type': ProjectType.WebApp
    },
    'endings': {
        'title': 'Endings',
        'url': '/writing/endings',
        'assetPath': '/projects/writing/endings.md',
        'timestamp': new Date('2011-07-11'),
        'type': ProjectType.Writing
    },
    'overcast': {
        'title': 'Overcast',
        'url': '/writing/overcast',
        'assetPath': '/projects/writing/overcast.md',
        'timestamp': new Date('2011-07-11'),
        'type': ProjectType.Writing
    },
} as const;
