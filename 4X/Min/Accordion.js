/*@license
ARIA Accordion Module 3.1 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Home: WhatSock.com  :  Download: https://github.com/whatsock/apex
License: MIT (https://opensource.org/licenses/MIT)

Required dependencies: RovingTabIndex.js
*/
"setAccordion"in $A||$A.import("RovingTabIndex",{name:"AccordionModule",props:props,once:!0,call:function(e){$A.addWidgetProfile("Accordion",{configure:function(e){return{exposeBounds:!0,exposeHiddenClose:!1,ariaControls:!0,ariaLabelledby:!0,isToggle:!1,allowMultiple:!1,escToClose:!1,returnFocus:!1,click:function(e,t){e.stopPropagation()},onCreate:function(e){$A.setAttr(e.trigger,"aria-expanded","false")},afterRender:function(e,t){e.trackPage&&$A.setPage(e.id)}}},role:function(e){return{role:"region"}},duringRender:function(e,t){$A.setAttr(e.triggerNode,"aria-expanded","true"),e.isToggle||$A.setAttr(e.triggerNode,"aria-disabled","true")},beforeRemove:function(e,t){$A.setAttr(e.triggerNode,"aria-expanded","false"),e.isToggle||$A.setAttr(e.triggerNode,"aria-disabled","false")}}),$A.extend({setAccordion:function(e,o){var t,r,i,a;return this._4X&&(o=e,e=this._X),(e=$A.isPlainObject(e)?(o=e).trigger||o.content||null:e)?(t=null,$A.isArray(e)?t=e:$A.isStr(e)&&(t=(o.context||document).querySelectorAll(e)),r=[],i=[],a=0,$A.loop(t,function(e,t){$A.isNative(t)||-1!==["button","link"].indexOf($A.getAttr(t,"role").toLowerCase()||"false")||$A.setAttr(t,"role","button"),$A.svgFix(t);var n=$A.get($A.getAttr(t,"data-root")),n=$A.toDC(t,$A.extend({widgetType:"Accordion",root:n},o||{}));r.push(n),$A.hasAttr(t,"data-active")&&(i.push(n),a=e)}),$A.map({siblings:r}),$A.updateDisabled(r),o.singleTabStop&&new $A.RovingTabIndex($A.extend({nodes:t,startIndex:a,orientation:2,autoSwitch:o.autoSwitch||"full",autoLoop:!0,onClick:function(e,t,n,o){o.render(),e.preventDefault()},onSpace:function(e,t,n,o){o.render(),e.preventDefault()},onEnter:function(e,t,n,o){o.render(),e.preventDefault()}},o.extendRTI||{})),$A.hasHash(r)||$A.loop(i,function(e,t){t.render()},"array"),1===r.length?r[0]:r):null}})}});