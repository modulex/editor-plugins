/**
 * @ignore
 * insert program code
 * @author yiminghe@gmail.com
 */

var Editor = require('editor');
require('./button');

var DialogLoader = require('./dialog-loader');

function CodePlugin() {

}

var CSS = [
  'pre.ks-editor-code {',
  'display: block;',
  'margin-right: 2em;',
  'border-left: 3px solid #CCC;',
  'padding: 0 1em;',
  '}'
].join('\n');

CodePlugin.prototype = {
  pluginRenderUI: function (editor) {
    editor.docReady(function () {
      editor.get('window').addStyleSheet(CSS);
    });

    editor.addButton('code', {
      tooltip: '插入代码',
      listeners: {
        click: function () {
          DialogLoader.useDialog(editor, 'code');
        }
      },
      mode: Editor.Mode.WYSIWYG_MODE
    });
  }
};

module.exports = CodePlugin;
