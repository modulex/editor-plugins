define("kg/editor-plugins/1.2.0/undo",["editor","./undo/btn","./undo/cmd","./button"],function(o,t,d){function n(){}var e=o("editor"),i=o("./undo/btn"),u=o("./undo/cmd");o("./button"),n.prototype={pluginRenderUI:function(o){o.addButton("undo",{mode:e.Mode.WYSIWYG_MODE,tooltip:"撤销",editor:o},i.UndoBtn),o.addButton("redo",{mode:e.Mode.WYSIWYG_MODE,tooltip:"重做",editor:o},i.RedoBtn),u.init(o)}},d.exports=n});