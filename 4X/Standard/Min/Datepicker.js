/*@license
ARIA Date Picker Module 4.4 for Apex 4X
Author: Bryan Garaventa (https://www.linkedin.com/in/bgaraventa)
Contributions by Danny Allen (dannya.com) / Wonderscore Ltd (wonderscore.co.uk)
https://github.com/whatsock/apex
License: MIT <https://opensource.org/licenses/MIT>
*/
"setDatepicker"in $A||($A.addWidgetProfile("Datepicker",{configure:function(e){return{returnFocus:!1,allowRerender:!0,exposeBounds:!0,exposeHiddenClose:!1}},role:function(e){return{role:"dialog","aria-modal":"false","aria-label":e.role}},innerRole:function(e){return{role:"application"}}}),$A.extend({setDatepicker:function(y){function l(e){D.alt=e.altKey,D.ctrl=e.ctrlKey,D.shift=e.shiftKey}function n(){i=!1}function t(){i||d.loaded||d.disabled?!i&&d.loaded&&(i=!0,d.remove(),g=m=!1,setTimeout(n,1e3)):(g=!(m=!(i=!0)),$A.trigger(this,"opendatepicker"),setTimeout(n,1e3))}var e=(y=y||{}).helpTextShort||"Press F1 for help.",a=y.helpText||"Press the arrow keys to navigate by day, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year, or Escape to cancel.",r=y.openOnFocusHelpText||"Press Down arrow to browse the calendar, or Escape to close.",m=!1,g=!1,o=y.id||$A.genId(),s=$A.morph(y.toggle),h=$A.morph(y.input),p=!0===y.enableComments,f=$A.isFn(y.onActivate)?y.onActivate:function(e,t){h.value=t.formatDate(t),t.remove(),(t.triggerClicked?s:h).focus(),t.triggerClicked=!1},D={},b=$A.genId(),v=$A([{id:o,role:y.role||"Calendar",widgetType:"Datepicker",trigger:s,target:h,on:"opendatepicker",disabled:!0===y.disabled,returnFocus:!1,openOnFocus:!0===y.openOnFocus,openOnFocusHelpText:r,showEscBtn:!0===y.showEscBtn,escBtnName:y.escBtnName||"Close",escBtnIcon:y.escBtnIcon||"&times;",tooltipTxt:y.tooltipTxt||"Press Escape to cancel",markedTxt:y.markedTxt||"Selected",disabledTxt:y.disabledTxt||"Disabled",commentedTxt:y.commentedTxt||"Has Comment",prevTxt:y.prevTxt||"Previous",nextTxt:y.nextTxt||"Next",monthTxt:y.monthTxt||"Month",yearTxt:y.yearTxt||"Year",leftButtonYearText:y.leftButtonYearText||"&#8656;",rightButtonYearText:y.rightButtonYearText||"&#8658;",leftButtonMonthText:y.leftButtonMonthText||"&#8592;",rightButtonMonthText:y.rightButtonMonthText||"&#8594;",drawFullCalendar:!0===y.drawFullCalendar,highlightToday:!$A.isBool(y.highlightToday)||y.highlightToday,pageUpDownNatural:!0,inputDateFormat:y.inputDateFormat||"MM/DD/YYYY",audibleDateFormat:y.audibleDateFormat||"dddd D MMMM YYYY",initialDate:y.initialDate instanceof Date?y.initialDate:new Date,minDate:void 0!==y.minDate?y.minDate instanceof Date?y.minDate:new Date((new Date).setDate((new Date).getDate()+y.minDate)):void 0,maxDate:void 0!==y.maxDate?y.maxDate instanceof Date?y.maxDate:new Date((new Date).setDate((new Date).getDate()+y.maxDate)):void 0,disableWeekdays:void 0!==y.disableWeekdays&&y.disableWeekdays,disableWeekends:void 0!==y.disableWeekends&&y.disableWeekends,className:y.className||"calendar",range:{disabledWDays:[],0:{name:y.months&&y.months[0]?y.months[0]:"January",max:31,marked:{},disabled:{},disabledWDays:[],comments:{},message:{}},1:{name:y.months&&y.months[1]?y.months[1]:"February",max:28,marked:{},disabled:{},disabledWDays:[],comments:{},message:{}},2:{name:y.months&&y.months[2]?y.months[2]:"March",max:31,marked:{},disabled:{},disabledWDays:[],comments:{},message:{}},3:{name:y.months&&y.months[3]?y.months[3]:"April",max:30,marked:{},disabled:{},disabledWDays:[],comments:{},message:{}},4:{name:y.months&&y.months[4]?y.months[4]:"May",max:31,marked:{},disabled:{},disabledWDays:[],comments:{},message:{}},5:{name:y.months&&y.months[5]?y.months[5]:"June",max:30,marked:{},disabled:{},disabledWDays:[],comments:{},message:{}},6:{name:y.months&&y.months[6]?y.months[6]:"July",max:31,marked:{},disabled:{},disabledWDays:[],comments:{},message:{}},7:{name:y.months&&y.months[7]?y.months[7]:"August",max:31,marked:{},disabled:{},disabledWDays:[],comments:{},message:{}},8:{name:y.months&&y.months[8]?y.months[8]:"September",max:30,marked:{},disabled:{},disabledWDays:[],comments:{},message:{}},9:{name:y.months&&y.months[9]?y.months[9]:"October",max:31,marked:{},disabled:{},disabledWDays:[],comments:{},message:{}},10:{name:y.months&&y.months[10]?y.months[10]:"November",max:30,marked:{},disabled:{},disabledWDays:[],comments:{},message:{}},11:{name:y.months&&y.months[11]?y.months[11]:"December",max:31,marked:{},disabled:{},disabledWDays:[],comments:{},message:{}},wDays:[{shrt:y.days&&y.days[0]?y.days[0].s:"S",lng:y.days&&y.days[0]?y.days[0].l:"Sunday"},{shrt:y.days&&y.days[1]?y.days[1].s:"M",lng:y.days&&y.days[1]?y.days[1].l:"Monday"},{shrt:y.days&&y.days[2]?y.days[2].s:"T",lng:y.days&&y.days[2]?y.days[2].l:"Tuesday"},{shrt:y.days&&y.days[3]?y.days[3].s:"W",lng:y.days&&y.days[3]?y.days[3].l:"Wednesday"},{shrt:y.days&&y.days[4]?y.days[4].s:"T",lng:y.days&&y.days[4]?y.days[4].l:"Thursday"},{shrt:y.days&&y.days[5]?y.days[5].s:"F",lng:y.days&&y.days[5]?y.days[5].l:"Friday"},{shrt:y.days&&y.days[6]?y.days[6].s:"S",lng:y.days&&y.days[6]?y.days[6].l:"Saturday"}],wdOffset:isNaN(y.wdOffset)?0:y.wdOffset},getWDay:function(e,t,n){t=$A.isNum(t)?t:e.range.current.wDay,e=e.range.wdOffset;return e<0?t=t+e<0?7+e:t+e:0<e&&(t=6<t+e?t+e-6-1:t+e),t=n?6-t:t},getDateOrdinalSuffix:function(e){var t=e%10,n=e%100;return 1==t&&11!=n?e+"st":2==t&&12!=n?e+"nd":3==t&&13!=n?e+"rd":e+"th"},formatDate:function(e,t,n){t=t||{YYYY:e.range.current.year,MMMM:e.range[e.range.current.month].name,dddd:e.range.wDays[e.range.current.wDay].lng,MM:("00"+(e.range.current.month+1)).slice(-2),DD:("00"+e.range.current.mDay).slice(-2),Do:e.getDateOrdinalSuffix(e.range.current.mDay),M:e.range.current.month+1,D:e.range.current.mDay},$A.isStr(n)||(n=e.inputDateFormat);e=new RegExp(Object.keys(t).join("|"),"gi");return n.replace(e,function(e){return t[e]})},modifyDateValues:function(e,t){for(var n in t){var a=t[n];"month"===n&&(e.month+=a,a<0?e.month<0&&(e.month=11,e.year&&--e.year):11<e.month&&(e.month=0,e.year&&(e.year+=1)))}return e},setFocus:function(e,t,n){var a=this;return!!e&&(a.current=e,a.query("td.dayInMonth.selected",function(e,t){$A.setAttr(t,{tabindex:"-1"}),$A.remClass(t,"selected"),$A.data(t,"_Selected",0)}),$A.addClass(e,"selected"),$A.data(e,"_Selected",!0),$A.setAttr(e,{tabindex:"0"}),n||("PM"===a.navBtn?(a.buttons.pM.focus(),setTimeout(function(){$A.announce(a.range[a.range.current.month].name,!1,!0)},1),a.navBtnS=!0):"NM"===a.navBtn?(a.buttons.nM.focus(),setTimeout(function(){$A.announce(a.range[a.range.current.month].name,!1,!0)},1),a.navBtnS=!0):"PY"===a.navBtn?(a.buttons.pY.focus(),setTimeout(function(){$A.announce(a.range.current.year.toString(),!1,!0)},1),a.navBtnS=!0):"NY"===a.navBtn?(a.buttons.nY.focus(),setTimeout(function(){$A.announce(a.range.current.year.toString(),!1,!0)},1),a.navBtnS=!0):(!a.openOnFocus||a.openOnFocus&&!m&&g)&&e.focus()),a.fn.navBtn?a.fn.navBtn="":a.navBtn="",!0)},setCurrent:function(e){e.date instanceof Date&&(e.range.current={mDay:e.date.getDate(),month:e.date.getMonth(),year:e.date.getFullYear(),wDay:e.date.getDay()})},setDayMarked:function(e,t,n){var a=t.getFullYear(),r=t.getMonth(),t=t.getDate();n?("object"!=typeof e.range[r].marked[a]&&(e.range[r].marked[a]=[]),e.range[r].marked[a].push(t)):"object"==typeof e.range[r].marked[a]&&-1!==(n=e.range[r].marked[a].indexOf(t))&&delete e.range[r].marked[a][n]},clearAllMarked:function(e){for(var t in e.range)e.range[t].marked={}},setDayDisabled:function(e,t,n){var a=t.getFullYear(),r=t.getMonth(),t=t.getDate();n?("object"!=typeof e.range[r].disabled[a]&&(e.range[r].disabled[a]=[]),e.range[r].disabled[a].push(t)):"object"==typeof e.range[r].disabled[a]&&-1!==(n=e.range[r].disabled[a].indexOf(t))&&delete e.range[r].disabled[a][n]},setMonthDisabled:function(e,t,n){var a=t.getFullYear(),r=t.getMonth();if(n){e.range[r].disabled[a]=[];for(var o=1;o<=e.range[r].max;o++)e.range[r].disabled[a].push(o)}else e.range[r].disabled[a]=[]},setDayOfWeekDisabled:function(e,t,n,a){for(var r,o=t.getFullYear(),s=t.getMonth(),d=("object"!=typeof e.range[s].disabled[o]&&(e.range[s].disabled[o]=[]),new Date(o,s,1)),i=1;i<=e.range[s].max;i++)d.setDate(i),-1!==n.indexOf(d.getDay())&&(a?e.range[s].disabled[o].push(i):-1!==(r=e.range[s].marked[o].indexOf(i))&&delete e.range[s].marked[o][r])},setWeekdaysDisabled:function(e,t,n){e.setDayOfWeekDisabled(e,t,[1,2,3,4,5],n)},setWeekendsDisabled:function(e,t,n){e.setDayOfWeekDisabled(e,t,[0,6],n)},clearAllDisabled:function(e){for(var t in e.range)e.range[t].disabled={}},setMonthMessage:function(e,t,n){var a=t.getFullYear(),t=t.getMonth();$A.isStr(n)&&0<n.length?e.range[t].message[a]=n:delete e.range[t].message[a]},clearAllMessage:function(e){for(var t in e.range)e.range[t].message={}},isDisabledDate:function(e,t,n,a){a=a||e.range.current;var r=e.range[a.month].disabled[a.year],o=e.range[a.month].disabled["*"],a=e.range[a.month].disabledWDays,s=e.range.disabledWDays,d=n.getDay();return!!(r&&-1!==$A.inArray(t,r)||o&&-1!==$A.inArray(t,o)||a.length&&-1!==$A.inArray(d,a)||s.length&&-1!==$A.inArray(d,s)||e.isOutsideDateRange(n))},isOutsideDateRange:function(e){e=this.createDateComparisonValue(e);return this.minDateComparisonValue&&e<this.minDateComparisonValue||this.maxDateComparisonValue&&e>this.maxDateComparisonValue},createDayCell:function(e,t,n,a,r){var o=this,s="<td ",d=o.createDateComparisonValue(new Date),i=o.createDateComparisonValue(t),u=(i===d&&(s+='aria-current="date" '),a&&(s+='aria-disabled="true" '),s+='aria-label="',o.range[o.range.current.month].comments[o.range.current.year]),c=o.range[o.range.current.month].comments["*"],l="",u=(u&&u[e]?l=u[e]:c&&c[e]&&(l=c[e]),l&&(s+=o.commentedTxt.replace(/<|>|\"/g,"")+" "),t.getMonth()),m={YYYY:t.getFullYear(),MMMM:o.range[u].name,dddd:o.range.wDays[t.getDay()].lng,MM:("00"+(u+1)).slice(-2),DD:("00"+e).slice(-2),Do:o.getDateOrdinalSuffix(e),M:u+1,D:e},c=new RegExp(Object.keys(m).join("|"),"gi"),t=(s+=o.audibleDateFormat.replace(c,function(e){return m[e]}),l&&(s+=l.replace(/<|>|\n/g," ").replace(/\"/g,'\\"')),s=s+'" role="button" tabindex="-1" '+('class="day '+(n||"")),!0===o.highlightToday&&i===d&&(s+=" dayToday"),o.range[o.range.current.month].marked[o.range.current.year]&&-1!==o.range[o.range.current.month].marked[o.range.current.year].indexOf(e));return(r&&!a||t)&&(s+=" dayMarked"),a&&(s+=" disabled"),l&&(s+=" comment"),s=s+'" '+'title="',t?s+=o.markedTxt.replace(/<|>|\"/g,""):a&&(s+=o.disabledTxt.replace(/<|>|\"/g,"")),s+='" id="'+o.baseId+e+'"><span aria-hidden="true">'+e+"</span></td>"},createDateComparisonValue:function(e){return parseInt(e.getFullYear()+("00"+e.getMonth()).slice(-2)+("00"+e.getDate()).slice(-2),10)},presetDate:function(e,t,n,a){(e=e||this).initialDate=t||e.initialDate||new Date,e.minDate=n||e.minDate||null,e.maxDate=a||e.maxDate||null,e.setDateComparisons(e),e.date=e.initialDate,e.setCurrent(e),e.fn.current={},$A.extend(!0,e.fn.current,e.range.current)},setDate:function(e,t){void 0===t&&((e.minDate||e.maxDate)&&e.isOutsideDateRange(e.initialDate)?e.initialDate<e.minDate?t=e.minDate:e.initialDate>e.maxDate&&(t=e.maxDate):t=e.initialDate),e.date=t,e.setCurrent(e),e.fn.current={},$A.extend(!0,e.fn.current,e.range.current)},setDateComparisons:function(e){e.minDate instanceof Date&&(e.minDate.setHours(0,0,0,0),e.minDateComparisonValue=e.createDateComparisonValue(e.minDate)),e.maxDate instanceof Date&&(e.maxDate.setHours(0,0,0,0),e.maxDateComparisonValue=e.createDateComparisonValue(e.maxDate)),e.initialDate instanceof Date?e.currentDate=e.initialDate:e.currentDate=new Date,e.currentDateComparisonValue=e.createDateComparisonValue(e.currentDate)},storeCurrentDate:function(e){e.date=new Date(e.range.current.year,e.range.current.month,e.range.current.mDay)},setDisabled:function(e,t){(e="boolean"==typeof e?(t=e,this):e||this).disabled=!!t,$A.setAttr([h,s],"disabled",e.disabled),e.disabled||$A.remAttr([h,s],"disabled")},onceBeforeRender:function(e){e.date instanceof Date||(e.setDateComparisons(e),e.setDate(e))},rerenderTable:function(e){e.rerendering=!0,e.afterRemove(e),e.beforeRender(e),e.duringRender(e),e.afterRender(e),e.rerendering=!1},beforeRender:function(e){var t=h.value,n=h.value.split("/"),n=("DD/MM/YYYY"===y.inputDateFormat&&3===n.length?t=n[1]+"/"+n[0]+"/"+n[2]:"DD/MM/YYYY"===y.inputDateFormat&&(t=new Date),!e.rerendering&&t&&e.presetDate(e,new Date(t)),e.disableWeekdays&&e.setWeekdaysDisabled(e,e.date,!0),e.disableWeekends&&e.setWeekendsDisabled(e,e.date,!0),!$A.isFn(y.configure)||e.stopConfigure||e.configureLoading||(e.configureLoading=e.cancel=!0,e.fn.navBtn=e.navBtn,!0===y.configure.apply(e,[e])&&setTimeout(function(){e.render()},1)),1===e.range.current.month&&(e.range[1].max=1===new Date(e.range.current.year,1,29).getMonth()?29:28),e.baseId=b,e.prevBtnId=e.baseId+"p",e.nextBtnId=e.baseId+"n",e.monthCellId=e.baseId+"YC",e.modifyDateValues({month:e.range.current.month,year:e.range.current.year},{month:-1})),a=new Date,t=(a.setMonth(n.month),a.setFullYear(n.year),e.modifyDateValues({month:e.range.current.month,year:e.range.current.year},{month:1})),r=new Date,o=(r.setMonth(t.month),r.setFullYear(t.year),""),s=(y.condenseYear||(s=!e.isOutsideDateRange(new Date(e.range.current.year-1,0,1)),d=!e.isOutsideDateRange(new Date(e.range.current.year+1,0,1)),o='<tr class="yearSelector" role="presentation"><td class="nav prev btn year'+(s?"":" disabled")+'" accesskey="1" title="'+e.prevTxt.replace(/<|>|\"/g,"")+" "+e.yearTxt.replace(/<|>|\"/g,"")+'" aria-label="'+e.prevTxt.replace(/<|>|\"/g,"")+" "+e.yearTxt.replace(/<|>|\"/g,"")+'"'+(s?' tabindex="0"':' aria-disabled="true" tabindex="-1"')+' role="button" id="'+e.prevBtnId+'Y"><span aria-hidden="true">'+e.leftButtonYearText+'</span></td><td title="'+e.tooltipTxt.replace(/<|>|\"/g,"")+'" colspan="5" class="year" role="presentation"><span>'+e.range.current.year+'</span></td><td class="nav next btn year'+(d?"":" disabled")+'" accesskey="2" title="'+e.nextTxt.replace(/<|>|\"/g,"")+" "+e.yearTxt.replace(/<|>|\"/g,"")+'" aria-label="'+e.nextTxt.replace(/<|>|\"/g,"")+" "+e.yearTxt.replace(/<|>|\"/g,"")+'"'+(d?' tabindex="0"':' aria-disabled="true" tabindex="-1"')+' role="button" id="'+e.nextBtnId+'Y"><span aria-hidden="true">'+e.rightButtonYearText+"</span></td></tr>"),!e.isOutsideDateRange(new Date(n.year,n.month,e.range[n.month].max))),d=!e.isOutsideDateRange(new Date(t.year,t.month,1)),t='<tr class="monthSelector" role="presentation"><td class="nav prev btn month'+(s?"":" disabled")+'" accesskey="3" title="'+e.prevTxt.replace(/<|>|\"/g,"")+" "+e.monthTxt.replace(/<|>|\"/g,"")+'" aria-label="'+e.prevTxt.replace(/<|>|\"/g,"")+" "+e.monthTxt.replace(/<|>|\"/g,"")+'"'+(s?' tabindex="0"':' aria-disabled="true" tabindex="-1"')+' role="button" id="'+e.prevBtnId+'"><span aria-hidden="true">'+e.leftButtonMonthText+'</span></td><td colspan="5" class="month" id="'+e.monthCellId+'" role="presentation"><span>'+e.range[e.range.current.month].name+(y.condenseYear?" "+e.range.current.year:"")+'</span></td><td class="nav next btn month'+(d?"":" disabled")+'" accesskey="4" title="'+e.nextTxt.replace(/<|>|\"/g,"")+" "+e.monthTxt.replace(/<|>|\"/g,"")+'" aria-label="'+e.nextTxt.replace(/<|>|\"/g,"")+" "+e.monthTxt.replace(/<|>|\"/g,"")+'"'+(d?' tabindex="0"':' aria-disabled="true" tabindex="-1"')+' role="button" id="'+e.nextBtnId+'"><span aria-hidden="true">'+e.rightButtonMonthText+"</span></td></tr>";e.content="",e.content+='<table role="presentation" class="calendar">'+o+t+'<tr role="presentation" aria-hidden="true">';for(var i=e.iter=0;i<7;i++){var u=e.getWDay(e,i),c=e.range.wDays[u];i||(e.iter=e.iterE=6<u+6?-1+u:u+6,e.iterS=u),e.content+='<th scope="col" class="week" title="'+c.lng+'" role="presentation"><span>'+c.shrt+"</span></th>"}e.content+='</tr><tr role="presentation">';var l=new Date,m=(l.setDate(1),l.setMonth(e.range.current.month),l.setFullYear(e.range.current.year),l.getDay()),g=(l.setDate(e.range[e.range.current.month].max),l.getDay()),p=e.iterS;for(!0===e.drawFullCalendar&&(f=new Date(n.year,n.month+1,0).getDate()-new Date(e.range.current.year,e.range.current.month,0).getDay()+e.range.wdOffset);p!==m;)p=6<p+1?0:p+1,!0===e.drawFullCalendar?(a.setDate(f),e.content+=e.createDayCell(f,a,"dayInPrevMonth",e.isDisabledDate(e,f,a)),++f):e.content+='<td class="empty" role="presentation"><span>&nbsp;</span></td>';e.range.track={};for(i=1;i<=31;i++)e.range.track[e.baseId+i]=i;for(var f,i=1;i<=e.range[e.range.current.month].max;i++){l.setDate(i);var D=i===e.fn.current.mDay&&e.range.current.month===e.fn.current.month&&e.range.current.year===e.fn.current.year;e.content+=e.createDayCell(i,l,"dayInMonth",e.isDisabledDate(e,i,l),D),(p=l.getDay())===e.iter&&i<e.range[e.range.current.month].max&&(e.content+='</tr><tr role="presentation">')}for(!0===e.drawFullCalendar&&(f=1);g!==e.iter;)g=6<g+1?0:g+1,!0===e.drawFullCalendar?(r.setDate(f),e.content+=e.createDayCell(f,r,"dayInNextMonth",e.isDisabledDate(e,f,r)),++f):e.content+='<td class="empty" role="presentation"><span>&nbsp;</span></td>';e.content+="</tr></table>",$A.isNode(e.messageContainer)||(e.messageContainerId=$A.genId(),e.messageContainer=$A.create("div",{id:e.messageContainerId},{},"monthMessage")),e.range[e.range.current.month].message[e.range.current.year]?(e.messageContainer.innerHTML="<p>"+e.range[e.range.current.month].message[e.range.current.year]+"</p>",$A.setAttr(e.container,"aria-labelledby",e.messageContainerId)):($||(e.messageContainer.innerHTML="<p>"+e.helpTextShort+"</p>"),$A.remAttr(e.container,"aria-labelledby")),e.showEscBtn&&(e.content+='<button id="'+e.baseId+'esc" aria-label="'+e.escBtnName+'" title="'+e.escBtnName+'" class="esc-button">'+e.escBtnIcon+"</button>")},mouseEnter:function(e,t){t.mouseWithin=!0},mouseLeave:function(e,t){t.mouseWithin=!1},click:function(e,t){e.stopPropagation()},keyDown:function(e,t){112===$A.keyEvent(e)&&($A.remAttr(t.container,"aria-labelledby"),t.container.appendChild(t.messageContainer),$A.setAttr(t.messageContainer,{role:"alert"}),$||(t.messageContainer.innerHTML="<p>"+t.helpText+"</p>"),e.preventDefault(),e.stopPropagation())},updateDisabled:function(){this.query('td[aria-disabled="true"]',function(e,t){$A.data(t,"disabled",!0)})},updateCommented:function(){this.query("td.comment",function(e,t){$A.data(t,"_HasComment",!0)})},duringRender:function(e){e.rerendering?e.container.innerHTML=e.content:(e.datepickerLoaded=!1,e.setAttr({title:$?"":e.helpTextShort})),e.messageContainer.innerHTML&&e.container.appendChild(e.messageContainer)},afterRender:function(s){s.showEscBtn&&(s.escBtn=s.container.querySelector("button.esc-button")),s.buttons={pY:y.condenseYear?null:$A.get(s.prevBtnId+"Y"),nY:y.condenseYear?null:$A.get(s.nextBtnId+"Y"),pM:$A.get(s.prevBtnId),nM:$A.get(s.nextBtnId)},!y.condenseYear&&s.disableNavPrevYearBtn&&$A.setAttr(s.buttons.pY,"aria-disabled","true"),!y.condenseYear&&s.disableNavNextYearBtn&&$A.setAttr(s.buttons.nY,"aria-disabled","true"),s.disableNavPrevMonthBtn&&$A.setAttr(s.buttons.pM,"aria-disabled","true"),s.disableNavNextMonthBtn&&$A.setAttr(s.buttons.nM,"aria-disabled","true"),s.prevCurrent||(s.prevCurrent={}),$A.extend(!0,s.prevCurrent,s.range.current),s.updateDisabled(),s.updateCommented();function d(){var e,t;s.disableNavNextMonthBtn&&$A.data(s.buttons.nM,"disabled")||($A.extend(!0,s.prevCurrent,s.range.current),t=s.modifyDateValues({month:s.range.current.month,year:s.range.current.year},{month:1}),s.isOutsideDateRange(new Date(t.year,t.month,1))||(e=s.range.current.mDay>s.range[t.month].max?s.range[t.month].max:s.range.current.mDay,t=new Date(t.year,t.month,e),s.isOutsideDateRange(t))?s.date=s.maxDate:s.date=t,s.setCurrent(s),s.rerenderTable(s))}function i(){var e,t;s.disableNavPrevMonthBtn&&$A.data(s.buttons.pM,"disabled")||($A.extend(!0,s.prevCurrent,s.range.current),t=s.modifyDateValues({month:s.range.current.month,year:s.range.current.year},{month:-1}),s.isOutsideDateRange(new Date(t.year,t.month,s.range[t.month].max))||(e=s.range.current.mDay>s.range[t.month].max?s.range[t.month].max:s.range.current.mDay,t=new Date(t.year,t.month,e),s.isOutsideDateRange(t))?s.date=s.minDate:s.date=t,s.setCurrent(s),s.rerenderTable(s))}function u(e){var t,n;!e&&(!y.condenseYear&&$A.data(s.buttons.pY,"disabled")||y.condenseYear&&s.disableNavPrevYearBtn)||e&&(!y.condenseYear&&$A.data(s.buttons.nY,"disabled")||y.condenseYear&&s.disableNavNextYearBtn)||($A.extend(!0,s.prevCurrent,s.range.current),t=s.range.current.month,e=e?s.range.current.year+1:s.range.current.year-1,1===t&&(s.range[1].max=28),n=s.range.current.mDay>s.range[t].max?s.range[t].max:s.range.current.mDay,e=new Date(e,t,n),s.isOutsideDateRange(e)||(s.date=e,s.setCurrent(s),s.rerenderTable(s)))}var c=!1;$A.on("#"+s.containerId+" td.day",{focus:function(e){var t,n,a;$A.data(this,"_HasComment")?(t=s.range[s.range.current.month].comments[s.range.current.year],n=s.range[s.range.current.month].comments["*"],a="",t&&t[s.range.current.mDay]?a=t[s.range.current.mDay]:n&&n[s.range.current.mDay]&&(a=n[s.range.current.mDay]),(a=$A.trim(a.replace(/<|>/g,"")))&&(A.content=a,A.rerender(function(){x.openEditor&&(x.openEditor=!1,x.loaded&&x.reset())}))):A.loaded&&A.remove()},click:function(e){var t;$A.hasClass(this,"dayInPrevMonth")?(t=s.modifyDateValues({month:s.range.current.month,year:s.range.current.year},{month:-1}),s.date=new Date(t.year,t.month,s.range.track[this.id])):$A.hasClass(this,"dayInNextMonth")?(t=s.modifyDateValues({month:s.range.current.month,year:s.range.current.year},{month:1}),s.date=new Date(t.year,t.month,s.range.track[this.id])):s.date.setDate(s.range.track[this.id]),s.setCurrent(s),$A.data(this,"_Selected")||!p&&!$A.data(this,"_HasComment")?$A.data(this,"disabled")?(e.stopPropagation(),e.preventDefault()):($A.extend(!0,s.fn.current,s.range.current),g=!(m=!1),s.storeCurrentDate(s),f.apply(this,[e,s,h])):s.setFocus(this),e.preventDefault()},keydown:function(e){l(e);var t=$A.keyEvent(e);if(13===t)c=!0,$A.data(this,"disabled")||($A.extend(!0,s.fn.current,s.range.current),g=!(m=!1),s.storeCurrentDate(s),f.apply(this,[e,s,h])),e.preventDefault();else if(32===t&&p&&y.editor&&y.editor.show&&!x.openEditor)x.openEditor=!0,x.reset(),e.preventDefault();else if(37<=t&&t<=40||27===t||33<=t&&t<=36){var n,a,r,o=s.range.current.wDay;if(37===t)$A.extend(!0,s.prevCurrent,s.range.current),1<s.range.current.mDay?(s.range.current.mDay--,s.range.current.wDay=o?o-1:6,s.setFocus(s.range.index[s.range.current.mDay-1],this)):1!==s.range.current.mDay||$A.data(s.buttons.pM,"disabled")||(n=s.modifyDateValues({month:s.range.current.month,year:s.range.current.year},{month:-1}),a=s.range[n.month].max,1===n.month&&(a=1===new Date(n.year,1,29).getMonth()?29:28),s.date=new Date(n.year,n.month,a),s.setCurrent(s),s.rerenderTable(s));else if(39===t)$A.extend(!0,s.prevCurrent,s.range.current),s.range.current.mDay<s.range[s.range.current.month].max?(s.range.current.mDay++,s.range.current.wDay=6===o?0:o+1,s.setFocus(s.range.index[s.range.current.mDay-1],this)):s.range.current.mDay!=s.range[s.range.current.month].max||$A.data(s.buttons.nM,"disabled")||(n=s.modifyDateValues({month:s.range.current.month,year:s.range.current.year},{month:1}),s.date=new Date(n.year,n.month,1),s.setCurrent(s),s.rerenderTable(s));else if(38===t)$A.extend(!0,s.prevCurrent,s.range.current),0<s.range.current.mDay-7?(s.range.current.mDay-=7,s.setFocus(s.range.index[s.range.current.mDay-1],this)):$A.data(s.buttons.pM,"disabled")||(1===(n=s.modifyDateValues({month:s.range.current.month,year:s.range.current.year},{month:-1})).month&&1===new Date(n.year,1,29).getMonth()?s.range[n.month].max=29:1===n.month&&(s.range[n.month].max=28),a=s.range[n.month].max+(s.range.current.mDay-7),r=new Date(n.year,n.month,a),s.isOutsideDateRange(r)||(s.date=r,s.setCurrent(s),s.rerenderTable(s)));else if(40===t)$A.extend(!0,s.prevCurrent,s.range.current),s.range.current.mDay+7<=s.range[s.range.current.month].max?(s.range.current.mDay+=7,s.setFocus(s.range.index[s.range.current.mDay-1],this)):$A.data(s.buttons.nM,"disabled")||(n=s.modifyDateValues({month:s.range.current.month,year:s.range.current.year},{month:1}),a=s.range.current.mDay+7-s.range[s.range.current.month].max,r=new Date(n.year,n.month,a),s.isOutsideDateRange(r)||(s.date=r,s.setCurrent(s),s.rerenderTable(s)));else if(27===t)s.remove(),g=!(m=!1),$A.focus(h);else if(33===t)$A.extend(!0,s.prevCurrent,s.range.current),s.pageUpDownNatural?D.alt?u(!1):i():D.alt?u(!0):d();else if(34===t)$A.extend(!0,s.prevCurrent,s.range.current),s.pageUpDownNatural?D.alt?u(!0):d():D.alt?u(!1):i();else if(36===t){if($A.extend(!0,s.prevCurrent,s.range.current),o!==s.iterS&&1<s.range.current.mDay){for(;s.range.current.wDay!==s.iterS&&$A.get(s.baseId+(s.range.current.mDay-1));)s.range.current.wDay=s.range.current.wDay-1<0?6:s.range.current.wDay-1,s.range.current.mDay--;s.setFocus(s.range.index[s.range.current.mDay-1],this)}}else if(35===t&&($A.extend(!0,s.prevCurrent,s.range.current),o!==s.iterE&&s.range.current.mDay<s.range[s.range.current.month].max)){for(;s.range.current.wDay!==s.iterE&&$A.get(s.baseId+(s.range.current.mDay+1));)s.range.current.wDay=6<s.range.current.wDay+1?0:s.range.current.wDay+1,s.range.current.mDay++;s.setFocus(s.range.index[s.range.current.mDay-1],this)}e.preventDefault()}else 9!==t||D.alt||D.ctrl||D.shift?9!==t||D.alt||D.ctrl||!D.shift||($A.extend(!0,s.prevCurrent,s.range.current),$A.data(s.buttons.nM,"disabled")?$A.data(s.buttons.pM,"disabled")?y.condenseYear||$A.data(s.buttons.nY,"disabled")?y.condenseYear||$A.data(s.buttons.pY,"disabled")||s.buttons.pY.focus():s.buttons.nY.focus():s.buttons.pM.focus():s.buttons.nM.focus(),e.preventDefault()):($A.extend(!0,s.prevCurrent,s.range.current),p&&x.loaded?(x.textarea.hidden?x.commentBtn:x.textarea).focus():s.showEscBtn||(y.condenseYear||$A.data(s.buttons.pY,"disabled")?y.condenseYear||$A.data(s.buttons.nY,"disabled")?$A.data(s.buttons.pM,"disabled")?$A.data(s.buttons.nM,"disabled")||s.buttons.nM.focus():s.buttons.pM.focus():s.buttons.nY.focus():s.buttons.pY.focus(),e.preventDefault()))},keyup:function(e){l(e),13!==$A.keyEvent(e)||c||s.isAdd||($A.data(this,"disabled")||($A.extend(!0,s.fn.current,s.range.current),s.setFocus.firstOpen||(g=!(m=!1),s.storeCurrentDate(s),f.apply(this,[e,s,h]))),e.preventDefault()),c=s.setFocus.firstOpen=s.isAdd=!1}},"."+b),s.showEscBtn&&$A.on(s.escBtn,{click:function(e){s.remove(),g=!(m=!1),$A.focus(h),e.preventDefault()},keydown:function(e){l(e);var t=$A.keyEvent(e);27===t||13===t||32===t?(s.remove(),g=!(m=!1),$A.focus(h)):9!==t||D.alt||D.ctrl||D.shift?9!==t||D.alt||D.ctrl||!D.shift||p&&x.loaded&&x.commentBtn.focus():((y.condenseYear||$A.data(s.buttons.pY,"disabled")?y.condenseYear||$A.data(s.buttons.nY,"disabled")?$A.data(s.buttons.pM,"disabled")?$A.data(s.buttons.nM,"disabled")?v.current:s.buttons.nM:s.buttons.pM:s.buttons.nY:s.buttons.pY).focus(),e.preventDefault())},keyup:function(e){l(e)},focus:function(e){},blur:function(e){}},"."+b),$A.on(s.buttons.pM,{click:function(e){s.navBtn="PM",i(),e.preventDefault()},keydown:function(e){l(e);var t=$A.keyEvent(e);13===t||32===t?(s.navBtn="PM",i(),e.preventDefault()):27===t?(s.remove(),g=!(m=!1),$A.focus(h),e.preventDefault()):y.condenseYear||38!==t?39===t?(s.buttons.nM.focus(),e.preventDefault()):37===t||40===t?e.preventDefault():9!==t||D.alt||D.ctrl||D.shift?9!==t||D.alt||D.ctrl||!D.shift||(y.condenseYear||$A.data(s.buttons.nY,"disabled")?y.condenseYear||$A.data(s.buttons.pY,"disabled")?s.showEscBtn?(s.escBtn.focus(),e.preventDefault()):p&&x.loaded?(x.textarea.hidden?x.commentBtn:x.textarea).focus():(v.current.focus(),e.preventDefault()):(s.buttons.pY.focus(),e.preventDefault()):(s.buttons.nY.focus(),e.preventDefault())):(($A.data(s.buttons.nM,"disabled")?v.current:s.buttons.nM).focus(),e.preventDefault()):(s.buttons.pY.focus(),e.preventDefault())},keyup:function(e){l(e)}},"."+b),$A.on(s.buttons.nM,{click:function(e){s.navBtn="NM",d(),e.preventDefault()},keydown:function(e){l(e);var t=$A.keyEvent(e);13===t||32===t?(s.navBtn="NM",d(),e.preventDefault()):27===t?(s.remove(),g=!(m=!1),$A.focus(h),e.preventDefault()):y.condenseYear||38!==t?37===t?(s.buttons.pM.focus(),e.preventDefault()):39===t||40===t?e.preventDefault():9!==t||D.alt||D.ctrl||D.shift?9!==t||D.alt||D.ctrl||!D.shift||($A.data(s.buttons.pM,"disabled")?y.condenseYear||$A.data(s.buttons.nY,"disabled")?y.condenseYear||$A.data(s.buttons.pY,"disabled")?s.showEscBtn?(s.escBtn.focus(),e.preventDefault()):p&&x.loaded?(x.textarea.hidden?x.commentBtn:x.textarea).focus():(v.current.focus(),e.preventDefault()):(s.buttons.pY.focus(),e.preventDefault()):(s.buttons.nY.focus(),e.preventDefault()):(s.buttons.pM.focus(),e.preventDefault())):(v.current.focus(),e.preventDefault()):(s.buttons.nY.focus(),e.preventDefault())},keyup:function(e){l(e)}},"."+b),y.condenseYear||$A.on(s.buttons.pY,{click:function(e){s.navBtn="PY",u(),e.preventDefault()},keydown:function(e){l(e);var t=$A.keyEvent(e);13===t||32===t?(s.navBtn="PY",u(),e.preventDefault()):27===t?(s.remove(),g=!(m=!1),$A.focus(h),e.preventDefault()):39===t?(s.buttons.nY.focus(),e.preventDefault()):40===t?(s.buttons.pM.focus(),e.preventDefault()):37===t||38===t?e.preventDefault():9!==t||D.alt||D.ctrl||D.shift?9!==t||D.alt||D.ctrl||!D.shift||((s.showEscBtn?s.escBtn:p&&x.loaded?x.commentBtn:v.current).focus(),e.preventDefault()):(($A.data(s.buttons.nY,"disabled")?$A.data(s.buttons.pM,"disabled")?$A.data(s.buttons.nM,"disabled")?v.current:s.buttons.nM:s.buttons.pM:s.buttons.nY).focus(),e.preventDefault())},keyup:function(e){l(e)}},"."+b),y.condenseYear||$A.on(s.buttons.nY,{click:function(e){s.navBtn="NY",u(!0),e.preventDefault()},keydown:function(e){l(e);var t=$A.keyEvent(e);13===t||32===t?(s.navBtn="NY",u(!0),e.preventDefault()):27===t?(s.remove(),g=!(m=!1),$A.focus(h),e.preventDefault()):37===t?(s.buttons.pY.focus(),e.preventDefault()):40===t?(s.buttons.nM.focus(),e.preventDefault()):38===t||39===t?e.preventDefault():9!==t||D.alt||D.ctrl||D.shift?9!==t||D.alt||D.ctrl||!D.shift||($A.data(s.buttons.pY,"disabled")?s.showEscBtn?(s.escBtn.focus(),e.preventDefault()):p&&x.loaded?(x.textarea.hidden?x.commentBtn:x.textarea).focus():(v.current.focus(),e.preventDefault()):(s.buttons.pY.focus(),e.preventDefault())):(($A.data(s.buttons.pM,"disabled")?$A.data(s.buttons.nM,"disabled")?v.current:s.buttons.nM:s.buttons.pM).focus(),e.preventDefault())},keyup:function(e){l(e)}},"."+b),s.range.index=s.container.querySelectorAll("td.dayInMonth"),s.setFocus.firstOpen=!0,s.setFocus(s.range.index[s.range.current.mDay-1]),s.rerendering||(p&&y.editor&&y.editor.show&&x.render(),s.openOnFocus&&$A.setAttr(h,"aria-expanded","true"),$A.setAttr(s.triggerNode,"aria-expanded","true"),setTimeout(function(){s.datepickerLoaded=!0},750))},helpTextShort:e,helpText:a,afterRemove:function(e){e.rerendering||(y.resetCurrent&&(e.date=new Date,e.setCurrent(e),$A.extend(!0,e.fn.current,e.range.current)),p&&A.remove(),p&&y.editor&&y.editor.show&&(x.lock=!1,x.remove()),$A.setAttr(e.triggerNode,"aria-expanded","false")),$A.isFn(y.configure)&&(e.lock=e.configureLoading=!1)}}],y)[0],A=$A(v,[{id:o+"commentTooltip",role:y.comments&&y.comments.role||"Comment",widgetType:"Datepicker",returnFocus:!1,className:y.comments&&y.comments.className||"commentTooltip",beforeRender:function(e){e.targetNode=e.parent.wrapper}}],y.comments&&y.comments.config||{})[0],x=$A(v,[{id:o+"commentAdd",role:y.editor&&y.editor.role||"Edit",widgetType:"Datepicker",className:y.editor&&y.editor.className||"commentAdd",openEditor:!1,content:'<textarea style="visibility: hidden; display: none;" class="commentTa" title="'+A.role+'"></textarea><button title="'+(y.editor&&y.editor.role||"Edit")+" "+A.role+'" class="commentBtn">'+(y.editor&&y.editor.role||"Edit")+"</button>",beforeRender:function(e){e.targetNode=e.parent.wrapper},click:function(e,t){e.stopPropagation()},duringRender:function(e){$A.setAttr(e.wrapper,{role:"dialog","aria-modal":"false","aria-label":e.role}),$A.setAttr(e.container,"role","application")},add:function(e){var t=$A.trim(e.textarea.value.replace(/<|>|\n/g," ")),n=(e.comments[e.parent.range.current.year]||(e.comments[e.parent.range.current.year]={}),e.comments[e.parent.range.current.year][e.parent.range.current.mDay]=t,e.parent.range.current.mDay+", "+e.parent.range.wDays[e.parent.range.current.wDay].lng+" "+e.parent.range[e.parent.range.current.month].name+" "+e.parent.range.current.year),a="";(e.parent.range[e.parent.range.current.month].disabled[e.parent.range.current.year]&&-1!==$A.inArray(e.parent.range.current.mDay,e.parent.range[e.parent.range.current.month].disabled[e.parent.range.current.year])||e.parent.range[e.parent.range.current.month].disabled["*"]&&-1!==$A.inArray(e.parent.range.current.mDay,e.parent.range[e.parent.range.current.month].disabled["*"]))&&(a+=e.parent.disabledTxt.replace(/<|>|\"/g,"")+" "),t?($A.addClass(e.parent.current,"comment"),$A.data(e.parent.current,"_HasComment",!0),a+=e.parent.commentedTxt.replace(/<|>|\"/g,"")+" "):($A.remClass(e.parent.current,"comment"),$A.data(e.parent.current,"_HasComment",!1)),n=a+n,$A.setAttr(e.parent.current,{title:$A.trim(a),"aria-label":n+" "+t.replace(/\"/g,'"')})},reset:function(){var e,n=this;n.loaded&&(n.openEditor?(n.textarea?($A.css(n.textarea,{visibility:"",display:""}),n.css("left",n.parent.wrapper.offsetLeft)):n.textarea=n.query("textarea",function(){$A.css(this,{visibility:"",display:""}),n.css("left",n.parent.wrapper.offsetLeft),$A.on(this,{focus:function(e){A.loaded&&A.remove()},keydown:function(e){var t=$A.keyEvent(e);800<this.value.length&&(this.value=this.value.substring(0,799)),13===t?(n.parent.isAdd=!0,n.add.apply(this,[n]),n.parent.current.focus(),n.openEditor=!1,n.reset(),e.preventDefault()):27===t&&(n.parent.current.focus(),n.openEditor=!1,n.reset(),e.preventDefault())}},"."+b)})[0],$A.setAttr(n.textarea,{title:n.parent.range.current.mDay+", "+n.parent.range.wDays[n.parent.range.current.wDay].lng+" "+n.parent.range[n.parent.range.current.month].name+" "+n.parent.range.current.year}).focus(),n.comments=n.parent.range[n.parent.range.current.month].comments,(e=n.comments[n.parent.range.current.year]&&n.comments[n.parent.range.current.year][n.parent.range.current.mDay]||n.comments["*"]&&n.comments["*"][n.parent.range.current.mDay]||"")&&(n.textarea.value=e),$A.setAttr(n.commentBtn,{title:(y.editor&&y.editor.action1||"Save")+" "+A.role}).innerHTML=y.editor&&y.editor.action1||"Save"):(n.textarea&&(n.textarea.value="",$A.css(n.textarea,{visibility:"hidden",display:"none"})),n.css("left",n.parent.wrapper.offsetLeft+n.parent.wrapper.offsetWidth-n.wrapper.offsetWidth),$A.setAttr(n.commentBtn,{title:(y.editor&&y.editor.role||"Edit")+" "+A.role}).innerHTML=y.editor&&y.editor.role||"Edit"))},afterRender:function(n){n.textarea=n.container.querySelector("textarea"),n.commentBtn=n.container.querySelector("button"),$A.on(n.commentBtn,{focus:function(e){A.loaded&&A.remove()},click:function(e){n.openEditor?(n.parent.isAdd=!0,n.add.apply(n.commentBtn,[n]),n.parent.current.focus(),n.openEditor=!1):n.openEditor=!0,n.reset(),e.preventDefault()},keydown:function(e){var t=$A.keyEvent(e);27===t?(n.openEditor&&(n.parent.current.focus(),n.openEditor=!1,n.reset()),e.preventDefault()):9!==t||e.altKey||e.shiftKey||e.ctrlKey||(n.parent.showEscBtn?n.escBtn.focus():y.condenseYear||$A.data(n.parent.buttons.pY,"disabled")?y.condenseYear||$A.data(n.parent.buttons.nY,"disabled")?$A.data(n.parent.buttons.pM,"disabled")?$A.data(n.parent.buttons.nM,"disabled")||n.parent.buttons.nM.focus():n.parent.buttons.pM.focus():n.parent.buttons.nY.focus():n.parent.buttons.pY.focus(),e.preventDefault())}},"."+b),n.reset(),n.lock=!0,$A.on(n.textarea,"keydown",function(e){var t=$A.keyEvent(e);27===t?(n.openEditor&&(n.parent.current.focus(),n.openEditor=!1,n.reset()),e.preventDefault()):9!==t||e.altKey||e.ctrlKey||!e.shiftKey?13===t&&(n.commentBtn.click(),e.preventDefault()):(v.current.focus(),e.preventDefault())},"."+b)},beforeRemove:function(e){e.openEditor=!1,e.textarea=null,e.parent.setFocus.firstOpen=!0},lock:!(p&&y.editor&&y.editor.show)}],y.editor&&y.editor.config||{})[0],d=($A.on(window,"resize",function(e){v.setPosition(),A.setPosition(),x.setPosition(),x.reset()},"."+b),$A.setAttr(s,"aria-expanded","false"),v),i=!1,$=($A.on(s,{click:function(e){t.call(this),e.preventDefault()},keydown:function(e){32===$A.keyEvent(e)&&(t.call(this),e.preventDefault(),e.stopPropagation())}},"."+b),!1);return!0===y.openOnFocus?($A.setAttr(h,"aria-expanded","false"),$A.on(h,{touchstart:function(e){$=!0,i||d.loaded||m||g||d.disabled||(i=!0,$A.trigger(s,"opendatepicker"),e.preventDefault(),setTimeout(n,1e3))},focus:function(e){!$||i||d.loaded||m||!g?i||d.loaded||m||g||d.disabled||(i=!0,$A.trigger(s,"opendatepicker"),$||setTimeout(function(){$A.announce(d.openOnFocusHelpText)},1),setTimeout(n,1e3)):(e.preventDefault(),this.blur(),s&&$A.setFocus(s)),g=!(m=!0)},mousedown:function(e){this.blur(),m=g=!1,this.focus()},blur:function(e){d.loaded&&m&&!g&&!d.mouseWithin&&d.remove(),m=!1},keydown:function(e){var t=$A.keyEvent(e);40===t&&m&&!g&&d.loaded?(g=!(m=!1),d.setFocus(d.range.index[d.range.current.mDay-1]),e.preventDefault(),e.stopPropagation()):40!==t||d.loaded||i||d.disabled?27===t&&m&&!g&&d.loaded?(g=m=!1,d.remove(),e.preventDefault(),e.stopPropagation()):9===t&&m&&!g&&d.loaded&&e.shiftKey?(g=m=!1,d.remove()):9===t&&m&&!g&&d.loaded&&!e.shiftKey&&(g=!(m=!1),d.setFocus(d.range.index[d.range.current.mDay-1]),setTimeout(function(){$A.announce(d.helpTextShort)},1),e.preventDefault(),e.stopPropagation()):(g=!(m=i=!0),$A.trigger(s,"opendatepicker"),setTimeout(n,1e3),g=!(m=!1),d.setFocus(d.range.index[d.range.current.mDay-1]),e.preventDefault(),e.stopPropagation())}},"."+b)):$A.on(h,{touchstart:function(e){$=!0},focus:function(e){!$||i||d.loaded||m||!g||(e.preventDefault(),this.blur(),s&&$A.setFocus(s)),g=!(m=!0)}}),d.setDisabled(d,d.disabled),$A(s).describedBy(h).controls(h),$A.on("body","click",function(e){v.datepickerLoaded&&v.remove()},"."+b),v}}));