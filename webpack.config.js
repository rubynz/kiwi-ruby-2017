var fs = require("fs");
var glob = require("glob");
var path = require("path");
var webpack = require("webpack");

/**
 * General configuration
 */
var ASSETS    = path.join(__dirname, "source", "assets");
var TARGETS   = glob.sync(ASSETS + "/**/target.js");
var BUILD     = path.join(__dirname, ".tmp", "dist", "assets");

/**
 * Custom webpack plugins
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * PostCSS packages
 */
var cssimport = require("postcss-import");
var cssnext = require("postcss-cssnext");

/**
 * configureEntries
 *
 * Iterate through the `APPS`, find any matching `target.js` files, and
 * return those as entry points for the webpack output.
 *
 */

function createTargets (entries, target) {
  var targetName = path.basename(path.dirname(target));
  entries[targetName] = [target];
  return entries;
}

/**
 * Create a base webpack config
 *
 * @param  {Object} options
 *   - {Array} entryBase Allow for a custom "base" for each entry
 *   - {Boolean} quiet Quiets the output from webpack
 * @return {Object} Base webpack config
 */
module.exports = {
    context: ASSETS,

    // Generate the `entry` points from the filesystem
    entry: TARGETS.reduce(createTargets, {}),

    // Configure output
    output: {
      // Output into our build directory
      path: BUILD,

      // Template based on keys in entry above
      // Generate hashed names for production
      filename: "[name].js",
    },

    // Post-CSS configuration
    postcss: function(webpack) {
      return {
        defaults: [
          cssimport({
            addDependencyTo: webpack
          }),
          cssnext()
        ]
      };
    },

    // Plugins
    plugins: [
      // Extract all CSS into static files
      new ExtractTextPlugin("[name].css", {
        allChunks: true
      })
    ],

    // eslint configuration
    eslint: {
      configFile: path.join(__dirname, "../.eslintrc.json"),
      emitError: false,
      emitWarning: true
    },

    // Quiet
    stats: {
      assets:       false,
      assetsSort:   false,
      cached:       false,
      children:     false,
      chunkModules: false,
      chunkOrigins: false,
      chunks:       false,
      chunksSort:   false,
      colors:       true,
      errorDetails: true,
      hash:         false,
      modules:      false,
      modulesSort:  false,
      reasons:      false,
      source:       false,
      timings:      false,
      version:      false
    },

    // General configuration
    module: {
      loaders: [
        {
          test: /\.(jpe?g|png|gif|svg|woff|ttf|otf|eot|ico)/,
          loader: "file-loader?name=[path][name].[ext]"
        },
        {
          test: /\.css$/,
          // The ExtractTextPlugin pulls all CSS out into static files
          // rather than inside the JavaScript/webpack bundle
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
        }
      ]
    }
  };
