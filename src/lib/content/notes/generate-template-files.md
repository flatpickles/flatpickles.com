---
title: generate-template-files
date: 1/14/23
---

I recently discovered the brilliantly designed [generate-template-files](https://github.com/codeBelt/generate-template-files) package, which is now my starting point for new projects within [Sketchbook](https://sketchbook.flatpickles.com/). Now instead of duplicating, renaming, and editing my template files manually when starting a sketch project, I can just run `npm run new`, then get into the creative part of the work more quickly.

The author emphasizes in his [overview post](https://medium.com/@robertsavian/generate-template-files-with-ease-19b320615359) that generate-template-files is particularly unopinionated about its use cases, even being useful outside of code-based projects. I'm excited to absorb this into my toolkit, and continue finding ways to move more quickly in situations where I end up routinely creating similar files. I'm also pondering ways to extend this, e.g. by automatically adding imports and other usages of generated files throughout existing code, as appropriate.

The example in the overview post was all I needed to get started with this awesome tool, but I did spend a moment of confusion wondering if I needed to include the `stringReplacers` strings in my template filenames. I did not! The example template filenames include `stringReplacers` entities to match their contained classnames (makes sense), but the output filenames are entirely determined by `output.path` in the config JSON. In case another example is helpful as you get started with this, you can find my simple setup [over here](https://github.com/flatpickles/sketchbook/blob/main/tools/).

While updating `package.json` to include a run command for my new file generation script, I realized I didn't know too much about how NPM scripting works beyond the basics. As a bonus reference link, I'll leave you with this [deep dive on NPM scripts](https://dev.to/paulasantamaria/mastering-npm-scripts-2chd), which was another fun rabbit hole. Good stuff!
