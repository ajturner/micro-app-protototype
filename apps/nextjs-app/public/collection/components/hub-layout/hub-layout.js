import { Component, Prop, State, h } from '@stencil/core';
export class HubLayout {
  async componentWillLoad() {
    const response = await fetch(this.config);
    this.layoutConfig = await response.json();
  }
  render() {
    return (h("div", { class: "layout" }, this.layoutConfig &&
      this.layoutConfig.rows.map((row) => (h("hub-layout-row", { config: row })))));
  }
  static get is() { return "hub-layout"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-layout.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-layout.css"]
  }; }
  static get properties() { return {
    "config": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
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
  static get states() { return {
    "layoutConfig": {}
  }; }
}
//# sourceMappingURL=hub-layout.js.map