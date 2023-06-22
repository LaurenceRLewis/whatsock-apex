/*@license
CalcNames: The AccName Computation Prototype, compute the Name and Description property values for a DOM node
Returns an object with 'name' and 'desc' properties.
Functionality mirrors the steps within the W3C Accessible Name and Description computation algorithm.
https://w3c.github.io/accname/
Author: Bryan Garaventa
https://github.com/whatsock/w3c-alternative-text-computation
Distributed under the terms of the Open Source Initiative OSI - MIT License
*/
!function(){var r=window.AccNamePrototypeNameSpace||window,fe=(r&&"string"==typeof r&&r.length&&(window[r]={},r=window[r]),r.getAccNameVersion="2.60",r.getAccName=r.calcNames=function(e,t,W,r){var G=(r=r||{}).document||document,n={name:"",desc:"",error:""},p=!1,Q=!1;try{if(!e||1!==e.nodeType)return n;function U(e,t,r,n){for(e=e?e.firstChild:null;e;){var o=ee(e)||!1;if(1===e.nodeType&&(!t&&!r||o&&r&&-1!==r.indexOf(o)||!o&&t&&-1!==t.indexOf(e.nodeName.toLowerCase())))return e;if(!n&&1===e.nodeType&&(t||r))return null;e=e.nextSibling}return e}function z(e){var t=e.nodeName.toLowerCase();return!!e.getAttribute("tabindex")||!("a"!==t||!e.getAttribute("href"))||-1!==["button","input","select","textarea"].indexOf(t)&&"hidden"!==(e.getAttribute("type")||"").toLowerCase()}function F(e,t,r,n){for(;e&&e!==t;){if(!n&&1===e.nodeType&&ie(e,t))return!0;n=!1,e=e.parentNode}return!1}function o(e,t){if(-1!==(i=t).indexOf("attr("))for(var r=i.match(/attr\((.|\n|\r\n)*?\)/g),n=0;n<r.length;n++)var o=r[n].slice(5,-1),o=e.getAttribute(o)||"",i=i.replace(r[n],o);return i=i.replace(/url\((.*?)\)\s+\/|url\((.*?)\)/g,"").replace(/^\s+|\s+$/g,"").replace(/\"/g,"")}function m(e,t){var r,n=t||l(e);for(r in d)for(var o=d[r],i=0;i<o.length;i++)if(n[r]&&(0===o[i].indexOf("!")&&-1===[o[i].slice(1),"inherit","initial","unset"].indexOf(n[r])||0===n[r].indexOf(o[i])))return!0;return!t&&e.nodeName&&-1!==f.indexOf(e.nodeName.toLowerCase())&&!(n.display&&0===n.display.indexOf("inline")&&"br"!==e.nodeName.toLowerCase())}function J(e,t,r,n,o,i){var a,l="",d=!1;return r&&!i?l=t.getAttribute("aria-valuetext")||t.getAttribute("aria-valuenow")||"":n&&!i?l=s(t)||"":o&&!i&&(a=[],"grid"===e||"treegrid"===e?a=["gridcell","rowheader","columnheader"]:"listbox"===e?a=["option"]:"tablist"===e?a=["tab"]:"tree"===e&&(a=["treeitem"]),l=u(t,t.querySelectorAll('*[aria-selected="true"]'),!1,a),d=!0),!(l=fe(l))&&(r||n)&&t.value&&(l=t.value),l=d||l||!i?l:o?u(t,t.querySelectorAll("option[selected]"),!0):t.value}function K(e){return fe(e).length?" "+e+" ":" "}var X=e,i=fe(e.getAttribute("role")||""),Y={name:[],desc:[]},Z=[],_=function(I,P,R,E,B,H,$){($=$||{}).tag=$.tag||!1,$.role=$.role||!1,$.go=$.go||!1;function f(e,t,r){var n={name:"",title:""};if(e){var o,i,a,l,d,u=!(!e||1!==e.nodeType||!m(e)),s=e,c=t(e)||{};if(c.name&&c.name.length&&(n.name+=c.name),!c.skip&&(o=e,!(i=H.top)||!o||1!==i.nodeType||1!==o.nodeType||(a=ee(o),l=o.nodeName.toLowerCase(),(d=function(e,t){return a&&0<=t.roles.indexOf(a)||!a&&0<=t.tags.indexOf(l)})(0,x)?o!==i||o.id&&H[o.id]&&H[o.id].node?g(o,H.top)&&"select"!==o.nodeName.toLowerCase()||d(0,b):z(o):!d(0,h)&&(o!==X||d(0,b))||!(a||-1===["section"].indexOf(l)||o.getAttribute("aria-labelledby")||o.getAttribute("aria-label"))||$.go)))for($.go&&($.go=!1),e=e.firstChild;e;)n.name+=f(e,t,r).name,e=e.nextSibling;n.name+=c.owns||"",X===s&&r===s&&!fe(n.name)&&fe(c.title)?n.name=K(c.title):X===s&&r===s&&fe(c.title)&&(n.title=K(c.title)),X===s&&r===s&&fe(c.desc)&&(n.title=K(c.desc)),X===s&&r===s&&fe(c.placeholder)&&!fe(n.name)?(n.name=K(c.placeholder),p=!0):X===s&&r===s&&fe(c.placeholder)&&!fe(n.title)&&(n.title=K(c.placeholder)),(u||c.isWidget)&&(n.name=K(n.name))}return n}var e={name:"",title:""},M=!1,g=function(e,t){for(var r=[];e;){if((e=e.id&&H[e.id]&&H[e.id].node&&-1===r.indexOf(e)?(r.push(e),H[e.id].node):e.parentNode)&&e===t)return!0;if(!e||e===H.top||e===G.body)return!1}return!1},t={before:"",after:""},e=($.tag||$.role||-1!==Y[H.computingDesc?"desc":"name"].indexOf(I)||(t=ae(I,null),W&&(-1===t.before.indexOf(" [ARIA] ")&&-1===t.before.indexOf(" aria-")&&-1===t.before.indexOf(" accName: ")||(t.before=""),-1===t.after.indexOf(" [ARIA] ")&&-1===t.after.indexOf(" aria-")&&-1===t.after.indexOf(" accDescription: ")||(t.after=""))),f(I,function(e){var t=0,r=null,n=[],o=[],i={name:"",title:"",owns:"",skip:!1},a=!!(e&&1===e.nodeType&&E&&E.length&&-1!==E.indexOf(e)&&e===X&&e!==I),l=!1;if((!R&&e&&!ie(e,H.top)||B||a)&&!$.tag&&!$.role&&-1===Y[H.computingDesc?"desc":"name"].indexOf(e)){Y[H.computingDesc?"desc":"name"].push(e);var d="",u="",s={before:"",after:""},c=I===e?e:e.parentNode;if($.tag||$.role||-1!==Y[H.computingDesc?"desc":"name"].indexOf(c)||(Y[H.computingDesc?"desc":"name"].push(c),s=ae(c,I),W&&(-1===s.before.indexOf(" [ARIA] ")&&-1===s.before.indexOf(" aria-")&&-1===s.before.indexOf(" accName: ")||(s.before=""),-1===s.after.indexOf(" [ARIA] ")&&-1===s.after.indexOf(" aria-")&&-1===s.after.indexOf(" accDescription: ")||(s.after=""))),1===e.nodeType){var c=e.nodeName.toLowerCase(),f=ee(e),g=!$.tag&&!$.role&&e.getAttribute("aria-labelledby")||"",p=!$.tag&&!$.role&&e.getAttribute("aria-describedby")||"",m=!$.tag&&!$.role&&e.getAttribute("aria-description"),b=!$.tag&&!$.role&&e.getAttribute("aria-label")||"",h=!$.tag&&!$.role&&e.getAttribute("title")||"";if(e===X&&!f&&-1!==te.indexOf(c))return i;if(e===X&&(-1!==re.indexOf(f)||!f&&-1!==ne.indexOf(c)))return i;var x=-1!==le.indexOf(c),y=-1!==["input"].indexOf(c),v=-1!==de.indexOf(f),A=-1!==ue.indexOf(f),O=-1!==se.indexOf(f),w=v||A||O||"combobox"===f,N=(w||-1!==ce.indexOf(f))&&"link"!==f,C=(i.isWidget=x||N,!1),k=!1,S=e.getAttribute("aria-owns")||"",a=!($.tag||$.role||a||!(e!==I&&(x||w)||e.id&&H[e.id]&&H[e.id].target&&H[e.id].target===e));if(!P&&!$.tag&&!$.role&&g){for(n=g.split(/\s+/),o=[],t=0;t<n.length;t++)r=G.getElementById(n[t]),o.push(_(r,!0,R,[e],r===I,{ref:H,top:r}).name);d=fe(o.join(" ")),fe(d)&&(M=l=C=!0,i.skip=!0)}if(!P&&e===I&&!$.tag&&!$.role&&(p||m)){if(p){for(n=p.split(/\s+/),o=[],t=0;t<n.length;t++)r=G.getElementById(n[t]),o.push(_(r,!0,!1,[e],!1,{ref:H,top:r,computingDesc:!0}).name);D=fe(o.join(" "))}else D=fe(m);fe(D)&&(i.desc=D,k=!0)}$.tag||$.role||C||!fe(b)||a||fe(d=b)&&(l=C=!0,e===I)&&(M=R=!0);w=!$.tag&&!$.role&&!C&&"iframe"!==c&&f&&-1!==oe.indexOf(f)&&!z(e)&&!function(e){for(var t=["labelledby","label","describedby","busy","controls","current","details","disabled","dropeffect","errormessage","flowto","grabbed","haspopup","invalid","keyshortcuts","live","owns","roledescription"],r=0;r<t.length;r++){var n=fe(e.getAttribute("aria-"+t[r]));if(n)return true}return false}(e);if(!a){if(!$.tag&&!$.role&&!C&&e===I&&x){var L=G.querySelectorAll("label"),T="",V=function(e,t,r,n){n=!!n;while(e){e=e.parentNode;if(e&&(r&&ee(e)===r||t&&e.nodeName&&e.nodeName.toLowerCase()===t&&(!n||ee(e).length<1)))return e}return{}}(e,"label")||!1;for(t=0;t<L.length;t++)(L[t]!==V||"string"==typeof V.getAttribute("for"))&&L[t].getAttribute("for")!==e.id||F(L[t],G.body)||(T+=K(_(L[t],!0,R,[e],!1,{ref:H,top:L[t]}).name));fe(d=T)&&(C=!0)}var g=!$.tag&&!$.role&&y&&(e.getAttribute("type")||"").toLowerCase()||!1,p=!$.tag&&!$.role&&g&&fe(e.getAttribute("value"))||!1,D=w&&"img"===c?"":fe(e.alt||e.getAttribute("alt"));if($.tag||$.role||C||w||"img"!==f&&"img"!==c&&"image"!==g||!D&&!fe(h)||(d=fe(D)||fe(h),fe(d)&&(C=!0)),$.tag||$.role||C||w||"area"!==c||!D||(d=fe(D),fe(d)&&(C=!0)),"optgroup"===c&&($.tag||$.role||C||w||!e.getAttribute("label")||(d=fe(e.getAttribute("label")),fe(d)&&(C=!0)),i.skip=!0),!$.tag&&!$.role&&!C&&e===I&&g&&-1!==["button","submit","reset"].indexOf(g)){if(p)d=p;else switch(g){case"submit":d="submit";break;case"reset":d="reset";break;default:d=""}fe(d)&&(C=!0)}!$.tag&&!$.role&&C&&e===I&&g&&-1!==["button","submit","reset"].indexOf(g)&&p&&p!==d&&!i.desc&&(i.desc=p,k=!0),$.tag||$.role||C||e!==I||!g||"image"!==g||(d="Submit Query",Q=C=!0),!($.tag||$.role||C||e!==X||"group"!==f&&"radiogroup"!==f&&(f||"fieldset"!==c))&&((q=U(e,["legend"],["legend"])||!1)&&(d=fe(_(q,P,!1,[],!1,{ref:H,top:q}).name)),fe(d)&&(C=!0),R=!0),!($.tag||$.role||C||e!==X||"table"!==f&&(f||"table"!==c))&&((q=U(e,["caption"],["caption"])||!1)&&(d=fe(_(q,P,!1,[],!1,{ref:H,top:q}).name)),fe(d)&&(C=!0),R=!0),$.tag||$.role||"svg"!==c||(b=e.querySelector("title")||!1,y=e===X&&e.querySelector("desc")||!1,!C&&b&&(d=fe(_(b,!0,!1,[],!1,{ref:H,top:b}).name)),!k&&y&&(D=fe(_(y,!0,!1,[],!1,{ref:H,top:y}).name),fe(D))&&(i.desc=D),i.skip=!0)}$.tag||$.role||!a||E&&E.length&&-1!==E.indexOf(e)||(v?d=J(f,e,!0):A||"combobox"===f&&x?d=J(f,e,!1,!0):O?d=J(f,e,!1,!1,!0):!x||-1===["input","textarea"].indexOf(c)||N&&!A?!x||"select"!==c||N&&"combobox"!==f||(d=J(f,e,!1,!1,!0,!0)):d=J(f,e,!1,!1,!1,!0),d=fe(d)),$.tag||$.role||w||!fe(h)||d&&" "===m||(i.title=fe(h));var j,p=(p=x&&fe(e.getAttribute("type")||"").toLowerCase())||"text",g=!$.tag&&!$.role&&e===X&&e===I&&(A||x&&("textarea"===c||"input"===c&&-1!==["password","search","tel","text","url","email"].indexOf(p)))&&fe(e.getAttribute("placeholder")||e.getAttribute("aria-placeholder")),q=(g&&(i.placeholder=g),$.role&&$.role===f||!f&&$.tag&&$.tag===c);if(q&&(d=fe(_(e,P,!1,[],!1,{ref:H,top:e}).name),fe(d))&&(R=!0),!q&&S&&-1===["input","img","progress"].indexOf(c)){for(n=S.split(/\s+/),o=[],t=0;t<n.length;t++)(r=G.getElementById(n[t]))&&-1===Z.indexOf(n[t])&&(Z.push(n[t]),(j={ref:H,top:H.top})[n[t]]={refNode:I,node:e,target:r},F(r,G.body)||o.push(_(r,!0,R,[],!1,j).name));u=o.join("")}}else $.tag||$.role||3!==e.nodeType||(d=e.data);(d=l?d:s.before+d.replace(/\s+/g," ")+s.after).length&&!function(e,t,r,n){var o=[];while(e&&e!==t){if(e.id&&r&&r[e.id]&&r[e.id].node&&o.indexOf(e)===-1){o.push(e);e=r[e.id].node}else e=e.parentNode;if(e&&e.getAttribute)if(fe(e.getAttribute("aria-label"))||!n&&ie(e,t))return true}return false}(e,H.top,H)&&(i.name=d),i.owns=u}return i},I));return M||(e.name=t.before+e.name.replace(/\s+/g," ")+t.after),e},ee=function(e){var t=e&&e.getAttribute?(e.getAttribute("role")||"").toLowerCase():"";if(fe(t)){function r(e){return 0<fe(t).length&&0<=e.roles.indexOf(t)}for(var n=t.split(/\s+/),o=0;o<n.length;o++)if(t=n[o],r(b)||r(h)||r(x)||r(a)||-1!==oe.indexOf(t))return t}return""},b={roles:["button","checkbox","link","option","radio","switch","tab","treeitem","menuitem","menuitemcheckbox","menuitemradio","row","cell","gridcell","columnheader","rowheader","tooltip","heading"],tags:["a","button","summary","input","h1","h2","h3","h4","h5","h6","menuitem","option","tr","td","th"]},h={roles:["application","alert","log","marquee","timer","alertdialog","dialog","banner","complementary","form","main","navigation","region","search","article","document","feed","figure","img","math","toolbar","menu","menubar","grid","listbox","radiogroup","textbox","searchbox","spinbutton","scrollbar","slider","tablist","tabpanel","tree","treegrid","separator","rowgroup","group"],tags:["article","aside","body","select","datalist","optgroup","dialog","figure","footer","form","header","hr","iframe","img","textarea","input","main","math","menu","nav","section","thead","tbody","tfoot","fieldset"]},x={roles:["term","definition","directory","list","note","status","table","contentinfo"],tags:["dl","ul","ol","dd","details","output","table"]},a={roles:["legend","caption","code","deletion","emphasis","generic","insertion","paragraph","strong","subscript","superscript"],tags:["legend","caption","figcaption","code","del","em","div","span","ins","p","strong","sub","sup"]},te=["div","span"],re=["caption","code","deletion","emphasis","generic","insertion","none","paragraph","presentation","strong","subscript","superscript"],ne=["caption","figcaption","code","del","em","div","span","ins","p","strong","sub","sup"],le=["button","input","select","textarea"],de=["scrollbar","slider","spinbutton"],ue=["searchbox","textbox"],se=["grid","listbox","tablist","tree","treegrid"],ce=["button","checkbox","link","switch","option","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","radio","tab","treeitem","gridcell"],oe=["presentation","none"],ie=r.isHidden||function(e,t){return!(!(e=e)||1!==e.nodeType||e===t||"true"!==e.getAttribute("aria-hidden")&&!e.getAttribute("hidden")&&"none"!==(e=l(e)).display&&"hidden"!==e.visibility)},l=r.getStyleObject||function(e){var t={};return G.defaultView&&G.defaultView.getComputedStyle?t=G.defaultView.getComputedStyle(e,""):e.currentStyle&&(t=e.currentStyle),t},d={display:["block","grid","table","flow-root","flex"],position:["absolute","fixed"],float:["left","right","inline"],clear:["left","right","both","inline"],overflow:["hidden","scroll","auto"],"column-count":["!auto"],"column-width":["!auto"],"column-span":["all"],contain:["layout","content","strict"]},f=["address","article","aside","blockquote","br","canvas","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","legend","li","main","nav","noscript","ol","output","p","pre","section","table","td","tfoot","th","tr","ul","video"],u=function(e,t,r,n){if(!t||!t.length)return"";for(var o=[],i=0;i<t.length;i++){var a=ee(t[i]);(!n||-1!==n.indexOf(a))&&o.push(r?s(t[i]):_(t[i],!0,!1,[],!1,{top:t[i]}).name)}return o.join(" ")},g=r.getPseudoElStyleObj||function(e,t){var r,n={};for(r in d)n[r]=G.defaultView.getComputedStyle(e,t).getPropertyValue(r);return n.content=G.defaultView.getComputedStyle(e,t).getPropertyValue("content").replace(/^"|\\|"$/g,""),n},s=function(e,t){var r,n;return t||1!==e.nodeType?(n=(r=g(e,t)).content)&&"none"!==n?(m({},r)&&(":before"===t?n+=" ":":after"===t&&(n=" "+n)),n):"":e.innerText||e.textContent||""},ae=r.getCSSText||function(e,t){return e&&1!==e.nodeType||e===t||-1!==["input","select","textarea","img","iframe","optgroup"].indexOf(e.nodeName.toLowerCase())?{before:"",after:""}:{before:o(e,s(e,":before")),after:o(e,s(e,":after"))}};if(F(e,G.body,0,!(!e||!e.nodeName||"area"!==e.nodeName.toLowerCase())))return n;var c=_(e,!1,!1,[],!1,{top:e}),y=fe(c.name.replace(/\s+/g," ")),v=fe(c.title.replace(/\s+/g," "));n.hasUpperCase=!(!i||i===i.toLowerCase()),n.name=y,n.desc=v,Y={name:[],desc:[]},Z=[]}catch(e){n.error=e}return n.placeholder=p,n.userAgent=Q,t&&"function"==typeof t?t.apply(e,[n,e]):n},function(e){return"string"!=typeof e?"":e.replace(/^\s+|\s+$/g,"")});r.getAccNameMsg=r.getNames=function(e,t){e=r.getAccName(e,null,!1,t);return e.error?e.error+"\n\nAn error has been thrown in AccName Prototype version "+r.getAccNameVersion+". Please copy this error message and the HTML markup that caused it, and submit both as a new GitHub issue at\nhttps://github.com/whatsock/w3c-alternative-text-computation":(t='accName: "'+e.name+'"\n\naccDesc: "'+e.desc+'"\n\n',e.placeholder&&(t+="Name from placeholder: true\n\n"),e.userAgent&&(t+="Name from user agent: true\n\n"),t+("(Running AccName Computation Prototype version: "+r.getAccNameVersion)+")")},"object"==typeof module&&module.exports&&(module.exports={getNames:r.getNames,calcNames:r.calcNames})}();