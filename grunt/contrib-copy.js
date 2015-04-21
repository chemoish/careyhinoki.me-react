module.exports = function (grunt) {
  grunt.config('copy', {
    asset: {
      files: [{
        cwd: 'src',
        dest: 'tmp',
        expand: true,
        src: [
          'data/*',
          'img/**'
        ]
      }]
    },

    css: {
      files: [{
        cwd: 'src',
        dest: 'tmp/vendor/css',
        expand: true,
        flatten: true,
        src: 'vendor/style/*.css'
      }]
    },

    js: {
      files: [{
        cwd: 'bower_components',
        dest: 'tmp/vendor/js',
        expand: true,
        flatten: true,
        src: [
          'modernizr/modernizr.js',
          'jquery/dist/jquery.js'
        ]
      }]
    },

    react: {
      files: [{
        cwd: 'src',
        dest: 'tmp',
        expand: true,
        src: [
          'index.html',
          'bundle.js'
        ]
      }]
    }
  });
};
