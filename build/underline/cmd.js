define("kg/editor-plugins/1.1.7/underline/cmd",["editor","../font/cmd"],function(e,n,t){var d=e("editor"),i=e("../font/cmd"),o=new d.Style({element:"u",overrides:[{element:"span",attributes:{style:"text-decoration: underline;"}}]});t.exports={init:function(e){i.addButtonCmd(e,"underline",o)}}});