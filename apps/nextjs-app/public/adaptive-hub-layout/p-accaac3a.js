import{a as n}from"./p-accf552a.js";import{g as t}from"./p-4c720405.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const c={};async function s(t,s){const a=`${s}_${t}`;if(c[a]){return c[a]}c[a]=fetch(n(`./assets/${s}/t9n/messages_${t}.json`)).then((n=>{if(!n.ok){o()}return n.json()})).catch((()=>o()));return c[a]}function o(){throw new Error("could not fetch component message bundle")}function a(n){n.messages={...n.defaultMessages,...n.messageOverrides}}async function e(n){n.defaultMessages=await i(n,n.effectiveLocale);a(n)}async function i(n,c){const{el:o}=n;const a=o.tagName.toLowerCase();const e=a.replace("calcite-","");return s(t(c,"t9n"),e)}async function f(n,t){n.defaultMessages=await i(n,t);a(n)}function r(n){n.onMessagesChange=m}function u(n){n.onMessagesChange=undefined}function m(){a(this)}export{r as c,u as d,e as s,f as u};
//# sourceMappingURL=p-accaac3a.js.map