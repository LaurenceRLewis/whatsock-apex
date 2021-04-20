/*!
4X Straylight 2.0 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Home: WhatSock.com  :  Download: https://github.com/whatsock/apex
License: MIT (https://opensource.org/licenses/MIT)

(Edit this file however desired to customize markup template functionality.)

*/
"straylight"in $A||$A.extend({straylight:function(r){var n,o,t,e,i,a,l,c;r=$A.isNode(r,null,document,11)?r:document,n=new Map,$A.query("button[controls][data-name].aria-accordion-trigger, a[controls][data-name].aria-accordion-trigger",r,function(t,e){if(!$A.data(e,"_isBoundAccordion")){$A.data(e,"_isBoundAccordion",!0);var o=$A.getAttr(e,"data-name");n.has(o)||n.set(o,[]),n.get(o).push(e)}}),$A.loop(n,function(t,e){$A.import(["Animate","Accordion"],{name:"StraylightAccordion",defer:!0,props:$A.extend(props,{triggers:e}),call:function(t){$A.setAccordion(t.triggers,{trackPage:!0,toggleClassName:"open",isToggle:!1,allowMultiple:!1,preload:!0,preloadImages:!0,preloadCSS:!0,toggleHide:!0,style:{display:"none"},animate:{onRender:function(t,e,o){Velocity(e,"transition.slideLeftIn",{complete:function(){o()}})},onRemove:function(t,e,o){Velocity(e,"transition.slideLeftOut",{complete:function(){o()}})}},context:r})}})},"map"),o=[],$A.query("*.aria-tablist",r,function(t,e){$A.data(e,"_isBoundTabList")||($A.data(e,"_isBoundTabList",!0),o.push(e))}),o.length&&$A.import(["Animate","Tab"],{name:"StraylightTab",defer:!0,props:$A.extend(props,{tabList:o}),call:function(t){$A.loop(t.tabList,function(t,e){$A.setTab(e.querySelectorAll("button[controls].aria-tab, a[controls].aria-tab"),{trackPage:!0,afterRender:function(t){$A.setPage(t.id,$A.getText(t.triggerNode)+" ARIA Tab - Apex 4X Technical Style Guide")},preload:!0,preloadImages:!0,preloadCSS:!0,toggleHide:!0,style:{display:"none"},animate:{onRender:function(t,e,o){Velocity(e,"transition.slideDownIn",{duration:1500,complete:function(){o()}})},onRemove:function(t,e,o){Velocity(e,"transition.slideDownOut",{delay:500,duration:1500,complete:function(){o()}})}},isToggle:!1,toggleClassName:"active"})},"array")}}),$A.query("a.aria-date-picker, button.aria-date-picker",r,function(t,e){var o=$A.getDC(e.id);o&&o.loaded&&(o.returnFocus=!1,o.remove(),o.returnFocus=!0);var n=$A.getAttr(e,"controls")||!1,i=!!n&&r.querySelector("#"+n);if(i){if($A.data(e,"_isBoundDatepicker"))var a=!0;else $A.data(e,"_isBoundDatepicker",!0);a||$A.import(["Animate","Datepicker"],{name:"StraylightDatepicker",defer:!0,props:$A.extend(props,{id:n,button:e,input:i}),call:function(t){$A.setDatepicker({id:t.id,toggle:t.button,input:t.input,style:{position:"absolute",zIndex:1,display:"none"},animate:{onRender:function(t,e,o){Velocity(e,"transition.fadeIn",{complete:function(){o()}})},onRemove:function(t,e,o){Velocity(e,"transition.fadeOut",{complete:function(){o()}})}}})}})}}),(t=r.querySelectorAll("a[href][controls].aria-dialog, button[controls].aria-dialog")).length&&$A.import(["Animate","Dialog"],{name:"StraylightDialog",defer:!0,props:$A.extend(props,{triggers:t}),call:function(t){$A.loop(t.triggers,function(t,e){if(!$A.data(e,"_BoundDialog")){$A.data(e,"_BoundDialog",!0);var o=$A.getAttr(e,"data-role")||"";$A.setDialog(e,{role:o,className:"modal",isModal:!0,isAlert:!1,style:{display:"none"},animate:{onRender:function(t,e,o){Velocity(e,"transition.slideDownIn",{complete:function(){o()}})},onRemove:function(t,e,o){Velocity(e,"transition.slideDownOut",{complete:function(){o()}})}}})}},"array")}}),e='span.aria-footnote > a[href^="#"]',document.querySelectorAll(e).length&&$A.import("Footnote",{name:"StraylightFootnote",defer:!0,props:props,call:function(t){$A.setFootnotes(e,{override:{duration:700,easing:"ease-in"}})}}),(i=r.querySelectorAll("a[href][controls].aria-popup, button[controls].aria-popup")).length&&$A.import(["Animate","Popup"],{name:"StraylightPopup",defer:!0,props:$A.extend(props,{triggers:i}),call:function(t){$A.loop(t.triggers,function(t,e){if(!$A.data(e,"_BoundPopup")){$A.data(e,"_BoundPopup",!0);var o=$A.getAttr(e,"data-role")||"Popup";$A.setPopup(e,{role:o,className:"popup",isAlert:!1,circularTabbing:!0,style:{display:"none"},animate:{onRender:function(t,e,o){Velocity(e,"transition.fadeIn",{complete:function(){o()}})},onRemove:function(t,e,o){Velocity(e,"transition.fadeOut",{complete:function(){o()}})}},afterRender:function(t){}})}},"array")}}),(a=r.querySelectorAll("*.aria-tooltip")).length&&$A.import(["Animate","Tooltip"],{name:"StraylightTooltip",defer:!0,props:$A.extend(props,{triggers:a}),call:function(t){$A.loop(t.triggers,function(t,e){$A.data(e,"_BoundTooltip")||($A.data(e,"_BoundTooltip",!0),$A.setTooltip(e,{className:"tooltip",isFocusOnly:"focus"===$A.getAttr(e,"data-mode"),isManualOpen:"click"===$A.getAttr(e,"data-mode"),delay:parseInt($A.getAttr(e,"data-delay"))||0,delayTimeout:parseInt($A.getAttr(e,"data-timeout"))||0,style:{display:"none"},animate:{onRender:function(t,e,o){Velocity(e,"transition.fadeIn",{complete:function(){o()}})},onRemove:function(t,e,o){Velocity(e,"transition.fadeOut",{complete:function(){o()}})}}}))},"array")}}),(l=r.querySelectorAll("*[menu].aria-menu")).length&&$A.import(["Animate","Menu"],{name:"StraylightMenu",defer:!0,props:$A.extend(props,{triggers:l}),call:function(t){$A.loop(t.triggers,function(t,e){$A.data(e,"_BoundMenu")||($A.data(e,"_BoundMenu",!0),$A.setMenu(e,{onActivate:function(t,e,o,n,i,a,r){$A.isNum(i)?0===i||r?(a("true"),o.DC.top.remove(function(){alert("The new checked state for "+e.id+" is 'true'")})):1===i?(a("mixed"),o.DC.top.remove(function(){alert("The new checked state for "+e.id+" is 'mixed'")})):2===i&&(a("false"),o.DC.top.remove(function(){alert("The new checked state for "+e.id+" is 'false'")})):e.href&&-1!==e.href.indexOf("https://")?o.DC.top.remove(function(){location.href=e.href}):o.DC.top.remove(function(){alert(e.id)})},style:{display:"none"},animate:{onRender:function(t,e,o){Velocity(e,"transition.slideUpIn",{complete:function(){o()}})},onRemove:function(t,e,o){Velocity(e,"transition.slideUpOut",{complete:function(){o()}})}}}))},"array")}}),(c=r.querySelectorAll("select.aria-listbox-root")).length&&$A.import(["Animate","Listbox"],{name:"StraylightListbox",defer:!0,props:$A.extend(props,{selects:c}),call:function(t){$A.loop(t.selects,function(t,e){$A.setListbox(e,{})},"array")}})}}),$A.on("load",function(){$A.straylight(document)},".straylight");