module.exports = function (grunt) {
  // load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // time how long tasks take. can help when optimizing build times.
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: [
      '/**',
      ' * <%= _.titleize(pkg.name) %> v<%= pkg.version %>',
      ' *',
      ' * @author: <%= pkg.author %>',
      ' * @date: <%= grunt.template.today("yyyy-mm-dd") %>',
      ' */\n\n'
    ].join('\n')
  });

  grunt.loadTasks('grunt');

  grunt.registerTask('default', 'Running development environment…', [
    'build',
    'connect',
    'watch'
  ]);

  grunt.registerTask('build', 'Running development tasks…', [
    'clean',
    'browserify',
    'copy'
  ]);

  grunt.registerTask('pages', 'Running pages tasks…', [
    'build',
    'gh-pages'
  ]);
};
