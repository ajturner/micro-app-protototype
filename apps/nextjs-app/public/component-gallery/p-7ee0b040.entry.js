import{r as t,h as e,f as i,g as n}from"./p-ad9e43da.js";import{c as a,d as o}from"./p-57ca654b.js";import{b as s,i as l,a as c}from"./p-b35bd07c.js";import{c as r,d as h}from"./p-3238f89d.js";import{c as d}from"./p-75da41a4.js";import{c as p,s as m,d as u,u as f}from"./p-0164e884.js";import"./p-e6be3162.js";import"./p-30b0f762.js";import"./p-5f83161a.js";import"./p-62d90ff5.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const w={container:"container",content:"content",contentHeader:"content__header",contentBody:"content__body",contentDetached:"content--detached",separator:"separator"};const x={actionBar:"action-bar",header:"header"};const v="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{pointer-events:none;display:flex;flex:0 1 auto;align-items:stretch;--calcite-shell-panel-detached-max-height:unset}:host([width-scale=s]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 12vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 300px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 150px)}:host([width-scale=m]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 20vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 420px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 240px)}:host([width-scale=l]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 45vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 680px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 340px)}:host([detached-height-scale=s]) .content--detached{--calcite-shell-panel-detached-max-height-internal:var(--calcite-shell-panel-detached-max-height, 40vh)}:host([detached-height-scale=m]) .content--detached{--calcite-shell-panel-detached-max-height-internal:var(--calcite-shell-panel-detached-max-height, 60vh)}:host([detached-height-scale=l]) .content--detached{--calcite-shell-panel-detached-max-height-internal:var(--calcite-shell-panel-detached-max-height, 80vh)}.container{pointer-events:none;box-sizing:border-box;display:flex;flex:1 1 auto;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}.container *{box-sizing:border-box}:host(:hover) .separator:not(:hover):not(:focus),:host(:focus-within) .separator:not(:hover):not(:focus){opacity:1;background-color:var(--calcite-ui-border-3)}.separator{pointer-events:auto;position:absolute;inset-block:0px;display:flex;block-size:100%;inline-size:0.125rem;background-color:transparent;opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;cursor:col-resize;outline:none}.separator:hover{opacity:1;background-color:var(--calcite-ui-border-2)}.separator:focus{background-color:var(--calcite-ui-brand);opacity:1}:host([position=start]) .separator{inset-inline-end:-2px}:host([position=end]) .separator{inset-inline-start:-2px}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%;inline-size:100%;flex:1 1 auto;max-block-size:unset;max-inline-size:unset}::slotted(.calcite-match-height){display:flex;flex:1 1 auto;overflow:hidden}.content{pointer-events:auto;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:stretch;align-self:stretch;background-color:var(--calcite-ui-background);padding:0px;inline-size:var(--calcite-shell-panel-width-internal);max-inline-size:var(--calcite-shell-panel-max-width-internal);min-inline-size:var(--calcite-shell-panel-min-width-internal);transition:max-block-size var(--calcite-animation-timing), max-inline-size var(--calcite-animation-timing)}.content__header{display:flex;flex:0 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch}.content__body{display:flex;flex:1 1 auto;flex-direction:column;overflow:hidden}.content--detached{margin-inline:0.5rem;margin-block:0.5rem auto;block-size:auto;overflow:hidden;border-radius:0.25rem;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);max-block-size:var(--calcite-shell-panel-detached-max-height-internal)}.content--detached ::slotted(calcite-panel),.content--detached ::slotted(calcite-flow){max-block-size:unset}:host([position=start]) .content--detached ::slotted(calcite-panel),:host([position=start]) .content--detached ::slotted(calcite-flow),:host([position=end]) .content--detached ::slotted(calcite-panel),:host([position=end]) .content--detached ::slotted(calcite-flow){border-style:none}.content[hidden]{display:none}slot[name=action-bar]::slotted(calcite-action-bar),.content ::slotted(calcite-flow),.content ::slotted(calcite-panel:not([closed])){border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}:host([position=start]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=start]) .content ::slotted(calcite-flow),:host([position=start]) .content ::slotted(calcite-panel){border-inline-start:none}:host([position=end]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=end]) .content ::slotted(calcite-flow),:host([position=end]) .content ::slotted(calcite-panel){border-inline-end:none}";const b=class{constructor(e){t(this,e);this.initialContentWidth=null;this.initialClientX=null;this.contentWidthMax=null;this.contentWidthMin=null;this.step=1;this.stepMultiplier=10;this.storeContentEl=t=>{this.contentEl=t};this.getKeyAdjustedWidth=t=>{const{key:e}=t;const{el:i,step:n,stepMultiplier:a,contentWidthMin:o,contentWidthMax:l,initialContentWidth:c,position:r}=this;const h=n*a;const d=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"];if(d.indexOf(e)>-1){t.preventDefault()}const p=s(i);const m=["ArrowLeft","ArrowRight"];const u=p==="rtl"&&m.includes(e)?-1:1;const f=e==="ArrowUp"||(r==="end"?e===m[0]:e===m[1]);if(f){const e=t.shiftKey?h:n;return c+u*e}const w=e==="ArrowDown"||(r==="end"?e===m[1]:e===m[0]);if(w){const e=t.shiftKey?h:n;return c-u*e}if(typeof o==="number"&&e==="Home"){return o}if(typeof l==="number"&&e==="End"){return l}if(e==="PageDown"){return c-h}if(e==="PageUp"){return c+h}return null};this.separatorKeyDown=t=>{this.setInitialContentWidth();const e=this.getKeyAdjustedWidth(t);if(typeof e==="number"){this.setContentWidth(e)}};this.separatorPointerMove=t=>{t.preventDefault();const{el:e,initialContentWidth:i,position:n,initialClientX:a}=this;const o=t.clientX-a;const l=s(e);const c=l==="rtl"?-1:1;const r=n==="end"?-c*o:c*o;const h=i+r;this.setContentWidth(h)};this.separatorPointerUp=t=>{if(!l(t)){return}t.preventDefault();document.removeEventListener("pointerup",this.separatorPointerUp);document.removeEventListener("pointermove",this.separatorPointerMove)};this.setInitialContentWidth=()=>{var t;this.initialContentWidth=(t=this.contentEl)===null||t===void 0?void 0:t.getBoundingClientRect().width};this.separatorPointerDown=t=>{if(!l(t)){return}t.preventDefault();const{separatorEl:e}=this;e&&document.activeElement!==e&&e.focus();this.setInitialContentWidth();this.initialClientX=t.clientX;document.addEventListener("pointerup",this.separatorPointerUp);document.addEventListener("pointermove",this.separatorPointerMove)};this.connectSeparator=t=>{this.disconnectSeparator();this.separatorEl=t;t.addEventListener("pointerdown",this.separatorPointerDown)};this.disconnectSeparator=()=>{var t;(t=this.separatorEl)===null||t===void 0?void 0:t.removeEventListener("pointerdown",this.separatorPointerDown)};this.collapsed=false;this.detached=false;this.detachedHeightScale="l";this.widthScale="m";this.position=undefined;this.resizable=false;this.messages=undefined;this.messageOverrides=undefined;this.contentWidth=null;this.defaultMessages=undefined;this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){a(this);r(this);p(this)}async componentWillLoad(){await m(this)}disconnectedCallback(){o(this);this.disconnectSeparator();h(this);u(this)}componentDidLoad(){this.updateAriaValues()}effectiveLocaleChange(){f(this,this.effectiveLocale)}renderHeader(){const{el:t}=this;const i=c(t,x.header);return i?e("div",{class:w.contentHeader,key:"header"},e("slot",{name:x.header})):null}render(){const{collapsed:t,detached:i,position:n,initialContentWidth:a,contentWidth:o,contentWidthMax:s,contentWidthMin:l,resizable:c}=this;const r=!i&&c;const h=e("div",{class:{[w.content]:true,[w.contentDetached]:i},hidden:t,key:"content",style:r&&o?{width:`${o}px`}:null,ref:this.storeContentEl},this.renderHeader(),e("div",{class:w.contentBody},e("slot",null)));const d=r?e("div",{"aria-label":this.messages.resize,"aria-orientation":"horizontal","aria-valuemax":s,"aria-valuemin":l,"aria-valuenow":o!==null&&o!==void 0?o:a,class:w.separator,key:"separator",onKeyDown:this.separatorKeyDown,role:"separator",tabIndex:0,"touch-action":"none",ref:this.connectSeparator}):null;const p=e("slot",{key:"action-bar",name:x.actionBar});const m=[p,h,d];if(n==="end"){m.reverse()}return e("div",{class:{[w.container]:true}},m)}setContentWidth(t){const{contentWidthMax:e,contentWidthMin:i}=this;const n=Math.round(t);this.contentWidth=typeof e==="number"&&typeof i==="number"?d(n,i,e):n}updateAriaValues(){const{contentEl:t}=this;const e=t&&getComputedStyle(t);if(!e){return}const n=parseInt(e.getPropertyValue("max-width"),10);const a=parseInt(e.getPropertyValue("min-width"),10);const o=parseInt(e.getPropertyValue("width"),10);if(typeof o==="number"&&!isNaN(o)){this.initialContentWidth=o}if(typeof n==="number"&&!isNaN(n)){this.contentWidthMax=n}if(typeof a==="number"&&!isNaN(a)){this.contentWidthMin=a}i(this)}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};b.style=v;export{b as calcite_shell_panel};
//# sourceMappingURL=p-7ee0b040.entry.js.map