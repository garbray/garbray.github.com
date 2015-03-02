'use strict';

module.exports = function(grunt) {
    grunt.config('watch', {
        options: {
            livereload: grunt.config.LIVERELOAD_PORT
        },
        scritps: {
            files: [
                '<%= grunt.config.app %>/static/js/{,**/}*.js',
            ],
            livereload: true
        },
        less: {
            files: [
                '<%= grunt.config.app %>/static/less/{,**/}*.less',
            ],
            livereload: true,
           // tasks: ['compass:dev', 'csslint']
        },
        html: {
            files: [
                '<%= grunt.config.app %>/index.html'
                // '<%= grunt.config.app %>/scripts/*/views/{,**/}*.html',
            ],
            livereload: true
        },
        images: {
            files: [
                '<%= grunt.config.app %>/static/images/{,**/}*.{png,jpg,jpeg,gif,webp,svg}'
            ],
            livereload: true
        }
    });
};