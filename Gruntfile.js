'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

/*global module:false*/
module.exports = function(grunt) {

  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks

  require('load-grunt-tasks')(grunt);

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
      dist: {
        options: {
          middleware: function (connect) {
            return [
                mountFolder(connect, config.dist)
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
        // separator: ';',
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */ ',
      },
      dist: {
        src: [
          // vendors libs
          '<%= config.app %>/bower_components/jquery/jquery.js',
          // books
          '<%= config.app %>/js/app.conf.js',
          '<%= config.app %>/js/models/model-books.js',
          '<%= config.app %>/js/app.js'
        ],
        dest: '<%= config.dist %>/js/app.min.js'
      }
    },
    useminPrepare: {
      options: {
          dest: '<%= config.dist %>'
      },
      html: '<%= config.dist %>/index.html'
    },
    usemin: {
        options: {
            dirs: ['<%= config.dist %>']
        },
        html: '<%= config.dist %>/index.html'
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*',
            '<%= config.dist %>',
            '!<%= config.dist %>/.git*'
          ]
        }]
      }
    },
    jshint: {
      dev: {
        options: {
          "jshintrc": true
        },
        src: ['<%= config.app %>/js/*.js']
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= config.dist %>/js/app.min.js': ['<%= config.dist %>/js/app.min.js']
        }
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
              '*.{ico,txt,md}',
              'index.html',
              'img/{,*/}*.{webp,gif,png,jpg}'
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
        },
        dist: {
            options: {
              sassDir: '<%= config.app %>/scss',
              cssDir: '<%= config.dist %>/css',
              outputStyle: "compressed",
              noLineComments: true,
              generatedImagesDir: '<%= config.dist %>/img',
              imagesDir: '<%= config.dist %>/img',
              javascriptsDir: '<%= config.dist %>/js',
              fontsDir: '<%= config.dist %>/css/fonts',
              importPath: '<%= config.dist %>/js',
              httpImagesPath: '<%= config.dist %>/img',
              httpGeneratedImagesPath: '<%= config.dist %>/img',
              httpFontsPath: '<%= config.dist %>/css/fonts',
              relativeAssets: false
          },
        }
    },
    concurrent: {
        server: ['compass:server'],
        dist: ['compass:dist']
    }
  });



  // server task
  grunt.registerTask('server', function (target) {

      if (target === 'dist') {
          return grunt.task.run(['build', 'open:server', 'connect:dist:keepalive']);
      }

      grunt.task.run([
        'jshint',
        'concurrent:server',
        'connect:livereload',
        'open:server',
        'watch'
      ]);

  });

  // Build task.
  grunt.registerTask('build', [
    'clean:dist',
    'copy:dist',
    'concat',
    'uglify',
    'concurrent:dist',
    'usemin'
  ]);



  // grunt.registerTask('default', ['concurrent:server', 'connect:livereload', 'open', 'watch']);
  grunt.registerTask('test', ['open:test', 'connect:test:keepalive',]);

};
