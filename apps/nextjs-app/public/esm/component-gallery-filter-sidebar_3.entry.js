import { r as registerInstance, c as createEvent, h } from './index-bad092d2.js';

const componentGalleryFilterSidebarCss = ".sidebar{width:200px;float:left;padding-right:1rem;box-sizing:border-box}.filter{margin-top:2rem}.filterTitle{font-weight:500}h3{margin-top:0}select{display:block;margin-bottom:1rem;padding:0.5rem;font-size:1rem;width:100%}";

const ComponentGalleryFilterSidebar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
ComponentGalleryFilterSidebar.style = componentGalleryFilterSidebarCss;

const componentGalleryGridCss = ".components-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));grid-gap:1rem;padding-left:1rem}";

const ComponentGalleryGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.components = [];
  }
  render() {
    return (h("div", { class: "components-grid" }, this.components.map((component) => (h("div", { class: "component" }, h("calcite-card", null, h("span", { slot: "title" }, h("a", { href: component.url, target: "_blank" }, component.title)), h("span", { slot: "subtitle" }, component.status), h("calcite-chip", { slot: "footer-start", scale: "s", value: component.type, appearance: "outline", kind: "brand", icon: "" }, component.type), h("calcite-button", { slot: "footer-end", target: "_blank", href: component.url }, "Open")))))));
  }
};
ComponentGalleryGrid.style = componentGalleryGridCss;

const componentGallerySearchInputCss = ":host{display:block}input{display:block;margin-bottom:1rem;padding:0.5rem;font-size:1rem;width:100%}";

const ComponentGallerySearchInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.search = createEvent(this, "search", 7);
    this.query = '';
  }
  onInput(event) {
    this.query = event.target.value;
    this.search.emit(this.query);
  }
  render() {
    return (h("input", { type: "text", placeholder: "Search components by title", onInput: (event) => this.onInput(event) }));
  }
};
ComponentGallerySearchInput.style = componentGallerySearchInputCss;

export { ComponentGalleryFilterSidebar as component_gallery_filter_sidebar, ComponentGalleryGrid as component_gallery_grid, ComponentGallerySearchInput as component_gallery_search_input };

//# sourceMappingURL=component-gallery-filter-sidebar_3.entry.js.map