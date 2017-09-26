# Documentation Tool

## Introduction

This is a small toolkit to help generate the [Points
documentation](http://points.github.io/Loyalty-Commerce-Platform/). Source files
of the documentation are created in
[Markdown](http://daringfireball.net/projects/markdown/) and then converted
into HTML.

## Setup

Download this repo and from the `documentation` folder:

1. Install [nodejs](http://nodejs.org/)
1. Install [yarn](https://yarnpkg.com/en/docs/install): `npm install -g yarn`
1. Install dependencies: `yarn`
1. Download a copy of the `gh-pages` branch into the `documentation` folder
   (this is where the build of the static files go into):

         git clone git@github.com:Points/Loyalty-Commerce-Platform.git dist
         cd dist
         git checkout gh-pages

## Usage

- `npm run start` to run a local server of the documentation in development mode.
- `npm run build` (from the documentation folder) to create a build of the documentation into the `dist` folder.
- Any single markdown file can be loaded by creating a markdown file within the
  `app/static/documentation/` folder and then loading it via the URL:
  `http://localhost:9000/?doc=[your-markdown-filename]`

## Deploy

The tool benefits from using [Github pages](http://pages.github.com/). Simply go
into the `dist` folder and push your changes into Git. This folder should be a
separate checkout of the repository in the `gh-pages` branch which was done in the
last step of the setup process mentioned above.

Here's a step-by-step:
1. In `documentation`, commit and push changes to master. Use `npm run start` to review changes.
1. In `documentation`, `npm run build` to build into `dist`.
1. Change working directory to `dist`. Make sure you're on the `gh-pages` branch with `git branch`.
1. In `dist`, commit and push changes to gh-pages. For text changes, only documentation.js should be changed.

Typical commands will proceed as follows:

         npm run start
         git status
         git add <filename>
         git commit -m "<short message here>"
         git push
         npm run build
         cd dist
         git branch gh-pages
         git checkout gh-pages
         git status
         git add <filename>
         git commit -m "<short message here>"
         git push
         cd ..

## LCP API Reference

When adding new API modules or subsections, be sure to update the following two files.
- `documentation/scripts/api-documents.json` to list sections in the side navbar.
- `documentation/scripts/modules/load-markdown-documents.coffee` to load sections' documents into the body of the page.