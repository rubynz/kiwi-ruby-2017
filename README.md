
# Kiwi Ruby

The website for New Zealand's premier (only) Ruby conference, [Kiwi Ruby][kiwiruby]. 

Built with [Middleman][middleman] and also with 💖love💖. 

## Development

### First-time setup

Set up the app:

```
./bin/setup
```

### Running the app

Spin up Middleman’s development server:

```
bundle exec rake watch
```

It should be accessible at `http://localhost:4567`

## Build

To build out all files locally:

```
bundle exec rake build
```

## Deployment

The website is hosted on GitHub Pages, and deployed using the [`middleman-deploy`][middleman-deploy] gem.

Provided you have write access to this repository, you should be able to deploy with the following command:

`middleman deploy`

## Assets

Assets are built/bundled using [webpack][webpack] and are built into the final static build using Middleman’s `external_pipeline` feature.

You can install and require [npm][npm] dependencies throughout your JavaScript and CSS:

```
npm install --save viewloader
```

```js
var viewloader = require('viewloader')
```

The assets work in a similar fashion to our webpack setup in [our other][dry-web-skeleton] [app skeleton][rails-skeleton] projects. An asset will be built for each "target" under `source/assets/`:

```
source/
|-- assets/
    |-- public/
    |   |-- target.js
    |   |-- index.css*
    |   |-- index.js*
    |-- another-target/
        |-- target.js
        |-- index.js*
```

Each target must include a `target.js` file, but doesn’t _have_ to build out both CSS and JavaScript. The structure above would generate:

```
assets/public.js
assets/public.css
assets/another-target.js
```

[kiwiruby]: http://kiwi.ruby.nz
[middleman]: https://middlemanapp.com/
[webpack]: https://webpack.github.io/
[middleman-deploy]: https://github.com/middleman-contrib/middleman-deploy
[middleman-s3_sync]: https://github.com/fredjean/middleman-s3_sync
[npm]: http://npmjs.com/
[dry-web-skeleton]: https://github.com/icelab/dry-web-skeleton
[rails-skeleton]: https://github.com/icelab/rails-skeleton
