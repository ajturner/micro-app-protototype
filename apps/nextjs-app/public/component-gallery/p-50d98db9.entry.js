import{r as a,h as i,g as t}from"./p-ad9e43da.js";import{c as n,d as e}from"./p-3238f89d.js";import{u as c,c as s,s as o,d as r}from"./p-0164e884.js";import"./p-b35bd07c.js";import"./p-30b0f762.js";import"./p-5f83161a.js";import"./p-62d90ff5.js";import"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const l={scrim:"scrim",content:"content"};const m="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:absolute;inset:0px;z-index:700;display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}";const d=class{constructor(i){a(this,i);this.loading=false;this.messages=undefined;this.messageOverrides=undefined;this.defaultMessages=undefined;this.effectiveLocale=""}onMessagesChange(){}effectiveLocaleChange(){c(this,this.effectiveLocale)}connectedCallback(){n(this);s(this)}async componentWillLoad(){await o(this)}disconnectedCallback(){e(this);r(this)}render(){const{el:a,loading:t,messages:n}=this;const e=a.innerHTML.trim().length>0;const c=t?i("calcite-loader",{label:n.loading}):null;const s=e?i("div",{class:l.content},i("slot",null)):null;return i("div",{class:l.scrim},c,s)}static get assetsDirs(){return["assets"]}get el(){return t(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};d.style=m;export{d as calcite_scrim};
//# sourceMappingURL=p-50d98db9.entry.js.map