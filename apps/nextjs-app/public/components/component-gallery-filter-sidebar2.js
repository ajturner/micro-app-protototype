import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './checkbox.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './tree.js';
import { d as defineCustomElement$1 } from './tree-item.js';

const componentGalleryFilterSidebarCss = ".sidebar{width:200px;float:left;padding-right:1rem;box-sizing:border-box}.filter{margin-top:2rem}.filterTitle{font-weight:500}h3{margin-top:0}select{display:block;margin-bottom:1rem;padding:0.5rem;font-size:1rem;width:100%}";

const ComponentGalleryFilterSidebar = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.filtersUpdated = createEvent(this, "filtersUpdated", 7);
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
  static get style() { return componentGalleryFilterSidebarCss; }
}, [1, "component-gallery-filter-sidebar", {
    "filters": [16]
  }, [[0, "calciteTreeSelect", "onFilterChanged"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["component-gallery-filter-sidebar", "calcite-checkbox", "calcite-icon", "calcite-tree", "calcite-tree-item"];
  components.forEach(tagName => { switch (tagName) {
    case "component-gallery-filter-sidebar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ComponentGalleryFilterSidebar);
      }
      break;
    case "calcite-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "calcite-tree":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "calcite-tree-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { ComponentGalleryFilterSidebar as C, defineCustomElement as d };

//# sourceMappingURL=component-gallery-filter-sidebar2.js.map