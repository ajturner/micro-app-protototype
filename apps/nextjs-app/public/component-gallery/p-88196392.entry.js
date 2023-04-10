import{r as i,c as e,h as a,F as t,g as n}from"./p-ad9e43da.js";import{c as s,d as o}from"./p-57ca654b.js";import{a as r}from"./p-b35bd07c.js";import{c,d as l}from"./p-3238f89d.js";import{u as d,c as m,s as h,d as f}from"./p-0164e884.js";import{H as p,c as u}from"./p-9925adbb.js";import"./p-e6be3162.js";import"./p-30b0f762.js";import"./p-5f83161a.js";import"./p-62d90ff5.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const g={container:"container",header:"header",heading:"heading",close:"close",imageFrame:"image-frame",content:"content",info:"info"};const x={close:"x"};const b={thumbnail:"thumbnail"};const v="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;margin:1rem;box-sizing:border-box;display:flex;flex-direction:row;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}.container{inline-size:100%;padding:1rem}:host([closed]),:host([closed]) .container{display:none}:host([selected]) .container{margin:0px;border-style:none;padding:0px}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{margin-block-end:0.5rem}.header .heading{padding:0px;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-1)}.container[hidden]{display:none}.content{display:flex}.info{padding-block:0px;padding-inline:1rem;inline-size:70%}.info:only-child{inline-size:100%;padding-inline:0px}::slotted(p){margin-block-start:0px}::slotted(a){outline-color:transparent;color:var(--calcite-ui-brand)}::slotted(a:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.image-frame{inline-size:25%}.image-frame img{max-inline-size:100%}::slotted(img){max-inline-size:100%}";const y=class{constructor(a){i(this,a);this.calciteTipDismiss=e(this,"calciteTipDismiss",6);this.hideTip=()=>{this.closed=true;this.calciteTipDismiss.emit()};this.closed=false;this.closeDisabled=false;this.heading=undefined;this.headingLevel=undefined;this.selected=false;this.messages=undefined;this.messageOverrides=undefined;this.defaultMessages=undefined;this.effectiveLocale=""}onMessagesChange(){}effectiveLocaleChange(){d(this,this.effectiveLocale)}connectedCallback(){s(this);c(this);m(this)}async componentWillLoad(){await h(this)}disconnectedCallback(){o(this);l(this);f(this)}renderHeader(){var i;const{heading:e,headingLevel:t,el:n}=this;const s=(i=n.closest("calcite-tip-manager"))===null||i===void 0?void 0:i.headingLevel;const o=s?u(s+1):null;const r=t||o;return e?a("header",{class:g.header},a(p,{class:g.heading,level:r},e)):null}renderDismissButton(){const{closeDisabled:i,hideTip:e}=this;return!i?a("calcite-action",{class:g.close,icon:x.close,onClick:e,scale:"l",text:this.messages.close}):null}renderImageFrame(){const{el:i}=this;return r(i,b.thumbnail)?a("div",{class:g.imageFrame,key:"thumbnail"},a("slot",{name:b.thumbnail})):null}renderInfoNode(){return a("div",{class:g.info},a("slot",null))}renderContent(){return a("div",{class:g.content},this.renderImageFrame(),this.renderInfoNode())}render(){return a(t,null,a("article",{class:g.container},this.renderHeader(),this.renderContent()),this.renderDismissButton())}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};y.style=v;export{y as calcite_tip};
//# sourceMappingURL=p-88196392.entry.js.map