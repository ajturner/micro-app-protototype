import { h } from "@stencil/core";
export class ComponentGallerySearchInput {
  constructor() {
    this.query = '';
  }
  onInput(event) {
    this.query = event.target.value;
    this.search.emit(this.query);
  }
  render() {
    return (h("input", { type: "text", placeholder: "Search components by title", onInput: (event) => this.onInput(event) }));
  }
  static get is() { return "component-gallery-search-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["component-gallery-search-input.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["component-gallery-search-input.css"]
    };
  }
  static get properties() {
    return {
      "query": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Query string to show in input.\nSearch function happens outside this component"
        },
        "attribute": "query",
        "reflect": true,
        "defaultValue": "''"
      }
    };
  }
  static get events() {
    return [{
        "method": "search",
        "name": "search",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=component-gallery-search-input.js.map
