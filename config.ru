require "rubygems"
require "bundler"
Bundler.setup

require "rack/contrib"
require 'middleman-core/load_paths'
::Middleman.setup_load_paths

require 'middleman-core'
require 'middleman-core/rack'

require 'fileutils'
FileUtils.mkdir('log') unless File.exist?('log')
::Middleman::Logger.singleton("log/#{ENV['RACK_ENV']}.log")

# Gzip
use Rack::Deflater

# Serve anything out of that exists
use Rack::TryStatic,
  root: "build",
  urls: %w[/],
  try: [".html", "index.html", "/index.html"]

# Boot the middleman server for anything that isn’t served
app = ::Middleman::Application.new
run ::Middleman::Rack.new(app).to_app
