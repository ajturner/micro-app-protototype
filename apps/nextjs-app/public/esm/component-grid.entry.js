import { r as registerInstance, h, H as Host } from './index-bad092d2.js';

const componentGridCss = ":host{display:block}";

const ComponentGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
ComponentGrid.style = componentGridCss;

export { ComponentGrid as component_grid };

//# sourceMappingURL=component-grid.entry.js.map