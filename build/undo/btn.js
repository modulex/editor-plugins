define("kg/editor-plugins/1.2.0/undo/btn",["../button","editor"],function(e,t,n){var o=e("../button"),d=e("editor"),i=o.extend({__lock:!0,bindUI:function(){var e=this,t=e.get("editor");e.on("click",function(){t.execCommand("undo")}),t.on("afterUndo afterRedo afterSave",function(t){var n=t.index;n>0?e.set("disabled",e.__lock=!1):e.set("disabled",e.__lock=!0)})}},{ATTRS:{mode:{value:d.Mode.WYSIWYG_MODE},disabled:{value:!0,setter:function(e){return this.__lock&&(e=!0),e}}}}),a=o.extend({__lock:!0,bindUI:function(){var e=this,t=e.get("editor");e.on("click",function(){t.execCommand("redo")}),t.on("afterUndo afterRedo afterSave",function(t){var n=t.history,o=t.index;o<n.length-1?e.set("disabled",e.__lock=!1):e.set("disabled",e.__lock=!0)})}},{ATTRS:{mode:{value:d.Mode.WYSIWYG_MODE},disabled:{value:!0,setter:function(e){return this.__lock&&(e=!0),e}}}});n.exports={RedoBtn:a,UndoBtn:i}});