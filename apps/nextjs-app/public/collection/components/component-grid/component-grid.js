import { Host, h } from '@stencil/core';
export class ComponentGrid {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "component-grid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["component-grid.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["component-grid.css"]
    };
  }
}
//# sourceMappingURL=component-grid.js.map
