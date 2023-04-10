import{r as i,c as a,h as t,H as e,g as n}from"./p-accf552a.js";import{c as r,d as c}from"./p-b7e4c0cb.js";import{a as o,t as l}from"./p-82374b98.js";import{g as s}from"./p-095f6884.js";import{u as d}from"./p-f10d877e.js";import{c as m,d as u}from"./p-4c720405.js";import{u as g,c as p,d as f,s as h}from"./p-accaac3a.js";import{H as b}from"./p-27ad7e09.js";import"./p-807e56c1.js";import"./p-d85ad702.js";import"./p-9a6e0e45.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const v={container:"container",content:"content",headerContainer:"header-container",icon:"icon",statusIcon:"status-icon",toggle:"toggle",toggleIcon:"toggle-icon",title:"title",heading:"heading",header:"header",button:"button",summary:"summary",description:"description",controlContainer:"control-container",valid:"valid",invalid:"invalid",loading:"loading"};const y={icon:"icon",control:"control",headerMenuActions:"header-menu-actions"};const x={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle",refresh:"refresh"};const k='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:inherit;outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{margin-inline-start:0.75rem;margin-inline-end:0px;margin-block:0.75rem}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.status-icon.loading{animation:spin calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) linear infinite}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.toggle-icon{margin-block:0.75rem;align-self:center;justify-self:end;color:var(--calcite-ui-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:1rem;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, 0.5rem);padding-inline:var(--calcite-block-padding, 0.625rem)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}';let w=class{constructor(t){i(this,t);this.calciteBlockToggle=a(this,"calciteBlockToggle",6);this.guid=s();this.onHeaderClick=()=>{this.open=!this.open;this.calciteBlockToggle.emit()};this.collapsible=false;this.disabled=false;this.dragHandle=false;this.heading=undefined;this.headingLevel=undefined;this.loading=false;this.open=false;this.status=undefined;this.description=undefined;this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale=undefined;this.defaultMessages=undefined}onMessagesChange(){}effectiveLocaleChange(){g(this,this.effectiveLocale)}connectedCallback(){r(this);m(this);p(this)}disconnectedCallback(){u(this);f(this);c(this)}componentDidRender(){d(this)}async componentWillLoad(){await h(this)}renderScrim(){const{loading:i}=this;const a=t("slot",null);return[i?t("calcite-scrim",{loading:i}):null,a]}renderIcon(){const{el:i,status:a}=this;const e=this.loading&&!this.open;const n=e?x.refresh:x[a];const r=o(i,y.icon)||n;const c=!n?t("slot",{key:"icon-slot",name:y.icon}):t("calcite-icon",{class:{[v.statusIcon]:true,[v.valid]:a=="valid",[v.invalid]:a=="invalid",[v.loading]:e},icon:n,scale:"m"});return r?t("div",{class:v.icon},c):null}renderTitle(){const{heading:i,headingLevel:a,description:e}=this;return i||e?t("div",{class:v.title},t(b,{class:v.heading,level:a},i),e?t("div",{class:v.description},e):null):null}render(){const{collapsible:i,el:a,loading:n,open:r,messages:c}=this;const s=r?c.collapse:c.expand;const d=t("header",{class:v.header},this.renderIcon(),this.renderTitle());const m=!!o(a,y.control);const u=!!o(a,y.headerMenuActions);const g=r?x.opened:x.closed;const{guid:p}=this;const f=`${p}-region`;const h=`${p}-button`;const b=t("div",{class:v.headerContainer},this.dragHandle?t("calcite-handle",null):null,i?t("button",{"aria-controls":f,"aria-expanded":i?l(r):null,"aria-label":s,class:v.toggle,id:h,onClick:this.onHeaderClick,title:s},d,!m&&!u?t("calcite-icon",{"aria-hidden":"true",class:v.toggleIcon,icon:g,scale:"s"}):null):d,n?t("calcite-loader",{inline:true,label:c.loading}):m?t("div",{class:v.controlContainer},t("slot",{name:y.control})):null,u?t("calcite-action-menu",{label:c.options},t("slot",{name:y.headerMenuActions})):null);return t(e,null,t("article",{"aria-busy":l(n),class:{[v.container]:true}},b,t("section",{"aria-expanded":l(r),"aria-labelledby":h,class:v.content,hidden:!r,id:f},this.renderScrim())))}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};w.style=k;export{w as calcite_block};
//# sourceMappingURL=p-dde04c44.entry.js.map