module.exports = function (grunt) {
  grunt.config('browserify', {
    dev: {
      files: {
        'src/bundle.js': 'src/js/**/*.js'
      },

      options: {
        transform: [
          'reactify'
        ],
        watch: true
      }
    }
  });
};
