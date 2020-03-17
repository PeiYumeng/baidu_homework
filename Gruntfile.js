module.exports = function (grunt) {
    grunt.initConfig({
      uglify: {
        release:{
          files: {
            'dist/baidu.js': 'baidu.js'
          }
        }       
      },  
      cssmin: {  
        'dist/baidu.css': 'baidu.css'
      },  
      htmlmin: {
        options: {
            collapseWhitespace: true
        },
        files: {
            src: "./index.html",
            dest: "dist/index.html"
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify']);
  };
