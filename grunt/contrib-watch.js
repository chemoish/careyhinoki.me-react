module.exports = function (grunt) {
  grunt.config('watch', {
    grunt: {
      files: [
        'Gruntfile.js',
        'grunt/*.js'
      ]
    },

    compass: {
      files: [
        'src/style/**'
      ],

      tasks: [
        'compass:app'
      ]
    },

    react: {
      files: [
        'src/bundle.js'
      ],

      tasks: [
        'copy:react'
      ]
    },

    options: {
      interrupt: true,
      livereload: true
    }
  });
};
