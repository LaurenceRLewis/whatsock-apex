/*@license
ARIA Tree Module 3.0 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Home: WhatSock.com  :  Download: https://github.com/whatsock/apex
License: MIT (https://opensource.org/licenses/MIT)

Required dependencies: RovingTabIndex.js
  */
!function(){var i;"setTree"in $A||($A.addWidgetProfile("Tree",{configure:function(e){return{toggleHide:!0,preload:!0,preloadImages:!0,preloadCSS:!0,className:"tree",escToClose:!0,click:function(e,t){e.stopPropagation()},storeData:!0}},afterRender:function(n){$A.setAttr(n.triggerNode,"aria-expanded","true"),$A.data(n.triggerNode,"expanded",!0),$A.loop(n.RTI.nodes,function(e,t){n.getState(t,$A.getAttr(t,"aria-checked"),$A.hasAttr(t,"aria-checked"),!1,n.RTI.nodes)},"array")},beforeRemove:function(e){$A.loop(e.RTI.children,function(e,t){t.DC.remove()},"map")},afterRemove:function(e){$A.setAttr(e.triggerNode,"aria-expanded","false"),$A.data(e.triggerNode,"expanded",!1)}}),i=$A.isIE(),$A.extend({setTree:function(e,d){this._4X&&(d=e,e=this._X),$A.isPlainObject(e)&&(e=(d=e).content||null);function t(e,t){n=f(null,null,e,!0,1,t),$A(s).setAttr("tabindex","0").on("focus click",function(e){n.RTI.nodes.length&&(n.RTI.focus(),$A.setAttr(s,"tabindex","-1"))})}var s=null,l=!0===(d=d||{}).multiselect,u=$A.extend(!0,{parent:"ul",child:"a",parse:function(e){var n;return i?(n=[],$A.query(e.children,function(e,t){t=$A.first(t,function(e){if(e.nodeName.toLowerCase()===u.child)return!0});$A.isNode(t)&&n.push(t)}),n):e.querySelectorAll(":scope > * > "+u.child)}},d.tag||{}),A=function(e,t,n,r,o){return n?(n=0,"true"===t?n=1:"mixed"===t&&(n=2),$A.data(e,"check",n),r&&$A.setAttr(e,"aria-checked",t),n):(r=$A.data(e,"check"),!!$A.isNum(r)&&r)},f=function(e,t,n,r,o,i){var a,c=(c=n||$A.isNode(e)&&($A.getAttr(e,"data-controls")||$A.next(e,function(e){if(e.nodeName.toLowerCase()===u.parent)return!0})))&&$A.morph(c);if($A.isNode(c))return e&&($A.setAttr(e,"aria-expanded","false"),$A.data(e,"expanded",!1),$A(e).owns(c)),n=u.parse(c),$A.setAttr(c,"role",r?"tree":"group"),$A.svgFix(c),a=$A.toDC($A.extend({trigger:e,triggerIndex:i,content:c,isTop:r,on:"opentree",widgetType:"Tree",toggleHide:!0,getState:A},d)),t&&a.map({parent:t.DC}),a.RTI=new $A.RovingTabIndex($A.extend({DC:a,parent:t,trigger:e,nodes:n,startIndex:0,orientation:2,autoSwitch:d.autoSwitch||"semi",autoLoop:!1,isTree:!0,onClick:function(e,t,n,r){var o=this,i=$A.isDisabled(o),a=A(t);!$A.isNum(a)&&l&&(a="true"===$A.getAttr(t,"aria-selected")),!i&&$A.isDC(r)?r.toggle():!i&&$A.isFn(d.onActivate)&&d.onActivate.apply(o,[e,t,n,r||$A.boundTo(o),a,function(e){A(t,e,!0,!0,n.nodes)}]),e.preventDefault()},onSpace:function(e,t,n,r){n.onClick.apply(this,arguments),e.preventDefault()},onEnter:function(e,t,n,r){n.onClick.apply(this,arguments),e.preventDefault()},onFocus:function(e,n,t,r){$A.query('*[tabindex="0"]',s,function(e,t){t!==n&&$A.setAttr(t,"tabindex",-1)}),$A.isTouch||l||($A.query('*[aria-selected="true"]',s,function(e,t){t!==n&&$A.setAttr(t,"aria-selected","false")}),$A.setAttr(n,"aria-selected","true")),e.stopPropagation()},onRight:function(e,t,n,r,o,i,a){!$A.isDisabled(this)&&$A.isDC(r)&&(r.loaded?r.RTI.nodes.length&&r.RTI.focus(0):r.render()),e.preventDefault()},onUp:function(e,t,n,r,o,i,a){var d=function(e,t){e=e.children.get(t)||{};return $A.isDC(e.DC)&&e.DC.loaded&&e.nodes.length&&e.children.has(e.nodes[e.nodes.length-1])&&e.children.get(e.nodes[e.nodes.length-1]).DC.loaded?d(e,e.nodes[e.nodes.length-1]):$A.isDC(e.DC)&&e.DC.loaded&&e.nodes.length?e:null},c=d(n,n.nodes[n.index-1]);return c&&c.nodes.length?(c.focus(c.nodes.length-1),!1):i&&n.parent?(n.parent.focus(n.trigger),!1):void 0},onLeft:function(e,t,n,r,o,i,a){$A.isDC(r)&&r.loaded?r.remove():n.parent&&n.parent.focus(n.trigger),e.preventDefault()},onCtrlLeft:function(e,t,n,r,o,i,a){n.parent?(n.DC.remove(),n.parent.focus(n.parent.index)):$A.loop(n.children,function(e,t){$A.isDC(t.DC)&&t.DC.remove()},"map"),e.preventDefault()},onCtrlRight:function(e,t,n,r,o,i,a){var d=function(e){$A.loop(e.children,function(e,t){$A.isDC(t.DC)&&t.DC.render(function(){d(t)})},"map")};d(n),e.preventDefault()},onDown:function(e,t,n,r,o,i,a){var d,c;return $A.isDC(r)&&r.loaded?(r.RTI.focus(0),!1):a?(r=(c=function(e){return e.parent?e.DC.triggerIndex+1<=e.parent.nodes.length-1?(d=e.parent,e.DC.triggerIndex+1):c(e.parent):(d=null,-1)})(d=n),d&&-1!==r&&d.focus(r),!1):void 0},onEsc:function(e,t,n,r){n.parent?(n.DC.remove(),n.parent.focus(n.parent.index)):$A.loop(n.children,function(e,t){$A.isDC(t.DC)&&t.DC.remove()},"map"),e.preventDefault()},onHome:function(e,t,n,r,o,i,a){return n.top.focus(0),!1},onEnd:function(e,t,n,r,o,i,a){var d=function(e,t){t=e.children.get(t)||{};return $A.isDC(t.DC)&&t.DC.loaded&&t.nodes.length&&t.children.has(t.nodes[t.nodes.length-1])&&t.children.get(t.nodes[t.nodes.length-1]).DC.loaded?d(t,t.nodes[t.nodes.length-1]):$A.isDC(t.DC)&&t.DC.loaded&&t.nodes.length?t:e},n=d(n.top,n.top.nodes[n.top.nodes.length-1]);return n&&n.nodes.length&&n.focus(n.nodes.length-1),!1}},d.extendRTI||{})),$A.loop(n,function(e,t){f(t,a.RTI,null,!1,o+1,e);var n,e=A(t,$A.getAttr(t,"data-check"),$A.hasAttr(t,"data-check")),d=$A.isFn(t.querySelector)&&t.querySelector("input")||!1;$A.isNode(d)&&($A.bindObjects(d,t),d.checked&&(e=1)),$A.setAttr(t,{role:"treeitem","aria-level":o}),$A.isNum(e)&&(n="false",1===e?n="true":2===e&&(n="mixed"),$A.setAttr(t,{"aria-checked":n}),$A(t).on("attributeChange",function(e,t,n,r,o,i,a){$A.isNode(d)&&(t=A(t,r,!0),d.checked=!!t)},{attributeFilter:["aria-checked"]})),$A.closest(t,function(e){if(e===c)return!0;$A.setAttr(e,"role","presentation")})},"array"),$A.updateDisabled(n),r&&(l||"true"!==$A.getAttr(c,"aria-multiselectable")?l?$A.setAttr(c,"aria-multiselectable","true"):0<=(i=$A.inArray(c.querySelector('*[aria-selected="true"]'),n))&&a.RTI.activate(i):l=!0),a},n=null,e=(e=$A.morph(e),s=e,d.fetch&&d.fetch.url),r=d.fetch&&d.fetch.data&&d.fetch.data.selector||$A.getSelectorFromURI(e),o=!(!r||!$A.isPath(e));return d.fetch=null,o?$A.load(e,d.root,{selector:r},function(e){t(s=e)}):t(s),$A._XR.call(this,n)}}))}();