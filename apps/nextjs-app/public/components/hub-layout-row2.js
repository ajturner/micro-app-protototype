import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$a } from './action.js';
import { d as defineCustomElement$9 } from './card.js';
import { d as defineCustomElement$8 } from './checkbox.js';
import { d as defineCustomElement$7 } from './chip.js';
import { d as defineCustomElement$6 } from './icon.js';
import { d as defineCustomElement$5 } from './label2.js';
import { d as defineCustomElement$4 } from './loader.js';
import { d as defineCustomElement$3 } from './tip.js';
import { d as defineCustomElement$2 } from './hub-layout-card2.js';
import { d as defineCustomElement$1 } from './hub-layout-section2.js';

const hubLayoutRowCss = ":host{display:block}.row{display:flex;flex-direction:row;width:100%}";

let HubLayoutRow = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "row", style: this.config.style }, this.config.sections.map((section) => (h("hub-layout-section", { config: section })))));
  }
  static get style() { return hubLayoutRowCss; }
};
HubLayoutRow = /*@__PURE__*/ proxyCustomElement(HubLayoutRow, [1, "hub-layout-row", {
    "config": [8]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["hub-layout-row", "calcite-action", "calcite-card", "calcite-checkbox", "calcite-chip", "calcite-icon", "calcite-label", "calcite-loader", "calcite-tip", "hub-layout-card", "hub-layout-section"];
  components.forEach(tagName => { switch (tagName) {
    case "hub-layout-row":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, HubLayoutRow);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "calcite-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "calcite-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "calcite-chip":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "calcite-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "calcite-tip":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "hub-layout-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "hub-layout-section":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { HubLayoutRow as H, defineCustomElement as d };

//# sourceMappingURL=hub-layout-row2.js.map