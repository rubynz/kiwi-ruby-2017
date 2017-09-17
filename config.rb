require 'slim'

# General configuration --------------------------------------------------------

activate :dotenv

# Set Markdown engine to use redcarpet
set :markdown_engine, :redcarpet
set :markdown,        fenced_code_blocks: true,
                      autolink: true,
                      smartypants: true,
                      hard_wrap: true,
                      smart: true,
                      superscript: true,
                      no_intra_emphasis: true,
                      lax_spacing: true,
                      with_toc_data: true

activate :directory_indexes

# Helpers ----------------------------------------------------------------------

require "lib/typography_helpers"
helpers TypographyHelpers

# Page options -----------------------------------------------------------------

# Pages without layout
page "*.xml", layout: false
page "*.json", layout: false
page "*.txt", layout: false

# Catch-all for other routes
page "*.html", layout: "layouts/base"

# Webpack configuration --------------------------------------------------------

ignore "assets/**/*.css"
ignore "assets/**/*.js"

# Development configuration --------------------------------------------------------

# Reload the browser automatically whenever files change
configure :development do
  set :env, "development"
  set :enable_sw, true
  set :google_maps_key, nil
  activate :livereload
end

# Build-specific configuration -------------------------------------------------

configure :build do
  set :env, "production"
  set :google_maps_key, "AIzaSyBdI51q8kJ9s19RmWunLFFUZKFTxDXTSBA"
  activate :asset_hash, ignore: %w{
    opengraph.png
    *touch-icon*.*
    service-worker.js
    *.xml
    *.txt
    *.json
    favicon.ico
  }
end

dev_server_task = :enable_sw ? "npm run watch:sw" : "npm run watch"

activate :external_pipeline,
        name: :webpack,
        command: build? ? "npm run build" : dev_server_task,
        source: ".tmp/dist",
        latency: 1

# Deployment configuration -----------------------------------------------------

# Deploy to GitHub Pages
activate :deploy do |config|
  config.deploy_method = :git
  config.branch = "gh-pages"
  config.build_before = true
end
