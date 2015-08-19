(function () {
  window.EDITOR_BASE = window.EDITOR_BASE || '../';
  window.EDITOR_PATH = window.EDITOR_PATH || (location.href.indexOf('?build') === -1 ? '../lib' : '../build');
  window.EDITOR_VERSION = '1.2.2';
  window.EDITOR_CFG = {
    fromTextarea: '#ks-editor-textarea'
  };
  require.config({
    packages: [
      {
        name: 'editor-plugins/' + (EDITOR_VERSION),
        path: window.EDITOR_PATH
      }
    ]
  });
})();