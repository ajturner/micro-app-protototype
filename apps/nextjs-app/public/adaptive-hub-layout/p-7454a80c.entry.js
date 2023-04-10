import{r as i,c as t,h as e,H as a,g as c}from"./p-accf552a.js";import{c as n,d as o}from"./p-b7e4c0cb.js";import{g as s,a as l}from"./p-82374b98.js";import{g as r}from"./p-095f6884.js";import{u as d}from"./p-f10d877e.js";import{d as m,e as u}from"./p-fd9c1952.js";import"./p-807e56c1.js";import"./p-d85ad702.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const b={icon:"icon",iconActive:"icon--active",iconIndent:"icon--indent",custom:"icon--custom",dot:"icon--dot",single:"label--single",label:"label",active:"label--active",selected:"label--selected",title:"title",textContainer:"text-container"};const h='@charset "UTF-8";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.label--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.label:hover,.label:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-block-start:-1px;padding-inline-start:var(--calcite-combobox-item-spacing-unit-l);color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot:before{text-align:start;content:"•"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}';let p=class{constructor(e){i(this,e);this.calciteComboboxItemChange=t(this,"calciteComboboxItemChange",6);this.scale="m";this.itemClickHandler=i=>{i.preventDefault();this.toggleSelected()};this.disabled=false;this.selected=false;this.active=false;this.ancestors=undefined;this.guid=r();this.icon=undefined;this.iconFlipRtl=false;this.textLabel=undefined;this.value=undefined;this.filterDisabled=undefined}selectedWatchHandler(){this.calciteComboboxItemChange.emit()}connectedCallback(){this.ancestors=m(this.el);this.scale=s(this.el,"scale",this.scale);n(this)}disconnectedCallback(){o(this)}componentDidRender(){d(this)}toggleSelected(i){if(this.disabled){return}this.selected=typeof i==="boolean"?i:!this.selected}renderIcon(i){return this.icon?e("calcite-icon",{class:{[b.custom]:!!this.icon,[b.iconActive]:this.icon&&this.selected,[b.iconIndent]:true},flipRtl:this.iconFlipRtl,icon:this.icon||i,key:"icon",scale:this.scale==="l"?"m":"s"}):null}renderSelectIndicator(i,t){return i?e("span",{class:{[b.icon]:true,[b.dot]:true,[b.iconIndent]:true}}):e("calcite-icon",{class:{[b.icon]:true,[b.iconActive]:this.selected,[b.iconIndent]:true},flipRtl:this.iconFlipRtl,icon:t,key:"indicator",scale:this.scale==="l"?"m":"s"})}renderChildren(){if(l(this.el)){return e("ul",{key:"default-slot-container"},e("slot",null))}return null}render(){const i=s(this.el,"selection-mode","multiple")==="single";const t=i&&!this.disabled;const c=i?"dot":"check";const n=this.disabled?"circle-disallowed":c;const o={[b.label]:true,[b.selected]:this.selected,[b.active]:this.active,[b.single]:i};const l=u(this.el);return e(a,{"aria-hidden":"true"},e("div",{class:`container scale--${this.scale}`,style:{"--calcite-combobox-item-spacing-indent-multiplier":`${l}`}},e("li",{class:o,id:this.guid,onClick:this.itemClickHandler},this.renderSelectIndicator(t,n),this.renderIcon(n),e("span",{class:"title"},this.textLabel)),this.renderChildren()))}get el(){return c(this)}static get watchers(){return{selected:["selectedWatchHandler"]}}};p.style=h;export{p as calcite_combobox_item};
//# sourceMappingURL=p-7454a80c.entry.js.map