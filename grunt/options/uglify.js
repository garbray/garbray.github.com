'use strict';
module.exports = function(grunt) {
  grunt.config('uglify', {
      dist: {
          files: {
              '<%= grunt.config.dist %>/static/js/scripts.js': [
                  '<%= grunt.config.dist %>/static/js/scripts.js'
              ]
          }
      },
        component: {
            files: {
                '<%= grunt.config.dist %>/static/js/scripts.js': [
                    '<%= grunt.config.dist %>/static/js/scripts.js'
                ]
            }
        }
  });
};