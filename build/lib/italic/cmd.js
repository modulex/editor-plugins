KISSY.add('kg/editor-plugins/lib/1.0.0/italic/cmd',["editor","../font/cmd"],function(S ,require, exports, module) {var e=require("editor"),t=require("../font/cmd"),i=new e.Style({element:"em",overrides:[{element:"i"},{element:"span",attributes:{style:"font-style: italic;"}}]});module.exports={init:function(e){t.addButtonCmd(e,"italic",i)}};});