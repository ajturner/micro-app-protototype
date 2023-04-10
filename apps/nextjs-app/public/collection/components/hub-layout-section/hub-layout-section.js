import { Component, Prop, h } from '@stencil/core';
export class HubLayoutSection {
  render() {
    return (h("div", { class: "section", style: this.config.style }, this.config.cards.map((card) => (h("hub-layout-card", { config: card })))));
  }
  static get is() { return "hub-layout-section"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-layout-section.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-layout-section.css"]
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
//# sourceMappingURL=hub-layout-section.js.map