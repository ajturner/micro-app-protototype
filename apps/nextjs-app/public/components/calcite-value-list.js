import { HTMLElement, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';
import { S as Sortable } from './sortable.esm.js';
import { u as updateHostInteraction } from './interactive.js';
import { s as setUpLoadableComponent, a as setComponentLoaded, c as componentLoaded } from './loadable.js';
import { c as connectLocalized, d as disconnectLocalized } from './locale.js';
import { c as createObserver } from './observers.js';
import { u as updateMessages, c as connectMessages, s as setUpMessages, d as disconnectMessages } from './t9n.js';
import { q as getItemIndex, m as mutationObserverCallback, d as deselectRemovedItems, a as deselectSiblingItems, s as selectSiblings, h as handleFilter, b as handleFilterEvent, g as getItemData, k as keyDownHandler, t as moveItemIndex, i as initialize, c as initializeObserver, f as handleInitialFilter, e as cleanUpObserver, n as calciteListFocusOutHandler, r as removeItem, j as calciteListItemChangeHandler, l as calciteInternalListItemValueChangeHandler, o as setUpItems, p as setFocus, L as List } from './shared-list-render.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  container: "container",
  handle: "handle"
};
var ICON_TYPES;
(function (ICON_TYPES) {
  ICON_TYPES["grip"] = "grip";
})(ICON_TYPES || (ICON_TYPES = {}));

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
function getScreenReaderText(item, status, valueList) {
  const { items, messages } = valueList;
  const total = items.length;
  const position = getItemIndex(valueList, item) + 1;
  const template = status === "idle"
    ? messages.dragHandleIdle
    : status === "active"
      ? messages.dragHandleActive
      : status === "change"
        ? messages.dragHandleChange
        : messages.dragHandleCommit;
  return replacePlaceholders(template, item.label, position, total);
}
function getHandleAndItemElement(event) {
  const handle = event
    .composedPath()
    .find((item) => item.dataset?.jsHandle !== undefined);
  const item = event
    .composedPath()
    .find((item) => item.tagName?.toLowerCase() === "calcite-value-list-item");
  return { handle, item };
}
function replacePlaceholders(text, label, position, total) {
  const replacePosition = text.replace("${position}", position.toString());
  const replaceLabel = replacePosition.replace("${itemLabel}", label);
  return replaceLabel.replace("${total}", total.toString());
}

const valueListCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}calcite-value-list-item:last-of-type{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:center;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:300}calcite-filter{margin-block-end:1px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";

let ValueList = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListChange = createEvent(this, "calciteListChange", 6);
    this.calciteListOrderChange = createEvent(this, "calciteListOrderChange", 6);
    this.calciteListFilter = createEvent(this, "calciteListFilter", 6);
    this.lastSelectedItem = null;
    this.mutationObserver = createObserver("mutation", mutationObserverCallback.bind(this));
    this.setFilterEl = (el) => {
      this.filterEl = el;
    };
    this.setFilteredItems = (filteredItems) => {
      this.filteredItems = filteredItems;
    };
    this.deselectRemovedItems = deselectRemovedItems.bind(this);
    this.deselectSiblingItems = deselectSiblingItems.bind(this);
    this.selectSiblings = selectSiblings.bind(this);
    this.handleFilter = handleFilter.bind(this);
    this.handleFilterEvent = handleFilterEvent.bind(this);
    this.getItemData = getItemData.bind(this);
    this.keyDownHandler = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const { handle, item } = getHandleAndItemElement(event);
      if (handle && !item.handleActivated && event.key === " ") {
        this.updateScreenReaderText(getScreenReaderText(item, "commit", this));
      }
      if (!handle || !item.handleActivated) {
        keyDownHandler.call(this, event);
        return;
      }
      event.preventDefault();
      const { items } = this;
      if (event.key === " ") {
        this.updateScreenReaderText(getScreenReaderText(item, "active", this));
      }
      if ((event.key !== "ArrowUp" && event.key !== "ArrowDown") || items.length <= 1) {
        return;
      }
      const { el } = this;
      const nextIndex = moveItemIndex(this, item, event.key === "ArrowUp" ? "up" : "down");
      if (nextIndex === items.length - 1) {
        el.appendChild(item);
      }
      else {
        const itemAtNextIndex = el.children[nextIndex];
        const insertionReferenceItem = itemAtNextIndex === item.nextElementSibling
          ? itemAtNextIndex.nextElementSibling
          : itemAtNextIndex;
        el.insertBefore(item, insertionReferenceItem);
      }
      this.items = this.getItems();
      this.calciteListOrderChange.emit(this.items.map(({ value }) => value));
      requestAnimationFrame(() => handle === null || handle === void 0 ? void 0 : handle.focus());
      item.handleActivated = true;
      this.updateHandleAriaLabel(handle, getScreenReaderText(item, "change", this));
    };
    this.storeAssistiveEl = (el) => {
      this.assistiveTextEl = el;
    };
    this.handleFocusIn = (event) => {
      const { handle, item } = getHandleAndItemElement(event);
      if (!(item === null || item === void 0 ? void 0 : item.handleActivated) && item && handle) {
        this.updateHandleAriaLabel(handle, getScreenReaderText(item, "idle", this));
      }
    };
    this.disabled = false;
    this.dragEnabled = false;
    this.filteredItems = [];
    this.filteredData = [];
    this.filterEnabled = false;
    this.filterPlaceholder = undefined;
    this.filterText = undefined;
    this.group = undefined;
    this.loading = false;
    this.multiple = false;
    this.selectionFollowsFocus = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.dataForFilter = [];
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.selectedValues = new Map();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectLocalized(this);
    connectMessages(this);
    initialize.call(this);
    initializeObserver.call(this);
  }
  async componentWillLoad() {
    setUpLoadableComponent(this);
    await setUpMessages(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
    this.setUpDragAndDrop();
    handleInitialFilter.call(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  disconnectedCallback() {
    disconnectLocalized(this);
    disconnectMessages(this);
    cleanUpObserver.call(this);
    this.cleanUpDragAndDrop();
  }
  calciteListFocusOutHandler(event) {
    calciteListFocusOutHandler.call(this, event);
  }
  calciteListItemRemoveHandler(event) {
    removeItem.call(this, event);
  }
  calciteListItemChangeHandler(event) {
    calciteListItemChangeHandler.call(this, event);
  }
  calciteInternalListItemPropsChangeHandler(event) {
    event.stopPropagation();
    this.setUpFilter();
  }
  calciteInternalListItemValueChangeHandler(event) {
    calciteInternalListItemValueChangeHandler.call(this, event);
    event.stopPropagation();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  getItems() {
    return Array.from(this.el.querySelectorAll("calcite-value-list-item"));
  }
  setUpItems() {
    setUpItems.call(this, "calcite-value-list-item");
  }
  setUpFilter() {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  }
  setUpDragAndDrop() {
    this.cleanUpDragAndDrop();
    if (!this.dragEnabled) {
      return;
    }
    this.sortable = Sortable.create(this.el, {
      dataIdAttr: "id",
      handle: `.${CSS.handle}`,
      draggable: "calcite-value-list-item",
      group: this.group,
      onSort: () => {
        this.items = Array.from(this.el.querySelectorAll("calcite-value-list-item"));
        const values = this.items.map((item) => item.value);
        this.calciteListOrderChange.emit(values);
      }
    });
  }
  cleanUpDragAndDrop() {
    var _a;
    (_a = this.sortable) === null || _a === void 0 ? void 0 : _a.destroy();
    this.sortable = null;
  }
  handleBlur() {
    if (this.dragEnabled) {
      this.updateScreenReaderText("");
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Returns the currently selected items */
  async getSelectedItems() {
    return this.selectedValues;
  }
  /**
   * Sets focus on the component's first focusable element.
   *
   * @param focusId
   */
  async setFocus(focusId) {
    await componentLoaded(this);
    return setFocus.call(this, focusId);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  getIconType() {
    let type = null;
    if (this.dragEnabled) {
      type = ICON_TYPES.grip;
    }
    return type;
  }
  updateScreenReaderText(text) {
    this.assistiveTextEl.textContent = text;
  }
  updateHandleAriaLabel(handleElement, text) {
    handleElement.ariaLabel = text;
  }
  handleValueListItemBlur(event) {
    const { item, handle } = event.detail;
    if (!(item === null || item === void 0 ? void 0 : item.handleActivated) && item) {
      this.updateHandleAriaLabel(handle, getScreenReaderText(item, "idle", this));
    }
    event.stopPropagation();
  }
  render() {
    return (h(List, { onBlur: this.handleBlur, onFocusin: this.handleFocusIn, onKeyDown: this.keyDownHandler, props: this }));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return valueListCss; }
};
ValueList = /*@__PURE__*/ proxyCustomElement(ValueList, [1, "calcite-value-list", {
    "disabled": [516],
    "dragEnabled": [516, "drag-enabled"],
    "filteredItems": [1040],
    "filteredData": [1040],
    "filterEnabled": [516, "filter-enabled"],
    "filterPlaceholder": [513, "filter-placeholder"],
    "filterText": [1537, "filter-text"],
    "group": [513],
    "loading": [516],
    "multiple": [516],
    "selectionFollowsFocus": [516, "selection-follows-focus"],
    "messageOverrides": [1040],
    "messages": [1040],
    "dataForFilter": [32],
    "defaultMessages": [32],
    "effectiveLocale": [32],
    "selectedValues": [32],
    "getSelectedItems": [64],
    "setFocus": [64]
  }, [[0, "focusout", "calciteListFocusOutHandler"], [0, "calciteListItemRemove", "calciteListItemRemoveHandler"], [0, "calciteListItemChange", "calciteListItemChangeHandler"], [0, "calciteInternalListItemPropsChange", "calciteInternalListItemPropsChangeHandler"], [0, "calciteInternalListItemValueChange", "calciteInternalListItemValueChangeHandler"], [0, "calciteValueListItemDragHandleBlur", "handleValueListItemBlur"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-value-list"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-value-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ValueList);
      }
      break;
  } });
}

const CalciteValueList = ValueList;
const defineCustomElement = defineCustomElement$1;

export { CalciteValueList, defineCustomElement };

//# sourceMappingURL=calcite-value-list.js.map