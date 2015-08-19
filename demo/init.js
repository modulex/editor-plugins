(function () {
  window.EDITOR_BASE = '../';
  window.EDITOR_VERSION = '1.2.0';
  window.EDITOR_CFG = {
    fromTextarea: '#ks-editor-textarea'
  };
  require.config({
    packages: [
      {
        name: 'editor-plugins/' + (EDITOR_VERSION),
        path: location.href.indexOf('?build') === -1 ? '../lib' : '../build'
      }
    ]
  });
})();