export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","fonts/.DS_Store","fonts/HobeauxDemo-Black.woff2","fonts/HobeauxDemo-Semibold.woff2","fonts/VulfSans-Regular.woff2","matt-nichols-resume.pdf","media/.DS_Store","media/10000-bugs.mp4","media/abstract-eyes.png","media/alive.mp4","media/amoebas.mp4","media/arrakis.mp4","media/autumn.png","media/bottles.png","media/breakfast-for-laura.png","media/bwm.mp3","media/caged-love.mp4","media/caiman-like-a-wrecking-ball.png","media/chemtrails.png","media/circle-taurus.png","media/circular-energy-wallpaper.png","media/circular-energy.mp4","media/cruise-control.mp3","media/crunch.png","media/custom-dino-socks.jpg","media/cylinder-dance.mp4","media/dark-aromas.mp3","media/deluge.mp4","media/depth-charge.mp3","media/dill-gates.jpg","media/dino-icon.svg","media/ethereal-goop.jpg","media/first-snow.jpg","media/flat-pickles-avatar.png","media/flat-picks.png","media/foslock-and-drop-it.mp3","media/foster-lockwood.mp4","media/frames-of-reference.mp3","media/froggo.png","media/game-of-life.mp4","media/glitch.png","media/god-bless.mp4","media/golden-slumbers.mp4","media/hang-loose.png","media/heads-header.png","media/heavy.png","media/hot-chocolate.mp4","media/impermanence.jpg","media/keys-header.png","media/keys.mp4","media/late-night-noodles.mp4","media/lunar-drift-art.png","media/lunar-drift.mp3","media/mandelbrot-render.png","media/manimation.mp4","media/mantaur.png","media/matt-hat.png","media/minds-eye-1.png","media/minds-eye-2.png","media/minds-eye-3.png","media/new-piano-noodles.mp4","media/not-afraid.mp4","media/nugs.svg","media/obae.mp3","media/park-city-ski-run.mp4","media/pathogen-header.png","media/pathogen.mp4","media/peaceful-piano-thoughts.mp3","media/peristalsis.png","media/pft.mp4","media/pooper-no-twelve.png","media/post-hoc-ergo-propter-hoc.mp3","media/pupu-platter.mp3","media/quick-pick.png","media/rainy-daze.mp3","media/rolling-shutter.mp4","media/safety-first.mp3","media/salute-the-cube.mp3","media/sams-danze.mp3","media/sauce-on-it.mp3","media/self-sketch.png","media/sliding-pattern.mp4","media/spikeball.png","media/spiral-plant.png","media/squircle-grid.mp4","media/strawberry-hill.png","media/thank-god-its-fried-chicken.mp3","media/thoughts.png","media/torque.mp3","media/trippy-flowers.mp4","media/tube-and-friend.png","media/walrus-whistle.mp4","media/warpy-weirdness-1.png","media/warpy-weirdness-2.png","media/warpy-weirdness-3.png","media/waveform.png","media/weird-eyes.png","media/whispers-of-solitude.mp3","media/woven-colors.mp4"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2",".pdf":"application/pdf",".mp4":"video/mp4",".mp3":"audio/mpeg",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-60ded45b.js","imports":["_app/immutable/start-60ded45b.js","_app/immutable/chunks/index-39f73bf8.js","_app/immutable/chunks/singletons-376d00d5.js","_app/immutable/chunks/index-86335922.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js')
		],
		routes: [
			{
				id: "/(main)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(main)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/media",
				pattern: /^\/media\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/media/[slug]",
				pattern: /^\/media\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(main)/notes",
				pattern: /^\/notes\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/writing",
				pattern: /^\/writing\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/writing/[slug]",
				pattern: /^\/writing\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4], errors: [1,,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
