//Gruntfile.js
module.exports = function(grunt){

  //Load Plugin(s)
  require('load-grunt-tasks')(grunt);

  //Project Configuration
  grunt.initConfig({
    express: {
      dev: {
        options :{
          script: './app.js',
          opts: ['--harmony']
        }
      }
    },
    watch: {
      express: {
        files: ['**/*.js'],     //Files to be watched
        tasks: ['express:dev'], //(Re)start the server
        options: {              //Server options
          spawn: false,         //Must have for reload
          livereload: true      //Enable LiveReload
        }
      }
    }
  });

  //Register Task
  grunt.registerTask('default',['express:dev','watch']);
};
