KISSY.add('kg/editor-plugins/1.1.0/flash',["editor","./flash-common/base-class","./flash-common/utils","./fake-objects","./button"],function(S ,require, exports, module) {function e(e){this.config=e||{}}var t=require("editor"),r=require("./flash-common/base-class"),n=require("./flash-common/utils"),a=require("./fake-objects");require("./button");var l="ke_flash",o="flash";e.prototype={pluginRenderUI:function(e){a.init(e);var s=e.htmlDataProcessor,i=s.dataFilter;i.addRules({tags:{object:function(e){var t,r=e.getAttribute("classid");if(!r){var a=e.childNodes;for(t=0;t<a.length;t++)if("embed"===a[t].nodeName)return n.isFlashEmbed(a[t][t])?null:s.createFakeParserElement(e,l,o,!0);return null}return s.createFakeParserElement(e,l,o,!0)},embed:function(e){return n.isFlashEmbed(e)?s.createFakeParserElement(e,l,o,!0):null}}},5);var u=new r({editor:e,cls:l,type:o,pluginConfig:this.config,bubbleId:"flash",contextMenuId:"flash",contextMenuHandlers:{"Flash属性":function(){var e=this.get("editorSelectedEl");e&&u.show(e)}}});this.flashControl=u,e.addButton("flash",{tooltip:"插入Flash",listeners:{click:function(){u.show()}},mode:t.Mode.WYSIWYG_MODE})}},module.exports=e;});