import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-9b24d2d4.js';
import { f as filter } from './filter-1d33c16e.js';
import { i as isPrimaryPointerButton, t as toAriaBoolean } from './dom-67db067b.js';
import { d as defaultMenuPlacement, f as filterComputedPlacements, c as connectFloatingUI, u as updateAfterClose, r as reposition, a as disconnectFloatingUI, F as FloatingCSS } from './floating-ui-75c36572.js';
import { s as submitForm, c as connectForm, a as afterConnectDefaultValueSet, d as disconnectForm, H as HiddenFormInputSlot } from './form-f888e66d.js';
import { g as guid } from './guid-89dde75d.js';
import { u as updateHostInteraction } from './interactive-5738af71.js';
import { c as connectLabel, d as disconnectLabel, g as getLabelText } from './label-df96ca5f.js';
import { c as componentLoaded, a as setUpLoadableComponent, s as setComponentLoaded } from './loadable-eeabeb84.js';
import { c as connectLocalized, d as disconnectLocalized } from './locale-6fffb6ae.js';
import { c as createObserver } from './observers-38221b96.js';
import { c as connectOpenCloseComponent, d as disconnectOpenCloseComponent } from './openCloseComponent-77161dfa.js';
import { c as connectMessages, s as setUpMessages, d as disconnectMessages, u as updateMessages } from './t9n-802ef166.js';
import { C as ComboboxChildSelector, g as getItemAncestors, a as getItemChildren, h as hasActiveChildren, b as ComboboxItem, c as ComboboxItemGroup } from './utils-39bb2973.js';
import { d as debounce } from './debounce-f5f6068a.js';
import './resources-2916eda2.js';
import './key-4fdf42f2.js';

const comboboxCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.75rem}.wrapper{display:flex;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-color:transparent;padding-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.wrapper--single{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px}.input{flex-grow:1;-webkit-appearance:none;appearance:none;border-style:none;background-color:transparent;padding:0px;font-family:inherit;color:var(--calcite-ui-text-1);font-size:inherit;block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-inline-size:120px;margin-block-end:var(--calcite-combobox-item-spacing-unit-s)}.input:focus{outline:2px solid transparent;outline-offset:2px}.input--transparent{opacity:0}.input--single{margin-block:0px;padding:0px}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;inline-size:0px;min-inline-size:0px;opacity:0}.input--icon{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.input-wrap{display:flex;flex-grow:1}.input-wrap--single{flex:1 1 0%;overflow:hidden}.label{pointer-events:none;display:flex;max-inline-size:100%;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;font-weight:var(--calcite-font-weight-normal);block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--icon{padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:flex;inline-size:1rem;cursor:pointer;align-items:center}.icon-end{flex:none}.floating-ui-container{--calcite-floating-ui-z-index:600;display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}.floating-ui-container--active{visibility:visible}@media (forced-colors: active){.wrapper,.floating-ui-container--active{border:1px solid canvasText}}.screen-readers-only{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{max-block-size:45vh;overflow-y:auto;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.list{margin:0px;display:block;padding:0px}.list--hide{block-size:0px;overflow:hidden}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);margin-inline:0 var(--calcite-combobox-item-spacing-unit-s);max-inline-size:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.item{display:block}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const isGroup = (el) => el.tagName === ComboboxItemGroup;
const itemUidPrefix = "combobox-item-";
const chipUidPrefix = "combobox-chip-";
const labelUidPrefix = "combobox-label-";
const listboxUidPrefix = "combobox-listbox-";
const inputUidPrefix = "combobox-input-";
let Combobox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteComboboxChange = createEvent(this, "calciteComboboxChange", 6);
    this.calciteComboboxFilterChange = createEvent(this, "calciteComboboxFilterChange", 6);
    this.calciteComboboxChipClose = createEvent(this, "calciteComboboxChipClose", 6);
    this.calciteComboboxBeforeClose = createEvent(this, "calciteComboboxBeforeClose", 6);
    this.calciteComboboxClose = createEvent(this, "calciteComboboxClose", 6);
    this.calciteComboboxBeforeOpen = createEvent(this, "calciteComboboxBeforeOpen", 6);
    this.calciteComboboxOpen = createEvent(this, "calciteComboboxOpen", 6);
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    this.placement = defaultMenuPlacement;
    this.internalValueChangeFlag = false;
    this.textInput = null;
    this.mutationObserver = createObserver("mutation", () => this.updateItems());
    this.resizeObserver = createObserver("resize", () => this.setMaxScrollerHeight());
    this.guid = guid();
    this.inputHeight = 0;
    this.ignoreSelectedEventsFlag = false;
    this.openTransitionProp = "opacity";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? filterComputedPlacements(flipPlacements, el)
        : null;
    };
    this.getValue = () => {
      const items = this.selectedItems.map((item) => { var _a; return (_a = item === null || item === void 0 ? void 0 : item.value) === null || _a === void 0 ? void 0 : _a.toString(); });
      return (items === null || items === void 0 ? void 0 : items.length) ? (items.length > 1 ? items : items[0]) : "";
    };
    this.onLabelClick = () => {
      this.setFocus();
    };
    this.keydownHandler = (event) => {
      const { key } = event;
      switch (key) {
        case "Tab":
          this.activeChipIndex = -1;
          this.activeItemIndex = -1;
          if (this.allowCustomValues && this.text) {
            this.addCustomChip(this.text, true);
            event.preventDefault();
          }
          else if (this.open) {
            this.open = false;
            event.preventDefault();
          }
          break;
        case "ArrowLeft":
          this.previousChip();
          event.preventDefault();
          break;
        case "ArrowRight":
          this.nextChip();
          event.preventDefault();
          break;
        case "ArrowUp":
          event.preventDefault();
          this.shiftActiveItemIndex(-1);
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case "ArrowDown":
          event.preventDefault();
          if (!this.open) {
            this.open = true;
          }
          this.shiftActiveItemIndex(1);
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case " ":
          if (!this.textInput.value) {
            event.preventDefault();
            this.open = true;
            this.shiftActiveItemIndex(1);
          }
          break;
        case "Home":
          if (!this.open) {
            return;
          }
          event.preventDefault();
          this.updateActiveItemIndex(0);
          this.scrollToActiveItem();
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case "End":
          if (!this.open) {
            return;
          }
          event.preventDefault();
          this.updateActiveItemIndex(this.filteredItems.length - 1);
          this.scrollToActiveItem();
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case "Escape":
          this.open = false;
          event.preventDefault();
          break;
        case "Enter":
          if (this.activeItemIndex > -1) {
            this.toggleSelection(this.filteredItems[this.activeItemIndex]);
            event.preventDefault();
          }
          else if (this.activeChipIndex > -1) {
            this.removeActiveChip();
            event.preventDefault();
          }
          else if (this.allowCustomValues && this.text) {
            this.addCustomChip(this.text, true);
            event.preventDefault();
          }
          else if (!event.defaultPrevented) {
            if (submitForm(this)) {
              event.preventDefault();
            }
          }
          break;
        case "Delete":
        case "Backspace":
          if (this.activeChipIndex > -1) {
            event.preventDefault();
            this.removeActiveChip();
          }
          else if (!this.text && this.isMulti()) {
            event.preventDefault();
            this.removeLastChip();
          }
          break;
      }
    };
    this.toggleCloseEnd = () => {
      this.open = false;
      this.el.removeEventListener("calciteComboboxClose", this.toggleCloseEnd);
    };
    this.toggleOpenEnd = () => {
      this.open = false;
      this.el.removeEventListener("calciteComboboxOpen", this.toggleOpenEnd);
    };
    this.setMaxScrollerHeight = async () => {
      const { listContainerEl, open, referenceEl } = this;
      if (!listContainerEl || !open) {
        return;
      }
      await this.reposition(true);
      const maxScrollerHeight = this.getMaxScrollerHeight();
      listContainerEl.style.maxHeight = maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : "";
      listContainerEl.style.minWidth = `${referenceEl.clientWidth}px`;
      await this.reposition(true);
    };
    this.calciteChipCloseHandler = (comboboxItem) => {
      this.open = false;
      const selection = this.items.find((item) => item === comboboxItem);
      if (selection) {
        this.toggleSelection(selection, false);
      }
      this.calciteComboboxChipClose.emit();
    };
    this.clickHandler = (event) => {
      if (event.composedPath().some((node) => node.tagName === "CALCITE-CHIP")) {
        return;
      }
      this.open = !this.open;
      this.updateActiveItemIndex(0);
      this.setFocus();
    };
    this.setInactiveIfNotContained = (event) => {
      const composedPath = event.composedPath();
      if (!this.open || composedPath.includes(this.el) || composedPath.includes(this.referenceEl)) {
        return;
      }
      if (this.allowCustomValues && this.text.trim().length) {
        this.addCustomChip(this.text);
      }
      if (this.selectionMode === "single") {
        if (this.textInput) {
          this.textInput.value = "";
        }
        this.text = "";
        this.filterItems("");
        this.updateActiveItemIndex(-1);
      }
      this.open = false;
    };
    this.setFloatingEl = (el) => {
      this.floatingEl = el;
      connectFloatingUI(this, this.referenceEl, this.floatingEl);
    };
    this.setContainerEl = (el) => {
      this.resizeObserver.observe(el);
      this.listContainerEl = el;
      this.transitionEl = el;
      connectOpenCloseComponent(this);
    };
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
      connectFloatingUI(this, this.referenceEl, this.floatingEl);
    };
    this.inputHandler = (event) => {
      const value = event.target.value;
      this.text = value;
      this.filterItems(value);
      if (value) {
        this.activeChipIndex = -1;
      }
    };
    this.filterItems = (() => {
      const find = (item, filteredData) => item &&
        filteredData.some(({ label, value }) => {
          if (isGroup(item)) {
            return value === item.label;
          }
          return (value === item.textLabel ||
            value === item.value ||
            label === item.textLabel ||
            label === item.value);
        });
      return debounce((text) => {
        const filteredData = filter(this.data, text);
        const items = this.getCombinedItems();
        items.forEach((item) => {
          const hidden = !find(item, filteredData);
          item.hidden = hidden;
          const [parent, grandparent] = item.ancestors;
          if (find(parent, filteredData) || find(grandparent, filteredData)) {
            item.hidden = false;
          }
          if (!hidden) {
            item.ancestors.forEach((ancestor) => (ancestor.hidden = false));
          }
        });
        this.filteredItems = this.getfilteredItems();
        this.calciteComboboxFilterChange.emit();
      }, 100);
    })();
    this.internalComboboxChangeEvent = () => {
      this.calciteComboboxChange.emit();
    };
    this.emitComboboxChange = debounce(this.internalComboboxChangeEvent, 0);
    this.updateItems = () => {
      this.items = this.getItems();
      this.groupItems = this.getGroupItems();
      this.data = this.getData();
      this.selectedItems = this.getSelectedItems();
      this.filteredItems = this.getfilteredItems();
      this.needsIcon = this.getNeedsIcon();
      if (!this.allowCustomValues) {
        this.setMaxScrollerHeight();
      }
    };
    this.scrollToActiveItem = () => {
      const activeItem = this.filteredItems[this.activeItemIndex];
      if (!activeItem) {
        return;
      }
      const height = this.calculateSingleItemHeight(activeItem);
      const { offsetHeight, scrollTop } = this.listContainerEl;
      if (offsetHeight + scrollTop < activeItem.offsetTop + height) {
        this.listContainerEl.scrollTop = activeItem.offsetTop - offsetHeight + height;
      }
      else if (activeItem.offsetTop < scrollTop) {
        this.listContainerEl.scrollTop = activeItem.offsetTop;
      }
    };
    this.comboboxFocusHandler = () => {
      var _a;
      (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
    };
    this.comboboxBlurHandler = (event) => {
      this.setInactiveIfNotContained(event);
    };
    this.open = false;
    this.disabled = false;
    this.form = undefined;
    this.label = undefined;
    this.placeholder = undefined;
    this.placeholderIcon = undefined;
    this.placeholderIconFlipRtl = false;
    this.maxItems = 0;
    this.name = undefined;
    this.allowCustomValues = undefined;
    this.overlayPositioning = "absolute";
    this.required = false;
    this.selectionMode = "multiple";
    this.scale = "m";
    this.value = null;
    this.flipPlacements = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.selectedItems = [];
    this.filteredItems = [];
    this.items = [];
    this.groupItems = [];
    this.needsIcon = undefined;
    this.activeItemIndex = -1;
    this.activeChipIndex = -1;
    this.activeDescendant = "";
    this.text = "";
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  openHandler(value) {
    if (!value) {
      updateAfterClose(this.floatingEl);
    }
    if (this.disabled) {
      this.open = false;
      return;
    }
    this.setMaxScrollerHeight();
  }
  handleDisabledChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  maxItemsHandler() {
    this.setMaxScrollerHeight();
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  valueHandler(value) {
    if (!this.internalValueChangeFlag) {
      const items = this.getItems();
      if (Array.isArray(value)) {
        items.forEach((item) => (item.selected = value.includes(item.value)));
      }
      else if (value) {
        items.forEach((item) => (item.selected = value === item.value));
      }
      else {
        items.forEach((item) => (item.selected = false));
      }
      this.updateItems();
    }
  }
  onMessagesChange() {
    /*  wired up by t9n util */
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  selectedItemsHandler() {
    this.internalValueChangeFlag = true;
    this.value = this.getValue();
    this.internalValueChangeFlag = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  documentClickHandler(event) {
    if (!isPrimaryPointerButton(event)) {
      return;
    }
    this.setInactiveIfNotContained(event);
  }
  calciteComboboxItemChangeHandler(event) {
    if (this.ignoreSelectedEventsFlag) {
      return;
    }
    const target = event.target;
    const newIndex = this.filteredItems.indexOf(target);
    this.updateActiveItemIndex(newIndex);
    this.toggleSelection(target, target.selected);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    const { floatingEl, referenceEl, placement, overlayPositioning, filteredFlipPlacements } = this;
    return reposition(this, {
      floatingEl,
      referenceEl,
      overlayPositioning,
      placement,
      flipPlacements: filteredFlipPlacements,
      type: "menu"
    }, delayed);
  }
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    await componentLoaded(this);
    (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
    this.activeChipIndex = -1;
    this.activeItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    connectLocalized(this);
    connectMessages(this);
    this.internalValueChangeFlag = true;
    this.value = this.getValue();
    this.internalValueChangeFlag = false;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
    connectLabel(this);
    connectForm(this);
    connectOpenCloseComponent(this);
    this.setFilteredPlacements();
    this.reposition(true);
    if (this.open) {
      this.openHandler(this.open);
    }
  }
  async componentWillLoad() {
    setUpLoadableComponent(this);
    this.updateItems();
    await setUpMessages(this);
  }
  componentDidLoad() {
    afterConnectDefaultValueSet(this, this.getValue());
    this.reposition(true);
    setComponentLoaded(this);
  }
  componentDidRender() {
    if (this.el.offsetHeight !== this.inputHeight) {
      this.reposition(true);
      this.inputHeight = this.el.offsetHeight;
    }
    updateHostInteraction(this);
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    disconnectLabel(this);
    disconnectForm(this);
    disconnectFloatingUI(this, this.referenceEl, this.floatingEl);
    disconnectOpenCloseComponent(this);
    disconnectLocalized(this);
    disconnectMessages(this);
  }
  /** when search text is cleared, reset active to  */
  textHandler() {
    this.updateActiveItemIndex(-1);
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  comboboxInViewport() {
    const bounding = this.el.getBoundingClientRect();
    return (bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight));
  }
  onBeforeOpen() {
    this.calciteComboboxBeforeOpen.emit();
  }
  onOpen() {
    this.calciteComboboxOpen.emit();
  }
  onBeforeClose() {
    this.calciteComboboxBeforeClose.emit();
  }
  onClose() {
    this.calciteComboboxClose.emit();
  }
  getMaxScrollerHeight() {
    const items = this.getCombinedItems().filter((item) => !item.hidden);
    const { maxItems } = this;
    let itemsToProcess = 0;
    let maxScrollerHeight = 0;
    if (items.length > maxItems) {
      items.forEach((item) => {
        if (itemsToProcess < maxItems && maxItems > 0) {
          const height = this.calculateSingleItemHeight(item);
          if (height > 0) {
            maxScrollerHeight += height;
            itemsToProcess++;
          }
        }
      });
    }
    return maxScrollerHeight;
  }
  calculateSingleItemHeight(item) {
    if (!item) {
      return;
    }
    let height = item.offsetHeight;
    // if item has children items, don't count their height twice
    const children = Array.from(item.querySelectorAll(ComboboxChildSelector));
    children
      .map((child) => child === null || child === void 0 ? void 0 : child.offsetHeight)
      .forEach((offsetHeight) => {
      height -= offsetHeight;
    });
    return height;
  }
  getCombinedItems() {
    return [...this.groupItems, ...this.items];
  }
  toggleSelection(item, value = !item.selected) {
    if (!item) {
      return;
    }
    if (this.isMulti()) {
      item.selected = value;
      this.updateAncestors(item);
      this.selectedItems = this.getSelectedItems();
      this.emitComboboxChange();
      this.resetText();
      this.filterItems("");
    }
    else {
      this.ignoreSelectedEventsFlag = true;
      this.items.forEach((el) => (el.selected = el === item ? value : false));
      this.ignoreSelectedEventsFlag = false;
      this.selectedItems = this.getSelectedItems();
      this.emitComboboxChange();
      if (this.textInput) {
        this.textInput.value = item.textLabel;
      }
      this.open = false;
      this.updateActiveItemIndex(-1);
      this.resetText();
      this.filterItems("");
    }
  }
  updateAncestors(item) {
    if (this.selectionMode !== "ancestors") {
      return;
    }
    const ancestors = getItemAncestors(item);
    const children = getItemChildren(item);
    if (item.selected) {
      ancestors.forEach((el) => {
        el.selected = true;
      });
    }
    else {
      children.forEach((el) => (el.selected = false));
      [...ancestors].forEach((el) => {
        if (!hasActiveChildren(el)) {
          el.selected = false;
        }
      });
    }
  }
  getfilteredItems() {
    return this.items.filter((item) => !item.hidden);
  }
  getSelectedItems() {
    if (!this.isMulti()) {
      const match = this.items.find(({ selected }) => selected);
      return match ? [match] : [];
    }
    return (this.items
      .filter((item) => item.selected && (this.selectionMode !== "ancestors" || !hasActiveChildren(item)))
      /** Preserve order of entered tags */
      .sort((a, b) => {
      const aIdx = this.selectedItems.indexOf(a);
      const bIdx = this.selectedItems.indexOf(b);
      if (aIdx > -1 && bIdx > -1) {
        return aIdx - bIdx;
      }
      return bIdx - aIdx;
    }));
  }
  getData() {
    return this.items.map((item) => ({
      filterDisabled: item.filterDisabled,
      value: item.value,
      label: item.textLabel
    }));
  }
  getNeedsIcon() {
    return this.selectionMode === "single" && this.items.some((item) => item.icon);
  }
  resetText() {
    if (this.textInput) {
      this.textInput.value = "";
    }
    this.text = "";
  }
  getItems() {
    const items = Array.from(this.el.querySelectorAll(ComboboxItem));
    return items.filter((item) => !item.disabled);
  }
  getGroupItems() {
    return Array.from(this.el.querySelectorAll(ComboboxItemGroup));
  }
  addCustomChip(value, focus) {
    const existingItem = this.items.find((el) => el.textLabel === value);
    if (existingItem) {
      this.toggleSelection(existingItem, true);
    }
    else {
      if (!this.isMulti()) {
        this.toggleSelection(this.selectedItems[this.selectedItems.length - 1], false);
      }
      const item = document.createElement(ComboboxItem);
      item.value = value;
      item.textLabel = value;
      item.selected = true;
      this.el.appendChild(item);
      this.resetText();
      if (focus) {
        this.setFocus();
      }
      this.updateItems();
      this.filterItems("");
      this.emitComboboxChange();
    }
  }
  removeActiveChip() {
    this.toggleSelection(this.selectedItems[this.activeChipIndex], false);
    this.setFocus();
  }
  removeLastChip() {
    this.toggleSelection(this.selectedItems[this.selectedItems.length - 1], false);
    this.setFocus();
  }
  previousChip() {
    if (this.text) {
      return;
    }
    const length = this.selectedItems.length - 1;
    const active = this.activeChipIndex;
    this.activeChipIndex = active === -1 ? length : Math.max(active - 1, 0);
    this.updateActiveItemIndex(-1);
    this.focusChip();
  }
  nextChip() {
    if (this.text || this.activeChipIndex === -1) {
      return;
    }
    const last = this.selectedItems.length - 1;
    const newIndex = this.activeChipIndex + 1;
    if (newIndex > last) {
      this.activeChipIndex = -1;
      this.setFocus();
    }
    else {
      this.activeChipIndex = newIndex;
      this.focusChip();
    }
    this.updateActiveItemIndex(-1);
  }
  focusChip() {
    var _a;
    const guid = (_a = this.selectedItems[this.activeChipIndex]) === null || _a === void 0 ? void 0 : _a.guid;
    const chip = guid
      ? this.referenceEl.querySelector(`#${chipUidPrefix}${guid}`)
      : null;
    chip === null || chip === void 0 ? void 0 : chip.setFocus();
  }
  shiftActiveItemIndex(delta) {
    const { length } = this.filteredItems;
    const newIndex = (this.activeItemIndex + length + delta) % length;
    this.updateActiveItemIndex(newIndex);
    this.scrollToActiveItem();
  }
  updateActiveItemIndex(index) {
    this.activeItemIndex = index;
    let activeDescendant = null;
    this.filteredItems.forEach((el, i) => {
      if (i === index) {
        el.active = true;
        activeDescendant = `${itemUidPrefix}${el.guid}`;
      }
      else {
        el.active = false;
      }
    });
    this.activeDescendant = activeDescendant;
    if (this.activeItemIndex > -1) {
      this.activeChipIndex = -1;
    }
  }
  isMulti() {
    return this.selectionMode !== "single";
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChips() {
    const { activeChipIndex, scale, selectionMode, messages } = this;
    return this.selectedItems.map((item, i) => {
      const chipClasses = {
        chip: true,
        "chip--active": activeChipIndex === i
      };
      const ancestors = [...getItemAncestors(item)].reverse();
      const pathLabel = [...ancestors, item].map((el) => el.textLabel);
      const label = selectionMode !== "ancestors" ? item.textLabel : pathLabel.join(" / ");
      return (h("calcite-chip", { class: chipClasses, closable: true, icon: item.icon, iconFlipRtl: item.iconFlipRtl, id: item.guid ? `${chipUidPrefix}${item.guid}` : null, key: item.textLabel, messageOverrides: { dismissLabel: messages.removeTag }, onCalciteChipClose: () => this.calciteChipCloseHandler(item), scale: scale, title: label, value: item.value }, label));
    });
  }
  renderInput() {
    const { guid, disabled, placeholder, selectionMode, selectedItems, open } = this;
    const single = selectionMode === "single";
    const selectedItem = selectedItems[0];
    const showLabel = !open && single && !!selectedItem;
    return (h("span", { class: {
        "input-wrap": true,
        "input-wrap--single": single
      } }, showLabel && (h("span", { class: {
        label: true,
        "label--icon": !!(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.icon)
      }, key: "label" }, selectedItem.textLabel)), h("input", { "aria-activedescendant": this.activeDescendant, "aria-autocomplete": "list", "aria-controls": `${listboxUidPrefix}${guid}`, "aria-label": getLabelText(this), class: {
        input: true,
        "input--single": true,
        "input--transparent": this.activeChipIndex > -1,
        "input--hidden": showLabel,
        "input--icon": !!this.placeholderIcon
      }, disabled: disabled, id: `${inputUidPrefix}${guid}`, key: "input", onBlur: this.comboboxBlurHandler, onFocus: this.comboboxFocusHandler, onInput: this.inputHandler, placeholder: placeholder, type: "text",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.textInput = el) })));
  }
  renderListBoxOptions() {
    return this.filteredItems.map((item) => (h("li", { "aria-selected": toAriaBoolean(item.selected), id: item.guid ? `${itemUidPrefix}${item.guid}` : null, role: "option", tabindex: "-1" }, item.textLabel)));
  }
  renderFloatingUIContainer() {
    const { setFloatingEl, setContainerEl, open } = this;
    const classes = {
      "list-container": true,
      [FloatingCSS.animation]: true,
      [FloatingCSS.animationActive]: open
    };
    return (h("div", { "aria-hidden": "true", class: {
        "floating-ui-container": true,
        "floating-ui-container--active": open
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: setFloatingEl }, h("div", { class: classes,
      // eslint-disable-next-line react/jsx-sort-props
      ref: setContainerEl }, h("ul", { class: { list: true, "list--hide": !open } }, h("slot", null)))));
  }
  renderIconStart() {
    const { selectedItems, placeholderIcon, selectionMode, placeholderIconFlipRtl } = this;
    const selectedItem = selectedItems[0];
    const selectedIcon = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.icon;
    const singleSelectionMode = selectionMode === "single";
    const iconAtStart = !this.open && selectedItem
      ? !!selectedIcon && singleSelectionMode
      : !!this.placeholderIcon && (!selectedItem || singleSelectionMode);
    return (iconAtStart && (h("span", { class: "icon-start" }, h("calcite-icon", { class: "selected-icon", flipRtl: this.open && selectedItem ? selectedItem.iconFlipRtl : placeholderIconFlipRtl, icon: !this.open && selectedItem ? selectedIcon : placeholderIcon, scale: "s" }))));
  }
  renderIconEnd() {
    const { open } = this;
    return (h("span", { class: "icon-end" }, h("calcite-icon", { icon: open ? "chevron-up" : "chevron-down", scale: "s" })));
  }
  render() {
    const { guid, label, open } = this;
    const single = this.selectionMode === "single";
    return (h(Host, { onClick: this.comboboxFocusHandler }, h("div", { "aria-autocomplete": "list", "aria-controls": `${listboxUidPrefix}${guid}`, "aria-expanded": toAriaBoolean(open), "aria-haspopup": "listbox", "aria-label": getLabelText(this), "aria-live": "polite", "aria-owns": `${listboxUidPrefix}${guid}`, class: {
        wrapper: true,
        "wrapper--single": single || !this.selectedItems.length,
        "wrapper--active": open
      }, onClick: this.clickHandler, onKeyDown: this.keydownHandler, role: "combobox",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setReferenceEl }, h("div", { class: "grid-input" }, this.renderIconStart(), !single && this.renderChips(), h("label", { class: "screen-readers-only", htmlFor: `${inputUidPrefix}${guid}`, id: `${labelUidPrefix}${guid}` }, label), this.renderInput()), this.renderIconEnd()), h("ul", { "aria-labelledby": `${labelUidPrefix}${guid}`, "aria-multiselectable": "true", class: "screen-readers-only", id: `${listboxUidPrefix}${guid}`, role: "listbox", tabIndex: -1 }, this.renderListBoxOptions()), this.renderFloatingUIContainer(), h(HiddenFormInputSlot, { component: this })));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "open": ["openHandler"],
    "disabled": ["handleDisabledChange"],
    "maxItems": ["maxItemsHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "value": ["valueHandler"],
    "messageOverrides": ["onMessagesChange"],
    "flipPlacements": ["flipPlacementsHandler"],
    "selectedItems": ["selectedItemsHandler"],
    "text": ["textHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Combobox.style = comboboxCss;

export { Combobox as calcite_combobox };

//# sourceMappingURL=calcite-combobox.entry.js.map