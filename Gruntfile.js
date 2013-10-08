module.exports = function(grunt) {

    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    outputStyle: 'compressed'
                }
            },
            dev: {                    // Another target
                options: {
                    config: 'config.rb'  // css_dir = 'dev/css'
                }
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
            },
            src: ['js/modules/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['jshint','compass:dev']);
    grunt.registerTask('build_prod', ['compass:dist']);
};