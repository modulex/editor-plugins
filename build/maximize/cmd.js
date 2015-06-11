define("kg/editor-plugins/1.2.0/maximize/cmd",["editor","event-dom","util","ua","node","dom"],function(e,t,i){function o(e){this.editor=e}var r,s=e("editor"),a=e("event-dom"),n=e("util"),d=e("ua"),l=d.ie,f=document,c=e("node"),h=e("dom"),m="editor-toolbar-padding",g=function(){r||(r=c('<iframe  style="position:absolute;top:-9999px;left:-9999px;" frameborder="0">').prependTo(f.body,void 0))};n.augment(o,{restoreWindow:function(){var e=this,t=e.editor;t.fire("beforeRestoreWindow")!==!1&&e._resize&&(a.remove(window,"resize",e._resize),e._resize.stop(),e._resize=0,e._saveEditorStatus(),e._restoreState(),setTimeout(function(){e._restoreEditorStatus(),t.notifySelectionChange(),t.fire("afterRestoreWindow")},30))},_restoreState:function(){var e=this,t=e.editor,i=t.get("textarea"),o=e._savedParents;if(o){for(var s=0;s<o.length;s++){var a=o[s];a.el.css("position",a.position)}e._savedParents=null}i.parent().css({height:e.iframeHeight}),i.css({height:e.iframeHeight}),h.css(f.body,{width:"",height:"",overflow:""}),f.documentElement.style.overflow="";var n=t.get("el")[0].style;n.position="static",n.width=e.editorElWidth,r.css({left:"-99999px",top:"-99999px"}),window.scrollTo(e.scrollLeft,e.scrollTop),8>l&&t.get("toolBarEl").removeClass(t.get("prefixCls")+m,void 0)},_saveSate:function(){var e=this,t=e.editor,i=[],o=t.get("el");e.iframeHeight=t.get("textarea").parent().style("height"),e.editorElWidth=o.style("width"),e.scrollLeft=h.scrollLeft(),e.scrollTop=h.scrollTop(),window.scrollTo(0,0);for(var r=o.parent();r;){var s=r.css("position");"static"!==s&&(i.push({el:r,position:s}),r.css("position","static")),r=r.parent()}e._savedParents=i,8>l&&t.get("toolBarEl").addClass(t.get("prefixCls")+m,void 0)},_saveEditorStatus:function(){var e=this,t=e.editor;if(e.savedRanges=null,d.gecko&&t.__iframeFocus){var i=t.getSelection();e.savedRanges=i&&i.getRanges()}},_restoreEditorStatus:function(){var e=this,t=e.editor,i=t.getSelection(),o=e.savedRanges;if(d.gecko&&t.activateGecko(),o&&i&&i.selectRanges(o),t.__iframeFocus&&i){var r=i.getStartElement();r&&r.scrollIntoView(void 0,{alignWithTop:!1,allowHorizontalScroll:!0,onlyScrollIfNeeded:!0})}},_maximize:function(e){var t=this,i=t.editor,o=i.get("el"),a=h.viewportHeight(),n=h.viewportWidth(),d=i.get("textarea"),c=i.get("statusBarEl")?i.get("statusBarEl")[0].offsetHeight:0,m=i.get("toolBarEl")[0].offsetHeight;l?f.body.style.overflow="hidden":h.css(f.body,{width:0,height:0,overflow:"hidden"}),f.documentElement.style.overflow="hidden",o.css({position:"absolute",zIndex:s.baseZIndex(s.ZIndexManager.MAXIMIZE),width:n+"px"}),r.css({zIndex:s.baseZIndex(s.ZIndexManager.MAXIMIZE-5),height:a+"px",width:n+"px"}),o.offset({left:0,top:0}),r.css({left:0,top:0}),d.parent().css({height:a-c-m+"px"}),d.css({height:a-c-m+"px"}),e!==!0&&arguments.callee.call(t,!0)},_real:function(){var e=this,t=e.editor;e._resize||(e._saveEditorStatus(),e._saveSate(),e._maximize(),e._resize||(e._resize=n.buffer(function(){e._maximize(),t.fire("afterMaximizeWindow")},100)),a.on(window,"resize",e._resize),setTimeout(function(){e._restoreEditorStatus(),t.notifySelectionChange(),t.fire("afterMaximizeWindow")},30))},maximizeWindow:function(){var e=this,t=e.editor;t.fire("beforeMaximizeWindow")!==!1&&(g(),e._real())},destroy:function(){var e=this;e._resize&&(a.remove(window,"resize",e._resize),e._resize.stop(),e._resize=0)}}),i.exports={init:function(e){if(!e.hasCommand("maximizeWindow")){var t=new o(e);e.addCommand("maximizeWindow",{exec:function(){t.maximizeWindow()}}),e.addCommand("restoreWindow",{exec:function(){t.restoreWindow()}})}}}});