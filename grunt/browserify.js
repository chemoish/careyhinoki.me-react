module.exports = function (grunt) {
  grunt.config('browserify', {
    dev: {
      files: {
        'src/bundle.js': 'src/js/**/*.js'
      },

      options: {
        browserifyOptions: {
          paths: [
            'src/js'
          ]
        },

        transform: [
          'reactify'
        ],
        watch: true
      }
    }
  });
};
