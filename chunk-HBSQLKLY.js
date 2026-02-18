import{a as ue,d as V,e as H,f as T,g as L}from"./chunk-7PGTHQSG.js";import{$a as A,$c as _e,Aa as y,B as h,Bb as me,Cb as P,Ea as g,Fa as re,Ga as O,Gb as z,Ha as f,Hb as de,Ib as se,J as ie,Ja as u,Jb as E,Ka as v,Lc as ve,M as C,Na as le,Pb as fe,Qa as pe,R as l,Ra as s,Sa as _,Ta as J,Ua as I,Wa as ce,Z as k,_ as F,_c as ge,ad as $,ba as N,bb as R,bd as x,ca as Q,da as d,e as ee,hd as q,jb as K,kb as U,l as W,la as b,ma as ae,mb as j,na as oe,o as te,ra as o,sa as m,t as ne,ta as c,ua as G,x as B,y as S,ya as M,z as D,za as w}from"./chunk-5ISDQ4ZR.js";var he=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Se=["header"],De=["title"],Fe=["subtitle"],Ne=["content"],Qe=["footer"],Oe=["*",[["p-header"]],[["p-footer"]]],Ae=["*","p-header","p-footer"];function Re(e,i){e&1&&y(0)}function je(e,i){if(e&1&&(m(0,"div",1),O(1,1),d(2,Re,1,0,"ng-container",2),c()),e&2){let t=g();s(t.cx("header")),o("pBind",t.ptm("header")),l(2),o("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Pe(e,i){if(e&1&&(M(0),_(1),w()),e&2){let t=g(2);l(),J(t.header)}}function ze(e,i){e&1&&y(0)}function $e(e,i){if(e&1&&(m(0,"div",1),d(1,Pe,2,1,"ng-container",3)(2,ze,1,0,"ng-container",2),c()),e&2){let t=g();s(t.cx("title")),o("pBind",t.ptm("title")),l(),o("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),l(),o("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function qe(e,i){if(e&1&&(M(0),_(1),w()),e&2){let t=g(2);l(),J(t.subheader)}}function Ve(e,i){e&1&&y(0)}function He(e,i){if(e&1&&(m(0,"div",1),d(1,qe,2,1,"ng-container",3)(2,Ve,1,0,"ng-container",2),c()),e&2){let t=g();s(t.cx("subtitle")),o("pBind",t.ptm("subtitle")),l(),o("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),l(),o("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function Le(e,i){e&1&&y(0)}function We(e,i){e&1&&y(0)}function Ge(e,i){if(e&1&&(m(0,"div",1),O(1,2),d(2,We,1,0,"ng-container",2),c()),e&2){let t=g();s(t.cx("footer")),o("pBind",t.ptm("footer")),l(2),o("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Je=`
    ${he}

    .p-card {
        display: block;
    }
`,Ke={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},ye=(()=>{class e extends q{name="card";style=Je;classes=Ke;static \u0275fac=(()=>{let t;return function(n){return(t||(t=C(e)))(n||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var Te=new D("CARD_INSTANCE"),X=(()=>{class e extends H{componentName="Card";$pcCard=h(Te,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(T,{self:!0});_componentStyle=h(ye);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(t){ve(this._style(),t)||(this._style.set(t),this.el?.nativeElement&&t&&Object.keys(t).forEach(a=>{this.el.nativeElement.style[a]=t[a]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=ie(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=C(e)))(n||e)}})();static \u0275cmp=k({type:e,selectors:[["p-card"]],contentQueries:function(a,n,r){if(a&1&&(f(r,ge,5),f(r,_e,5),f(r,Se,4),f(r,De,4),f(r,Fe,4),f(r,Ne,4),f(r,Qe,4),f(r,$,4)),a&2){let p;u(p=v())&&(n.headerFacet=p.first),u(p=v())&&(n.footerFacet=p.first),u(p=v())&&(n.headerTemplate=p.first),u(p=v())&&(n.titleTemplate=p.first),u(p=v())&&(n.subtitleTemplate=p.first),u(p=v())&&(n.contentTemplate=p.first),u(p=v())&&(n.footerTemplate=p.first),u(p=v())&&(n.templates=p)}},hostVars:4,hostBindings:function(a,n){a&2&&(pe(n._style()),s(n.cn(n.cx("root"),n.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[A([ye,{provide:Te,useExisting:e},{provide:V,useExisting:e}]),Q([T]),N],ngContentSelectors:Ae,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(a,n){a&1&&(re(Oe),d(0,je,3,4,"div",0),m(1,"div",1),d(2,$e,3,5,"div",0)(3,He,3,5,"div",0),m(4,"div",1),O(5),d(6,Le,1,0,"ng-container",2),c(),d(7,Ge,3,4,"div",0),c()),a&2&&(o("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),l(),s(n.cx("body")),o("pBind",n.ptm("body")),l(),o("ngIf",n.header||n.titleTemplate||n._titleTemplate),l(),o("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),l(),s(n.cx("content")),o("pBind",n.ptm("content")),l(2),o("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),l(),o("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[E,P,z,x,L,T],encapsulation:2,changeDetection:0})}return e})(),Ce=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=F({type:e});static \u0275inj=S({imports:[X,x,L,x,L]})}return e})();var ke=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var Xe=["content"],Ye=["opposite"],Ze=["marker"],Y=e=>({$implicit:e});function et(e,i){e&1&&y(0)}function tt(e,i){e&1&&y(0)}function nt(e,i){if(e&1&&(M(0),d(1,tt,1,0,"ng-container",3),w()),e&2){let t=g().$implicit,a=g();l(),o("ngTemplateOutlet",a.markerTemplate||a._markerTemplate)("ngTemplateOutletContext",R(2,Y,t))}}function it(e,i){if(e&1&&G(0,"div",2),e&2){let t=g(2);s(t.cx("eventMarker")),o("pBind",t.ptm("eventMarker")),b("data-p",t.dataP)}}function at(e,i){if(e&1&&G(0,"div",2),e&2){let t=g(2);s(t.cx("eventConnector")),o("pBind",t.ptm("eventConnector")),b("data-p",t.dataP)}}function ot(e,i){e&1&&y(0)}function rt(e,i){if(e&1&&(m(0,"div",2)(1,"div",2),d(2,et,1,0,"ng-container",3),c(),m(3,"div",2),d(4,nt,2,4,"ng-container",4)(5,it,1,4,"ng-template",null,0,j)(7,at,1,4,"div",5),c(),m(8,"div",2),d(9,ot,1,0,"ng-container",3),c()()),e&2){let t=i.$implicit,a=i.last,n=le(6),r=g();s(r.cx("event")),o("pBind",r.ptm("event")),b("data-p",r.dataP),l(),s(r.cx("eventOpposite")),o("pBind",r.ptm("eventOpposite")),b("data-p",r.dataP),l(),o("ngTemplateOutlet",r.oppositeTemplate||r._oppositeTemplate)("ngTemplateOutletContext",R(23,Y,t)),l(),s(r.cx("eventSeparator")),o("pBind",r.ptm("eventSeparator")),b("data-p",r.dataP),l(),o("ngIf",r.markerTemplate||r._markerTemplate)("ngIfElse",n),l(3),o("ngIf",!a),l(),s(r.cx("eventContent")),o("pBind",r.ptm("eventContent")),b("data-p",r.dataP),l(),o("ngTemplateOutlet",r.contentTemplate||r._contentTemplate)("ngTemplateOutletContext",R(25,Y,t))}}var lt={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Ee=(()=>{class e extends q{name="timeline";style=ke;classes=lt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=C(e)))(n||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var Me=new D("TIMELINE_INSTANCE"),Z=(()=>{class e extends H{componentName="Timeline";bindDirectiveInstance=h(T,{self:!0});$pcTimeline=h(Me,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=h(Ee);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}get dataP(){return this.cn({[this.layout]:this.layout,[this.align]:this.align})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=C(e)))(n||e)}})();static \u0275cmp=k({type:e,selectors:[["p-timeline"]],contentQueries:function(a,n,r){if(a&1&&(f(r,Xe,4),f(r,Ye,4),f(r,Ze,4),f(r,$,4)),a&2){let p;u(p=v())&&(n.contentTemplate=p.first),u(p=v())&&(n.oppositeTemplate=p.first),u(p=v())&&(n.markerTemplate=p.first),u(p=v())&&(n.templates=p)}},hostVars:3,hostBindings:function(a,n){a&2&&(b("data-p",n.dataP),s(n.cn(n.cx("root"),n.styleClass)))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[A([Ee,{provide:Me,useExisting:e},{provide:V,useExisting:e}]),Q([T]),N],decls:1,vars:1,consts:[["marker",""],[3,"pBind","class",4,"ngFor","ngForOf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"]],template:function(a,n){a&1&&d(0,rt,10,27,"div",1),a&2&&o("ngForOf",n.value)},dependencies:[E,me,P,z,x,T],encapsulation:2,changeDetection:0})}return e})(),we=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=F({type:e});static \u0275inj=S({imports:[Z,x,x]})}return e})();function ct(e,i){if(e&1&&(m(0,"p"),_(1),K(2,"date"),c()),e&2){let t=i.$implicit;l(),ce(" ",t.type," - ",t.description," - ",U(2,3,t.date)," ")}}function mt(e,i){if(e&1&&(m(0,"p-card",1)(1,"div",2)(2,"div",3)(3,"strong"),_(4,"Ear Tag Number:"),c(),_(5),c(),m(6,"div",3)(7,"strong"),_(8,"Sex:"),c(),_(9),c(),m(10,"div",3)(11,"strong"),_(12,"Pen Area:"),c(),_(13),c()()(),m(14,"p-card",4)(15,"div",2)(16,"div",3)(17,"strong"),_(18,"Current Weight:"),c(),_(19),c()()(),m(20,"p-card",5)(21,"div",2)(22,"p-timeline",6),d(23,ct,3,5,"ng-template",null,0,j),c()()()),e&2){let t=i;l(5),I(" ",t.id),l(4),I(" ",t.sex),l(4),I(" ",t.pen),l(6),I(" ",t.weight),l(3),o("value",t.events)("align","right")}}var Ie=class e{route=h(fe);cowFacade=h(ue);id$=this.route.paramMap.pipe(W(i=>Number(i.get("id"))));cow$=this.id$.pipe(ne(i=>ee(this,null,function*(){return this.cowFacade.getCowById(i)})),te(i=>i!==void 0));events$=this.cow$.pipe(W(i=>i.events));static \u0275fac=function(t){return new(t||e)};static \u0275cmp=k({type:e,selectors:[["lib-cow-detail"]],decls:2,vars:3,consts:[["content",""],["header","Cow Details"],[1,"p-grid"],[1,"p-col-6"],["header","Basic Information"],["header","Recent Activity"],[3,"value","align"]],template:function(t,a){if(t&1&&(ae(0,mt,25,6),K(1,"async")),t&2){let n;oe((n=U(1,1,a.cow$))?0:-1,n)}},dependencies:[Ce,X,we,Z,E,se,de],encapsulation:2})};export{Ie as CowDetail};
