/*@license
ARIA Grid Module 2.0 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Home: WhatSock.com  :  Download: https://github.com/whatsock/apex
License: MIT (https://opensource.org/licenses/MIT)
*/
!function(){var r="grid"+$A.genId(),b=1,A=("Grid"in $A||$A.extend({Grid:function(a){function t(e){return e&&"object"==typeof e&&"number"==typeof e.length&&"function"==typeof e.splice&&!e.propertyIsEnumerable("length")}var w=this,a="string"==typeof a?$A.get(a):a,u={gridClass:"data-grid",gridReadOnlyClass:"data-grid-readonly",cellReadOnlyClass:"data-grid-cell-readonly",gridEditableClass:"data-grid-editable",gridSelectableClass:"data-grid-selectable",gridRowClass:"data-grid-row",gridCellClass:"data-grid-cell",gridCellToggleClass:"data-grid-cell-toggle",gridCellTogglePressedClass:"data-grid-cell-toggle-pressed",gridCellLinkClass:"data-grid-cell-link",gridRowFocusedClass:"data-grid-row-focused",gridCellFocusedClass:"data-grid-cell-focused",editFieldClass:"data-grid-cell-link-edit",edit:!1,colHeaders:{map:[]},rowHeaders:{enabled:!1,id:null},page:{row:{max:0,collectionMap:[],collection:{},toggleButtonRole:"Toggle Button",toggleButtonState:"Pressed",disabledText:"Disabled",editLinkAction:"Editable",build:function(e){var l=r+"tr"+ ++b;for(id in e.rowNodeId=l,e.rowNode=$A.create("tr",{role:"row",id:l},null,u.gridRowClass),e.cells){var o=r+"td"+ ++b;e.cells[id].id=id,e.cells[id].cellNodeId=o,e.cells[id].data={},e.cells[id].cellNode=$A.create("td",{id:o},null,u.gridCellClass),u.page.row.bindCell(e.cells[id],e.cells[id].cellNode,e,e.rowNode),e.cells[id].cellNodeA=$A.create("strong",{id:o+"a"},null,"toggle"==e.cells[id].type?u.gridCellToggleClass:u.gridCellLinkClass),e.cells[id].cellNodeS1=$A.create("span"),e.cells[id].cellNodeS2=$A.create("span",null,$A.sraCSS),e.cells[id].cellNodeS3=$A.create("span",null,$A.sraCSS),e.cells[id].cellNode.appendChild(e.cells[id].cellNodeA),e.cells[id].cellNodeA.appendChild(e.cells[id].cellNodeS1),e.cells[id].cellNodeA.appendChild(e.cells[id].cellNodeS2),e.cells[id].cellNodeA.appendChild(e.cells[id].cellNodeS3),e.cells[id].rowObject=e,$A.data(e.cells[id].cellNode,"celldata",{rowId:e.id,rowNodeId:e.rowNodeId,cellId:id,cellNodeId:e.cells[id].cellNodeId})}$A.data(e.rowNode,"rowdata",{rowId:e.id,rowNodeId:e.rowNodeId})},trackPos:{row:0,col:0},resetPos:function(e){var l=$A.data(e,"celldata");u.page.row.trackPos.row=$A.inArray(l.rowId,u.page.rendered)||0;for(var o=0;o<u.colHeaders.map.length;o++)if(l.cellId==u.colHeaders.map[o].id){u.page.row.trackPos.col=o;break}return l},dblClickTitle:"Click to activate",editFieldTitle:"Press Enter to save, or Escape to cancel.",cellOffset:function(e){return $A.offset(e.cellNodeA)},bindCell:function(r,d,c,e){function n(){var e;d=r.cellNode,c=r.rowObject,r.rowObject.rowNode,u.edit&&!r.readonly?"toggle"==r.type?u.page.row.changed(d,r,!r.value):(u.page.row.editFieldActive&&f(),u.page.row.editFieldActive=r,$A.on(u.page.row.editField,{"keydown.gridcontrol":function(e){var l=e.which||e.keyCode;13!=l&&27!=l&&9!=l||(e.preventDefault(),e.stopPropagation(),13==l&&u.page.row.changed(d,u.page.row.editFieldActive,this.value),f(!0))},"blur.gridcontrol":function(e){e.preventDefault()}}),u.page.row.editField.value=r.value,$A.setAttr(u.page.row.editField,{title:u.page.row.editFieldTitle}),$A.loop(document.body.children,function(e,l){$A.setAttr(l,"aria-hidden","true")},"array"),document.body.appendChild(u.page.row.editFieldDiv),$A.css(u.page.row.editFieldDiv,u.page.row.cellOffset(r)),u.page.row.editField.focus(),u.page.row.editLoad&&"function"==typeof u.page.row.editLoad&&u.page.row.editLoad.apply(u.page.row.editField,[u.page.row.editField,r])):u.page.row.selectEnabled&&(e=c.selected,u.page.row.multiSelect||u.page.row.unselectAll(),e&&!u.page.row.multiSelect||u.page.row.select(r),u.page.row.ariaSelect||$A.announce(r.cellNode))}var i={ctrl:!1,alt:!1};$A.on(d,{"click.gridcontrol":function(e){(e.srcElement||e.target)==this&&this==u.page.row.focusedCell||u.page.row.move(u.page.row.resetPos(this)),("ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)&&(r=s(this),n()),e.preventDefault()},"dblclick.gridcontrol":function(e){l&&(this!=u.page.row.focusedCell&&u.page.row.move(u.page.row.resetPos(this)),"ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints||(r=s(this),n()),e.stopPropagation(),e.preventDefault())},"mouseup.gridcontrol":function(e){l||(!e.which&&e.button&&1&e.button&&(e.which=1),1===e.which&&(this!=u.page.row.focusedCell&&u.page.row.move(u.page.row.resetPos(this)),"ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints||(r=s(this),n()),e.stopPropagation(),e.preventDefault()))},"keydown.gridcontrol":function(e){var l=e.which||e.keyCode;if(i.ctrl=e.ctrlKey,i.alt=e.altKey,33<=l&&l<=40||13==l||32==l||46==l||65==l){if(r=s(this),13==l||32==l)if(32==l&&i.ctrl){for(var o="",a=0;a<u.colHeaders.map.length;a++){var t=u.colHeaders.map[a];o+=$A.getText(r.rowObject.cells[t.id].cellNode)+", "}$A.announce(o)}else n();else 33<=l&&l<=40?function(e){if(d=r.cellNode,c=r.rowObject,r.rowObject.rowNode,33==e)i.alt?u.page.first(r,c):u.page.prev(r,c);else if(34==e)i.alt?u.page.last(r,c):u.page.next(r,c);else if(35<=e&&e<=40){var l=!1,o=u.page.rendered.length-1,a=u.colHeaders.map.length-1;if(35==e&&i.ctrl&&u.page.current<u.page.total)u.page.last(r,c,!0);else{if(35==e&&i.ctrl&&u.page.current==u.page.total)u.page.row.trackPos.row=o,l=!0;else if(35==e&&u.page.row.trackPos.col<a)u.page.row.trackPos.col=a,l=!0;else{if(36==e&&i.ctrl&&1<u.page.current)return u.page.first(r,c);if(36==e&&i.ctrl&&1==u.page.current)l=!(u.page.row.trackPos.row=0);else if(36==e&&0<u.page.row.trackPos.col)l=!(u.page.row.trackPos.col=0);else if(37==e&&0<u.page.row.trackPos.col)--u.page.row.trackPos.col,l=!0;else if(38==e&&0<u.page.row.trackPos.row&&i.alt)l=!(u.page.row.trackPos.row=0);else if(38==e&&0<u.page.row.trackPos.row)--u.page.row.trackPos.row,l=!0;else{if(38==e&&0==u.page.row.trackPos.row)return u.page.prev(r,c,!0);if(39==e&&u.page.row.trackPos.col<a)u.page.row.trackPos.col+=1,l=!0;else if(40==e&&u.page.row.trackPos.row<o&&i.alt)u.page.row.trackPos.row=o,l=!0;else if(40==e&&u.page.row.trackPos.row<o)u.page.row.trackPos.row+=1,l=!0;else if(40==e&&u.page.row.trackPos.row>=o)return u.page.next(r,c)}}l&&u.page.row.move({rowId:u.page.rendered[u.page.row.trackPos.row],cellId:u.colHeaders.map[u.page.row.trackPos.col].id})}}}(l):46==l&&u.page.row.deleteRow.enabled?(u.page.row.deleteRow.callback(),u.page.row.move()):65==l&&i.ctrl&&u.page.row.selectEnabled&&(u.page.row.selectAll(),$A.announce(u.page.row.selectState));e.stopPropagation(),e.preventDefault()}},"keyup.gridcontrol":function(e){i.ctrl=!1,i.alt=!1},"focus.gridcontrol":function(e){r=s(this),$A.addClass(this,u.gridCellFocusedClass),$A.addClass(r.rowObject.rowNode,u.gridRowFocusedClass),this!=u.page.row.focusedCell&&u.page.row.move(u.page.row.resetPos(this),!0)},"blur.gridcontrol":function(e){$A.query("tr."+u.gridRowFocusedClass+", td."+u.gridCellFocusedClass,u.dc.container,function(e,l){$A.remClass(l,u.gridRowFocusedClass+" "+u.gridCellFocusedClass)})}})},clean:function(e,l){for(var o in $A.remAttr(e.rowNode,["title","aria-selected","aria-rowindex"]),$A.remClass(e.rowNode,u.gridRowFocusedClass+" "+u.page.row.selectClass),l||$A.removeData(e.rowNode,"rowdata"),e.cells)$A.remAttr(e.cells[o].cellNode,["aria-activedescendant","aria-labelledby","aria-describedby","tabindex","aria-colindex","aria-selected","aria-readonly"]),$A.remClass(e.cells[o].cellNode,u.cellReadOnlyClass+" "+u.gridCellFocusedClass+" "+(e.cells[o].toggleClass||u.gridCellTogglePressedClass)),$A.remAttr(e.cells[o].cellNodeA,["title","role","aria-pressed","aria-disabled"]),e.cells[o].cellNodeS1.innerHTML="",e.cells[o].cellNodeS2.innerHTML="",e.cells[o].cellNodeS3.innerHTML="",l||$A.removeData(e.cells[o].cellNode,"celldata")},changed:function(e,l,o){e=!u.page.row.changed.cb||"function"!=typeof u.page.row.changed.cb||u.page.row.changed.cb.apply(e,[l,o,l.rowObject,w]);(e="boolean"!=typeof e?!0:e)&&u.page.row.update(l.rowObject.id,l.id,o)},selectEnabled:!1,selectState:"Selected",selectClass:"selected",multiSelect:!1,preserveSelect:!1,ariaSelect:!0,selected:[],select:function(e,l){var l=l||!e.rowObject.selected,o=!u.page.row.select.cb||"function"!=typeof u.page.row.select.cb||u.page.row.select.cb.apply(e.rowObject.rowNode,[e.rowObject,l,u.page.row.selected,w]);if(o="boolean"!=typeof o?!0:o){e.rowObject.selected=l;for(var a=!1,t=u.page.row.selected.length-1;0<=t;t--)u.page.row.selected[t]!==e.rowObject.id||e.rowObject.selected?u.page.row.selected[t]===e.rowObject.id&&e.rowObject.selected&&(a=!0):u.page.row.selected.splice(t,1);if(!a&&e.rowObject.selected&&u.page.row.selected.push(e.rowObject.id),-1!==$A.inArray(e.rowObject.id,u.page.rendered)){o="";e.rowObject.selected?($A.addClass(e.rowObject.rowNode,u.page.row.selectClass),o=u.page.row.selectState?u.page.row.selectState+". ":""):$A.remClass(e.rowObject.rowNode,u.page.row.selectClass),o+=u.page.row.dblClickTitle,$A.setAttr(e.rowObject.rowNode,"title",o),u.page.row.ariaSelect&&$A.setAttr(e.rowObject.rowNode,"aria-selected",e.rowObject.selected?"true":"false");for(t=0;t<u.colHeaders.map.length;t++)u.page.row.ariaSelect?$A.setAttr(e.rowObject.cells[u.colHeaders.map[t].id].cellNode,"aria-selected",e.rowObject.selected?"true":"false"):e.rowObject.cells[u.colHeaders.map[t].id].cellNodeS3.innerHTML=e.rowObject.selected?"<span>&nbsp;"+A(u.page.row.selectState)+"</span>":""}}},unselectAll:function(){for(var e=u.page.row.selected.length-1;0<=e;e--){var l=u.page.row.selected[e];u.page.row.select(u.page.row.collection[l].cells[u.colHeaders.map[0].id],!1),u.page.row.selected.splice(e,1)}},selectAll:function(){if(u.page.row.selectEnabled&&u.page.row.multiSelect){u.page.row.preserveSelect||u.page.row.unselectAll();for(var e=0;e<u.page.rendered.length;e++)u.page.row.select(u.page.row.collection[u.page.rendered[e]].cells[u.colHeaders.map[0].id],!0)}},deleteRow:{enabled:!1,callback:function(e){var l=!u.page.row.deleteRow.callback.runBefore||"function"!=typeof u.page.row.deleteRow.callback.runBefore||u.page.row.deleteRow.callback.runBefore.apply(w,[e&&e.length?e:u.page.row.selected]);if(!(l="boolean"!=typeof l?!0:l))return!1;var o=[];if(e&&e.length){u.page.row.unselectAll();for(var a=0;a<e.length;a++)u.page.row.collection[e[a]]&&u.page.row.collection[e[a]].cells&&u.page.row.selected.push(e[a])}for(l=u.page.row.selected.length,a=u.page.row.selected.length-1;0<=a;a--){var t=u.page.row.collection[u.page.row.selected[a]],r=$A.inArray(t.id,u.page.row.collectionMap);if(-1!==r){var d=!u.page.row.deleteRow.callback.cb||"function"!=typeof u.page.row.deleteRow.callback.cb||u.page.row.deleteRow.callback.cb.apply(t.rowNode,[t,w]);if(d="boolean"!=typeof d?!0:d){for(var c in o.push(t.id),u.page.row.clean(t),t.cells)$A.remove(t.cells[c].cellNode);$A.remove(t.rowNode);d=$A.inArray(t.id,u.page.rendered);-1!==d&&u.page.rendered.splice(d,1),u.page.row.selected.splice(a,1),u.page.row.collectionMap.splice(r,1),delete u.page.row.collection[t.id]}}}return l!=u.page.row.selected.length&&(u.page.row.trackPos.row=0,u.page.sync(),u.page.open(u.page.current),u.page.row.deleteRow.callback.runAfter&&"function"==typeof u.page.row.deleteRow.callback.runAfter&&u.page.row.deleteRow.callback.runAfter.apply(w,[o]),!0)}},update:function(e,l,o,a){var t,r;u.page.row.collection[e]&&u.page.row.collection[e].cells[l]&&(r=(t=u.page.row.collection[e].cells[l]).type,u.page.row.collection[e].cells[l].value="toggle"==r?!!o:o,-1!==$A.inArray(e,u.page.rendered)&&("toggle"==r?(A(u.page.row.toggleButtonRole),o?($A.setAttr(t.cellNodeA,{"aria-describedby":$A.getAttr(t.cellNode,"aria-describedby"),role:"button","aria-pressed":"true"}),$A.addClass(t.cellNodeA,t.toggleClass||u.gridCellTogglePressedClass),A(u.page.row.toggleButtonState)):($A.setAttr(t.cellNodeA,{"aria-describedby":$A.getAttr(t.cellNode,"aria-describedby"),role:"button","aria-pressed":"false"}),$A.remClass(t.cellNodeA,t.toggleClass||u.gridCellTogglePressedClass)),!t.readonly&&!u.page.row.selectEnabled&&u.edit||$A.setAttr(t.cellNodeA,"aria-disabled","true")):t.cellNodeS1.innerHTML="<span>"+A(o)+"</span>",a||$A.announce(t.cellNodeA)))},focusedCell:null,move:function(e,l){var o;!e&&u.page.row.focusedCell?setTimeout(function(){u.page.row.focusedCell.focus()},1):(o=u.page.row.focusedCell,e=u.page.row.collection[e.rowId].cells[e.cellId].cellNode,o&&o!=e&&$A.setAttr(o,"tabindex","-1"),u.page.row.focusedCell=e,u.page.row.resetPos(e),$A.setAttr(e,"tabindex","0"),l||e.focus(),u.page.row.move.cb&&"function"==typeof u.page.row.move.cb&&u.page.row.move.cb.apply(e,[e,o,u.dc,w]))}},pageRole:"Page",current:1,total:1,sync:function(e){var l,o=u.page.current,a=u.page.total,t=(!u.page.row.max||!u.page.row.collectionMap.length||(r=u.page.row.max,(l=u.page.row.collectionMap.length)<=r)?u.page.current=u.page.total=1:(l=Math.ceil(l/r),u.page.total=l,u.page.current>l&&(u.page.current=l)),[]);if(e){var r=((e=e>u.page.row.total?u.page.row.total:e)-1)*u.page.row.max,d=r+u.page.row.max;u.page.current=e,u.page.row.max||(d=u.page.row.collectionMap.length);for(var c=r;c<d;c++){var n=u.page.row.collectionMap[c];isNaN(n)&&!n||(u.page.row.collection[n].rowIndex=c+1,t.push(n))}}if(o==u.page.current&&a==u.page.total||u.page.indexChanged&&"function"==typeof u.page.indexChanged&&u.page.indexChanged.apply(w,[u.page.current,u.page.total,w]),e)return t},on:{open:null,close:null,change:null,add:null,rem:null},open:function(e,l){u.page.row.editFieldActive&&f(!0,!0),(isNaN(e)||e<1)&&(e=1),l&&u.dc.loaded&&u.page.close();l=u.dc.loaded;l||u.dc.render(),u.page.render(u.page.sync(e)),!l&&u.page.on.open&&"function"==typeof u.page.on.open&&u.page.on.open.apply(a,[a,u.dc,w])},close:function(){u.page.row.editFieldActive&&f(!0,!0),u.page.on.close&&"function"==typeof u.page.on.close&&u.page.on.close.apply(a,[a,u.dc,w]),u.page.row.unselectAll(),u.page.removeRendered(),u.dc.remove()},rendered:[],removeRendered:function(){u.page.row.preserveSelect||u.page.row.unselectAll();for(var e=0;e<u.page.rendered.length;e++){var l,o=u.page.rendered[e],a=u.page.row.collection[o];for(l in u.page.row.clean(a,!0),u.page.on.rem&&"function"==typeof u.page.on.rem&&u.page.on.rem.apply(a.rowNode,[a,u.dc,w]),a.cells)a.cells[l].cellNode.parentNode&&a.cells[l].cellNode.parentNode.removeChild(a.cells[l].cellNode);a.rowNode.parentNode.removeChild(a.rowNode)}u.page.rendered=[]},render:function(e){if(u.page.row.editFieldActive&&f(!0,!0),u.page.row.selectEnabled&&u.edit&&(u.edit=!1),u.dc.loaded){u.page.rendered.length&&u.page.removeRendered(),u.page.rendered=e;for(var l={},o=[],a=0;a<e.length;a++){b++;for(var t=u.page.row.collection[e[a]].rowNode,r=1,d=u.page.row.collection[e[a]].selected,c=d?u.page.row.selectState+". ":"",n=($A.addClass(t,u.gridRowClass),o.push(u.page.row.collection[e[a]].rowNodeId),u.page.row.selectEnabled&&($A.setAttr(t,{title:c+u.page.row.dblClickTitle}),u.page.row.ariaSelect&&$A.setAttr(t,{"aria-selected":d?"true":"false"}),d&&$A.addClass(t,u.page.row.selectClass)),$A.setAttr(t,"aria-rowindex",u.page.row.collection[e[a]].rowIndex),[]),i=0;i<u.colHeaders.map.length;i++){b++;var s,g=u.colHeaders.map[i],p=u.page.row.collection[e[a]].cells[g.id];$A.addClass(p.cellNode,u.gridCellClass),n.push(p.cellNodeId),g.colClass&&$A.addClass(p.cellNode,g.colClass),$A.setAttr(p.cellNode,{role:"gridcell","aria-colindex":r,"aria-labelledby":p.cellNodeId+"a","aria-describedby":u.rowHeaders.enabled&&u.rowHeaders.id&&u.rowHeaders.id!=p.id&&p.rowObject.cells[u.rowHeaders.id]?p.rowObject.cells[u.rowHeaders.id].cellNodeId+" "+g.thId:g.thId,tabindex:"-1"}),("toggle"==p.type||u.edit&&!p.readonly)&&$A.setAttr(p.cellNode,{"aria-activedescendant":p.cellNodeId+"a"}),u.rowHeaders.enabled&&u.rowHeaders.id&&u.rowHeaders.id==p.id&&$A.setAttr(p.cellNode,{role:"rowheader",scope:"row"}),u.page.row.selectEnabled?("toggle"==p.type&&(u.page.row.toggleButtonRole||u.page.row.toggleButtonState)&&(c=p.value?u.page.row.toggleButtonRole+" "+u.page.row.toggleButtonState:u.page.row.toggleButtonRole,$A.setAttr(p.cellNodeA,"title",c)),u.page.row.ariaSelect?$A.setAttr(p.cellNode,"aria-selected",d?"true":"false"):d&&(p.cellNodeS3.innerHTML=d?"<span>&nbsp;"+A(u.page.row.selectState)+"</span>":"")):u.edit&&!p.readonly?(c="","toggle"==p.type&&(u.page.row.toggleButtonRole||u.page.row.toggleButtonState)?(c=p.value?u.page.row.toggleButtonRole+" "+u.page.row.toggleButtonState:u.page.row.toggleButtonRole,c+=". "):u.page.row.editLinkAction&&(c=u.page.row.editLinkAction+". "),$A.setAttr(p.cellNodeA,"title",c+u.page.row.dblClickTitle)):"toggle"==p.type&&(u.page.row.toggleButtonRole||u.page.row.toggleButtonState)&&(c=p.value?u.page.row.toggleButtonRole+" "+u.page.row.toggleButtonState:u.page.row.toggleButtonRole,$A.setAttr(p.cellNodeA,"title",c)),a===u.page.row.trackPos.row&&i===u.page.row.trackPos.col&&(l={rowId:e[a],cellId:g.id}),(p.readonly||u.page.row.selectEnabled)&&($A.setAttr(p.cellNode,"aria-readonly","true"),$A.addClass(p.cellNode,u.cellReadOnlyClass)),"toggle"==p.type?(p.cellNodeS1.innerHTML="<span>"+A(p.name)+"</span>",s="&nbsp;"+A(u.page.row.toggleButtonRole),p.value?($A.setAttr(p.cellNodeA,{"aria-describedby":$A.getAttr(p.cellNode,"aria-describedby"),role:"button","aria-pressed":"true"}),$A.addClass(p.cellNodeA,p.toggleClass||u.gridCellTogglePressedClass),s+="&nbsp;"+A(u.page.row.toggleButtonState)):($A.setAttr(p.cellNodeA,{"aria-describedby":$A.getAttr(p.cellNode,"aria-describedby"),role:"button","aria-pressed":"false"}),$A.remClass(p.cellNodeA,p.toggleClass||u.gridCellTogglePressedClass)),!p.readonly&&!u.page.row.selectEnabled&&u.edit||$A.setAttr(p.cellNodeA,"aria-disabled","true")):(p.cellNodeS1.innerHTML="<span>"+A(p.value)+"</span>",u.edit&&!p.readonly?($A.setAttr(p.cellNodeA,{"aria-describedby":$A.getAttr(p.cellNode,"aria-describedby"),role:"button"}),s="&nbsp;"+A(u.page.row.editLinkAction),p.cellNodeS2.innerHTML="<span>"+s+"</span>"):$A.setAttr(p.cellNodeA,"role","presentation")),t.appendChild(p.cellNode),r+=1}u.dc.tbody.appendChild(t),u.page.on.add&&"function"==typeof u.page.on.add&&u.page.on.add.apply(t,[u.page.row.collection[e[a]],u.dc,w])}"rowId"in l&&"cellId"in l&&u.page.row.move(l,!0)}},prev:function(e,l,o){1<u.page.current&&(u.page.render(u.page.sync(u.page.current-1)),u.page.row.move({rowId:u.page.rendered[o?u.page.rendered.length-1:0],cellId:e.id}),$A.announce(u.page.pageRole+" "+u.page.current),u.page.on.change&&"function"==typeof u.page.on.change&&u.page.on.change.apply(a,[u.page.current,u.page.total,w]))},next:function(e,l){u.page.current<u.page.total&&(u.page.render(u.page.sync(u.page.current+1)),u.page.row.move({rowId:u.page.rendered[0],cellId:e.id}),$A.announce(u.page.pageRole+" "+u.page.current),u.page.on.change&&"function"==typeof u.page.on.change&&u.page.on.change.apply(a,[u.page.current,u.page.total,w]))},first:function(e,l){1<u.page.current&&(u.page.render(u.page.sync(1)),u.page.row.move({rowId:u.page.rendered[0],cellId:e.id}),$A.announce(u.page.pageRole+" "+u.page.current),u.page.on.change&&"function"==typeof u.page.on.change&&u.page.on.change.apply(a,[u.page.current,u.page.total,w]))},last:function(e,l,o){u.page.current<u.page.total&&(u.page.render(u.page.sync(u.page.total)),u.page.row.move({rowId:o?u.page.rendered[u.page.rendered.length-1]:u.page.rendered[0],cellId:e.id}),$A.announce(u.page.pageRole+" "+u.page.current),u.page.on.change&&"function"==typeof u.page.on.change&&u.page.on.change.apply(a,[u.page.current,u.page.total,w]))}}},e=r+"u"+ ++b,s=function(e){e=$A.data(e||u.page.row.focusedCell,"celldata");return u.page.row.collection[e.rowId].cells[e.cellId]},f=(u.page.row.editMaxLength=255,u.page.row.editFieldDiv=$A.create("div",{role:"application"},null,u.editFieldClass),u.page.row.editField=$A.create("input",{type:"text",maxlength:u.page.row.editMaxLength},null,u.editFieldClass),u.page.row.editFieldDiv.appendChild(u.page.row.editField),$A.on(window,"resize."+e,function(){u.page.row.editFieldActive&&$A.css(u.page.row.editFieldDiv,u.page.row.cellOffset(u.page.row.editFieldActive))}),function(e,l){u.page.row.editField.value="",$A.off(u.page.row.editField,".gridcontrol"),$A.remove(u.page.row.editFieldDiv),e&&(u.page.row.editFieldActive=null,$A.loop(document.body.children,function(e,l){$A.setAttr(l,"aria-hidden","false"),$A.remAttr(l,"aria-hidden")},"array"),l||u.page.row.move())}),l=(u.dc=$A.toDC({id:e,role:"Grid",exposeBounds:!1,contentOnly:!1,root:a,afterRender:function(e){b++,e.tableId=r+"t"+b,e.theadId=r+"tth"+b,e.trId=r+"tthtr"+b,e.tbodyId=r+"ttb"+b,e.table=$A.create("table",{role:"grid",id:e.tableId},null,u.gridClass),u.edit?$A.addClass(e.table,u.gridEditableClass):u.page.row.selectEnabled?($A.addClass(e.table,u.gridSelectableClass),u.page.row.multiSelect&&$A.setAttr(e.table,"aria-multiselectable","true")):u.edit||u.page.row.selectEnabled||($A.addClass(e.table,u.gridReadOnlyClass),$A.setAttr(e.table,"aria-readonly","true")),e.thead=$A.create("thead",{role:"rowgroup",id:e.theadId}),e.tbody=$A.create("tbody",{role:"rowgroup",id:e.tbodyId}),e.tr=$A.create("tr",{role:"row",id:e.trId},null,u.gridRowClass),e.table.appendChild(e.thead),e.table.appendChild(e.tbody),e.thead.appendChild(e.tr);for(var l=[],o=0;o<u.colHeaders.map.length;o++){b++;var a=u.colHeaders.map[o],t=$A.create("th",{role:"columnheader",id:r+"th"+b,scope:"col","aria-labelledby":r+"th"+b+"s",tabindex:"-1"},null,u.gridCellClass);u.colHeaders.map[o].thId=r+"th"+b,l.push(r+"th"+b),a.colClass&&$A.addClass(t,a.colClass),$A.on(t,"click",function(e){u.page.row.move()}),t.innerHTML='<strong id="'+r+"th"+b+'s"><span>'+A(a.name)+"</span></strong>",e.tr.appendChild(t)}e.container.appendChild(e.table)},beforeRemove:function(e){e.table&&$A.remove(e.table),e.table=e.thead=e.tbody=e.tr=null}}),w.id=e,w.getDC=function(){return u.dc},w.container=a,w.mapColumnNames=function(e){if(e&&("object"==typeof e||e.length)){u.colHeaders.map=[];for(var l=0;l<e.length;l++)u.colHeaders.map.push({id:e[l].id,name:e[l].lbl,colClass:e[l].colClass||""})}},w.changeColumnOrder=function(e,l){isNaN(e)||isNaN(l)||!u.colHeaders.map[e]||l>=u.colHeaders.map.length||((e=u.colHeaders.map.splice(e,1)).splice(0,0,l,0),[].splice.apply(u.colHeaders.map,e))},w.enableRowHeaders=function(e,l){u.rowHeaders={enabled:!!e,id:l}},w.setRowMax=function(e){u.page.row.max=isNaN(e)?0:e},w.editable=function(e){u.edit=!!e},w.add=function(e){t(e)||(e=[e]),$A.loop(e,function(e,l){var o;l&&(!isNaN(l.id)||l.id)&&l.cells&&(l.id in u.page.row.collection&&(-1!==(o=$A.inArray(l.id,u.page.row.selected))&&u.page.row.selected.splice(o,1),u.page.row.clean(u.page.row.collection[l.id]),$A.remove(u.page.row.collection[l.id].rowNode),-1!==(o=$A.inArray(l.id,u.page.row.collectionMap))&&u.page.row.collectionMap.splice(o,1),delete u.page.row.collection[l.id]),u.page.row.build(l),u.page.row.collectionMap.push(l.id),u.page.row.collection[l.id]=l,u.page.sync())},"array")},w.setChangeListener=function(e){"function"==typeof e&&(u.page.row.changed.cb=e)},w.setPageChangeListener=function(e){"function"==typeof e&&(u.page.on.change=e)},w.setEditMaxLength=function(e){isNaN(e)&&(e=0),u.page.row.editMaxLength=e},w.setEditLoadListener=function(e){"function"==typeof e&&(u.page.row.editLoad=e)},w.setPageIndexChangeListener=function(e){"function"==typeof e&&(u.page.indexChanged=e)},w.setSelect=function(e,l){e&&"object"==typeof e&&("enable"in e&&(u.page.row.selectEnabled=!!e.enable),"toggleClass"in e&&(u.page.row.selectClass=e.toggleClass||"selected"),"multiSelect"in e&&(u.page.row.multiSelect=!!e.multiSelect),"ariaSelect"in e&&(u.page.row.ariaSelect=!!e.ariaSelect),"preserve"in e&&(u.page.row.preserveSelect=!!e.preserve),"callback"in e&&(u.page.row.select.cb="function"==typeof e.callback?e.callback:null))},w.unselectAll=function(){u.page.row.unselectAll()},w.selectAll=function(){u.page.row.selectAll()},w.getSelected=function(){for(var e=[],l=0;l<u.page.row.selected.length;l++)e.push(u.page.row.collection[u.page.row.selected[l]]);return e},w.select=function(e){t(e)||(e=[e]);for(var l=0;l<e.length;l++){var o=e[l],o=u.page.row.collection[o];o&&o.cells&&o.cells[u.colHeaders.map[0].id]&&u.page.row.select(o.cells[u.colHeaders.map[0].id],!0)}},w.setDelete=function(e){e&&"object"==typeof e&&("enable"in e&&(u.page.row.deleteRow.enabled=!!e.enable),"callback"in e&&(u.page.row.deleteRow.callback.cb="function"==typeof e.callback?e.callback:null),"runBefore"in e&&(u.page.row.deleteRow.callback.runBefore="function"==typeof e.runBefore?e.runBefore:null),"runAfter"in e&&(u.page.row.deleteRow.callback.runAfter="function"==typeof e.runAfter?e.runAfter:null))},w.deleteRows=function(e){return!!u.page.row.deleteRow.enabled&&(e&&e.length?u.page.row.deleteRow.callback(e):u.page.row.deleteRow.callback())},w.deleteAllRows=function(){return!!u.page.row.deleteRow.enabled&&u.page.row.deleteRow.callback(u.page.row.collectionMap)},w.setAccessibleText=function(e){e&&"object"==typeof e&&("toggleButtonRole"in e&&(u.page.row.toggleButtonRole=e.toggleButtonRole),"toggleButtonState"in e&&(u.page.row.toggleButtonState=e.toggleButtonState),"disabledText"in e&&(u.page.row.disabledText=e.disabledText),"editLinkAction"in e&&(u.page.row.editLinkAction=e.editLinkAction),"pageRole"in e&&(u.page.pageRole=e.pageRole),"editFieldTitle"in e&&(u.page.row.editFieldTitle=e.editFieldTitle),"dblClickTitle"in e&&(u.page.row.dblClickTitle=e.dblClickTitle),"selectState"in e&&(u.page.row.selectState=e.selectState))},w.setStaticClasses=function(e){e&&"object"==typeof e&&("gridClass"in e&&(u.gridClass=e.gridClass),"gridReadOnlyClass"in e&&(u.gridReadOnlyClass=e.gridReadOnlyClass),"cellReadOnlyClass"in e&&(u.cellReadOnlyClass=e.cellReadOnlyClass),"gridEditableClass"in e&&(u.gridEditableClass=e.gridEditableClass),"gridSelectableClass"in e&&(u.gridSelectableClass=e.gridSelectableClass),"gridRowClass"in e&&(u.gridRowClass=e.gridRowClass),"gridCellClass"in e&&(u.gridCellClass=e.gridCellClass),"gridCellToggleClass"in e&&(u.gridCellToggleClass=e.gridCellToggleClass),"gridCellTogglePressedClass"in e&&(u.gridCellTogglePressedClass=e.gridCellTogglePressedClass),"gridCellLinkClass"in e&&(u.gridCellLinkClass=e.gridCellLinkClass),"gridRowFocusedClass"in e&&(u.gridRowFocusedClass=e.gridRowFocusedClass),"gridCellFocusedClass"in e&&(u.gridCellFocusedClass=e.gridCellFocusedClass),"editFieldClass"in e&&(u.editFieldClass=e.editFieldClass))},w.currentPage=function(){return u.page.current},w.totalPages=function(){return u.page.total},w.totalRows=function(){return u.page.row.collectionMap.length},w.openPage=function(e,l){isNaN(e)||e<1||u.page.open(e,l)},w.prevPage=function(){var e;u.dc.loaded&&(e=s(),u.page.prev(e,e.rowObject))},w.nextPage=function(){var e;u.dc.loaded&&(e=s(),u.page.next(e,e.rowObject))},w.firstPage=function(){var e;u.dc.loaded&&(e=s(),u.page.first(e,e.rowObject))},w.lastPage=function(){var e;u.dc.loaded&&(e=s(),u.page.last(e,e.rowObject))},w.setOpenListener=function(e){e&&"function"==typeof e&&(u.page.on.open=e)},w.setCloseListener=function(e){e&&"function"==typeof e&&(u.page.on.close=e)},w.setAddListener=function(e){e&&"function"==typeof e&&(u.page.on.add=e)},w.setRemoveListener=function(e){e&&"function"==typeof e&&(u.page.on.rem=e)},w.setMoveListener=function(e){e&&"function"==typeof e&&(u.page.row.move.cb=e)},w.getData=function(e,l,o){return e&&l&&o&&e in u.page.row.collection&&l in u.page.row.collection[e].cells?u.page.row.collection[e].cells[l].data[o]:null},w.setData=function(e,l,o,a){e&&l&&o&&e in u.page.row.collection&&l in u.page.row.collection[e].cells&&(u.page.row.collection[e].cells[l].data[o]=a)},w.getValue=function(e,l){return e&&l&&e in u.page.row.collection&&l in u.page.row.collection[e].cells?u.page.row.collection[e].cells[l].value:null},w.setValue=function(e,l,o){u.page.row.update(e,l,o,!0)},w.setEditOffset=function(e){e&&"function"==typeof e&&(u.page.row.cellOffset=e)},w.open=function(e){u.page.open(e,!0)},w.close=function(){u.page.close()},!(w.focus=function(){u.page.row.move()}));return w.useDblClick=function(e){l=!!e},w}}),function(e,l){for(var o="",a=(o="number"==typeof e?e.toString():e).length,t=[];a--;){var r=o[a].charCodeAt();"\n"!=o[a]&&(r<65||127<r||90<r&&r<97)?t[a]="&#"+r+";":t[a]=o[a]}return t.join("")})}();