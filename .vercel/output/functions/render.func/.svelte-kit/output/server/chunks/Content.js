import { e as extensionMap, P as ProjectType } from "./types.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const mediaRecords = [
  {
    title: "Mandelbrot Render",
    filename: "mandelbrot-render.png",
    date: "2022-06-26"
  },
  {
    title: "Sauce On It",
    filename: "sauce-on-it.mp3",
    date: "2022-03-27"
  },
  {
    title: "Quick Pick",
    filename: "quick-pick.png",
    date: "2022-02-23"
  },
  {
    title: "New Piano Noodles",
    filename: "new-piano-noodles.mp4",
    date: "2022-01-07"
  },
  {
    title: "Ethereal Goop",
    filename: "ethereal-goop.jpg",
    date: "2021-05-08"
  },
  {
    title: "Mind's Eye #3",
    filename: "minds-eye-3.png",
    date: "2021-02-15"
  },
  {
    title: "Mind's Eye #2",
    filename: "minds-eye-2.png",
    date: "2021-02-15"
  },
  {
    title: "Mind's Eye #1",
    filename: "minds-eye-1.png",
    date: "2021-02-15"
  },
  {
    title: "Waveform (Grid #3)",
    filename: "waveform.png",
    date: "2021-01-31"
  },
  {
    title: "Crunch (Grid #2)",
    filename: "crunch.png",
    date: "2021-01-31"
  },
  {
    title: "Peristalsis (Grid #1)",
    filename: "peristalsis.png",
    date: "2021-01-31"
  },
  {
    title: "Dill Gates",
    filename: "dill-gates.jpg",
    date: "2021-01-17"
  },
  {
    title: "Alive",
    filename: "alive.mp4",
    date: "2021-01-09"
  },
  {
    title: "Salute The Cube",
    filename: "salute-the-cube.mp3",
    date: "2020-12-28"
  },
  {
    title: "Warpy Weirdness #3",
    filename: "warpy-weirdness-3.png",
    date: "2020-11-24"
  },
  {
    title: "Warpy Weirdness #2",
    filename: "warpy-weirdness-2.png",
    date: "2020-11-24"
  },
  {
    title: "Warpy Weirdness #1",
    filename: "warpy-weirdness-1.png",
    date: "2020-11-24"
  },
  {
    title: "Caged Love",
    filename: "caged-love.mp4",
    date: "2020-11-23"
  },
  {
    title: "Dark Aromas",
    filename: "dark-aromas.mp3",
    date: "2020-11-15"
  },
  {
    title: "Sam's Danze",
    filename: "sams-danze.mp3",
    date: "2020-11-11"
  },
  {
    title: "Rainy Daze",
    filename: "rainy-daze.mp3",
    date: "2020-10-18"
  },
  {
    title: "Flat Picks Illustration",
    filename: "flat-picks.png",
    date: "2020-10-10"
  },
  {
    title: "Deluge",
    filename: "deluge.mp4",
    date: "2020-08-24"
  },
  {
    title: "Peaceful Piano Thoughts",
    filename: "rainy-daze.mp3",
    date: "2020-08-18"
  },
  {
    title: "Not Afraid",
    filename: "not-afraid.mp4",
    date: "2020-06-07"
  },
  {
    title: "Arrakis",
    filename: "arrakis.mp4",
    date: "2020-05-04"
  },
  {
    title: "Circular Energy Wallpaper",
    filename: "circular-energy-wallpaper.png",
    date: "2020-04-24"
  },
  {
    title: "Circular Energy",
    filename: "circular-energy.mp4",
    date: "2020-04-24"
  },
  {
    title: "Sliding Pattern",
    filename: "sliding-pattern.mp4",
    date: "2020-04-22"
  },
  {
    title: "Woven Colors",
    filename: "woven-colors.mp4",
    date: "2020-04-13"
  },
  {
    title: "Walrus Whistle",
    filename: "walrus-whistle.mp4",
    date: "2020-04-12"
  },
  {
    title: "Spiral Plant",
    filename: "spiral-plant.png",
    date: "2020-04-04"
  },
  {
    title: "Game of Life",
    filename: "game-of-life.mp4",
    date: "2020-03-30"
  },
  {
    title: "Golden Slumbers",
    filename: "golden-slumbers.mp4",
    date: "2020-03-29"
  },
  {
    title: "Trippy Flowers",
    filename: "trippy-flowers.mp4",
    date: "2020-03-28"
  },
  {
    title: "Pathogen Header",
    filename: "pathogen-header.png",
    date: "2020-03-27"
  },
  {
    title: "Pathogen",
    filename: "pathogen.mp4",
    date: "2020-03-27"
  },
  {
    title: "Amoebas",
    filename: "amoebas.mp4",
    date: "2020-03-23"
  },
  {
    title: "Keys",
    filename: "keys.mp4",
    date: "2020-03-20"
  },
  {
    title: "Keys",
    filename: "keys-header.png",
    date: "2020-03-18"
  },
  {
    title: "Cylinder Dance",
    filename: "cylinder-dance.mp4",
    date: "2020-03-17"
  },
  {
    title: "Squircle Grid",
    filename: "squircle-grid.mp4",
    date: "2020-03-16"
  },
  {
    title: "Circle Taurus",
    filename: "circle-taurus.png",
    date: "2020-03-10"
  },
  {
    title: "Park City Ski Run",
    filename: "park-city-ski-run.mp4",
    date: "2020-02-09"
  },
  {
    title: "Pft",
    filename: "pft.mp4",
    date: "2020-01-05"
  },
  {
    title: "Hot Chocolate",
    filename: "hot-chocolate.mp4",
    date: "2019-12-08"
  },
  {
    title: "Strawberry Hill",
    filename: "strawberry-hill.png",
    date: "2019-11-13"
  },
  {
    title: "10,000 Bugs",
    filename: "10000-bugs.mp4",
    date: "2019-10-31"
  },
  {
    title: "Foster Lockwood",
    filename: "foster-lockwood.mp4",
    date: "2019-10-17"
  },
  {
    title: "Flat Pickles Avatar",
    filename: "flat-pickles-avatar.png",
    date: "2019-10-07"
  },
  {
    title: "Late Night Noodles",
    filename: "late-night-noodles.mp4",
    date: "2019-10-06"
  },
  {
    title: "Pooper No. Twelve",
    filename: "pooper-no-twelve.png",
    date: "2019-10-04"
  },
  {
    title: "Custom Dino Socks",
    filename: "custom-dino-socks.jpg",
    date: "2019-09-01"
  },
  {
    title: "Bottles",
    filename: "bottles.png",
    date: "2019-08-17"
  },
  {
    title: "Self Sketch",
    filename: "self-sketch.png",
    date: "2019-08-10"
  },
  {
    title: "Tube & Friend",
    filename: "tube-and-friend.png",
    date: "2019-08-06"
  },
  {
    title: "Hang Loose",
    filename: "hang-loose.png",
    date: "2019-06-23"
  },
  {
    title: "Spikeball",
    filename: "spikeball.png",
    date: "2019-06-23"
  },
  {
    title: "Dino Icon",
    filename: "dino-icon.svg",
    date: "2019-06-23"
  },
  {
    title: "Mantaur",
    filename: "mantaur.png",
    date: "2019-01-19"
  },
  {
    title: "Heavy",
    filename: "heavy.png",
    date: "2019-01-10"
  },
  {
    title: "Thoughts",
    filename: "thoughts.png",
    date: "2019-01-09"
  },
  {
    title: "NUGS",
    filename: "nugs.svg",
    date: "2018-11-15"
  },
  {
    title: "Breakfast for Laura",
    filename: "breakfast-for-laura.png",
    date: "2018-10-15"
  },
  {
    title: "Froggo",
    filename: "froggo.svg",
    date: "2018-10-14"
  },
  {
    title: "BWM",
    filename: "bwm.mp3",
    date: "2018-03-11"
  },
  {
    title: "Thank God It's Fried Chicken",
    filename: "thank-god-its-fried-chicken.mp3",
    date: "2017-06-17"
  },
  {
    title: "Frames of Reference",
    filename: "frames-of-reference.mp3",
    date: "2017-04-09"
  },
  {
    title: "Lunar Drift",
    filename: "lunar-drift.mp3",
    date: "2017-01-11"
  },
  {
    title: "Lunar Drift Art",
    filename: "lunar-drift-art.png",
    date: "2017-01-11"
  },
  {
    title: "Foslock and Drop It",
    filename: "foslock-and-drop-it.mp3",
    date: "2016-10-18"
  },
  {
    title: "Manimation",
    filename: "manimation.mp4",
    date: "2016-07-11"
  },
  {
    title: "God Bless",
    filename: "god-bless.mp4",
    date: "2016-07-04"
  },
  {
    title: "Safety First",
    filename: "safety-first.mp3",
    date: "2016-05-30"
  },
  {
    title: "Depth Charge",
    filename: "depth-charge.mp3",
    date: "2016-05-05"
  },
  {
    title: "Glitch",
    filename: "glitch.png",
    date: "2016-05-05"
  },
  {
    title: "Cruise Control",
    filename: "cruise-control.mp3",
    date: "2016-04-12"
  },
  {
    title: "Torque",
    filename: "torque.mp3",
    date: "2016-02-25"
  },
  {
    title: "Post Hoc Ergo Propter Hoc",
    filename: "post-hoc-ergo-propter-hoc.mp3",
    date: "2016-01-27"
  },
  {
    title: "Chemtrails",
    filename: "chemtrails.png",
    date: "2016-01-27"
  },
  {
    title: "Whispers of Solitude",
    filename: "whispers-of-solitude.mp3",
    date: "2015-12-05"
  },
  {
    title: "Autumn",
    filename: "autumn.png",
    date: "2015-11-24"
  },
  {
    title: "Pupu Platter",
    filename: "pupu-platter.mp3",
    date: "2015-11-15"
  },
  {
    title: "Abstract Eyes",
    filename: "abstract-eyes.png",
    date: "2015-08-17"
  },
  {
    title: "OBAE",
    filename: "obae.mp3",
    date: "2015-07-17"
  },
  {
    title: "Matt Hat",
    filename: "matt-hat.png",
    date: "2015-07-13"
  },
  {
    title: "Heads Header",
    filename: "heads-header.png",
    date: "2015-03-13"
  },
  {
    title: "Weird Eyes",
    filename: "weird-eyes.png",
    date: "2014-10-28"
  },
  {
    title: "Caiman Like A Wrecking Ball",
    filename: "caiman-like-a-wrecking-ball.png",
    date: "2014-01-14"
  },
  {
    title: "Rolling Shutter Post-Processing",
    filename: "rolling-shutter.mp4",
    date: "2012-12-18"
  },
  {
    title: "First Snow",
    filename: "first-snow.jpg",
    date: "2012-12-07"
  },
  {
    title: "Impermanence",
    filename: "impermanence.jpg",
    date: "2012-10-02"
  }
];
const mediaProjects = Object.fromEntries(
  mediaRecords.map((record) => {
    const filenameParts = record.filename.split(".");
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
const externalProjects = [
  {
    "title": "Ethereal Goop v2",
    "url": "http://sketchbook.flatpickles.com/#ethereal-goop",
    "date": new Date("2022-10-29"),
    "type": ProjectType.Live
  },
  {
    "title": "Mandelbrot Set Viewer",
    "url": "http://sketchbook.flatpickles.com/#mandelbrot",
    "date": new Date("2022-09-29"),
    "type": ProjectType.Live
  },
  {
    "title": "Rectilinear",
    "url": "http://sketchbook.flatpickles.com/#rectilinear",
    "date": new Date("2022-09-14"),
    "type": ProjectType.Live
  },
  {
    "title": "Sketchbook",
    "url": "http://sketchbook.flatpickles.com/#no-signal",
    "date": new Date("2022-08-15"),
    "type": ProjectType.WebApp
  },
  {
    "title": "Glitchy",
    "url": "https://editor.isf.video/shaders/62bb5b57ad0a68001af75b57",
    "date": new Date("2022-07-11"),
    "type": ProjectType.VideoEffect
  },
  {
    "title": "GutenBard",
    "url": "https://flatpickles.com/GutenBard",
    "date": new Date("2022-06-14"),
    "type": ProjectType.WebApp
  },
  {
    "title": "Floppy Disk",
    "url": "http://sketchbook.flatpickles.com/#floppy-disk",
    "date": new Date("2022-04-08"),
    "type": ProjectType.Live
  },
  {
    "title": "Flat Picks - Season 4",
    "url": "https://open.spotify.com/playlist/3hd6tpg5ZUsme35lzG48V2?si=0e059e9fa00e4384",
    "date": new Date("2021-12-31"),
    "type": ProjectType.Playlist
  },
  {
    "title": "Music for Ryan & Jessica",
    "url": "https://paper.dropbox.com/doc/Music-for-Ryan-Jessica--BQSQtmtxGhjczmXJI3UuxdaZAQ-hhmATgKFzLjcsaqbxIE5x",
    "date": new Date("2021-08-08"),
    "type": ProjectType.Playlist
  },
  {
    "title": "What a Day Transcription",
    "url": "https://www.soundslice.com/slices/qfMDc/",
    "date": new Date("2021-04-21"),
    "type": ProjectType.Transcription
  },
  {
    "title": "Wobbly Video Effect",
    "url": "https://editor.isf.video/shaders/624d2c1efa14610014854030",
    "date": new Date("2021-01-27"),
    "type": ProjectType.VideoEffect
  },
  {
    "title": "Warpy Video Effect",
    "url": "https://editor.isf.video/shaders/624d2c75fa14610014854058",
    "date": new Date("2021-01-01"),
    "type": ProjectType.VideoEffect
  },
  {
    "title": "Flat Picks - Season 3",
    "url": "https://open.spotify.com/playlist/442CwkAO1CNU0TEnstZQc6?si=xABKoa-WS7S6vaI4RLHDIg",
    "date": new Date("2021-10-10"),
    "type": ProjectType.Playlist
  },
  {
    "title": "What's Old Is New Again",
    "url": "https://hic.af/objkt/527978",
    "date": new Date("2021-11-10"),
    "type": ProjectType.Video
  },
  {
    "title": "Flat Picks - Season 2",
    "url": "https://open.spotify.com/playlist/5QB5698lV4DguTVmvCZY9W?si=JGKeOjC7TeS8hqx9lhnBlg",
    "date": new Date("2019-10-12"),
    "type": ProjectType.Playlist
  },
  {
    "title": "Flat Picks - Season 1",
    "url": "https://open.spotify.com/playlist/2FV9kc9KxDPRIPiUMgHtwv?si=wkkoRYEKQGKUTTijPh_Xcw",
    "date": new Date("2018-09-29"),
    "type": ProjectType.Playlist
  },
  {
    "title": "Birdcrime",
    "url": "https://flatpickles.com/etc/birdcrime/index.html",
    "date": new Date("2017-12-03"),
    "type": ProjectType.WebApp
  },
  {
    "title": "Balls",
    "url": "https://flatpickles.com/etc/balls/index.html",
    "date": new Date("2014-09-22"),
    "type": ProjectType.WebApp
  },
  {
    "title": "Line Fractal Generator",
    "url": "https://flatpickles.com/etc/fractal-generator/index.html",
    "date": new Date("2013-07-22"),
    "type": ProjectType.WebApp
  },
  {
    "title": "Helicopter Game",
    "url": "https://flatpickles.com/etc/heli/index.html",
    "date": new Date("2013-04-16"),
    "type": ProjectType.WebApp
  },
  {
    "title": "WebGL Fireworks",
    "url": "http://www.goldberg.io/fireworks/",
    "date": new Date("2012-01-10"),
    "type": ProjectType.WebApp
  }
];
class Content {
  static async fullIndex() {
    const writingIndex = await this.writingIndex();
    const allContents = this.mediaIndex().concat(this.externalIndex()).concat(writingIndex);
    return allContents.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
  static mediaIndex() {
    return Object.values(mediaProjects);
  }
  static externalIndex() {
    return externalProjects;
  }
  static async writingIndex() {
    const allPostFiles = /* @__PURE__ */ Object.assign({ "./writing/ascendance.md": () => import("./ascendance.js"), "./writing/beauty.md": () => import("./beauty.js"), "./writing/bricolage.md": () => import("./bricolage.js"), "./writing/chili-recipe.md": () => import("./chili-recipe.js"), "./writing/cycles.md": () => import("./cycles.js"), "./writing/disassociation.md": () => import("./disassociation.js"), "./writing/disintegration.md": () => import("./disintegration.js"), "./writing/divine.md": () => import("./divine.js"), "./writing/endings.md": () => import("./endings.js"), "./writing/enter-dependence.md": () => import("./enter-dependence.js"), "./writing/fog.md": () => import("./fog.js"), "./writing/incompleteness.md": () => import("./incompleteness.js"), "./writing/inertia.md": () => import("./inertia.js"), "./writing/intentions-for-this-website.md": () => import("./intentions-for-this-website.js"), "./writing/luxury.md": () => import("./luxury.js"), "./writing/modern-times.md": () => import("./modern-times.js"), "./writing/nightmare.md": () => import("./nightmare.js"), "./writing/on-algorithmic-media.md": () => import("./on-algorithmic-media.js"), "./writing/on-art-and-enlightenment.md": () => import("./on-art-and-enlightenment.js"), "./writing/on-disposable-time.md": () => import("./on-disposable-time.js"), "./writing/on-happiness.md": () => import("./on-happiness.js"), "./writing/on-intentionality.md": () => import("./on-intentionality.js"), "./writing/on-love-and-marriage.md": () => import("./on-love-and-marriage.js"), "./writing/on-positive-feedback-cycles.md": () => import("./on-positive-feedback-cycles.js"), "./writing/on-self-confidence.md": () => import("./on-self-confidence.js"), "./writing/onward.md": () => import("./onward.js"), "./writing/overcast.md": () => import("./overcast.js"), "./writing/presence.md": () => import("./presence.js"), "./writing/reverie.md": () => import("./reverie.js"), "./writing/segfault.md": () => import("./segfault.js"), "./writing/somniloquy.md": () => import("./somniloquy.js"), "./writing/stories.md": () => import("./stories.js"), "./writing/the-solipsist.md": () => import("./the-solipsist.js"), "./writing/untitled-1.md": () => import("./untitled-1.js"), "./writing/untitled-2.md": () => import("./untitled-2.js"), "./writing/untitled-3.md": () => import("./untitled-3.js"), "./writing/wander.md": () => import("./wander.js"), "./writing/whole.md": () => import("./whole.js"), "./writing/world-population-day.md": () => import("./world-population-day.js") });
    const iterablePostFiles = Object.entries(allPostFiles);
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        const key = path.split("/").pop()?.split(".").shift();
        return this.makeWritingProject(key, metadata);
      })
    );
    return allPosts;
  }
  static mediaProject(key) {
    return mediaProjects[key];
  }
  static async writingProject(key) {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./writing/ascendance.md": () => import("./ascendance.js"), "./writing/beauty.md": () => import("./beauty.js"), "./writing/bricolage.md": () => import("./bricolage.js"), "./writing/chili-recipe.md": () => import("./chili-recipe.js"), "./writing/cycles.md": () => import("./cycles.js"), "./writing/disassociation.md": () => import("./disassociation.js"), "./writing/disintegration.md": () => import("./disintegration.js"), "./writing/divine.md": () => import("./divine.js"), "./writing/endings.md": () => import("./endings.js"), "./writing/enter-dependence.md": () => import("./enter-dependence.js"), "./writing/fog.md": () => import("./fog.js"), "./writing/incompleteness.md": () => import("./incompleteness.js"), "./writing/inertia.md": () => import("./inertia.js"), "./writing/intentions-for-this-website.md": () => import("./intentions-for-this-website.js"), "./writing/luxury.md": () => import("./luxury.js"), "./writing/modern-times.md": () => import("./modern-times.js"), "./writing/nightmare.md": () => import("./nightmare.js"), "./writing/on-algorithmic-media.md": () => import("./on-algorithmic-media.js"), "./writing/on-art-and-enlightenment.md": () => import("./on-art-and-enlightenment.js"), "./writing/on-disposable-time.md": () => import("./on-disposable-time.js"), "./writing/on-happiness.md": () => import("./on-happiness.js"), "./writing/on-intentionality.md": () => import("./on-intentionality.js"), "./writing/on-love-and-marriage.md": () => import("./on-love-and-marriage.js"), "./writing/on-positive-feedback-cycles.md": () => import("./on-positive-feedback-cycles.js"), "./writing/on-self-confidence.md": () => import("./on-self-confidence.js"), "./writing/onward.md": () => import("./onward.js"), "./writing/overcast.md": () => import("./overcast.js"), "./writing/presence.md": () => import("./presence.js"), "./writing/reverie.md": () => import("./reverie.js"), "./writing/segfault.md": () => import("./segfault.js"), "./writing/somniloquy.md": () => import("./somniloquy.js"), "./writing/stories.md": () => import("./stories.js"), "./writing/the-solipsist.md": () => import("./the-solipsist.js"), "./writing/untitled-1.md": () => import("./untitled-1.js"), "./writing/untitled-2.md": () => import("./untitled-2.js"), "./writing/untitled-3.md": () => import("./untitled-3.js"), "./writing/wander.md": () => import("./wander.js"), "./writing/whole.md": () => import("./whole.js"), "./writing/world-population-day.md": () => import("./world-population-day.js") }), `./writing/${key}.md`);
    const project = this.makeWritingProject(key, post.metadata);
    project.component = post.default;
    return project;
  }
  static makeWritingProject(key, metadata) {
    return {
      title: metadata.title,
      url: `/writing/${key}`,
      date: new Date(metadata.date),
      type: ProjectType.Writing
    };
  }
}
export {
  Content as C
};
