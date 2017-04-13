var fs = require('fs');

var babelTemplate = require('./templates/babel.js');
var gitignoreTemplate = require('./templates/gitignore.js');
var indexHtmlTemplate = require('./templates/indexHtml.js');
var packageTemplate = require('./templates/package.js');
var webpackTemplate = require('./templates/webpack.js');

function init() {
  var path = process.argv[2] || './';

  if (path[path.length - 1] !== '/') {
    path += '/';
  }

  console.log('Generating Files at ' + path + '...');

  fs.writeFile(path + '.babelrc', babelTemplate);
  fs.writeFile(path + '.gitignore', gitignoreTemplate);
  fs.writeFile(path + 'index.html', indexHtmlTemplate);
  fs.writeFile(path + 'package.json', packageTemplate);
  fs.writeFile(path + 'webpack.config.js', webpackTemplate);

  console.log('Finished!')
}

init();
