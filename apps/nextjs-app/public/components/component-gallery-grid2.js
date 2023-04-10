import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$7 } from './button.js';
import { d as defineCustomElement$6 } from './card.js';
import { d as defineCustomElement$5 } from './checkbox.js';
import { d as defineCustomElement$4 } from './chip.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './label.js';
import { d as defineCustomElement$1 } from './loader.js';

const componentGalleryGridCss = ".components-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));grid-gap:1rem;padding-left:1rem}";

const ComponentGalleryGrid = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.components = [];
  }
  render() {
    return (h("div", { class: "components-grid" }, this.components.map((component) => (h("div", { class: "component" }, h("calcite-card", null, h("span", { slot: "title" }, h("a", { href: component.url, target: "_blank" }, component.title)), h("span", { slot: "subtitle" }, component.status), h("calcite-chip", { slot: "footer-start", scale: "s", value: component.type, appearance: "outline", kind: "brand", icon: "" }, component.type), h("calcite-button", { slot: "footer-end", target: "_blank", href: component.url }, "Open")))))));
  }
  static get style() { return componentGalleryGridCss; }
}, [1, "component-gallery-grid", {
    "components": [16]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["component-gallery-grid", "calcite-button", "calcite-card", "calcite-checkbox", "calcite-chip", "calcite-icon", "calcite-label", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "component-gallery-grid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ComponentGalleryGrid);
      }
      break;
    case "calcite-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "calcite-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "calcite-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "calcite-chip":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "calcite-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { ComponentGalleryGrid as C, defineCustomElement as d };

//# sourceMappingURL=component-gallery-grid2.js.map