define("kg/editor-plugins/1.2.0/strike-through/cmd",["editor","../font/cmd"],function(e,t,n){var i=e("editor"),o=e("../font/cmd"),r=new i.Style({element:"del",overrides:[{element:"span",attributes:{style:"text-decoration: line-through;"}},{element:"s"},{element:"strike"}]});n.exports={init:function(e){o.addButtonCmd(e,"strikeThrough",r)}}});