module.exports = function (grunt) {
  grunt.config('imagemin', {
    app: {
      files: [{
        cwd: 'src',
        dest: 'img/work',
        expand: true,
        flatten: true,
        src: 'img/work/*.{png,jpg,gif}'
      }]
    }
  });
};
