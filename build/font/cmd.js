define("kg/editor-plugins/1.2.0/font/cmd",["editor"],function(e,t,n){function a(e,t){var n=e.nodeName();if(t.element!==n)return!1;var a,r=t.styles;for(var o in r)if(a=e.style(o))return a;for(var m=t.overrides,i=0;i<m.length;i++){var d=m[i];if(d.element===n){var c=d.attributes;for(var l in c)if(a=e.attr(l))return a}}return!1}function r(e,t){var n,r,o,m=e.elements;for(r=0;r<m.length;r++)if(n=m[r],!(e.block&&n[0]===e.block[0]||e.blockLimit&&n[0]===e.blockLimit[0])&&(o=a(n,t),o!==!1))return o;return o}var o=e("editor"),m=o.Utils.getQueryCmd;n.exports={addButtonCmd:function(e,t,n){var a=m(t);e.hasCommand(t)||(e.addCommand(t,{exec:function(e){var a=e.get("document")[0];e.execCommand("save");var r=e.queryCommandValue(t);r?n.remove(a):n.apply(a),e.execCommand("save"),e.notifySelectionChange()}}),e.addCommand(a,{exec:function(e){var t=e.getSelection();if(t&&!t.isInvalid){var a=t.getStartElement(),r=new o.ElementPath(a);return n.checkActive(r)}}}))},addSelectCmd:function(e,t,n){var a=m(t);e.hasCommand(t)||(e.addCommand(t,{exec:function(e,a){e.focus();var r=e.queryCommandValue(t)||"",m=new o.Style(n,{value:a}),i=e.get("document")[0];e.execCommand("save"),a.toLowerCase()===r.toLowerCase()?m.remove(i):m.apply(i),e.execCommand("save")}}),e.addCommand(a,{exec:function(e){var t=e.getSelection();if(t&&!t.isInvalid){var a=t.getStartElement(),m=new o.ElementPath(a);return r(m,n)}}}))}}});