'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const interactive = require('./interactive-aacdfedd.js');
const loadable = require('./loadable-0d54a318.js');
const observers = require('./observers-6da0c0fa.js');
const resources = require('./resources-3fcd22a2.js');
const sharedListRender = require('./shared-list-render-093f1bec.js');
require('./array-1eda7ed4.js');
require('./dom-5643dc8d.js');
require('./guid-504c591e.js');
require('./resources-0be54a9c.js');
require('./resources-3234ce9b.js');
require('./debounce-c881df11.js');

const pickListCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:1;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:stretch;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:1}calcite-filter{margin-block-end:0px}:host([loading][disabled]){min-block-size:2rem}";

let PickList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteListChange = index.createEvent(this, "calciteListChange", 6);
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
    this.keyDownHandler = sharedListRender.keyDownHandler.bind(this);
    this.disabled = false;
    this.filteredItems = [];
    this.filteredData = [];
    this.filterEnabled = false;
    this.filterPlaceholder = undefined;
    this.filterText = undefined;
    this.headingLevel = undefined;
    this.loading = false;
    this.multiple = false;
    this.selectionFollowsFocus = false;
    this.selectedValues = new Map();
    this.dataForFilter = [];
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    sharedListRender.initialize.call(this);
    sharedListRender.initializeObserver.call(this);
  }
  disconnectedCallback() {
    sharedListRender.cleanUpObserver.call(this);
  }
  componentWillLoad() {
    loadable.setUpLoadableComponent(this);
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
    sharedListRender.handleInitialFilter.call(this);
  }
  componentDidRender() {
    interactive.updateHostInteraction(this);
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
  calciteListFocusOutHandler(event) {
    sharedListRender.calciteListFocusOutHandler.call(this, event);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  setUpItems() {
    sharedListRender.setUpItems.call(this, "calcite-pick-list-item");
  }
  setUpFilter() {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Returns the component's selected `calcite-pick-list-item`s. */
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
    return this.multiple ? resources.ICON_TYPES.square : resources.ICON_TYPES.circle;
  }
  render() {
    return index.h(sharedListRender.List, { onKeyDown: this.keyDownHandler, props: this });
  }
  get el() { return index.getElement(this); }
};
PickList.style = pickListCss;

exports.calcite_pick_list = PickList;

//# sourceMappingURL=calcite-pick-list.cjs.entry.js.map