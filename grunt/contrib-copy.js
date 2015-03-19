module.exports = function (grunt) {
  grunt.config('copy', {
    app: {
      files: [{
        cwd: 'src',
        dest: 'tmp',
        expand: true,
        src: [
          'data/*',
          'index.html',
          'bundle.js'
        ]
      }]
    },

    js: {
      files: [{
        cwd: 'bower_components',
        dest: 'tmp/vendor',
        expand: true,
        flatten: true,
        src: [
          'modernizr/modernizr.js',
          'jquery/dist/jquery.js'
        ]
      }]
    }
  });
};
