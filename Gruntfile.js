'use strict';

// var mountFolder = function(connect, dir) {
//   return connect.static(require('path').resolve(dir));
// };

module.exports = function(grunt) {

  // load task timming plugin
  require('time-grunt')(grunt);

  grunt.config.pkg = grunt.file.readJSON('package.json');
  grunt.config.app = 'app';
  grunt.config.dist = 'dist';
  grunt.config.LIVERELOAD_PORT = 35729;
  grunt.config.SERVER_DEV_PORT = 9000;

  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // load all grunt configs
  grunt.loadTasks('grunt/');
  grunt.loadTasks('grunt/options');

};