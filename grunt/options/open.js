'use strict';

module.exports = function(grunt) {
	grunt.config('open', {
		server: {
			path: 'http://localhost:<%= grunt.config.SERVER_DEV_PORT %>'
		}
	});
};