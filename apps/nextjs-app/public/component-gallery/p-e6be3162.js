/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
function t(t,s,i){const e=n(t);return new e(s,i)}function n(t){class n extends window.MutationObserver{constructor(t){super(t);this.observedEntry=[];this.callback=t}observe(t,n){this.observedEntry.push({target:t,options:n});return super.observe(t,n)}unobserve(t){const n=this.observedEntry.filter((n=>n.target!==t));this.observedEntry=[];this.callback(super.takeRecords(),this);this.disconnect();n.forEach((t=>this.observe(t.target,t.options)))}}return function(){return t==="intersection"?window.IntersectionObserver:t==="mutation"?n:window.ResizeObserver}()}export{t as c};
//# sourceMappingURL=p-e6be3162.js.map