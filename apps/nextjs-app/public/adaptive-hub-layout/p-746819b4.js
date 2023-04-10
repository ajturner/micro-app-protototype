import{d as e,a as t}from"./p-d85ad702.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */function o(){const{classList:o}=document.body;const n=window.matchMedia("(prefers-color-scheme: dark)").matches;const d=()=>o.contains(e)||o.contains(t)&&n?"dark":"light";const c=e=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:true,detail:{mode:e}}));const i=e=>{s!==e&&c(e);s=e};let s=d();c(s);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>i(e.matches?"dark":"light")));new MutationObserver((()=>i(d()))).observe(document.body,{attributes:true,attributeFilter:["class"]})}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */function n(){const e=typeof window!=="undefined"&&typeof location!=="undefined"&&typeof document!=="undefined"&&window.location===location&&window.document===document;if(e){if(document.readyState==="interactive"){o()}else{document.addEventListener("DOMContentLoaded",(()=>o()),{once:true})}}}const d=n;export{d as g};
//# sourceMappingURL=p-746819b4.js.map