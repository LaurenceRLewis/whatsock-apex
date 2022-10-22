/*@license
ARIA Listbox Module 3.2 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Home: WhatSock.com  :  Download: https://github.com/whatsock/apex
License: MIT (https://opensource.org/licenses/MIT)

Required dependencies: RovingTabIndex.js
  */
"setListbox"in $A||$A.import("RovingTabIndex",{name:"ListboxModule",props:props,once:!0,call:function(e){var s=$A.isIE();$A.addWidgetProfile("Listbox",{configure:function(e){return{preload:!0,preloadImages:!0,preloadCSS:!0,className:"aria-listbox",storeData:!0}},afterRender:function(o){o.update(),$A.loop(o.RTI.nodes,function(e,t){o.getState(t,$A.getAttr(t,"aria-checked"),$A.hasAttr(t,"aria-checked"),!1,o.RTI.nodes)},"array")}}),$A.extend({setListbox:function(e,d){this._4X&&(d=e,e=this._X),$A.isPlainObject(e)&&(e=(d=e).select||d.listbox||null),d=d||{};function t(e){$A.isNative(e)?A.select=e:d.select&&$A.isNative($A.morph(d.select))?A.select=$A.morph(d.select):A.select={nodeType:!1},d.select=A.select;var t=$A.getAttr(A.select,"data-controls");t&&$A.isNode($A.morph(t))?A.listbox=$A.morph(t):$A.isNative(e)?d.listbox&&$A.morph(d.listbox)?A.listbox=$A.morph(d.listbox):A.listbox=$A.morph(i.build.parent):A.listbox=e,d.listbox=A.listbox,$A.isNode(A.select)&&!$A.isWithin(A.listbox)&&$A(A.listbox).before(A.select),A=$A.extend(A,d),d=$A.extend(d,A),o(A.listbox)}var i=$A.extend(!0,{parent:"ul",child:"button",parse:function(e){return e.querySelectorAll(i.child)},build:{parent:'<ul class="aria-listbox"></ul>',child:'<li><button class="option"><span class="lbl">{OPTION-TEXT}</span></button></li>'}},d.tag||{}),u=function(e,t,o,l,i){return o?(o=0,"true"===t?o=1:"mixed"===t?o=2:t="false",$A.data(e,"check",o),l&&$A.setAttr(e,"aria-checked",t),o):(l=$A.data(e,"check"),!!$A.isNum(l)&&l)},o=function(e){$A.isNode(e)&&(e.id||(e.id=$A.genId()),$A.svgFix(e),n=$A.toDC($A.extend({id:e.id,content:e,trigger:A.select.nodeType?A.select:null,on:{},widgetType:"Listbox",toggleHide:!0,getState:u},d)),A.update())},n=null,A={update:function(){A.optionNodes=A.select.nodeType?A.select.querySelectorAll("option"):[],A.options=[],A.select.nodeType?($A.empty(A.listbox),$A.loop(A.optionNodes,function(e,t){var o=$A.getText(t),o=i.build.child.replace("{OPTION-TEXT}",o),l=(o=$A.toNode(o,!0)).querySelector(i.child);$A.isNode(l)&&($A.bindObjects(l,t),A.options.push(l),$A.append(o,A.listbox))},"array"),$A.on(A.select,"change",function(e){var o=-1;$A.loop(A.optionNodes,function(e,t){A.toggleSelect($A.boundTo(t),!!t.selected,!1,A.multiple,!0),o<0&&t.selected&&(o=e)},"array"),n.RTI.activate(0<=o?o:0)})):A.options=i.parse(A.listbox),$A.loop(A.options,function(e,t){var o,l=u(t,$A.getAttr(t,"data-check"),A.checkable||$A.hasAttr(t,"data-check")),s=$A.hasAttr(t,"data-controls")&&$A.morph($A.getAttr(t,"data-controls"))||$A.isFn(t.querySelector)&&t.querySelector("input")||!1,l=(!1!==l&&($A.isNode(s)&&($A.hasBound(t)||$A.bindObjects(s,t),s.checked?l=1:l&&(s.checked=!0)),o="false",1===l?o="true":2===l&&(o="mixed"),$A.setAttr(t,{"aria-checked":o})),$A.hasAttr(t,"data-select")||$A.isNode($A.boundTo(t))&&$A.boundTo(t).selected);$A.setAttr(t,"aria-selected",l?"true":"false"),$A.data(t,"_Selected",l),$A.closest(t,function(e){if(e===A.listbox)return!0;$A.setAttr(e,"role","presentation")}),$A.on(t,"attributeChange",function(e,t,o,l,i,n,a){var r;"aria-checked"===o?$A.isNode(s)&&(r=u(t,l,!0),s.checked=!!r):"aria-selected"===o&&($A.data(t,"_Selected","true"===l),n&&$A.data(t,"_Selected")!==!!n.selected&&(n.selected=$A.data(t,"_Selected")))},{attributeFilter:["aria-checked","aria-selected"]})},"array"),$A.updateDisabled(A.options),A.setFlags(),A.setListbox(),A.setRoles(),A.setEvents(),A.setSelected()},setFlags:function(){var e=A.select.nodeType?A.select:d;A.multiple=!!e.multiple||!A.select.nodeType&&A.listbox&&(d.multiselect||"true"===$A.getAttr(A.listbox,"aria-multiselectable")),A.required=!!e.required,A.disabled=!!e.disabled,A.checkable=!!d.checkable,A.sortable=!!d.sortable,A.sortable&&(A.multiple=A.checkable=!1),A.checkable&&(A.multiple=!1)},setListbox:function(){A.multiple&&$A.setAttr(A.listbox,"aria-multiselectable","true"),A.required&&$A.setAttr(A.listbox,"aria-required","true"),A.disabled&&$A.setAttr(A.listbox,"aria-disabled","true");var e,t="";A.select.nodeType&&$A.isHidden(A.select)&&((e=A.select.cloneNode()).hidden=!1,t=$A.isFn(window.getAccName)&&window.getAccName(e).name),$A.setAttr(A.listbox,"aria-label",d.label||t||(A.select.nodeType&&$A.isFn(window.getAccName)?window.getAccName(A.select).name:""))},setRoles:function(){$A.remAttr(A.listbox.querySelectorAll('*[role="listbox"], *[role="option"]'),"role"),$A.setAttr(A.listbox,"role","listbox"),$A.setAttr(A.options,"role","option"),A.setGrab()},setSelected:function(){A.select.nodeType&&$A.loop(A.optionNodes,function(e,t){A.toggleSelect($A.boundTo(t),!!t.selected,!1,A.multiple,!0)},"array")},setEvents:function(){var e,t;n.RTI&&n.RTI.off(),n.disabled||(e=0,t=A.listbox.querySelector('*[role="option"][aria-selected="true"]'),$A.isNode(t)&&(e=$A.inArray(t,A.options)||0),n.RTI=new $A.RovingTabIndex($A.extend({container:A.listbox,nodes:A.options,orientation:$A.isNum(d.orientation)?d.orientation:2,autoSwitch:-1!==[].indexOf(d.autoSwitch)?d.autoSwitch:"off",autoLoop:!1,startIndex:e,DC:n,onShiftUp:function(e,t,o,l,i,n,a){A.multiple&&A.toggleSelect(t,!0),e.preventDefault()},onShiftDown:function(e,t,o,l,i,n,a){A.multiple&&A.toggleSelect(t,!0),e.preventDefault()},onCtrlShiftUp:function(e,t,o,l,i,n,a){o.onShiftUp.call(this,e,t,o,l,i,n,a),e.preventDefault()},onCtrlShiftDown:function(e,t,o,l,i,n,a){o.onShiftDown.call(this,e,t,o,l,i,n,a),e.preventDefault()},onShiftEnd:function(e,t,o,l,i,n,a){A.multiple&&(o=A.options.slice(o.index),$A.loop(o,function(e,t){A.toggleSelect(t,!0)},"array")),e.preventDefault()},onShiftHome:function(e,t,o,l,i,n,a){A.multiple&&(o=A.options.slice(0,o.index+1),$A.loop(o,function(e,t){A.toggleSelect(t,!0)},"array")),e.preventDefault()},onCtrlShiftEnd:function(e,t,o,l,i,n,a){o.onShiftEnd.call(this,e,t,o,l,i,n,a),e.preventDefault()},onCtrlShiftHome:function(e,t,o,l,i,n,a){o.onShiftHome.call(this,e,t,o,l,i,n,a),e.preventDefault()},onPageUp:function(e,t,o,l,i,n,a){var r=(r=Math.round(.1*A.options.length))||1,r=A.index-r;o.focus(r=r<0?0:r),e.preventDefault()},onPageDown:function(e,t,o,l,i,n,a){var r=(r=Math.round(.1*A.options.length))||1,r=A.index+r;r>=A.options.length&&(r=A.options.length-1),o.focus(r),e.preventDefault()},onSpace:function(e,t,o,l,i,n,a){A.sortable?A.toggleGrab(t):o.onClick.apply(t,arguments),s&&setTimeout(function(){$A.announce($A.getAttr(t,"aria-description"))},1),e.preventDefault()},onCtrlSpace:function(e,t,o,l,i,n,a){A.sortable?A.toggleGrab(t):o.onClick.apply(t,arguments),s&&setTimeout(function(){$A.announce($A.getAttr(t,"aria-description"))},1),e.preventDefault()},onCtrlShiftSpace:function(e,t,o,l,i,n,a){$A.loop(A.options,function(e,t){A.toggleSelect(t,!1)},"array"),A.checkable&&A.check(A.options,"false"),A.sortable&&(A.toggleGrab.grabbed=void 0,A.setGrab()),s&&setTimeout(function(){$A.announce($A.getAttr(t,"aria-description"))},1),e.preventDefault()},onEsc:function(e,t,o,l){A.sortable&&(A.toggleGrab.grabbed=void 0,A.setGrab()),s&&setTimeout(function(){$A.announce($A.getAttr(t,"aria-description"))},1),e.preventDefault()},onFocus:function(e,t,o,l){A.index=o.index,A.multiple||A.toggleSelect(t,!0),s&&setTimeout(function(){$A.announce($A.getAttr(t,"aria-description"))},1),e.stopPropagation()},onClick:function(e,t,o,l,i,n,a){var r=t,s=$A.isDisabled(r),c=u(r);!$A.isNum(c)&&A.multiple&&(c="true"===$A.getAttr(r,"aria-selected")),!s&&A.sortable&&A.toggleGrab(r),!s&&$A.isFn(d.onActivate)&&d.onActivate.apply(r,[e,t,o,l||$A.boundTo(r),c,function(e){$A.hasAttr(t,"aria-checked")?u(t,e,!0,!0,o.nodes):e&&$A.setAttr(t,"aria-selected","true"===e?"true":"false")}]),e.preventDefault()},onSelectAll:function(e,t,o,l,i,n,a){A.multiple&&$A.loop(A.options,function(e,t){A.toggleSelect(t,!0)},"array"),e.preventDefault()}},d.extendRTI||{})),$A(A.listbox).setAttr("tabindex","0").on("focus click",function(e){A.options.length&&($A.isTouch||n.RTI.focus(),$A.setAttr(A.listbox,"tabindex","-1"))}))},toggleClassName:"selected",selectText:"Selected",unselectText:"Not Selected",toggleSelect:function(o,e,t,l,i){l||A.multiple||$A.loop(A.listbox.querySelectorAll('*[role="option"][aria-selected="true"]'),function(e,t){t!==o&&A.toggleSelect(t,!1,!1,!0)},"array"),$A.isBool(e)||(e=!$A.data(o,"_Selected")),$A.data(o,"_Selected",e),i&&n.RTI.activate(o),$A.setAttr(o,"aria-selected",e?"true":"false"),$A.toggleClass(o,A.toggleClassName,e,function(e){})},grabText:"Grabbable",grabbedText:"Grabbed",dropText:"Droppable",setGrab:function(e){A.sortable&&($A.remAttr(A.options,["aria-grabbed","aria-dropeffect","aria-description"]),e||$A.setAttr(A.options,{"aria-grabbed":"false"}),s&&$A.setAttr(A.options,{"aria-description":A.grabText}))},toggleGrab:function(l){var e;A.sortable&&(A.setGrab(!0),A.toggleGrab.grabbed?(e=$A.inArray(l,n.RTI.nodes)||0,A.select.nodeType?$A.before($A.boundTo(A.toggleGrab.grabbed),$A.boundTo(l)):$A.before(A.toggleGrab.grabbed,l),A.update(),n.RTI.focus(A.select.nodeType?e:l),A.toggleGrab.grabbed=void 0):(A.toggleGrab.grabbed=l,$A.loop(A.options,function(e,t){var o={};t===l?(o["aria-grabbed"]="true",s&&(o["aria-description"]=A.grabbedText)):(o["aria-dropeffect"]="move",s&&(o["aria-description"]=A.dropText)),$A.setAttr(t,o)},"array")))},check:function(e,t){u(e,t,!0,!0,n.RTI.nodes)},value:function(e){var t=A.listbox.querySelectorAll('*[role="option"][aria-checked="true"]');return t&&t.length?t:A.select.nodeType?$A.isNode(e)?$A.getAttr($A.boundTo(e),"value"):A.select.value:A.listbox.querySelectorAll('*[role="option"][aria-selected="true"]')}},l=(e=$A.morph(e),d.fetch&&d.fetch.url),a=d.fetch&&d.fetch.data&&d.fetch.data.selector||$A.getSelectorFromURI(l),r=!(!a||!$A.isPath(l));return d.fetch=null,r?$A.load(l,d.root,{selector:a},function(e){t(e)}):t(e),$A._XR.call(this,n)}})}});