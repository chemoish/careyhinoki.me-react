module.exports = function (grunt) {
  grunt.config('watch', {
    grunt: {
      files: [
        'Gruntfile.js',
        'grunt/*.js'
      ]
    },

    react: {
      files: [
        'src/*'
      ],

      tasks: [
        'copy:app'
      ]
    },

    options: {
      interrupt: true,
      livereload: true
    }
  });
};
