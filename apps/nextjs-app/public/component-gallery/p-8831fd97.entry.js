import{r as t,c as i,h as a,H as e,g as o}from"./p-ad9e43da.js";import{c as n,d as s}from"./p-57ca654b.js";import{a as r}from"./p-b35bd07c.js";import{s as c,a as l,c as d}from"./p-04967691.js";import{c as h,d as p}from"./p-3238f89d.js";import{c as m}from"./p-e6be3162.js";import{u,c as f,s as g,d as x}from"./p-0164e884.js";import{t as b,o as v,q as y,g as w,a as j,E as D,b as k}from"./p-ee615f19.js";import{d as z}from"./p-58421494.js";import"./p-30b0f762.js";import"./p-5f83161a.js";import"./p-62d90ff5.js";import"./p-e18049d0.js";import"./p-96f32c04.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const C={actionGroupBottom:"action-group--bottom"};const _={bottomActions:"bottom-actions",expandTooltip:"expand-tooltip"};const H="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{pointer-events:auto;display:inline-flex;align-self:stretch;background:transparent;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=horizontal]){flex-direction:row}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-width:0px;border-inline-end-width:1px;border-style:solid}::slotted(calcite-action-group:last-child){border-block-end-width:0px;border-inline-end-width:0px}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px;padding-inline-end:0px}";const A=class{constructor(a){t(this,a);this.calciteActionBarToggle=i(this,"calciteActionBarToggle",6);this.mutationObserver=m("mutation",(()=>{const{el:t,expanded:i}=this;b({parent:t,expanded:i});this.conditionallyOverflowActions()}));this.resizeObserver=m("resize",(t=>this.resizeHandlerEntries(t)));this.actionMenuOpenHandler=t=>{if(t.target.menuOpen){const i=t.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((t=>{if(!i.includes(t)){t.menuOpen=false}}))}};this.resizeHandlerEntries=t=>{t.forEach(this.resizeHandler)};this.resizeHandler=t=>{const{width:i,height:a}=t.contentRect;this.resize({width:i,height:a})};this.resize=z((({width:t,height:i})=>{const{el:a,expanded:e,expandDisabled:o,layout:n}=this;if(n==="vertical"&&!i||n==="horizontal"&&!t){return}const s=y(a);const c=o?s.length:s.length+1;const l=Array.from(a.querySelectorAll("calcite-action-group"));const d=r(a,_.bottomActions)||!o?l.length+1:l.length;const{actionHeight:h,actionWidth:p}=w(s);const m=k({layout:n,actionCount:c,actionHeight:h,actionWidth:p,height:i,width:t,groupCount:d});j({actionGroups:l,expanded:e,overflowCount:m})}),v);this.conditionallyOverflowActions=()=>{if(!this.overflowActionsDisabled){this.overflowActions()}};this.toggleExpand=()=>{this.expanded=!this.expanded;this.calciteActionBarToggle.emit()};this.setExpandToggleRef=t=>{this.expandToggleEl=t};this.expandDisabled=false;this.expanded=false;this.layout="vertical";this.overflowActionsDisabled=false;this.position=undefined;this.scale=undefined;this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale=undefined;this.defaultMessages=undefined}expandHandler(){this.conditionallyOverflowActions()}expandedHandler(t){b({parent:this.el,expanded:t});this.conditionallyOverflowActions()}overflowDisabledHandler(t){t?this.resizeObserver.disconnect():this.resizeObserver.observe(this.el)}onMessagesChange(){}effectiveLocaleChange(){u(this,this.effectiveLocale)}componentDidLoad(){c(this);this.conditionallyOverflowActions()}connectedCallback(){var t,i;const{el:a,expanded:e}=this;h(this);f(this);b({parent:a,expanded:e});(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(a,{childList:true,subtree:true});if(!this.overflowActionsDisabled){(i=this.resizeObserver)===null||i===void 0?void 0:i.observe(a)}this.conditionallyOverflowActions();n(this)}async componentWillLoad(){l(this);await g(this)}disconnectedCallback(){var t,i;(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect();(i=this.resizeObserver)===null||i===void 0?void 0:i.disconnect();s(this);p(this);x(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){var t;await d(this);(t=this.el)===null||t===void 0?void 0:t.focus()}renderBottomActionGroup(){const{expanded:t,expandDisabled:i,el:e,position:o,toggleExpand:n,scale:s,layout:c,messages:l}=this;const d=r(e,_.expandTooltip);const h=!i?a(D,{el:e,expanded:t,intlCollapse:l.collapse,intlExpand:l.expand,position:o,scale:s,toggle:n,tooltip:d,ref:this.setExpandToggleRef}):null;return r(e,_.bottomActions)||h?a("calcite-action-group",{class:C.actionGroupBottom,layout:c,scale:s},a("slot",{name:_.bottomActions}),a("slot",{name:_.expandTooltip}),h):null}render(){return a(e,{onCalciteActionMenuOpen:this.actionMenuOpenHandler},a("slot",null),this.renderBottomActionGroup())}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return o(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};A.style=H;export{A as calcite_action_bar};
//# sourceMappingURL=p-8831fd97.entry.js.map