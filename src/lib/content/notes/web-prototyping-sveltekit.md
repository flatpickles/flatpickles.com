---
title: Web Prototyping with SvelteKit
date: 1/19/23
---

Over the past year, I've been getting back into web development. I've been making websites since I was 12, and it's always been at least a back-burner passion for me, but recently I've been brushing up on modern tools and techniques. While educating myself about the present (React, etc), I've also been looking into the future, wondering what production web development will look and feel like in a couple years.

[SvelteKit](https://svelte.dev/blog/announcing-sveltekit-1.0) is the answer! I've been using [Svelte](https://svelte.dev) for the better part of a year (in my day job, and for side projects), and after building out the latest version of [flatpickles.com](https://flatpickles.com) with SvelteKit 1.0, I'm all the more convinced that this marvelous framework will be central to the future of the web. You can read [elsewhere](https://naturaily.com/blog/why-svelte-is-next-big-thing-javascript-development) about how speedy Svelte(Kit) is, how fun it is to learn and use, and how it leverages the best of native web tech. What I want to document here is my ridiculously simple workflow for getting a prototype app up and running, using SvelteKit, GitHub, and [Vercel](https://vercel.com).

First I create a SvelteKit project, then follow the prompts to install all the needed packages with NPM, and initialize a Git repo:

```
npm create svelte@latest new-thang
```

I then create a new repo on GitHub (either public or private), and push my new prototype project up to remote:

```
git remote add origin [...]
git push -u origin main
```

Finally, I log into my free-tier Vercel account, and add a project by importing my new repo from GitHub. Without any further configuration, Vercel will run the Vite build, deploy my project, and automatically re-deploy each time I push to my main branch. In total, this setup takes me about five minutes and zero dollars.

**That's it!** Now that I've written it out, this feels too simple to be worth a full post on here, but maybe that's the point. Regardless, I'm very excited to have solidified an easy starting point for web projects of any size. Give it a shot if you're a web developer looking for a workflow refresh!
