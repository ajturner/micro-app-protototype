import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$c } from './action.js';
import { d as defineCustomElement$b } from './card.js';
import { d as defineCustomElement$a } from './checkbox.js';
import { d as defineCustomElement$9 } from './chip.js';
import { d as defineCustomElement$8 } from './icon.js';
import { d as defineCustomElement$7 } from './label2.js';
import { d as defineCustomElement$6 } from './loader.js';
import { d as defineCustomElement$5 } from './tip.js';
import { d as defineCustomElement$4 } from './hub-layout-card2.js';
import { d as defineCustomElement$3 } from './hub-layout-row2.js';
import { d as defineCustomElement$2 } from './hub-layout-section2.js';

const hubLayoutCss = ":host{display:block}.layout{display:flex;flex-direction:column;width:100%}";

let HubLayout$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  async componentWillLoad() {
    const response = await fetch(this.config);
    this.layoutConfig = await response.json();
  }
  render() {
    return (h("div", { class: "layout" }, this.layoutConfig &&
      this.layoutConfig.rows.map((row) => (h("hub-layout-row", { config: row })))));
  }
  static get style() { return hubLayoutCss; }
};
HubLayout$1 = /*@__PURE__*/ proxyCustomElement(HubLayout$1, [1, "hub-layout", {
    "config": [1],
    "layoutConfig": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["hub-layout", "calcite-action", "calcite-card", "calcite-checkbox", "calcite-chip", "calcite-icon", "calcite-label", "calcite-loader", "calcite-tip", "hub-layout-card", "hub-layout-row", "hub-layout-section"];
  components.forEach(tagName => { switch (tagName) {
    case "hub-layout":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, HubLayout$1);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "calcite-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "calcite-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "calcite-chip":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "calcite-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "calcite-tip":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "hub-layout-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "hub-layout-row":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "hub-layout-section":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const HubLayout = HubLayout$1;
const defineCustomElement = defineCustomElement$1;

export { HubLayout, defineCustomElement };

//# sourceMappingURL=hub-layout.js.map