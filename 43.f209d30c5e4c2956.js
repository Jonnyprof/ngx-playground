"use strict";(self.webpackChunkapp_std=self.webpackChunkapp_std||[]).push([[43],{3043:(v,r,o)=>{o.r(r),o.d(r,{ChangeDetectionSignalsComponent:()=>h});var c=o(9334),s=o(8722),g=o(4646),e=o(5002),p=o(7146),m=o(1297),d=o(9555);let l=(()=>{class n{constructor(t){this.timeEventsStore=t,this.eventNumber=(0,d.O4)(this.timeEventsStore.eventNumber$,{initialValue:s.E.eventNumber})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(s.v))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),u=(()=>{class n{constructor(){this.signalsDataService=(0,e.f3M)(l)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["pg-cd-signals"]],standalone:!0,features:[e._Bn([l]),e.jDz],decls:5,vars:1,consts:[[1,"mb-4"],[1,"font-bold"],[3,"text"]],template:function(t,i){1&t&&(e.TgZ(0,"header",0)(1,"h4",1),e._uU(2,"Parent container with signal() on inputs"),e.qZA()(),e._UZ(3,"pg-change-detection-logger")(4,"pg-cd-on-push-input",2)),2&t&&(e.xp6(4),e.Q6J("text",i.signalsDataService.eventNumber()))},dependencies:[c.ez,m.x,p.e],changeDetection:0}),n})(),h=(()=>{class n{constructor(t){this.timeEventsStore=t,this.enabled$=this.timeEventsStore.enabled$}toggleTimer(){this.timeEventsStore.toggleTimer()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s.v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["pg-change-detection-signals"]],standalone:!0,features:[e._Bn([s.v]),e.jDz],decls:11,vars:3,consts:[[1,"mt-2","mb-4"],[1,"font-semibold"],[1,"text-sm"],[1,"mb-4","rounded-full","bg-orange-300","py-2","px-4","font-bold","text-white","transition","duration-150","ease-in-out","hover:bg-orange-400",3,"click"],[1,"grid","grid-cols-2","gap-10"],[1,"component"]],template:function(t,i){1&t&&(e.TgZ(0,"header",0)(1,"h1",1),e._uU(2,"Change detection store event occurs"),e.qZA(),e.TgZ(3,"p",2),e._uU(4," Comparison between async and ngrxPush pipes change detection. "),e.qZA()(),e.TgZ(5,"button",3),e.NdJ("click",function(){return i.toggleTimer()}),e._uU(6),e.ALo(7,"async"),e.qZA(),e.TgZ(8,"main",4),e._UZ(9,"pg-cd-pipe-async",5)(10,"pg-cd-signals",5),e.qZA()),2&t&&(e.xp6(6),e.hij(" ",e.lcZ(7,1,i.enabled$)?"Disable":"Enable"," timer\n"))},dependencies:[c.ez,c.Ov,g.W,u],changeDetection:0}),n})()}}]);