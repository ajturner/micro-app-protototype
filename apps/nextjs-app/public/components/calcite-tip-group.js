import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const tipGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}::slotted(calcite-tip){margin:0px;border-style:none}:host-context(calcite-tip-manager){margin-block:0.75rem}:host-context(calcite-tip-manager) ::slotted(calcite-tip){padding:1rem}";

let TipGroup = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.groupTitle = undefined;
  }
  render() {
    return h("slot", null);
  }
  static get style() { return tipGroupCss; }
};
TipGroup = /*@__PURE__*/ proxyCustomElement(TipGroup, [1, "calcite-tip-group", {
    "groupTitle": [1, "group-title"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tip-group"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tip-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TipGroup);
      }
      break;
  } });
}

const CalciteTipGroup = TipGroup;
const defineCustomElement = defineCustomElement$1;

export { CalciteTipGroup, defineCustomElement };

//# sourceMappingURL=calcite-tip-group.js.map