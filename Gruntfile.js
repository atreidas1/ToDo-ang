module.exports = function (grunt) {

  grunt.initConfig({

    //jade compiler###########################################################
    jade: {
      debug: {
        options: {
          data: {
            debug: true,
            timestamp: "<%= new Date().getTime() %>"
          }
        },
        files: [{
          expand: true,
          src: ['*.jade'],
          dest: 'build/',
          ext: '.html'
      },
      {
          expand: true,
          cwd: 'templates/',
          src: ['*.jade'],
          dest: 'build/templates/',
          ext: '.html'
      },
      {
          expand: true,
          cwd: 'views/',
          src: ['*.jade'],
          dest: 'build/views/',
          ext: '.html'
      }]
      }
    },
    //file copy###########################################################
    copy: {
      main: {
        files: [
      // includes files within path
         /* {
            expand: true,
            cwd: 'js/app/',
            src: ['*.js'],
            dest: 'build/js/app/',
            filter: 'isFile'
          },
         /* {
            expand: true,
            cwd: 'client/src/js/app/',
            src: ['*.js'],
            dest: 'client/build/js/app/',
            filter: 'isFile'
          },*/

          {
            expand: true,
            cwd: 'css/',
            src: ['*.css'],
            dest: 'build/css/',
            filter: 'isFile'
          },
          {expand: true, cwd: 'js/libs/bower_components/angular-resource/', src: ['angular-resource.min.js'], dest: 'build/js/libs/',filter: 'isFile'},
          {expand: true, cwd: 'js/libs/bower_components/angular/', src: ['angular.min.js'], dest: 'build/js/libs/',filter: 'isFile'},
          {expand: true, cwd: 'js/libs/bower_components/angular-ui-router/release/', src: ['angular-ui-router.min.js'], dest: 'build/js/libs/',filter: 'isFile'},
          {expand: true, cwd: 'js/libs/bower_components/angular-bootstrap/', src: ['ui-bootstrap.min.js'], dest: 'build/js/libs/',filter: 'isFile'},
    ],
      },
    },
    concat: {
      dist: {
        src: [
            'js/app/*.js',
        ],
        dest: 'build/js/app/app.js',
      }
    },
    watch: {
      scripts: {
        files: ['*.jade', 'css/*.css', 'js/app/*.js','views/*.jade','templates/*.jade'],
        tasks: ['jade','concat','copy'],
        options: {
          spawn: false,
        },
      },
    }

  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

};
