import { h } from '@stencil/core';
export class ComponentGalleryFilterSidebar {
  constructor() {
    this.filtersEl = {};
    this.filters = {};
  }
  onFilterChanged(_event) {
    const filters = {
      type: [],
      status: []
    };
    Object.keys(this.filters).forEach((filter) => {
      filters[filter] = Array.from(this.filtersEl[filter].children)
        .filter((node) => node.selected)
        .map((node) => node.innerText);
    });
    this.filtersUpdated.emit(filters);
  }
  render() {
    return (h("div", { class: "sidebar" }, Object.keys(this.filters).map((filter) => {
      return (h("div", { class: "filter" }, h("span", { class: "filterTitle" }, "Filter by ", filter), h("calcite-tree", { ref: (el) => this.filtersEl[filter] = el, "selection-mode": "multiple" }, this.filters[filter].sort().map((option) => {
        return h("calcite-tree-item", null, option);
      }))));
    })));
  }
  static get is() { return "component-gallery-filter-sidebar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["component-gallery-filter-sidebar.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["component-gallery-filter-sidebar.css"]
    };
  }
  static get properties() {
    return {
      "filters": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Record<string, Array<string>>",
          "resolved": "{ [x: string]: string[]; }",
          "references": {
            "Record": {
              "location": "global"
            },
            "Array": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "{}"
      }
    };
  }
  static get events() {
    return [{
        "method": "filtersUpdated",
        "name": "filtersUpdated",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "SearchFilters",
          "resolved": "{ [x: string]: string[]; }",
          "references": {
            "SearchFilters": {
              "location": "import",
              "path": "../../utils/search"
            }
          }
        }
      }];
  }
  static get listeners() {
    return [{
        "name": "calciteTreeSelect",
        "method": "onFilterChanged",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=component-gallery-filter-sidebar.js.map
