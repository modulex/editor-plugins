KISSY.add('kg/editor-plugins/1.1.0/strike-through',["./font/ui","./strike-through/cmd","./button"],function(S ,require, exports, module) {function t(){}var o=require("./font/ui"),r=require("./strike-through/cmd");require("./button"),t.prototype={pluginRenderUI:function(t){r.init(t),t.addButton("strikeThrough",{cmdType:"strikeThrough",tooltip:"删除线"},o.Button)}},module.exports=t;});