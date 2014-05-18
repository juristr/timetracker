module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            scripts: {
                files: ["app/**/*.js", "assets/**/*.css", "index.html", "app/**/*.html"],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask('default', ['watch']);
};
