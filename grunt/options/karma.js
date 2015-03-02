'use strict';

module.exports = function(grunt) {
    grunt.config('karma', {
        dev: {
            unit: {
			    configFile: 'karma.conf.js',
			    autoWatch: true
			}
        }
    });
};