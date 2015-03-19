module.exports = function (grunt) {
  grunt.config('gh-pages', {
    site: {
      src: '**/*',

      options: {
        base: 'tmp'
      }
    }
  });
};
