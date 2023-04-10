import { Component, Prop, h } from '@stencil/core';
import * as AdaptiveCards from 'adaptivecards';
import '@esri/calcite-components';
export class CardComponent {
  componentDidLoad() {
    const adaptiveCard = new AdaptiveCards.AdaptiveCard();
    adaptiveCard.parse(this.config);
    const renderedCard = adaptiveCard.render();
    this.cardElement.appendChild(renderedCard);
  }
  render() {
    let content;
    switch (this.config.type) {
      case 'TextBlock':
        content = h("calcite-tip", { style: this.config.style }, this.config.text);
        break;
      case 'Image':
        content = (h("calcite-card", null,
          h("img", { slot: "thumbnail", src: this.config.url, style: this.config.style, alt: this.config.text })));
        break;
      case 'Map':
        content = (h("calcite-map", { lat: this.config.lat, lon: this.config.lon, zoom: this.config.zoom, style: this.config.style }));
        break;
      // Add more case statements for other card types like weather, survey, etc.
    }
    return h("div", { class: "card", style: this.config.style },
      content,
      h("calcite-chip", { value: this.config.type }, this.config.type));
  }
  static get is() { return "hub-layout-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-layout-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-layout-card.css"]
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
//# sourceMappingURL=hub-layout-card.js.map