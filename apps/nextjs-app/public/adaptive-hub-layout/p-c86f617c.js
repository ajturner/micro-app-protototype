import{a as n}from"./p-accf552a.js";import{c as o}from"./p-bad0923a.js";import{g as s}from"./p-4c720405.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const a={};const t={};async function r(o){const c=s(o);if(a[c]){return a[c]}if(!t[c]){t[c]=fetch(n(`./assets/date-picker/nls/${c}.json`)).then((n=>n.json())).catch((()=>{console.error(`Translations for "${c}" not found or invalid, falling back to english`);return r("en")}))}const i=await t[c];a[c]=i;return i}function c(n){return n.map(((n,s)=>o(n,s===1)))}export{r as a,c as g};
//# sourceMappingURL=p-c86f617c.js.map