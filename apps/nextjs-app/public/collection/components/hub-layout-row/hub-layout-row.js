import { Component, Prop, h } from '@stencil/core';
export class HubLayoutRow {
  render() {
    return (h("div", { class: "row", style: this.config.style }, this.config.sections.map((section) => (h("hub-layout-section", { config: section })))));
  }
  static get is() { return "hub-layout-row"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-layout-row.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-layout-row.css"]
  }; }
  static get properties() { return {
    "config": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "config",
      "reflect": false
    }
  }; }
}
//# sourceMappingURL=hub-layout-row.js.map