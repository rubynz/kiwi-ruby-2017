desc "Start middleman and watch the build"
task :watch do
  system "middleman"
end

desc "Build the site"
task :build do
  system "middleman build"
end

desc "Deploy the site"
task :deploy do
  system "middleman deploy"
end

namespace :assets do
  task :precompile do
    sh "middleman build"
  end
end
