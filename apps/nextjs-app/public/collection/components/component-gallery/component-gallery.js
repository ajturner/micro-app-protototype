import { h } from '@stencil/core';
import axios from 'axios';
import { createSearchIndex, search, addRecord, getFilters } from '../../utils/search';
export class ComponentGallery {
  constructor() {
    this.searchIndex = createSearchIndex();
    this.filters = {};
    this.query = '';
    this.components = [];
    this.filteredComponents = [];
    this.filterOptions = {};
  }
  async componentWillLoad() {
    try {
      this.components = await this.loadConfig();
      this.filteredComponents = this.components;
      this.filterOptions = getFilters();
      // Do a search in case query/filter props were set
      // This will keep all components if no properties were set.
      this.handleSearch();
    }
    catch (error) {
      console.error('<component-gallery>: Error fetching configuration!', error);
    }
  }
  /**
   * Load the data/components.json configuration file
   */
  async loadConfig() {
    const response = await axios.get('./data/components.json');
    const components = this.sortComponents(response.data.components);
    components.forEach((component) => addRecord(component));
    return components;
  }
  /**
   * Sort components by lowercase title
   * @param components array of components to srt
   */
  sortComponents(components) {
    return components.sort((a, b) => {
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
    });
  }
  /**
   * Small function to check if filters are empty or not
   * @param filters
   */
  checkFiltersExist(filters) {
    return Object.keys(filters)
      .filter((filterKey) => filters[filterKey].length > 0)
      .length > 0;
  }
  handleSearch() {
    var _a;
    if (((_a = this.query) === null || _a === void 0 ? void 0 : _a.length) <= 0 && !this.checkFiltersExist(this.filters)) {
      this.filteredComponents = this.components;
    }
    else {
      this.filteredComponents = search(this.query, this.filters);
    }
  }
  handleQuery(query) {
    this.query = query;
    this.handleSearch();
  }
  handleFilterUpdated(filters = {}) {
    this.filters = filters;
    this.handleSearch();
  }
  render() {
    return (h("div", { class: "gallery-container" }, h("component-gallery-search-input", { query: this.query, onSearch: (event) => this.handleQuery(event.detail) }), h("component-gallery-filter-sidebar", { filters: this.filterOptions, onFiltersUpdated: (event) => this.handleFilterUpdated(event.detail) }), h("component-gallery-grid", { components: this.filteredComponents })));
  }
  static get is() { return "component-gallery"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["component-gallery.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["component-gallery.css"]
    };
  }
  static get properties() {
    return {
      "filters": {
        "type": "unknown",
        "mutable": true,
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
          "text": "Set the type & status filters on the gallery.\nEach filter type is `and` (both), while the array are `or` (any of)\nExample: filters={ type: ['Discussions', 'Telemetry], status: ['Production']}"
        },
        "defaultValue": "{}"
      },
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
          "text": "Set the query string to search the title"
        },
        "attribute": "query",
        "reflect": true,
        "defaultValue": "''"
      }
    };
  }
  static get states() {
    return {
      "components": {},
      "filteredComponents": {},
      "filterOptions": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "query",
        "methodName": "handleQuery"
      }, {
        "propName": "filters",
        "methodName": "handleFilterUpdated"
      }];
  }
}
//# sourceMappingURL=component-gallery.js.map
