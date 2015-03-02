'use strict';
module.exports = function(grunt) {
    grunt.config('rev', {
        dist: {
            files: {
                src: [
                    '<%= grunt.config.dist %>/static/{,*/}*.js',
                    '<%= grunt.config.dist %>/static/{,*/}*.css',
                    '<%= grunt.config.dist %>/static/fonts/*'
                ]
            }
        }
    });
};