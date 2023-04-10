import { h } from '@stencil/core';
import '@esri/calcite-components';
export class ComponentGalleryGrid {
  constructor() {
    this.components = [];
  }
  render() {
    return (h("div", { class: "components-grid" }, this.components.map((component) => (h("div", { class: "component" }, h("calcite-card", null, h("span", { slot: "title" }, h("a", { href: component.url, target: "_blank" }, component.title)), h("span", { slot: "subtitle" }, component.status), h("calcite-chip", { slot: "footer-start", scale: "s", value: component.type, appearance: "outline", kind: "brand", icon: "" }, component.type), h("calcite-button", { slot: "footer-end", target: "_blank", href: component.url }, "Open")))))));
  }
  static get is() { return "component-gallery-grid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["component-gallery-grid.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["component-gallery-grid.css"]
    };
  }
  static get properties() {
    return {
      "components": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "any[]",
          "resolved": "any[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "[]"
      }
    };
  }
}
//# sourceMappingURL=component-gallery-grid.js.map
