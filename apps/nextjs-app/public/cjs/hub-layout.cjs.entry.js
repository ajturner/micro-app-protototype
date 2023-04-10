'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');

const hubLayoutCss = ":host{display:block}.layout{display:flex;flex-direction:column;width:100%}";

let HubLayout = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    const response = await fetch(this.config);
    this.layoutConfig = await response.json();
  }
  render() {
    return (index.h("div", { class: "layout" }, this.layoutConfig &&
      this.layoutConfig.rows.map((row) => (index.h("hub-layout-row", { config: row })))));
  }
};
HubLayout.style = hubLayoutCss;

exports.hub_layout = HubLayout;

//# sourceMappingURL=hub-layout.cjs.entry.js.map