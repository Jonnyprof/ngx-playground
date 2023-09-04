"use strict";(self.webpackChunkapp_std=self.webpackChunkapp_std||[]).push([[386],{386:(H,h,s)=>{s.r(h),s.d(h,{ChangeDetectionPipeComponent:()=>k});var a=s(9334),c=s(8722),g=s(4646),n=s(5002),f=s(5368),m=s(1769),C=s(749),p=s(8040),x=s(2489),y=s(7745),l=s(4180),M=s(4137),w=s(8411);let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:function(){return function b(e){return e instanceof n.R0b}((0,n.f3M)(n.R0b))?new D:(0,n.f3M)(S)},providedIn:"root"}),e})(),S=(()=>{class e extends u{constructor(t){super(),this.appRef=t,this.isScheduled=!1}schedule(){this.isScheduled||(this.isScheduled=!0,requestAnimationFrame(()=>{this.appRef.tick(),this.isScheduled=!1}))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(n.z2F))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class D extends u{schedule(){}}let R=(()=>{class e{constructor(t,r){this.cdRef=t,this.tickScheduler=r}schedule(){this.cdRef.markForCheck(),this.tickScheduler.schedule()}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(n.sBO),n.LFG(u))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})();function O(e){const i=function L(e){return i=>e[i.type]?.(i)}(e),t=new x.t(1);return{nextPotentialObservable(r){t.next(r)},handlePotentialObservableChanges:()=>t.pipe((0,l.x)(),function Z(){return(0,y.z)((0,w.w)(e=>{const i=function T(e){return(0,f.b)(e)?e:function E(e){return function F(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}(e)&&Object.keys(e).length>0&&Object.values(e).every(f.b)}(e)?(0,m.a)(function j(e){return Object.keys(e).reduce((i,t)=>({...i,[t]:e[t].pipe((0,l.x)())}),{})}(e)):function V(e){return"function"==typeof e?.then}(e)?(0,C.D)(e):new p.y(i=>{i.next(e)})}(e);let t=!0,r=!0;return new p.y(o=>{const v=(0,n.rg0)(()=>i.subscribe({next(d){o.next({type:"next",value:d,reset:t,synchronous:r}),t=!1},error(d){o.next({type:"error",error:d,reset:t,synchronous:r}),t=!1},complete(){o.next({type:"complete",reset:t,synchronous:r}),t=!1}}));return t&&(o.next({type:"suspense",reset:t,synchronous:!0}),t=!1),r=!1,v})}))}(),(0,l.x)(A),(0,M.b)(i))}}function A(e,i){return e.type===i.type&&e.reset===i.reset&&("next"===i.type?e.value===i.value:"error"!==i.type||e.error===i.error)}let $=(()=>{class e{constructor(t){this.errorHandler=t,this.renderScheduler=function P(){return new R((0,n.f3M)(n.sBO),(0,n.f3M)(u))}(),this.renderEventManager=O({suspense:r=>this.setRenderedValue(void 0,r.synchronous),next:r=>this.setRenderedValue(r.value,r.synchronous),error:r=>{r.reset&&this.setRenderedValue(void 0,r.synchronous),this.errorHandler.handleError(r.error)},complete:r=>{r.reset&&this.setRenderedValue(void 0,r.synchronous)}}),this.subscription=this.renderEventManager.handlePotentialObservableChanges().subscribe()}transform(t){return this.renderEventManager.nextPotentialObservable(t),this.renderedValue}ngOnDestroy(){this.subscription.unsubscribe()}setRenderedValue(t,r){t!==this.renderedValue&&(this.renderedValue=t,r||this.renderScheduler.schedule())}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.qLn,16))},e.\u0275pipe=n.Yjl({name:"ngrxPush",type:e,pure:!1,standalone:!0}),e})();var N=s(7146),z=s(1297);let I=(()=>{class e{constructor(t){this.timeEventsStore=t,this.eventNumber$=this.timeEventsStore.eventNumber$}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(c.v))},e.\u0275cmp=n.Xpm({type:e,selectors:[["pg-cd-pipe-ngrx"]],standalone:!0,features:[n.jDz],decls:6,vars:3,consts:[["data-testid","value",1,"mb-4"],[1,"font-bold"],[3,"text"]],template:function(t,r){1&t&&(n.TgZ(0,"header",0)(1,"h4",1),n._uU(2,"Parent container with ngrxPush pipe on inputs"),n.qZA()(),n._UZ(3,"pg-change-detection-logger")(4,"pg-cd-on-push-input",2),n.ALo(5,"ngrxPush")),2&t&&(n.xp6(4),n.Q6J("text",n.lcZ(5,1,r.eventNumber$)))},dependencies:[a.ez,N.e,z.x,$],changeDetection:0}),e})(),k=(()=>{class e{constructor(t){this.timeEventsStore=t,this.enabled$=this.timeEventsStore.enabled$}toggleTimer(){this.timeEventsStore.toggleTimer()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(c.v))},e.\u0275cmp=n.Xpm({type:e,selectors:[["pg-change-detection-pipe"]],standalone:!0,features:[n._Bn([c.v]),n.jDz],decls:11,vars:3,consts:[[1,"mt-2","mb-4"],[1,"font-semibold"],[1,"text-sm"],[1,"mb-4","rounded-full","bg-orange-300","py-2","px-4","font-bold","text-white","transition","duration-150","ease-in-out","hover:bg-orange-400",3,"click"],[1,"grid","grid-cols-2","gap-10"],[1,"component"]],template:function(t,r){1&t&&(n.TgZ(0,"header",0)(1,"h1",1),n._uU(2,"Change detection store event occurs"),n.qZA(),n.TgZ(3,"p",2),n._uU(4," Comparison between async and ngrxPush pipes change detection. "),n.qZA()(),n.TgZ(5,"button",3),n.NdJ("click",function(){return r.toggleTimer()}),n._uU(6),n.ALo(7,"async"),n.qZA(),n.TgZ(8,"main",4),n._UZ(9,"pg-cd-pipe-async",5)(10,"pg-cd-pipe-ngrx",5),n.qZA()),2&t&&(n.xp6(6),n.hij(" ",n.lcZ(7,1,r.enabled$)?"Disable":"Enable"," timer\n"))},dependencies:[a.ez,a.Ov,g.W,I],changeDetection:0}),e})()}}]);