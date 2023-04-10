import { r as registerInstance, h } from './index-9b24d2d4.js';

const hubLayoutRowCss = ":host{display:block}.row{display:flex;flex-direction:row;width:100%}";

let HubLayoutRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "row", style: this.config.style }, this.config.sections.map((section) => (h("hub-layout-section", { config: section })))));
  }
};
HubLayoutRow.style = hubLayoutRowCss;

export { HubLayoutRow as hub_layout_row };

//# sourceMappingURL=hub-layout-row.entry.js.map