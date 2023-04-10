'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e13107cb.js');

const componentGridCss = ":host{display:block}";

const ComponentGrid = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
ComponentGrid.style = componentGridCss;

exports.component_grid = ComponentGrid;

//# sourceMappingURL=component-grid.cjs.entry.js.map