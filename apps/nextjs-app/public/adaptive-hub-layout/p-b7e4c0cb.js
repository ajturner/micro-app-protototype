import{f as t}from"./p-accf552a.js";import{c as o}from"./p-807e56c1.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const c=new Set;let n;const f={childList:true};function s(t){if(!n){n=o("mutation",a)}n.observe(t.el,f)}function i(t){c.delete(t.el);a(n.takeRecords());n.disconnect();for(const[t]of c.entries()){n.observe(t,f)}}function a(o){o.forEach((({target:o})=>{t(o)}))}export{s as c,i as d};
//# sourceMappingURL=p-b7e4c0cb.js.map