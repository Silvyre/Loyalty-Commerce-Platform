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
