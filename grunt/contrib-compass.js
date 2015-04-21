module.exports = function (grunt) {
  grunt.config('compass', {
    app: {
      options: {
        banner: '<%= banner %>',
        cssDir: 'tmp/style',
        sassDir: 'src/style',
        specify: 'src/style/app.scss'
      }
    }
  });
};
