import { HTMLElement, createEvent, h, Fragment, proxyCustomElement } from '@stencil/core/internal/client';

const optionGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block}";

let OptionGroup = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalOptionGroupChange = createEvent(this, "calciteInternalOptionGroupChange", 6);
    this.disabled = false;
    this.label = undefined;
  }
  handlePropChange() {
    this.calciteInternalOptionGroupChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    return (h(Fragment, null, h("div", null, this.label), h("slot", null)));
  }
  static get watchers() { return {
    "disabled": ["handlePropChange"],
    "label": ["handlePropChange"]
  }; }
  static get style() { return optionGroupCss; }
};
OptionGroup = /*@__PURE__*/ proxyCustomElement(OptionGroup, [1, "calcite-option-group", {
    "disabled": [516],
    "label": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-option-group"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-option-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OptionGroup);
      }
      break;
  } });
}

const CalciteOptionGroup = OptionGroup;
const defineCustomElement = defineCustomElement$1;

export { CalciteOptionGroup, defineCustomElement };

//# sourceMappingURL=calcite-option-group.js.map