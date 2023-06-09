import { HTMLElement, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';
import { S as Sortable } from './sortable.esm.js';
import { u as updateHostInteraction } from './interactive.js';
import { c as createObserver } from './observers.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  sortItem: "sort-item",
  container: "container",
  containerHorizontal: "container--horizontal",
  containerVertical: "container--vertical"
};

const sortableListCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;flex:1 1 auto}.container--vertical{flex-direction:column}.container--horizontal{flex-direction:row}";

let SortableList = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListOrderChange = createEvent(this, "calciteListOrderChange", 6);
    this.items = [];
    this.mutationObserver = createObserver("mutation", () => {
      this.cleanUpDragAndDrop();
      this.items = Array.from(this.el.children);
      this.setUpDragAndDrop();
    });
    this.dragSelector = undefined;
    this.group = undefined;
    this.handleSelector = "calcite-handle";
    this.layout = "vertical";
    this.disabled = false;
    this.loading = false;
    this.handleActivated = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.items = Array.from(this.el.children);
    this.setUpDragAndDrop();
    this.beginObserving();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.cleanUpDragAndDrop();
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  calciteHandleNudgeNextHandler(event) {
    this.handleNudgeEvent(event);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  handleNudgeEvent(event) {
    var _a;
    const { direction } = event.detail;
    const handle = event.target;
    const sortItem = this.items.find((item) => {
      return item.contains(handle) || event.composedPath().includes(item);
    });
    const lastIndex = this.items.length - 1;
    const startingIndex = this.items.indexOf(sortItem);
    let appendInstead = false;
    let buddyIndex;
    if (direction === "up") {
      if (startingIndex === 0) {
        appendInstead = true;
      }
      else {
        buddyIndex = startingIndex - 1;
      }
    }
    else {
      if (startingIndex === lastIndex) {
        buddyIndex = 0;
      }
      else if (startingIndex === lastIndex - 1) {
        appendInstead = true;
      }
      else {
        buddyIndex = startingIndex + 2;
      }
    }
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    if (appendInstead) {
      sortItem.parentElement.appendChild(sortItem);
    }
    else {
      sortItem.parentElement.insertBefore(sortItem, this.items[buddyIndex]);
    }
    this.items = Array.from(this.el.children);
    handle.activated = true;
    handle.setFocus();
    this.beginObserving();
  }
  setUpDragAndDrop() {
    this.cleanUpDragAndDrop();
    const options = {
      dataIdAttr: "id",
      group: this.group,
      handle: this.handleSelector,
      // Changed sorting within list
      onUpdate: () => {
        this.items = Array.from(this.el.children);
        this.calciteListOrderChange.emit();
      },
      // Element dragging started
      onStart: () => {
        var _a;
        (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      },
      // Element dragging ended
      onEnd: () => {
        this.beginObserving();
      }
    };
    if (this.dragSelector) {
      options.draggable = this.dragSelector;
    }
    this.sortable = Sortable.create(this.el, options);
  }
  cleanUpDragAndDrop() {
    var _a;
    (_a = this.sortable) === null || _a === void 0 ? void 0 : _a.destroy();
    this.sortable = null;
  }
  beginObserving() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { layout } = this;
    const horizontal = layout === "horizontal" || false;
    return (h("div", { class: {
        [CSS.container]: true,
        [CSS.containerVertical]: !horizontal,
        [CSS.containerHorizontal]: horizontal
      } }, h("slot", null)));
  }
  get el() { return this; }
  static get style() { return sortableListCss; }
};
SortableList = /*@__PURE__*/ proxyCustomElement(SortableList, [1, "calcite-sortable-list", {
    "dragSelector": [513, "drag-selector"],
    "group": [513],
    "handleSelector": [513, "handle-selector"],
    "layout": [513],
    "disabled": [516],
    "loading": [516],
    "handleActivated": [32]
  }, [[0, "calciteHandleNudge", "calciteHandleNudgeNextHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-sortable-list"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-sortable-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SortableList);
      }
      break;
  } });
}

const CalciteSortableList = SortableList;
const defineCustomElement = defineCustomElement$1;

export { CalciteSortableList, defineCustomElement };

//# sourceMappingURL=calcite-sortable-list.js.map