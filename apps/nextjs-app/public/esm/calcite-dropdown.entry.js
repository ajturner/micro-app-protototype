import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-9b24d2d4.js';
import { t as toAriaBoolean, i as isPrimaryPointerButton, w as focusElementInGroup, h as focusElement } from './dom-67db067b.js';
import { f as filterComputedPlacements, c as connectFloatingUI, d as defaultMenuPlacement, u as updateAfterClose, a as disconnectFloatingUI, F as FloatingCSS, r as reposition } from './floating-ui-75c36572.js';
import { g as guid } from './guid-89dde75d.js';
import { u as updateHostInteraction } from './interactive-5738af71.js';
import { i as isActivationKey } from './key-4fdf42f2.js';
import { c as componentLoaded, a as setUpLoadableComponent, s as setComponentLoaded } from './loadable-eeabeb84.js';
import { c as createObserver } from './observers-38221b96.js';
import { c as connectOpenCloseComponent, d as disconnectOpenCloseComponent } from './openCloseComponent-77161dfa.js';
import './resources-2916eda2.js';
import './debounce-f5f6068a.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const SLOTS = {
  dropdownTrigger: "trigger"
};

const dropdownCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline-flex;flex:0 1 auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:600;display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;flex:1 1 auto}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width=s]){--calcite-dropdown-width:12rem}:host([width=m]){--calcite-dropdown-width:14rem}:host([width=l]){--calcite-dropdown-width:16rem}";

let Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteDropdownSelect = createEvent(this, "calciteDropdownSelect", 6);
    this.calciteDropdownBeforeClose = createEvent(this, "calciteDropdownBeforeClose", 6);
    this.calciteDropdownClose = createEvent(this, "calciteDropdownClose", 6);
    this.calciteDropdownBeforeOpen = createEvent(this, "calciteDropdownBeforeOpen", 6);
    this.calciteDropdownOpen = createEvent(this, "calciteDropdownOpen", 6);
    this.items = [];
    this.groups = [];
    this.mutationObserver = createObserver("mutation", () => this.updateItems());
    this.resizeObserver = createObserver("resize", (entries) => this.resizeObserverCallback(entries));
    this.openTransitionProp = "opacity";
    this.guid = `calcite-dropdown-${guid()}`;
    this.defaultAssignedElements = [];
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.slotChangeHandler = (event) => {
      this.defaultAssignedElements = event.target.assignedElements({
        flatten: true
      });
      this.updateItems();
    };
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? filterComputedPlacements(flipPlacements, el)
        : null;
    };
    this.updateTriggers = (event) => {
      this.triggers = event.target.assignedElements({
        flatten: true
      });
      this.reposition(true);
    };
    this.updateItems = () => {
      this.items = this.groups
        .map((group) => Array.from(group === null || group === void 0 ? void 0 : group.querySelectorAll("calcite-dropdown-item")))
        .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
      this.updateSelectedItems();
      this.reposition(true);
    };
    this.updateGroups = (event) => {
      const groups = event.target
        .assignedElements({ flatten: true })
        .filter((el) => el === null || el === void 0 ? void 0 : el.matches("calcite-dropdown-group"));
      this.groups = groups;
      this.updateItems();
    };
    this.resizeObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (target === this.referenceEl) {
          this.setDropdownWidth();
        }
        else if (target === this.scrollerEl) {
          this.setMaxScrollerHeight();
        }
      });
    };
    this.setDropdownWidth = () => {
      const { referenceEl, scrollerEl } = this;
      const referenceElWidth = referenceEl === null || referenceEl === void 0 ? void 0 : referenceEl.clientWidth;
      if (!referenceElWidth || !scrollerEl) {
        return;
      }
      scrollerEl.style.minWidth = `${referenceElWidth}px`;
    };
    this.setMaxScrollerHeight = () => {
      const { scrollerEl } = this;
      if (!scrollerEl) {
        return;
      }
      this.reposition(true);
      const maxScrollerHeight = this.getMaxScrollerHeight();
      scrollerEl.style.maxHeight = maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : "";
      this.reposition(true);
    };
    this.setScrollerAndTransitionEl = (el) => {
      this.resizeObserver.observe(el);
      this.scrollerEl = el;
      this.transitionEl = el;
      connectOpenCloseComponent(this);
    };
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
      connectFloatingUI(this, this.referenceEl, this.floatingEl);
      this.resizeObserver.observe(el);
    };
    this.setFloatingEl = (el) => {
      this.floatingEl = el;
      connectFloatingUI(this, this.referenceEl, this.floatingEl);
    };
    this.keyDownHandler = (event) => {
      const target = event.target;
      if (target !== this.referenceEl) {
        return;
      }
      const { defaultPrevented, key } = event;
      if (defaultPrevented) {
        return;
      }
      if (this.open) {
        if (key === "Escape") {
          this.closeCalciteDropdown();
          event.preventDefault();
          return;
        }
        else if (event.shiftKey && key === "Tab") {
          this.closeCalciteDropdown();
          event.preventDefault();
          return;
        }
      }
      if (isActivationKey(key)) {
        this.openCalciteDropdown();
        event.preventDefault();
      }
      else if (key === "Escape") {
        this.closeCalciteDropdown();
        event.preventDefault();
      }
    };
    this.focusOnFirstActiveOrFirstItem = () => {
      this.getFocusableElement(this.items.find((item) => item.selected) || this.items[0]);
    };
    this.toggleOpenEnd = () => {
      this.focusOnFirstActiveOrFirstItem();
      this.el.removeEventListener("calciteDropdownOpen", this.toggleOpenEnd);
    };
    this.openCalciteDropdown = () => {
      this.open = !this.open;
      if (this.open) {
        this.el.addEventListener("calciteDropdownOpen", this.toggleOpenEnd);
      }
    };
    this.open = false;
    this.closeOnSelectDisabled = false;
    this.disabled = false;
    this.flipPlacements = undefined;
    this.maxItems = 0;
    this.overlayPositioning = "absolute";
    this.placement = defaultMenuPlacement;
    this.scale = "m";
    this.selectedItems = [];
    this.type = "click";
    this.width = undefined;
  }
  openHandler(value) {
    if (!this.disabled) {
      if (value) {
        this.reposition(true);
      }
      else {
        updateAfterClose(this.floatingEl);
      }
      return;
    }
    if (!value) {
      updateAfterClose(this.floatingEl);
    }
    this.open = false;
  }
  handleDisabledChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  maxItemsHandler() {
    this.setMaxScrollerHeight();
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  placementHandler() {
    this.reposition(true);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await componentLoaded(this);
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
    this.setFilteredPlacements();
    this.reposition(true);
    if (this.open) {
      this.openHandler(this.open);
    }
    connectOpenCloseComponent(this);
  }
  componentWillLoad() {
    setUpLoadableComponent(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
    this.reposition(true);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    disconnectFloatingUI(this, this.referenceEl, this.floatingEl);
    (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    disconnectOpenCloseComponent(this);
  }
  render() {
    const { open, guid } = this;
    return (h(Host, null, h("div", { class: "calcite-trigger-container", id: `${guid}-menubutton`, onClick: this.openCalciteDropdown, onKeyDown: this.keyDownHandler,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setReferenceEl }, h("slot", { "aria-controls": `${guid}-menu`, "aria-expanded": toAriaBoolean(open), "aria-haspopup": "menu", name: SLOTS.dropdownTrigger, onSlotchange: this.updateTriggers })), h("div", { "aria-hidden": toAriaBoolean(!open), class: "calcite-dropdown-wrapper",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setFloatingEl }, h("div", { "aria-labelledby": `${guid}-menubutton`, class: {
        ["calcite-dropdown-content"]: true,
        [FloatingCSS.animation]: true,
        [FloatingCSS.animationActive]: open
      }, id: `${guid}-menu`, role: "menu",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setScrollerAndTransitionEl }, h("slot", { onSlotchange: this.updateGroups })))));
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
  closeCalciteDropdownOnClick(event) {
    if (!isPrimaryPointerButton(event) || !this.open || event.composedPath().includes(this.el)) {
      return;
    }
    this.closeCalciteDropdown(false);
  }
  closeCalciteDropdownOnEvent(event) {
    this.closeCalciteDropdown();
    event.stopPropagation();
  }
  closeCalciteDropdownOnOpenEvent(event) {
    if (event.composedPath().includes(this.el)) {
      return;
    }
    this.open = false;
  }
  mouseEnterHandler() {
    if (this.type === "hover") {
      this.openCalciteDropdown();
    }
  }
  mouseLeaveHandler() {
    if (this.type === "hover") {
      this.closeCalciteDropdown();
    }
  }
  calciteInternalDropdownItemKeyEvent(event) {
    const { keyboardEvent } = event.detail;
    const target = keyboardEvent.target;
    switch (keyboardEvent.key) {
      case "Tab":
        if (this.items.indexOf(target) === this.items.length - 1 && !keyboardEvent.shiftKey) {
          this.closeCalciteDropdown();
        }
        else if (this.items.indexOf(target) === 0 && keyboardEvent.shiftKey) {
          this.closeCalciteDropdown();
        }
        break;
      case "ArrowDown":
        focusElementInGroup(this.items, target, "next");
        break;
      case "ArrowUp":
        focusElementInGroup(this.items, target, "previous");
        break;
      case "Home":
        focusElementInGroup(this.items, target, "first");
        break;
      case "End":
        focusElementInGroup(this.items, target, "last");
        break;
    }
    event.stopPropagation();
  }
  handleItemSelect(event) {
    this.updateSelectedItems();
    event.stopPropagation();
    this.calciteDropdownSelect.emit();
    if (!this.closeOnSelectDisabled ||
      event.detail.requestedDropdownGroup.selectionMode === "none") {
      this.closeCalciteDropdown();
    }
    event.stopPropagation();
  }
  onBeforeOpen() {
    this.calciteDropdownBeforeOpen.emit();
  }
  onOpen() {
    this.calciteDropdownOpen.emit();
  }
  onBeforeClose() {
    this.calciteDropdownBeforeClose.emit();
  }
  onClose() {
    this.calciteDropdownClose.emit();
  }
  updateSelectedItems() {
    this.selectedItems = this.items.filter((item) => item.selected);
  }
  getMaxScrollerHeight() {
    const { maxItems, items } = this;
    let itemsToProcess = 0;
    let maxScrollerHeight = 0;
    let groupHeaderHeight;
    this.groups.forEach((group) => {
      if (maxItems > 0 && itemsToProcess < maxItems) {
        Array.from(group.children).forEach((item, index) => {
          if (index === 0) {
            if (isNaN(groupHeaderHeight)) {
              groupHeaderHeight = item.offsetTop;
            }
            maxScrollerHeight += groupHeaderHeight;
          }
          if (itemsToProcess < maxItems) {
            maxScrollerHeight += item.offsetHeight;
            itemsToProcess += 1;
          }
        });
      }
    });
    return items.length > maxItems ? maxScrollerHeight : 0;
  }
  closeCalciteDropdown(focusTrigger = true) {
    this.open = false;
    if (focusTrigger) {
      focusElement(this.triggers[0]);
    }
  }
  getFocusableElement(item) {
    if (!item) {
      return;
    }
    const target = item.attributes.isLink
      ? item.shadowRoot.querySelector("a")
      : item;
    focusElement(target);
  }
  static get delegatesFocus() { return true; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "open": ["openHandler"],
    "disabled": ["handleDisabledChange"],
    "flipPlacements": ["flipPlacementsHandler"],
    "maxItems": ["maxItemsHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "placement": ["placementHandler"]
  }; }
};
Dropdown.style = dropdownCss;

export { Dropdown as calcite_dropdown };

//# sourceMappingURL=calcite-dropdown.entry.js.map