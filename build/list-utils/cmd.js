KISSY.add('kg/editor-plugins/1.1.0/list-utils/cmd',["editor","../list-utils","ua","node","dom"],function(S ,require, exports, module) {function e(e){this.type=e}function t(e,t){var o,r,i,n=t.blockLimit,a=t.elements;if(!n)return!1;if(a)for(i=0;i<a.length&&(o=a[i])&&o[0]!==n[0];i++)if(s[r=o.nodeName()]&&r===e)return o.css("list-style-type");return!1}var o=require("editor"),r=require("../list-utils"),i="insertUnorderedList",n="insertOrderedList",s={ol:n,ul:i},a=o.RangeType,d=o.ElementPath,l=o.Walker,c=require("ua"),v=require("node"),p=require("dom"),h=/^h[1-6]$/;e.prototype={constructor:e,changeListType:function(e,t,o,i,n){for(var s=r.listToArray(t.root,o,void 0,void 0,void 0),a=[],d=0;d<t.contents.length;d++){var l=t.contents[d];l=l.closest("li",void 0),l&&l[0]&&!l.data("list_item_processed")&&(a.push(l),l._4eSetMarker(o,"list_item_processed",!0,void 0))}var c=v(t.root[0].ownerDocument.createElement(this.type));for(c.css("list-style-type",n),d=0;d<a.length;d++){var p=a[d].data("listarray_index");s[p].parent=c}var h,u=r.arrayToList(s,o,null,"p"),f=u.listNode.childNodes.length;for(d=0;f>d&&(h=v(u.listNode.childNodes[d]));d++)h.nodeName()===this.type&&i.push(h);t.root.before(u.listNode),t.root.remove()},createList:function(e,t,o,r){var i=t.contents,n=t.root[0].ownerDocument,s=[];if(1===i.length&&i[0][0]===t.root[0]){var a=v(n.createElement("div"));i[0][0].nodeType!==p.NodeType.TEXT_NODE&&i[0]._4eMoveChildren(a,void 0,void 0),i[0][0].appendChild(a[0]),i[0]=a}for(var d=t.contents[0].parent(),l=0;l<i.length;l++)d=d._4eCommonAncestor(i[l].parent(),void 0);for(l=0;l<i.length;l++)for(var u,f=i[l];u=f.parent();){if(u[0]===d[0]){s.push(f);break}f=u}if(!(s.length<1)){var _=v(s[s.length-1][0].nextSibling),m=v(n.createElement(this.type));for(m.css("list-style-type",r),o.push(m);s.length;){var y=s.shift(),N=v(n.createElement("li"));h.test(y.nodeName())?N[0].appendChild(y[0]):(y._4eCopyAttributes(N,void 0,void 0),y._4eMoveChildren(N,void 0,void 0),y.remove()),m[0].appendChild(N[0]),c.ie||N._4eAppendBogus(void 0)}_[0]?m.insertBefore(_,void 0):d.append(m)}},removeList:function(e,t,o){function i(o){!(_=v(N[o?"firstChild":"lastChild"]))||_[0].nodeType===p.NodeType.ELEMENT_NODE&&_._4eIsBlockBoundary(void 0,void 0)||!(m=t.root[o?"prev":"next"](l.whitespaces(!0),1))||_[0].nodeType===p.NodeType.ELEMENT_NODE&&m._4eIsBlockBoundary({br:1},void 0)||_[o?"before":"after"](e.get("document")[0].createElement("br"))}for(var n=r.listToArray(t.root,o,void 0,void 0,void 0),s=[],a=0;a<t.contents.length;a++){var d=t.contents[a];d=d.closest("li",void 0),d&&!d.data("list_item_processed")&&(s.push(d),d._4eSetMarker(o,"list_item_processed",!0,void 0))}var c=null;for(a=0;a<s.length;a++){var h=s[a].data("listarray_index");n[h].indent=-1,c=h}for(a=c+1;a<n.length;a++)if(n[a].indent>Math.max(n[a-1].indent,0)){for(var u=n[a-1].indent+1-n[a].indent,f=n[a].indent;n[a]&&n[a].indent>=f;)n[a].indent+=u,a++;a--}var _,m,y=r.arrayToList(n,o,null,"p"),N=y.listNode;i(!0),i(void 0),t.root.before(N),t.root.remove()},exec:function(e,r){var i=e.getSelection(),n=i&&i.getRanges();if(n&&!(n.length<1)){for(var c,v,h=i.getStartElement(),u=new o.ElementPath(h),f=t(this.type,u),_=i.createBookmarks(!0),m=[],y={};n.length>0;){var N=n.shift(),g=N.getBoundaryNodes(),E=g.startNode,T=g.endNode;E[0].nodeType===p.NodeType.ELEMENT_NODE&&"td"===E.nodeName()&&N.setStartAt(g.startNode,a.POSITION_AFTER_START),T[0].nodeType===p.NodeType.ELEMENT_NODE&&"td"===T.nodeName()&&N.setEndAt(g.endNode,a.POSITION_BEFORE_END);var k,b=N.createIterator();for(b.forceBrBreak=!1;k=b.getNextParagraph();)if(!k.data("list_block")){k._4eSetMarker(y,"list_block",1,void 0);var L,M=new d(k),A=M.elements,B=A.length,S=!1,C=M.blockLimit;for(v=B-1;v>=0&&(L=A[v]);v--)if(s[L.nodeName()]&&C.contains(L)){C.removeData("list_group_object"),c=L.data("list_group_object"),c?c.contents.push(k):(c={root:L,contents:[k]},m.push(c),L._4eSetMarker(y,"list_group_object",c,void 0)),S=!0;break}if(!S){var O=C||M.block;O.data("list_group_object")?O.data("list_group_object").contents.push(k):(c={root:O,contents:[k]},O._4eSetMarker(y,"list_group_object",c,void 0),m.push(c))}}}for(var x=[];m.length>0;)c=m.shift(),f?s[c.root.nodeName()]&&(c.root.css("list-style-type")===r?this.removeList(e,c,y):c.root.css("list-style-type",r)):s[c.root.nodeName()]?this.changeListType(e,c,y,x,r):(o.Utils.clearAllMarkers(y),this.createList(e,c,x,r));var D=this;for(v=0;v<x.length;v++){var I=x[v],j=function(e,t){var o=t[e?"prev":"next"](l.whitespaces(!0),1);o&&o[0]&&o.nodeName()===D.type&&o.css("list-style-type")===r&&(o.remove(),o._4eMoveChildren(t,e?!0:!1,void 0))};j(void 0,I),j(!0,I)}o.Utils.clearAllMarkers(y),i.selectBookmarks(_)}}},module.exports={ListCommand:e,queryActive:t};});