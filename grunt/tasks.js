'use strict';

module.exports = function(grunt) {
  
  grunt.registerTask('server', function() {
    grunt.task.run([
      'jshint',
      'connect:server',
      'less:dev',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
      'jshint',
      'clean:dist',
      'bowerInstall',
      'useminPrepare',
      'less:dist',
      'concat',
      'concurrent:dist',
      'cssmin',
      'copy:dist',
      // 'cdnify',
      // 'ngmin:dist',
      'uglify:dist',
      'rev',
      'usemin'
    ]);

  grunt.registerTask('dist',[
    'connect:dist',
    'open',
    'watch'
  ]);

};

