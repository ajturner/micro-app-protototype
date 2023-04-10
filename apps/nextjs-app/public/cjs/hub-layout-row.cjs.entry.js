'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');

const hubLayoutRowCss = ":host{display:block}.row{display:flex;flex-direction:row;width:100%}";

let HubLayoutRow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "row", style: this.config.style }, this.config.sections.map((section) => (index.h("hub-layout-section", { config: section })))));
  }
};
HubLayoutRow.style = hubLayoutRowCss;

exports.hub_layout_row = HubLayoutRow;

//# sourceMappingURL=hub-layout-row.cjs.entry.js.map