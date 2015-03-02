'use strict';
module.exports = function(grunt) {
    grunt.config('concat', {
        options: {
            banner: '// This file is created on '+ new Date().toString() +'. Any change here will be lost.\n\n',
            separator: ';'
        },
        component: {
            src: ['app/static/js/*.js'],
            dest: grunt.config.dist + '/static/js/main.js'
        }
    });
};