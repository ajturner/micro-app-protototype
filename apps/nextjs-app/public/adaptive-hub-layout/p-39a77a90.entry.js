import{r as t,h as a,F as i,g as e}from"./p-accf552a.js";import{c as n,d as o}from"./p-b7e4c0cb.js";import{a as c}from"./p-82374b98.js";import{c as s,a as r,s as l}from"./p-829d8284.js";import{c as m,d}from"./p-4c720405.js";import{u,c as p,d as h,s as f}from"./p-accaac3a.js";import{S as g}from"./p-22e23517.js";import{S as x,I as y}from"./p-1669e778.js";import"./p-807e56c1.js";import"./p-095f6884.js";import"./p-d85ad702.js";import"./p-9a6e0e45.js";const b='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3}:host([columns="1"]){--calcite-action-group-columns:1}:host([columns="2"]){--calcite-action-group-columns:2}:host([columns="3"]){--calcite-action-group-columns:3}:host([columns="4"]){--calcite-action-group-columns:4}:host([columns="5"]){--calcite-action-group-columns:5}:host([columns="6"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]){flex-direction:row}:host([layout=grid]){display:grid;place-content:stretch;gap:1px;background-color:var(--calcite-ui-background);padding:1px;grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}';let v=class{constructor(a){t(this,a);this.setMenuOpen=t=>{this.menuOpen=!!t.target.open};this.expanded=false;this.layout="vertical";this.columns=undefined;this.menuOpen=false;this.scale=undefined;this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale="";this.defaultMessages=undefined}expandedHandler(){this.menuOpen=false}onMessagesChange(){}effectiveLocaleChange(){u(this,this.effectiveLocale)}async setFocus(){await s(this);this.el.focus()}connectedCallback(){m(this);p(this);n(this)}disconnectedCallback(){d(this);h(this);o(this)}async componentWillLoad(){r(this);await f(this)}componentDidLoad(){l(this)}renderTooltip(){const{el:t}=this;const i=c(t,x.menuTooltip);return i?a("slot",{name:x.menuTooltip,slot:g.tooltip}):null}renderMenu(){const{el:t,expanded:i,menuOpen:e,scale:n,layout:o,messages:s}=this;const r=c(t,x.menuActions);return r?a("calcite-action-menu",{expanded:i,flipPlacements:["left","right"],label:s.more,onCalciteActionMenuOpen:this.setMenuOpen,open:e,placement:o==="horizontal"?"bottom-start":"leading-start",scale:n},a("calcite-action",{icon:y.menu,scale:n,slot:g.trigger,text:s.more,textEnabled:i}),a("slot",{name:x.menuActions}),this.renderTooltip()):null}render(){return a(i,null,a("slot",null),this.renderMenu())}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return e(this)}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};v.style=b;export{v as calcite_action_group};
//# sourceMappingURL=p-39a77a90.entry.js.map