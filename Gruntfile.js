module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);


    grunt.initConfig({
        watch: {
            scripts: {
                files: ["app/**/*.js", "**/*.css", "index.html", "app/**/*.html"],
                options: {
                    livereload: true
                }
            },
            livereload: {
                options: {
                  livereload: '<%= connect.options.livereload %>'
              },
              files: [
              __dirname + '/**/*.*',
              ]
          }
        },
        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        __dirname
                    ],
                    middleware: function (connect, options) {
                        return [
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(__dirname)
                        ];
                    }
                }
            }
        }
    });

    grunt.registerTask('default', function (target) {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });
};
