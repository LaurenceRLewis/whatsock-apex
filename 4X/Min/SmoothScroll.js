/*!
ARIA Smooth Scroll and Skip Link Module 1.0 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Home: WhatSock.com  :  Download: https://github.com/whatsock/apex
License: MIT (https://opensource.org/licenses/MIT)
*/
"scrollTo"in $A||$A.import("Animate",{name:"SmoothScrollModule",props:props,once:!0,call:function(e){$A.extend({isScrolling:!1,scrollTo:function(e,n,t){return this._4X&&(t=n,n=e,e=this._X),$A.isFn(n)&&(t=n,n=null),$A.isNode(e)||(e=$A.morph(e)),$A.isNode(e)&&($A.isScrolling=!0,window.Velocity(e,"scroll",$A.extend({duration:700,easing:"ease-in",complete:function(){$A.isScrolling=!1,$A.isFn(t)&&t.call(e,e,t.target)}},n||{}))),$A._XR.call(this,e)},moveTo:function(e,n,t){return this._4X&&(t=n,n=e,e=this._X),e=$A.morph(e),$A.isNode(e)&&$A.scrollTo(e,n,t||function(e){$A.focus(e)}),$A._XR.call(this,e)},skipTo:function(e,n,t,o){return this._4X&&(o=t,t=n,n=e,e=this._X),e=$A.morph(e),n=$A.morph(n),$A.isNode(e)&&$A.isNode(n)&&(e=$A.setSkipLink(e,$A.extend({target:n,skipReturn:!0,callback:o},t||{}))),$A._XR.call(this,e)},setSkipLink:function(e,o,i,n){this._4X&&(i=o,o=e,e=this._X);var s=(o=o||{}).callback||null,c=o.isOffScreen||!1,l=o.style||{},r=(i=o.context||i,!(!n&&!o.skipReturn));return $A.isNode(i,null,document)||(i=document),$A.query(e,i,function(e,n){var t=o.target||$A.getAttr(n,"href");$A.isSelector(t)&&(t=i.querySelector(t)),$A.isNode(t)&&!$A.data(n,"_isBoundFn")&&($A.data(n,"_isBoundFn",!0),$A.bindObjects(n,t),$A.on(n,{click:function(e){$A.bindObjects(n,t),$A.isFn(s)&&(s.target=t),$A.moveTo(t,o.override||{},s),e.preventDefault()}}),c&&($A.setOffScreen(n),$A.on(n,{focus:function(e){$A.css(n,$A.extend({},$A.sraCSSClear,l||{}))},blur:function(e){$A.setOffScreen(n)}})),!r&&$A.isFocusable(t)&&$A.on(t,{click:function(e){$A.isFn(s)&&(s.target=$A.boundTo(t)),$A.moveTo($A.boundTo(t),o.override||{},s),e.preventDefault()}}))}),$A._XR.call(this,e)}})}});