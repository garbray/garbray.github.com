'use strict';
module.exports = function(grunt) {
	grunt.config('imagemin', {
	    dist: {
	        files: [{
	            expand: true,
	            cwd: '../../<%= grunt.config.app %>/static/images',
	            src: '{,*/}*.{png,jpg,jpeg}',
	            dest: '../../<%= grunt.config.dist %>/static/images'
	        }]
	    }
	});
};