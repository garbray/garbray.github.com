'use strict';

module.exports = function(grunt){
    grunt.config('less', {
        
        dev: {
            options: {
                dumpLineNumbers: 'comments'
            },
            files: {
                '<%= grunt.config.app %>/static/css/main.css': '<%= grunt.config.app %>/static/less/main.less'
            }
        },
        dist: {
            options: {
                paths: ['assets/css'],
                cleancss: true
            },
            files: {
                '<%= grunt.config.dist %>/static/css/main.css': '<%= grunt.config.app %>/static/less/main.less'
            }
        },
        clean: {
            files: {
                '<%= grunt.config.dist %>/static/css/main.css': '<%= grunt.config.dist %>/static/less/main.less'
            }
        }
    });
};