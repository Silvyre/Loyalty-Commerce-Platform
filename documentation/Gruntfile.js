'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};
var cheerio = require('cheerio');
var async = require('async');

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // configurable paths
  var pointsConfig = {
    app: 'app',
    static: 'app/static',
    dist: 'dist'
  };

  grunt.initConfig({
    points: pointsConfig,
    watch: {
      coffee: {
        files: ['<%= points.static %>/scripts/{,*/}*.coffee'],
        tasks: ['coffee:dev']
      },
      styles: {
        files: ['<%= points.static %>/styles/**/*.less'],
        tasks: ['less:dev']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= points.app %>/**/*.html',
          '<%= points.static %>/documents/{,*/}*.md',
          '<%= points.static %>/styles/{,*/}*.css',
          '<%= points.static %>/scripts/{,*/}*.js',
          '<%= points.static %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, pointsConfig.app)
            ];
          }
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= connect.options.port %>'
      }
    },
    less: {
      dev: {
        options: {
          paths: ['<%= points.static %>/styles']
        },
        files: [{
            expand: true,
            cwd: '<%= points.static %>/styles',
            src: ['app.less'],
            dest: '<%= points.static %>/styles',
            ext: '.css'
        }]
      },
      dist: {
        options: {
          paths: ['<%= points.static %>/styles'],
          yuicompress: true
        },
        files: {
          '<%= points.dist %>/static/styles/app.css': '<%= points.static %>/styles/app.less'
        }
      }
    },
    coffee: {
      dev: {
        options: {
          sourceMap: true,
          sourceRoot: ''
        },
        files: [{
          expand: true,
          cwd: '<%= points.static %>/scripts',
          src: ['{,*/}*.coffee'],
          dest: '<%= points.static %>/scripts',
          ext: '.js'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= points.static %>/scripts',
          src: ['{,*/}*.coffee'],
          dest: '<%= points.static %>/scripts',
          ext: '.js'
        }]
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= points.dist %>/static/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= points.dist %>/static/images'
        }]
      }
    },
    concurrent: {
      server: [
        'coffee:dev',
        'less:dev'
      ]
    },
    copy: {
      images: {
        files: [{
          expand: true,
          cwd: '<%= points.static %>/',
          src: ['images/**'],
          dest: '<%= points.dist %>/static/'
        }]
      },
      html: {
        files: [{
          expand: true,
          cwd: '<%= points.app %>/',
          src: ['*.html'],
          dest: '<%= points.dist %>/'
        }]
      }
    },
    clean: {
      dist: [
      ]
    },
    requirejs: {
      dist: {
        options: {
          // Use almond.js
          // appDir: '<%= points.static %>/scripts/',
          // dir: '<%= points.dist %>/static/scripts/',

          almond: true,
          baseUrl: '<%= points.static %>/scripts/',
          mainConfigFile: '<%= points.static %>/scripts/main.js',

          replaceRequireScript: [{
            files: ['<%= points.dist %>/*.html'],
            module: 'main',
            modulePath: 'static/scripts/app'
          }],
          pragmasOnSave : {
            excludeMdown : true
          },

          shim: {
            'bootstrap.scrollspy': {
              deps: ['jquery']
            },
            'jquery.fixto': {
              deps: ['jquery']
            },
            'Handlebars': {
              exports: 'Handlebars'
            }
          },

          optimize: 'uglify2',

          fileExclusionRegExp: /^(node_modules|.svn)/,
          findNestedDependencies: true,
          include: ['main'],
          stubModules : ['json', 'text'],

          out: '<%= points.dist %>/static/scripts/app.js'
        }
      }
    },
    markdown: {
      all: {
        files: [{
          cwd: '<%= points.static %>/documents',
          src: ['*.md'],
          expand: true,
          dest: '<%= points.static %>/tmp',
          ext: '.html'
        }],
        options: {
          template: 'utils/templates/markdown.html',
          postCompile: function(src, context) {
            var $ = cheerio.load(src);

            function processHtml(stage) {
              var next, newHtml, current, id;

              return function(i, obj) {
                id = $(obj).text().replace(/[\. ,#():-]+/g, '-').toLowerCase();
                next = $(obj).next();
                newHtml = $(obj);
                current = obj;

                async.whilst(
                  function() {
                    if (stage === 'create-sections') {
                      return !next.is('h2') && next.length > 0
                    } else if (stage === 'create-subsections') {
                      return !next.is('h3') && next.length > 0
                    } else {
                      return !next.is('h3') && !next.is('h2') && next.length > 0
                    }
                  },
                  function(callback) {
                      newHtml += '\n'+next;
                      next = next.next();
                      next.prev().remove();
                      callback();
                  },
                  function() {
                    var update;

                    if (stage === 'create-sections') {
                      update = '<section id="section-'+id+'" class="documents">\n'+newHtml+'\n</section>';
                    } else {
                      update = '<article id="'+id+'" class="document">\n'+newHtml+'\n</article>'
                    }

                    $(current).replaceWith(update)
                  }
                );
              }
            }
            async.series([
              function (callback) {
                $('h2').each(processHtml('create-sections'));
                $('h2').each(processHtml('create-h2-subsections'));
                $('h3').each(processHtml('create-subsections'));

                callback();
              },
              function (callback) {
                $('section').each(function(i, obj) {
                  $(obj).children().last().remove();
                });
                $('section').last().next().remove();
                callback();
              }
            ]);

            return $.html()
          }
        }
      }
    }
  });

  grunt.registerTask('generate-markdown-list', function() {
    var files = []
      , paths =[]
      , data = {}
      , template = grunt.file.read('utils/templates/generate-markdown-files.html')
      , writeTo = 'app/static/scripts/modules/load-markdown-documents.coffee';

    grunt.file.recurse('app/static/documents/', function(abspath, rootdir, subdir, filename) {
      abspath = abspath.replace('app/static', 'mdown!../..')
      filename = filename.replace(/\-/g, '_').replace('.md','').replace('.html', '');

      if (filename !== '.DS_Store') {
        files.push(filename);
        paths.push(abspath);
      }
    });

    data = { files: files, paths: paths };

    grunt.file.write(writeTo, grunt.template.process(template, {data: data}));
  });

  grunt.registerTask('build-html', [
    'markdown:all'
  ]);

  grunt.registerTask('server', function (target) {
    grunt.task.run([
      'concurrent:server',
      'connect:livereload',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'generate-markdown-list',
    'copy:html',
    'coffee:dist',
    'less:dist',
    'requirejs:dist',
    'copy:images',
    'imagemin'
  ]);

  grunt.registerTask('default', [
    'server'
  ]);
};
