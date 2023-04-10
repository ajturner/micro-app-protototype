'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const sortable_esm = require('./sortable.esm-870b4ff9.js');
const interactive = require('./interactive-aacdfedd.js');
const loadable = require('./loadable-0d54a318.js');
const locale = require('./locale-dbbec1a1.js');
const observers = require('./observers-6da0c0fa.js');
const t9n = require('./t9n-30d5587d.js');
const sharedListRender = require('./shared-list-render-093f1bec.js');
require('./dom-5643dc8d.js');
require('./guid-504c591e.js');
require('./resources-0be54a9c.js');
require('./key-75cf5e40.js');
require('./array-1eda7ed4.js');
require('./resources-3234ce9b.js');
require('./debounce-c881df11.js');
require('./resources-3fcd22a2.js');

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
  const position = sharedListRender.getItemIndex(valueList, item) + 1;
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

let ValueList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteListChange = index.createEvent(this, "calciteListChange", 6);
    this.calciteListOrderChange = index.createEvent(this, "calciteListOrderChange", 6);
    this.calciteListFilter = index.createEvent(this, "calciteListFilter", 6);
    this.lastSelectedItem = null;
    this.mutationObserver = observers.createObserver("mutation", sharedListRender.mutationObserverCallback.bind(this));
    this.setFilterEl = (el) => {
      this.filterEl = el;
    };
    this.setFilteredItems = (filteredItems) => {
      this.filteredItems = filteredItems;
    };
    this.deselectRemovedItems = sharedListRender.deselectRemovedItems.bind(this);
    this.deselectSiblingItems = sharedListRender.deselectSiblingItems.bind(this);
    this.selectSiblings = sharedListRender.selectSiblings.bind(this);
    this.handleFilter = sharedListRender.handleFilter.bind(this);
    this.handleFilterEvent = sharedListRender.handleFilterEvent.bind(this);
    this.getItemData = sharedListRender.getItemData.bind(this);
    this.keyDownHandler = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const { handle, item } = getHandleAndItemElement(event);
      if (handle && !item.handleActivated && event.key === " ") {
        this.updateScreenReaderText(getScreenReaderText(item, "commit", this));
      }
      if (!handle || !item.handleActivated) {
        sharedListRender.keyDownHandler.call(this, event);
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
      const nextIndex = sharedListRender.moveItemIndex(this, item, event.key === "ArrowUp" ? "up" : "down");
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
    t9n.updateMessages(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    locale.connectLocalized(this);
    t9n.connectMessages(this);
    sharedListRender.initialize.call(this);
    sharedListRender.initializeObserver.call(this);
  }
  async componentWillLoad() {
    loadable.setUpLoadableComponent(this);
    await t9n.setUpMessages(this);
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
    this.setUpDragAndDrop();
    sharedListRender.handleInitialFilter.call(this);
  }
  componentDidRender() {
    interactive.updateHostInteraction(this);
  }
  disconnectedCallback() {
    locale.disconnectLocalized(this);
    t9n.disconnectMessages(this);
    sharedListRender.cleanUpObserver.call(this);
    this.cleanUpDragAndDrop();
  }
  calciteListFocusOutHandler(event) {
    sharedListRender.calciteListFocusOutHandler.call(this, event);
  }
  calciteListItemRemoveHandler(event) {
    sharedListRender.removeItem.call(this, event);
  }
  calciteListItemChangeHandler(event) {
    sharedListRender.calciteListItemChangeHandler.call(this, event);
  }
  calciteInternalListItemPropsChangeHandler(event) {
    event.stopPropagation();
    this.setUpFilter();
  }
  calciteInternalListItemValueChangeHandler(event) {
    sharedListRender.calciteInternalListItemValueChangeHandler.call(this, event);
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
    sharedListRender.setUpItems.call(this, "calcite-value-list-item");
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
    this.sortable = sortable_esm.Sortable.create(this.el, {
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
    await loadable.componentLoaded(this);
    return sharedListRender.setFocus.call(this, focusId);
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
    return (index.h(sharedListRender.List, { onBlur: this.handleBlur, onFocusin: this.handleFocusIn, onKeyDown: this.keyDownHandler, props: this }));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
ValueList.style = valueListCss;

exports.calcite_value_list = ValueList;

//# sourceMappingURL=calcite-value-list.cjs.entry.js.map