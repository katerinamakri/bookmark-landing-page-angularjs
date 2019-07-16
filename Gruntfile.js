module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "app/css/main.css": "app/less/styles.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['app/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    concat: {
      dist: {
        src: [ 'less/variables.less' ],
        dest: 'less/styles.less',
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch', 'concat']);
};