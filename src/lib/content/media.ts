import { type ProjectData, type MediaRecord, extensionMap } from '$lib/types';

const mediaRecords: MediaRecord[] = [
    {
        title: 'Mandelbrot Render',
        filename: 'mandelbrot-render.png',
        date: '2022-06-26',
    },
    {
        title: 'Sauce On It',
        filename: 'sauce-on-it.mp3',
        date: '2022-03-27',
    },
    {
        title: 'Quick Pick',
        filename: 'quick-pick.png',
        date: '2022-02-23',
    },
    {
        title: 'New Piano Noodles',
        filename: 'new-piano-noodles.mp4',
        date: '2022-01-07',
    },
    {
        title: 'Ethereal Goop',
        filename: 'ethereal-goop.jpg',
        date: '2021-05-08',
    },
    {
        title: 'Mind\'s Eye Triptych #3',
        filename: 'minds-eye-3.png',
        date: '2021-02-15',
    },
    {
        title: 'Mind\'s Eye Triptych #2',
        filename: 'minds-eye-2.png',
        date: '2021-02-15',
    },
    {
        title: 'Mind\'s Eye Triptych #1',
        filename: 'minds-eye-1.png',
        date: '2021-02-15',
    },
    {
        title: 'Waveform (Grid Triptych #3)',
        filename: 'waveform.png',
        date: '2021-01-31',
    },
    {
        title: 'Crunch (Grid Triptych #2)',
        filename: 'crunch.png',
        date: '2021-01-31',
    },
    {
        title: 'Peristalsis (Grid Triptych #1)',
        filename: 'peristalsis.png',
        date: '2021-01-31',
    },
    {
        title: 'Dill Gates',
        filename: 'dill-gates.jpg',
        date: '2021-01-17',
    },
    {
        title: 'Alive',
        filename: 'alive.mp4',
        date: '2021-01-09',
    },
    {
        title: 'Salute The Cube',
        filename: 'salute-the-cube.mp3',
        date: '2020-12-28',
    },
    {
        title: 'Warpy Weirdness Triptych #3',
        filename: 'warpy-weirdness-3.png',
        date: '2020-11-24',
    },
    {
        title: 'Warpy Weirdness Triptych #2',
        filename: 'warpy-weirdness-2.png',
        date: '2020-11-24',
    },
    {
        title: 'Warpy Weirdness Triptych #1',
        filename: 'warpy-weirdness-1.png',
        date: '2020-11-24',
    },
    {
        title: 'Caged Love',
        filename: 'caged-love.mp4',
        date: '2020-11-23',
    },
    {
        title: 'Dark Aromas',
        filename: 'dark-aromas.mp3',
        date: '2020-11-15',
    },
    {
        title: 'Sam\'s Danze',
        filename: 'sams-danze.mp3',
        date: '2020-11-11',
    },
    {
        title: 'Rainy Daze',
        filename: 'rainy-daze.mp3',
        date: '2020-10-18',
    },
    {
        title: 'Flat Picks Illustration',
        filename: 'flat-picks.png',
        date: '2020-10-10',
    },
    {
        title: 'Deluge',
        filename: 'deluge.mp4',
        date: '2020-08-24',
    },
    {
        title: 'Peaceful Piano Thoughts',
        filename: 'rainy-daze.mp3',
        date: '2020-08-18',
    },
    {
        title: 'Not Afraid',
        filename: 'not-afraid.mp4',
        date: '2020-06-07',
    },
    {
        title: 'Arrakis',
        filename: 'arrakis.mp4',
        date: '2020-05-04',
    },
    {
        title: 'Circular Energy Wallpaper',
        filename: 'circular-energy-wallpaper.png',
        date: '2020-04-24',
    },
    {
        title: 'Circular Energy',
        filename: 'circular-energy.mp4',
        date: '2020-04-24',
    },
    {
        title: 'Sliding Pattern',
        filename: 'sliding-pattern.mp4',
        date: '2020-04-22',
    },
    {
        title: 'Woven Colors',
        filename: 'woven-colors.mp4',
        date: '2020-04-13',
    },
    {
        title: 'Walrus Whistle',
        filename: 'walrus-whistle.mp4',
        date: '2020-04-12',
    },
    {
        title: 'Spiral Plant',
        filename: 'spiral-plant.png',
        date: '2020-04-04',
    },
    {
        title: 'Game of Life',
        filename: 'game-of-life.mp4',
        date: '2020-03-30',
    },
    {
        title: 'Golden Slumbers',
        filename: 'golden-slumbers.mp4',
        date: '2020-03-29',
    },
    {
        title: 'Trippy Flowers',
        filename: 'trippy-flowers.mp4',
        date: '2020-03-28',
    },
    {
        title: 'Pathogen Header',
        filename: 'pathogen-header.png',
        date: '2020-03-27',
    },
    {
        title: 'Pathogen',
        filename: 'pathogen.mp4',
        date: '2020-03-27',
    },
    {
        title: 'Amoebas',
        filename: 'amoebas.mp4',
        date: '2020-03-23',
    },
    {
        title: 'Keys',
        filename: 'keys.mp4',
        date: '2020-03-20',
    },
    {
        title: 'Keys',
        filename: 'keys-header.png',
        date: '2020-03-18',
    },
    {
        title: 'Cylinder Dance',
        filename: 'cylinder-dance.mp4',
        date: '2020-03-17',
    },
    {
        title: 'Squircle Grid',
        filename: 'squircle-grid.mp4',
        date: '2020-03-16',
    },
    {
        title: 'Circle Taurus',
        filename: 'circle-taurus.png',
        date: '2020-03-10',
    },
    {
        title: 'Park City Ski Run',
        filename: 'park-city-ski-run.mp4',
        date: '2020-02-09',
    },
    {
        title: 'Pft',
        filename: 'pft.mp4',
        date: '2020-01-05',
    },
    {
        title: 'Hot Chocolate',
        filename: 'hot-chocolate.mp4',
        date: '2019-12-08',
    },
    {
        title: 'Strawberry Hill',
        filename: 'strawberry-hill.png',
        date: '2019-11-13',
    },
    {
        title: '10,000 Bugs',
        filename: '10000-bugs.mp4',
        date: '2019-10-31',
    },
    {
        title: 'Foster Lockwood',
        filename: 'foster-lockwood.mp4',
        date: '2019-10-17',
    },
    {
        title: 'Flat Pickles Avatar',
        filename: 'flat-pickles-avatar.png',
        date: '2019-10-07',
    },
    {
        title: 'Late Night Noodles',
        filename: 'late-night-noodles.mp4',
        date: '2019-10-06',
    },
    {
        title: 'Pooper No. Twelve',
        filename: 'pooper-no-twelve.png',
        date: '2019-10-04',
    },
    {
        title: 'Custom Dino Socks',
        filename: 'custom-dino-socks.jpg',
        date: '2019-09-01',
    },
    {
        title: 'Bottles',
        filename: 'bottles.png',
        date: '2019-08-17',
    },
    {
        title: 'Self Sketch',
        filename: 'self-sketch.png',
        date: '2019-08-10',
    },
    {
        title: 'Tube & Friend',
        filename: 'tube-and-friend.png',
        date: '2019-08-06',
    },
    {
        title: 'Hang Loose',
        filename: 'hang-loose.png',
        date: '2019-06-23',
    },
    {
        title: 'Spikeball',
        filename: 'spikeball.png',
        date: '2019-06-23',
    },
    {
        title: 'Dino Icon',
        filename: 'dino-icon.svg',
        date: '2019-06-23',
    },
    {
        title: 'Mantaur',
        filename: 'mantaur.png',
        date: '2019-01-19',
    },
    {
        title: 'Heavy',
        filename: 'heavy.png',
        date: '2019-01-10',
    },
    {
        title: 'Thoughts',
        filename: 'thoughts.png',
        date: '2019-01-09',
    },
    {
        title: 'NUGS',
        filename: 'nugs.svg',
        date: '2018-11-15',
    },
    {
        title: 'Breakfast for Laura',
        filename: 'breakfast-for-laura.png',
        date: '2018-10-15',
    },
    {
        title: 'Froggo',
        filename: 'froggo.svg',
        date: '2018-10-14',
    },
    {
        title: 'BWM',
        filename: 'bwm.mp3',
        date: '2018-03-11',
    },
    {
        title: 'Thank God It\'s Fried Chicken',
        filename: 'thank-god-its-fried-chicken.mp3',
        date: '2017-06-17',
    },
    {
        title: 'Frames of Reference',
        filename: 'frames-of-reference.mp3',
        date: '2017-04-09',
    },
    {
        title: 'Lunar Drift',
        filename: 'lunar-drift.mp3',
        date: '2017-01-11',
    },
    {
        title: 'Lunar Drift Art',
        filename: 'lunar-drift-art.png',
        date: '2017-01-11',
    },
    {
        title: 'Foslock and Drop It',
        filename: 'foslock-and-drop-it.mp3',
        date: '2016-10-18',
    },
    {
        title: 'Manimation',
        filename: 'manimation.mp4',
        date: '2016-07-11',
    },
    {
        title: 'God Bless',
        filename: 'god-bless.mp4',
        date: '2016-07-04',
    },
    {
        title: 'Safety First',
        filename: 'safety-first.mp3',
        date: '2016-05-30',
    },
    {
        title: 'Depth Charge',
        filename: 'depth-charge.mp3',
        date: '2016-05-05',
    },
    {
        title: 'Glitch',
        filename: 'glitch.png',
        date: '2016-05-05',
    },
    {
        title: 'Cruise Control',
        filename: 'cruise-control.mp3',
        date: '2016-04-12',
    },
    {
        title: 'Torque',
        filename: 'torque.mp3',
        date: '2016-02-25',
    },
    {
        title: 'Post Hoc Ergo Propter Hoc',
        filename: 'post-hoc-ergo-propter-hoc.mp3',
        date: '2016-01-27',
    },
    {
        title: 'Chemtrails',
        filename: 'chemtrails.png',
        date: '2016-01-27',
    },
    {
        title: 'Whispers of Solitude',
        filename: 'whispers-of-solitude.mp3',
        date: '2015-12-05',
    },
    {
        title: 'Autumn',
        filename: 'autumn.png',
        date: '2015-11-24',
    },
    {
        title: 'Pupu Platter',
        filename: 'pupu-platter.mp3',
        date: '2015-11-15',
    },
    {
        title: 'Abstract Eyes',
        filename: 'abstract-eyes.png',
        date: '2015-08-17',
    },
    {
        title: 'OBAE',
        filename: 'obae.mp3',
        date: '2015-07-17',
    },
    {
        title: 'Matt Hat',
        filename: 'matt-hat.png',
        date: '2015-07-13',
    },
    {
        title: 'Heads Header',
        filename: 'heads-header.png',
        date: '2015-03-13',
    },
    {
        title: 'Weird Eyes',
        filename: 'weird-eyes.png',
        date: '2014-10-28',
    },
    {
        title: 'Caiman Like A Wrecking Ball',
        filename: 'caiman-like-a-wrecking-ball.png',
        date: '2014-01-14',
    },
    {
        title: 'Rolling Shutter Post-Processing',
        filename: 'rolling-shutter.mp4',
        date: '2012-12-18',
    },
    {
        title: 'First Snow',
        filename: 'first-snow.jpg',
        date: '2012-12-07',
    },
    {
        title: 'Impermanence',
        filename: 'impermanence.jpg',
        date: '2012-10-02',
    }
];

export const mediaProjects: Record<string, ProjectData> = Object.fromEntries(
    mediaRecords.map((record: MediaRecord) => {
        const filenameParts = record.filename.split('.');
        const key = filenameParts[0];
        const extension = filenameParts[1];
        return [key, {
            title: record.title,
            url: `/media/${key}`,
            assetPath: `/media/${record.filename}`,
            date: new Date(record.date),
            type: extensionMap[extension]
        }];
    })
);
