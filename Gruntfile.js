module.exports = function(grunt) {

    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    raw: 'output-style = :compressed\n'
                }
            },
        dev: {                    // Another target
            options: {
                config: 'config.rb',  // css_dir = 'dev/css'
            }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('build', ['compass:dev']);
    grunt.registerTask('build_prod', ['compass:dist']);
};