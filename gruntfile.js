module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');

    grunt.initConfig({

        // ***************** //
        //  Grunt Varaibles  //
        // ***************** //

        AppSass: 'app/**/*.scss',
        AppPartials: 'app/**/*.html',
        AppIndexHtml: 'app/index.html',
        AppJs: 'app/**/*.js',
        AppJsModules: 'app/**/*.module.js',
        AppTests: 'test/**/*.test.js',

        // ***************** //
        //    Grunt Tasks    //
        // ***************** //

        concat: {
            appsass: {
                src: '<%= AppSass %>',
                dest: 'tmp/appsass.scss'
            }
        },

        sass: {
            appsass: {
                options: {
                    noCache: true
                },
                files: [{
                    src: 'tmp/appsass.scss',
                    dest: 'tmp/appcss.css'
                }]
            }
        },

        cssmin: {
            appVendor: {
                files: {
                    'build/appVendor.min.css': [
                        'node_modules/normalize-css/normalize.css'
                    ]
                }
            },
            app: {
                files: {
                    'build/app.min.css': 'tmp/appcss.css'
                }
            }
        },

        html2js: {
            options: {
                module: 'app.partials',
                base: 'app'
            },
            partials: {
                src: '<%= AppPartials %>',
                dest: 'tmp/partials.js'
            },
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: '<%= AppJs %>',
            test: '<%= AppTests %>'
        },

        uglify: {
            options: {
                compress: true,
                sourceMap: true
            },
            appVendor: {
                src: [
                    'node_modules/angular/angular.js',
                    'node_modules/angular-ui-router/release/angular-ui-router.js',
                ],
                dest: 'build/appVendor.min.js'
            },
            appPartials: {
                src: ['tmp/partials.js'],
                dest: 'build/appPartials.min.js'
            },
            app: {
                src: [
                    '<%= AppJsModules %>',
                    '<%= AppJs %>'
                ],
                dest: 'build/app.min.js'
            }
        },

        copy: {
            index: {
                src: '<%= AppIndexHtml %>',
                dest: 'build/index.html'
            }
        },

        clean: {
            temp: {
                src: ['tmp']
            }
        },

        watch: {
            js: {
                files: ['<%= AppJs %>'],
                tasks: ['compileAppJs']
            },
            css: {
                files: ['<%= AppSass %>'],
                tasks: ['compileAppSass']
            },
            partials: {
                files: ['<%= AppPartials %>'],
                tasks: ['compilePartials']
            },
            indexHtml: {
                files: ['<%= AppIndexHtml %>'],
                tasks: ['copyIndexHtml']
            }
        }
    });

    // **************************** //
    //    Grunt Registered Tasks    //
    // **************************** //

    grunt.registerTask('compileVendorSass', ['cssmin:appVendor']);
    grunt.registerTask('compileAppSass', ['concat:appsass', 'sass', 'cssmin:app']);

    grunt.registerTask('compileVendorJS', ['uglify:appVendor']);
    grunt.registerTask('compileAppJs', ['jshint', 'uglify:app']);

    grunt.registerTask('compilePartials', ['html2js', 'uglify:appPartials']);
    grunt.registerTask('copyIndexHtml', ['copy:index']);

    grunt.registerTask('build', ['compileVendorSass','compileAppSass', 'compileVendorJS', 'compileAppJs', 'compilePartials', 'copyIndexHtml', 'clean']);
};
