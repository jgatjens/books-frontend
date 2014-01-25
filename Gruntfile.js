'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

/*global module:false*/
module.exports = function(grunt) {

  // show elapsed time at the end
  // require('time-grunt')(grunt);
  // load all grunt tasks

  // require('load-grunt-tasks')(grunt);


  var config = {
    app:  'app',
    dist: 'dist',
    test: '.'
  };

  // Project configuration.
  grunt.initConfig({
    config: config,
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    watch: {
        jshint: {
          files: ['js/{,*}*.js'],
          tasks: ['jshint']
        },
        compass: {
          files: ['<%= config.app %>/scss/{,*/}*.{scss,sass}'],
          tasks: ['compass:server']
        },
        livereload: {
          options: {
              livereload: LIVERELOAD_PORT
          },
          files: [
              '<%= config.app %>/*.html',
              '<%= config.app %>/css/{,*/}*.css',
              '<%= config.app %>/js/{,*/}*.js',
              '<%= config.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
          ]
        }
    },
    connect: {
      options: {
          port: 9000,
          // change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
      },
      livereload: {
          options: {
              middleware: function (connect) {
                  return [
                      lrSnippet,
                      mountFolder(connect, config.app)
                  ];
              }
          }
      },
      test: {
          options: {
              middleware: function (connect) {
                  return [
                      mountFolder(connect, config.test)
                  ];
              }
          }
      }
    },
    // open server default browser
    open: {
      server: {
          path: 'http://localhost:<%= connect.options.port %>'
      },
      test: {
          path: 'http://localhost:<%= connect.options.port %>/test'
      }
    },
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      dist: {
        src: ['<%= config.app %>/js/*.js'],
        dest: '<%= config.dist %>/js/app.min.js'
      }
    },
    clean: ["<%= config.dist %>/js/app.min.js"],
    jshint: {
      dev: {
        options: {
          "jshintrc": true
        },
        src: ['js/*.js']
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
              '*.{ico,txt, md}',
              'css/**',
              'img/{,*/}*.{webp,gif}'
          ]
        }]
      }
    },
    compass: {
        options: {
            sassDir: '<%= config.app %>/scss',
            cssDir: '<%= config.app %>/css',
            generatedImagesDir: '<%= config.app %>/img',
            imagesDir: '<%= config.app %>/img',
            javascriptsDir: '<%= config.app %>/js',
            fontsDir: '<%= config.app %>/css/fonts',
            importPath: '<%= config.app %>/js',
            httpImagesPath: '<%= config.app %>/img',
            httpGeneratedImagesPath: '<%= config.app %>/img',
            httpFontsPath: '<%= config.app %>/css/fonts',
            relativeAssets: false
        },
        server: {
            options: {
                debugInfo: true
            }
        }
    },
    concurrent: {
        server: ['compass:server']
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks("grunt-open");


  grunt.registerTask('server', function (target) {
    grunt.task.run([
      // 'clean:server',
      // 'autoprefixer',
      'jshint',
      'concurrent:server',
      'connect:livereload',
      'open:server',
      'watch'
    ]);
  });

  // Default task.
  // grunt.registerTask('default', ['concurrent:server', 'connect:livereload', 'open', 'watch']);
  grunt.registerTask('test', ['open:test', 'connect:test:keepalive',]);

};
