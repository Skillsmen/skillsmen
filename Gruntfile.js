module.exports = function(grunt) {
  grunt.initConfig({
    eslint: {
      target: ['mobile/*']
    },
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.registerTask('lint', ['eslint']);
};