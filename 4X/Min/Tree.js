/*!
ARIA Tree Module 3.0 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Home: WhatSock.com  :  Download: https://github.com/whatsock/apex
License: MIT (https://opensource.org/licenses/MIT)
  */
"setTree"in $A||$A.import("RovingTabIndex",{name:"TreeModule",props:props,once:!0,call:function(e){$A.addWidgetProfile("Tree",{configure:function(e){return{toggleHide:!0,preload:!0,preloadImages:!0,preloadCSS:!0,className:"tree",escToClose:!0,click:function(e,t){e.stopPropagation()},storeData:!0}},afterRender:function(n){$A.setAttr(n.triggerNode,"aria-expanded","true"),$A.data(n.triggerNode,"expanded",!0),$A.loop(n.RTI.nodes,function(e,t){n.getState(t,$A.getAttr(t,"aria-checked"),$A.hasAttr(t,"aria-checked"),!1,n.RTI.nodes)},"array")},beforeRemove:function(e){$A.loop(e.RTI.children,function(e,t){t.DC.remove()},"map")},afterRemove:function(e){$A.setAttr(e.triggerNode,"aria-expanded","false"),$A.data(e.triggerNode,"expanded",!1)}});var a=$A.isIE();$A.extend({setTree:function(e,l){function u(e,t,n,r,o){if(n){var i=0;return"true"===t?i=1:"mixed"===t&&(i=2),$A.data(e,"check",i),r&&$A.setAttr(e,"aria-checked",t),i}var a=$A.data(e,"check");return!!$A.isNum(a)&&a}this._4X&&(l=e,e=this._X),$A.isPlainObject(e)&&(e=(l=e).content||null);var A=null,f=!0===(l=l||{}).multiselect,$=$A.extend(!0,{parent:"ul",child:"a",parse:function(e){if(a){var r=[];return $A.query(e.children,function(e,t){var n=$A.first(t,function(e){if(e.nodeName.toLowerCase()===$.child)return!0});$A.isNode(n)&&r.push(n)}),r}return e.querySelectorAll(":scope > * > "+$.child)}},l.tag||{}),p=function(e,t,n,r,o,i){var a=n||$A.isNode(e)&&($A.getAttr(e,"controls")||$A.next(e,function(e){if(e.nodeName.toLowerCase()===$.parent)return!0}));if(a=a&&$A.morph(a),$A.isNode(a)){e&&($A.setAttr(e,"aria-expanded","false"),$A.data(e,"expanded",!1),$A(e).owns(a));var c=$.parse(a);$A.setAttr(a,"role",r?"tree":"group"),$A.svgFix(a);var s=$A.toDC($A.extend({trigger:e,triggerIndex:i,content:a,isTop:r,on:"opentree",widgetType:"Tree",toggleHide:!0,getState:u},l));if(t&&s.map({parent:t.DC}),s.RTI=new $A.RovingTabIndex($A.extend({DC:s,parent:t,trigger:e,nodes:c,startIndex:0,orientation:2,autoSwitch:l.autoSwitch||"semi",autoLoop:!1,isTree:!0,onClick:function(e,t,n,r){var o=this,i=$A.isDisabled(o),a=u(t);!$A.isNum(a)&&f&&(a="true"===$A.getAttr(t,"aria-selected")),!i&&$A.isDC(r)?r.toggle():!i&&$A.isFn(l.onActivate)&&l.onActivate.apply(o,[e,t,n,r||$A.boundTo(o),a,function(e){u(t,e,!0,!0,n.nodes)}]),e.preventDefault()},onSpace:function(e,t,n,r){n.onClick.apply(this,arguments),e.preventDefault()},onEnter:function(e,t,n,r){n.onClick.apply(this,arguments),e.preventDefault()},onFocus:function(e,n,t,r){$A.query('*[tabindex="0"]',A,function(e,t){t!==n&&$A.setAttr(t,"tabindex",-1)}),$A.isTouch||f||($A.query('*[aria-selected="true"]',A,function(e,t){t!==n&&$A.setAttr(t,"aria-selected","false")}),$A.setAttr(n,"aria-selected","true")),e.stopPropagation()},onRight:function(e,t,n,r,o,i,a){!$A.isDisabled(this)&&$A.isDC(r)&&(r.loaded?r.RTI.nodes.length&&r.RTI.focus(0):r.render()),e.preventDefault()},onUp:function(e,t,n,r,o,i,a){var c=function(e,t){var n=e.children.get(t)||{};return $A.isDC(n.DC)&&n.DC.loaded&&n.nodes.length&&n.children.has(n.nodes[n.nodes.length-1])&&n.children.get(n.nodes[n.nodes.length-1]).DC.loaded?c(n,n.nodes[n.nodes.length-1]):$A.isDC(n.DC)&&n.DC.loaded&&n.nodes.length?n:null},d=c(n,n.nodes[n.index-1]);return d&&d.nodes.length?(d.focus(d.nodes.length-1),!1):i&&n.parent?(n.parent.focus(n.trigger),!1):void 0},onLeft:function(e,t,n,r,o,i,a){$A.isDC(r)&&r.loaded?r.remove():n.parent&&n.parent.focus(n.trigger),e.preventDefault()},onCtrlLeft:function(e,t,n,r,o,i,a){n.parent?(n.DC.remove(),n.parent.focus(n.parent.index)):$A.loop(n.children,function(e,t){$A.isDC(t.DC)&&t.DC.remove()},"map"),e.preventDefault()},onCtrlRight:function(e,t,n,r,o,i,a){var c=function(e){$A.loop(e.children,function(e,t){$A.isDC(t.DC)&&t.DC.render(function(){c(t)})},"map")};c(n),e.preventDefault()},onDown:function(e,t,n,r,o,i,a){if($A.isDC(r)&&r.loaded)return r.RTI.focus(0),!1;if(a){var c=n,d=function(e){return e.parent?e.DC.triggerIndex+1<=e.parent.nodes.length-1?(c=e.parent,e.DC.triggerIndex+1):d(e.parent):(c=null,-1)},s=d(n);return c&&-1!==s&&c.focus(s),!1}},onEsc:function(e,t,n,r){n.parent?(n.DC.remove(),n.parent.focus(n.parent.index)):$A.loop(n.children,function(e,t){$A.isDC(t.DC)&&t.DC.remove()},"map"),e.preventDefault()},onHome:function(e,t,n,r,o,i,a){return n.top.focus(0),!1},onEnd:function(e,t,n,r,o,i,a){var c=function(e,t){var n=e.children.get(t)||{};return $A.isDC(n.DC)&&n.DC.loaded&&n.nodes.length&&n.children.has(n.nodes[n.nodes.length-1])&&n.children.get(n.nodes[n.nodes.length-1]).DC.loaded?c(n,n.nodes[n.nodes.length-1]):$A.isDC(n.DC)&&n.DC.loaded&&n.nodes.length?n:e},d=c(n.top,n.top.nodes[n.top.nodes.length-1]);return d&&d.nodes.length&&d.focus(d.nodes.length-1),!1}},l.extendRTI||{})),$A.loop(c,function(e,t){p(t,s.RTI,null,!1,o+1,e);var n=u(t,$A.getAttr(t,"check"),$A.hasAttr(t,"check")),d=$A.isFn(t.querySelector)&&t.querySelector("input")||!1;if($A.isNode(d)&&($A.bindObjects(d,t),d.checked&&(n=1)),$A.setAttr(t,{role:"treeitem","aria-level":o}),$A.isNum(n)){var r="false";1===n?r="true":2===n&&(r="mixed"),$A.setAttr(t,{"aria-checked":r}),$A(t).on("attributeChange",function(e,t,n,r,o,i,a){if($A.isNode(d)){var c=u(t,r,!0);d.checked=!!c}},{attributeFilter:["aria-checked"]})}$A.closest(t,function(e){if(e===a)return!0;$A.setAttr(e,"role","presentation")})},"array"),$A.updateDisabled(c),r)if(f||"true"!==$A.getAttr(a,"aria-multiselectable"))if(f)$A.setAttr(a,"aria-multiselectable","true");else{var d=$A.inArray(a.querySelector('*[aria-selected="true"]'),c);0<=d&&s.RTI.activate(d)}else f=!0;return $A.remAttr(c,["check","controls"]),s}},n=null;function t(e,t){n=p(null,null,e,!0,1,t),$A(A).setAttr("tabindex","0").on("focus click",function(e){n.RTI.nodes.length&&(n.RTI.focus(),$A.setAttr(A,"tabindex","-1"))})}e=$A.morph(e),A=e;var r=l.fetch&&l.fetch.url,o=l.fetch&&l.fetch.data&&l.fetch.data.selector||$A.getSelectorFromURI(r),i=!(!o||!$A.isPath(r));return l.fetch=null,i?$A.load(r,l.root,{selector:o},function(e){t(A=e)}):t(A),$A._XR.call(this,n)}})}});