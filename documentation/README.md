# Documentation Tool

## Introduction

This is a small toolkit to help generate the [Points
documentation](http://points.github.io/Loyalty-Commerce-Platform/). Source files
of the documentation are created in Markdown and then converted into HTML.

## Setup

1. Install [nodejs](http://nodejs.org/)
1. Run `npm install -g grunt-cli`
1. Run `npm install`
1. Install [bower](http://bower.io/) and if on Windows, be sure to install
   `mysisgit`
1. Run `bower install`
1. Download a copy of the `gh-pages` branch (this is where the build of the
   static files go into):

         git clone git@github.com:Points/Loyalty-Commerce-Platform.git dist
         cd dist
         git checkout gh-pages

## Usage

- `grunt server` to run a local server of the documentation in development mode.
- `grunt build` to create a build of the documentation into the `dist` folder.
- `grunt generate-markdown-list` is used when any new `*.md` files are created
  in the `app/static/documentation/` folder.
- Any single markdown file can be loaded by creating a markdown file within the
  `app/static/documentation/` folder and then loading it via the URL:
  http://localhost:9000/index.html?doc=[your-markdown-filename]

## Deploy

The tool benefits from using [Github pages](http://pages.github.com/). Simply go
into the `dist` folder and push your changes into Git. This folder should be a
separate checkout of the repository in the `gh-pages` branch.
