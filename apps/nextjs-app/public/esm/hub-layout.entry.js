import { r as registerInstance, h } from './index-9b24d2d4.js';

const hubLayoutCss = ":host{display:block}.layout{display:flex;flex-direction:column;width:100%}";

let HubLayout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    const response = await fetch(this.config);
    this.layoutConfig = await response.json();
  }
  render() {
    return (h("div", { class: "layout" }, this.layoutConfig &&
      this.layoutConfig.rows.map((row) => (h("hub-layout-row", { config: row })))));
  }
};
HubLayout.style = hubLayoutCss;

export { HubLayout as hub_layout };

//# sourceMappingURL=hub-layout.entry.js.map