/**
 * @ignore
 * pagebreak functionality
 * @author yiminghe@gmail.com
 */

var Editor = require('editor');
var fakeObjects = require('./fake-objects');
require('./button');
var $ = require('node'),
  CLS = 'ke_page_break',
  TYPE = 'div',
  PAGE_BREAK_MARKUP = '<div' +
    ' style="page-break-after: always; ">' +
    '<span style="DISPLAY:none">&nbsp;</span>' +
    '</div>';

function PageBreak() {
}

var CSS = [
  'img.ke_page_break {',
  'background: url("' + window.EDITOR_BASE + 'assets/img/pagebreak_iframe.gif") center center no-repeat;',
  'border-bottom: 1px dotted #999999;',
  'border-top: 1px dotted #999999;',
  'clear: both;',
  'display: block;',
  'float: none;',
  'height: 5px !important;',
  'page-break-after: always;',
  'width: 100% !important;',
  '}'
].join('\n');

PageBreak.prototype = {
  pluginRenderUI: function (editor) {
    fakeObjects.init(editor);

    editor.docReady(function () {
      editor.get('window').addStyleSheet(CSS);
    });

    var dataProcessor = editor.htmlDataProcessor,
      dataFilter = dataProcessor && dataProcessor.dataFilter;

    dataFilter.addRules({
      tags: {
        div: function (element) {
          var style = element.getAttribute('style'),
            child;

          if (style) {
            var childNodes = element.childNodes;
            for (var i = 0; i < childNodes.length; i++) {
              if (childNodes[i].nodeType === 1) {
                child = childNodes[i];
              }
            }
          }

          var childStyle = child &&
            ( child.nodeName === 'span' ) &&
            child.getAttribute('style');

          if (childStyle &&
            ( /page-break-after\s*:\s*always/i ).test(style) &&
            ( /display\s*:\s*none/i ).test(childStyle)) {
            return dataProcessor.createFakeParserElement(element, CLS, TYPE);
          }
          return undefined;
        }
      }
    });

    editor.addButton('pageBreak', {
      tooltip: '分页',
      listeners: {
        click: function () {
          var real = $(PAGE_BREAK_MARKUP, editor.get('document')[0]),
          //不可缩放，也不用
            substitute = editor.createFakeElement(real, CLS, TYPE, false, PAGE_BREAK_MARKUP);

          editor.focus();

          var sel = editor.getSelection(),
            range = sel && sel.getRanges()[0];

          if (!range) {
            return;
          }

          editor.execCommand('save');

          var start = range.startContainer,
            pre = start;

          while (start.nodeName() !== 'body') {
            pre = start;
            start = start.parent();
          }

          range.collapse(true);

          range.splitElement(pre);

          substitute.insertAfter(pre);

          editor.execCommand('save');
        }

      },
      mode: Editor.Mode.WYSIWYG_MODE
    });
  }
};

module.exports = PageBreak;