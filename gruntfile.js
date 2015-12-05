module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['*.js', 'test/**/*.js'],
            options: {
                globals: {
                    console: true,
                    require: true
                }
            }
        },
        mochaTest: {
            default: {
                options: {
                    reporter: 'spec',
                    quiet: false,
                    captureFile: 'test/display-report.ansi'
                },
                src: ['test/**/*-spec.js']
            },
            tap: {
                options: {
                    reporter: 'tap',
                    quiet: true,
                    captureFile: 'test/display-report.tap'
                },
                src: ['test/**/*-spec.js']
            }
        },
        jsbeautifier: {
            src: '<%= jshint.files %>'
        },
        clean: {
            options: {
                force: true
            },
            src: ['test/display*.*']
        }
    });

    // Load Default task Libraries
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // default task
    grunt.registerTask('default', ['clean', 'jshint', 'jsbeautifier', 'mochaTest:default']);

    // TAP reporter task
    grunt.registerTask('report', ['clean', 'jshint', 'mochaTest:tap', 'jsbeautifier']);
};
