var gulp = require('gulp'),
  rename = require('gulp-rename'),
  gulpKmd = require('gulp-kmd')
kmc = require('gulp-kmc'),
  minify = require('gulp-minify'),
  through2 = require('through2'),
  packageJson = require('./package.json');

var mkdirp = require('mkdirp');
var path = require('path');
var cwd = process.cwd();
var shelljs = require('shelljs');

kmc.config({
  depFilePath: './build/mods.js',
  packages: [
    {
      name: 'kg/editor-plugins/' + packageJson.version,
      combine: false,
      base: './lib'
    }
  ]
});

gulp.task('turnHtmlAsModule', function (cb) {   //先将html文件转为nodejs风格的模块代码
  gulp.src('./lib/**/*.html')
    .pipe(through2.obj(function (file, enc, callback) {
      file.contents = new Buffer("module.exports=" + JSON.stringify(file.contents.toString()));
      this.push(file);
      callback();
    }))
    .pipe(rename(function (path) {
      path.basename = path.basename.replace('.tpl', '-tpl');
      path.extname = '.js';
    }))
    .pipe(gulp.dest('./lib'));
  cb();
});

gulp.task('kmc', ['turnHtmlAsModule'], function (cb) {
  gulp.src('./lib/**/*.js')
    .pipe(gulpKmd())
    .pipe(kmc.convert({
      deps: 'mods.js',
      define: true
    }))
    .pipe(kmc.combo())
    .pipe(minify())
    .pipe(rename(function (path) {
      if (path.basename.indexOf('-min') > -1) {
        path.basename = path.basename.replace('-min', '');
      } else {
        path.basename = path.basename + '-debug';
      }
    }))
    .pipe(gulp.dest('./build'));
});

function runCmd(cmd, args, fn) {
  args = args || [];
  var runner = require('child_process').spawn(cmd, args, {
    // keep color
    stdio: "inherit"
  });
  runner.on('close', function (code) {
    if (fn) {
      fn(code);
    }
  });
}

gulp.task('buildCss', ['buildCssIframe'], function (cb) {
  var joycss = './tools/joycss/bin/joycss';
  var less = './assets/editor.less';
  var out = '../build/assets';
  runCmd('node', ['--harmony', joycss, less, '-o', out], cb);
});

gulp.task('buildCssIframe', function () {
  mkdirp.sync('build/assets');
  shelljs.exec('cp -r assets/img build/assets');
  shelljs.exec('cp -r assets/iframe.css build/assets/iframe.css');
  shelljs.exec('cp -r assets/iframe.css build/assets/iframe-debug.css');
});

gulp.task('buildApi', function (cb) {
  var process = require('child_process');
  process.exec('node ./node_modules/yuidocjs/lib/cli.js .', function () {
    cb();
  });
});

gulp.task('server', function () {
  var app = require('express')();
  var fs = require('fs');
  var path = require('path');
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  app.use(serveIndex(process.cwd(), {
    hidden: true,
    view: 'details'
  }));
  app.use('/lib/', function (req, res, next) {
    var filePath = path.resolve(process.cwd(), 'lib', req.path.substring(1));
    var code = fs.readFileSync(filePath, 'utf-8');
    res.set('content-type', 'application/javascript;charset=utf-8');
    res.end('define(function(require,exports,module){' + code + '});');
  });
  app.use(serveStatic(process.cwd()));
  app.listen(8001);
  console.log('listening at 8001');
});

gulp.task('default', ['kmc', 'buildCss', 'buildApi']);