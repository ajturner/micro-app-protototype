import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const componentGallerySearchInputCss = ":host{display:block}input{display:block;margin-bottom:1rem;padding:0.5rem;font-size:1rem;width:100%}";

const ComponentGallerySearchInput = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return componentGallerySearchInputCss; }
}, [1, "component-gallery-search-input", {
    "query": [1537]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["component-gallery-search-input"];
  components.forEach(tagName => { switch (tagName) {
    case "component-gallery-search-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ComponentGallerySearchInput);
      }
      break;
  } });
}

export { ComponentGallerySearchInput as C, defineCustomElement as d };

//# sourceMappingURL=component-gallery-search-input2.js.map