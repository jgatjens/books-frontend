  'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

/*global module:false*/
module.exports = function(grunt) {

  var config = {
    app: '.'
  }

  // Project configuration.
  grunt.initConfig({
    config: config,
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    watch: {
        compass: {
            files: ['scss/{,*/}*.{scss,sass}'],
            tasks: ['compass:server']
        },
        less: {
            files: ['less/{,*/}*.less'],
            tasks: ['less:dev']
        },
        livereload: {
            options: {
                livereload: LIVERELOAD_PORT
            },
            files: [
                '<%= config.app %>/*.html',
                'css/{,*/}*.css',
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
      }
    },
    open: {
      server: {
          path: 'http://localhost:<%= connect.options.port %>'
      }
    },
    compass: {
        options: {
            sassDir: 'scss',
            cssDir: 'css',
            generatedImagesDir: 'img',
            imagesDir: 'img',
            javascriptsDir: 'js',
            fontsDir: 'css/fonts',
            importPath: 'js',
            httpImagesPath: '/img',
            httpGeneratedImagesPath: '/img',
            httpFontsPath: '/css/fonts',
            relativeAssets: false,
            noLineComments: false
        },
        server: {
            options: {
              debugInfo: false
            }
        }
    },
    less: {
      dev: {
        options: {
          paths: ["img"]
        },
        files: {
          "css/style.css": "less/style.less"
        }
      },
      prod: {
        options: {
          paths: ["img"],
          cleancss: true
        },
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },
    concurrent: {
        compass: ['compass:server'],
        less: ['less:dev']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks("grunt-open");


  // grunt server --css=less
  // this will compile less instead of default compass.
  var preprocessor = grunt.option('css') || 'compass';

  grunt.registerTask('server', function (target) {

    grunt.task.run([
        // 'clean:server',
        // 'autoprefixer',
        'concurrent:' + preprocessor,
        'connect:livereload',
        'open',
        'watch'
    ]);
  });

};
