import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const componentGridCss = ":host{display:block}";

const ComponentGrid$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return componentGridCss; }
}, [1, "component-grid"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["component-grid"];
  components.forEach(tagName => { switch (tagName) {
    case "component-grid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ComponentGrid$1);
      }
      break;
  } });
}

const ComponentGrid = ComponentGrid$1;
const defineCustomElement = defineCustomElement$1;

export { ComponentGrid, defineCustomElement };

//# sourceMappingURL=component-grid.js.map