define("kg/editor-plugins/1.1.3/color/cmd",["editor"],function(e,o,n){function r(e,o,n){var r=e.get("document")[0];e.execCommand("save"),o?new t.Style(n,{color:o}).apply(r):new t.Style(n,{color:"inherit"}).remove(r),e.execCommand("save")}var t=e("editor");n.exports={applyColor:r}});