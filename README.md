
# KiwiRuby

Built with [Middleman][middleman].

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

The [`middleman-deploy`][middleman-deploy] and [`middleman-s3_sync`][middleman-s3_sync] gems are included to make it easy to deploy to either GitHub Pages or Amazon S3.

Check the deployment section at the bottom of `config.rb` to see their example configurations.

### Heroku

You’ll need to adjust a few settings when you set things up:

```
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add heroku/ruby
```

Include devDependencies in the production build:

```
heroku config:set NPM_CONFIG_PRODUCTION=false
```

Then configure the production timezone on Heroku:

```
heroku config:set TZ="Australia/Melbourne"
```

Once that’s done you can also push this repository to Heroku and it should build it on deploy, and serve it automatically.

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

[middleman]: https://middlemanapp.com/
[webpack]: https://webpack.github.io/
[middleman-deploy]: https://github.com/middleman-contrib/middleman-deploy
[middleman-s3_sync]: https://github.com/fredjean/middleman-s3_sync
[npm]: http://npmjs.com/
[dry-web-skeleton]: https://github.com/icelab/dry-web-skeleton
[rails-skeleton]: https://github.com/icelab/rails-skeleton
