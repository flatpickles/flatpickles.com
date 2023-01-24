---
title: Automatic NPM Versioning
date: 01/24/2023
---

I'd like to start maintaining my project version numbers more intentionally, and to this end, I've been seeking a way to auto-update my project version with each commit. Though I can always run `npm version patch` to increment the patch number with an accompanying commit, I'd rather have each patch increment included in the same commit as the related changes.

[Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) to the rescue! For this particular use case, I want to update my pre-commit hook, adding these lines in my project's `.git/pre-commit` file:

```
npm version patch --no-git-tag-version
git add package.json
```

Before each commit is executed, this will increment my version's patch number *without* creating a dedicated commit, and then stage the changed `package.json` file so the update is included in the upcoming commit.

But what if I want to run the `npm version patch` command directly? With just my setup so far, this will bail out with a "working directory not clean" error, even if I haven't changed any files; this is because the `version` command first updates `package.json`, *then* triggers the pre-commit hook, which cannot proceed if any changes have been made since the last commit. Even if this were not the case, we'd be bumping our patch version number twice (once with the `version` command, then once with the hook), which isn't ideal.

Fortunately, NPM lets us configure whether or not git hooks are run for version bump commits! This behavior can be disabled by running:

```
npm config set commit-hooks false
```

This will set `commit-hooks=false` to the global `.npmrc` file (likely `~/.npmrc`), but if you want to configure this for a single project, you can also set this value manually in the `.npmrc` file in your project root. If `commit-hooks` is set in both global and project scope, NPM will prefer the project scope setting. 

I'll still be running `npm version [major|minor]` manually, but this will keep my patch number bumping automatically as I make incremental progress. Of course this isn't going to work for everyone, but I'm liking it in my current workflow.

You can read the docs for NPM's `version` command [here!](https://docs.npmjs.com/cli/v9/commands/npm-version)