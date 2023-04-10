'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const array = require('./array-1eda7ed4.js');
const dom = require('./dom-5643dc8d.js');
const guid = require('./guid-504c591e.js');
const key = require('./key-75cf5e40.js');
const loadable = require('./loadable-0d54a318.js');
const resources = require('./resources-8af869af.js');
const floatingUi = require('./floating-ui-59e2ae15.js');
const focusTrapComponent = require('./focusTrapComponent-782e77f5.js');
const openCloseComponent = require('./openCloseComponent-71dacfe1.js');
const Heading = require('./Heading-cd9bfe1e.js');
const locale = require('./locale-dbbec1a1.js');
const t9n = require('./t9n-30d5587d.js');
require('./resources-0be54a9c.js');
require('./debounce-c881df11.js');
require('./observers-6da0c0fa.js');

const actionMenuCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{box-sizing:border-box;display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:flex;outline-color:transparent}.menu ::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-brand);outline-offset:0px}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{flex-direction:column;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}";

const SUPPORTED_MENU_NAV_KEYS = ["ArrowUp", "ArrowDown", "End", "Home"];
let ActionMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteActionMenuOpen = index.createEvent(this, "calciteActionMenuOpen", 6);
    this.actionElements = [];
    this.guid = `calcite-action-menu-${guid.guid()}`;
    this.menuId = `${this.guid}-menu`;
    this.menuButtonId = `${this.guid}-menu-button`;
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    this.connectMenuButtonEl = () => {
      const { menuButtonId, menuId, open, label } = this;
      const menuButtonEl = this.slottedMenuButtonEl || this.defaultMenuButtonEl;
      if (this.menuButtonEl === menuButtonEl) {
        return;
      }
      this.disconnectMenuButtonEl();
      this.menuButtonEl = menuButtonEl;
      this.setTooltipReferenceElement();
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.active = open;
      menuButtonEl.setAttribute("aria-controls", menuId);
      menuButtonEl.setAttribute("aria-expanded", dom.toAriaBoolean(open));
      menuButtonEl.setAttribute("aria-haspopup", "true");
      if (!menuButtonEl.id) {
        menuButtonEl.id = menuButtonId;
      }
      if (!menuButtonEl.label) {
        menuButtonEl.label = label;
      }
      if (!menuButtonEl.text) {
        menuButtonEl.text = label;
      }
      menuButtonEl.addEventListener("pointerdown", this.menuButtonClick);
      menuButtonEl.addEventListener("keydown", this.menuButtonKeyDown);
    };
    this.disconnectMenuButtonEl = () => {
      const { menuButtonEl } = this;
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.removeEventListener("pointerdown", this.menuButtonClick);
      menuButtonEl.removeEventListener("keydown", this.menuButtonKeyDown);
    };
    this.setMenuButtonEl = (event) => {
      const actions = event.target
        .assignedElements({
        flatten: true
      })
        .filter((el) => el === null || el === void 0 ? void 0 : el.matches("calcite-action"));
      this.slottedMenuButtonEl = actions[0];
      this.connectMenuButtonEl();
    };
    this.setDefaultMenuButtonEl = (el) => {
      this.defaultMenuButtonEl = el;
      this.connectMenuButtonEl();
    };
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleCalciteActionClick = () => {
      this.open = false;
      this.setFocus();
    };
    this.menuButtonClick = (event) => {
      if (!dom.isPrimaryPointerButton(event)) {
        return;
      }
      this.toggleOpen();
    };
    this.updateTooltip = (event) => {
      const tooltips = event.target
        .assignedElements({
        flatten: true
      })
        .filter((el) => el === null || el === void 0 ? void 0 : el.matches("calcite-tooltip"));
      this.tooltipEl = tooltips[0];
      this.setTooltipReferenceElement();
    };
    this.setTooltipReferenceElement = () => {
      const { tooltipEl, expanded, menuButtonEl, open } = this;
      if (tooltipEl) {
        tooltipEl.referenceElement = !expanded && !open ? menuButtonEl : null;
      }
    };
    this.updateAction = (action, index) => {
      const { guid, activeMenuItemIndex } = this;
      const id = `${guid}-action-${index}`;
      action.tabIndex = -1;
      action.setAttribute("role", "menuitem");
      if (!action.id) {
        action.id = id;
      }
      action.active = index === activeMenuItemIndex;
    };
    this.updateActions = (actions) => {
      actions === null || actions === void 0 ? void 0 : actions.forEach(this.updateAction);
    };
    this.handleDefaultSlotChange = (event) => {
      const actions = event.target
        .assignedElements({
        flatten: true
      })
        .filter((el) => el === null || el === void 0 ? void 0 : el.matches("calcite-action"));
      this.actionElements = actions;
    };
    this.menuButtonKeyDown = (event) => {
      const { key: key$1 } = event;
      const { actionElements, activeMenuItemIndex, open } = this;
      if (!actionElements.length) {
        return;
      }
      if (key.isActivationKey(key$1)) {
        event.preventDefault();
        if (!open) {
          this.toggleOpen();
          return;
        }
        const action = actionElements[activeMenuItemIndex];
        action ? action.click() : this.toggleOpen(false);
      }
      if (key$1 === "Tab") {
        this.open = false;
        return;
      }
      if (key$1 === "Escape") {
        this.toggleOpen(false);
        event.preventDefault();
        return;
      }
      this.handleActionNavigation(event, key$1, actionElements);
    };
    this.handleActionNavigation = (event, key, actions) => {
      if (!this.isValidKey(key, SUPPORTED_MENU_NAV_KEYS)) {
        return;
      }
      event.preventDefault();
      if (!this.open) {
        this.toggleOpen();
        if (key === "Home" || key === "ArrowDown") {
          this.activeMenuItemIndex = 0;
        }
        if (key === "End" || key === "ArrowUp") {
          this.activeMenuItemIndex = actions.length - 1;
        }
        return;
      }
      if (key === "Home") {
        this.activeMenuItemIndex = 0;
      }
      if (key === "End") {
        this.activeMenuItemIndex = actions.length - 1;
      }
      const currentIndex = this.activeMenuItemIndex;
      if (key === "ArrowUp") {
        this.activeMenuItemIndex = array.getRoundRobinIndex(Math.max(currentIndex - 1, -1), actions.length);
      }
      if (key === "ArrowDown") {
        this.activeMenuItemIndex = array.getRoundRobinIndex(currentIndex + 1, actions.length);
      }
    };
    this.toggleOpenEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calcitePopoverOpen", this.toggleOpenEnd);
    };
    this.toggleOpen = (value = !this.open) => {
      this.el.addEventListener("calcitePopoverOpen", this.toggleOpenEnd);
      this.open = value;
    };
    this.expanded = false;
    this.flipPlacements = undefined;
    this.label = undefined;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.scale = undefined;
    this.menuButtonEl = undefined;
    this.activeMenuItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentWillLoad() {
    loadable.setUpLoadableComponent(this);
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
  }
  disconnectedCallback() {
    this.disconnectMenuButtonEl();
  }
  expandedHandler() {
    this.open = false;
    this.setTooltipReferenceElement();
  }
  openHandler(open) {
    this.activeMenuItemIndex = this.open ? 0 : -1;
    if (this.menuButtonEl) {
      this.menuButtonEl.active = open;
    }
    this.calciteActionMenuOpen.emit();
    this.setTooltipReferenceElement();
  }
  closeCalciteActionMenuOnClick(event) {
    if (!dom.isPrimaryPointerButton(event)) {
      return;
    }
    const composedPath = event.composedPath();
    if (composedPath.includes(this.el)) {
      return;
    }
    this.open = false;
  }
  activeMenuItemIndexHandler() {
    this.updateActions(this.actionElements);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await loadable.componentLoaded(this);
    dom.focusElement(this.menuButtonEl);
  }
  renderMenuButton() {
    const { label, scale, expanded } = this;
    const menuButtonSlot = (index.h("slot", { name: resources.SLOTS.trigger, onSlotchange: this.setMenuButtonEl }, index.h("calcite-action", { class: resources.CSS.defaultTrigger, icon: resources.ICONS.menu, scale: scale, text: label, textEnabled: expanded,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setDefaultMenuButtonEl })));
    return menuButtonSlot;
  }
  renderMenuItems() {
    const { actionElements, activeMenuItemIndex, open, menuId, menuButtonEl, label, placement, overlayPositioning, flipPlacements } = this;
    const activeAction = actionElements[activeMenuItemIndex];
    const activeDescendantId = (activeAction === null || activeAction === void 0 ? void 0 : activeAction.id) || null;
    return (index.h("calcite-popover", { flipPlacements: flipPlacements, focusTrapDisabled: true, label: label, offsetDistance: 0, open: open, overlayPositioning: overlayPositioning, placement: placement, pointerDisabled: true, referenceElement: menuButtonEl }, index.h("div", { "aria-activedescendant": activeDescendantId, "aria-labelledby": menuButtonEl === null || menuButtonEl === void 0 ? void 0 : menuButtonEl.id, class: resources.CSS.menu, id: menuId, onClick: this.handleCalciteActionClick, role: "menu", tabIndex: -1 }, index.h("slot", { onSlotchange: this.handleDefaultSlotChange }))));
  }
  render() {
    return (index.h(index.Fragment, null, this.renderMenuButton(), this.renderMenuItems(), index.h("slot", { name: resources.SLOTS.tooltip, onSlotchange: this.updateTooltip })));
  }
  isValidKey(key, supportedKeys) {
    return !!supportedKeys.find((k) => k === key);
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "open": ["openHandler"],
    "activeMenuItemIndex": ["activeMenuItemIndexHandler"]
  }; }
};
ActionMenu.style = actionMenuCss;

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  container: "container",
  arrow: "arrow",
  imageContainer: "image-container",
  closeButtonContainer: "close-button-container",
  closeButton: "close-button",
  content: "content",
  hasHeader: "has-header",
  header: "header",
  headerContent: "header-content",
  heading: "heading"
};
const defaultPopoverPlacement = "auto";
const ARIA_CONTROLS = "aria-controls";
const ARIA_EXPANDED = "aria-expanded";

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
class PopoverManager {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.registeredElements = new Map();
    this.registeredElementCount = 0;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.queryPopover = (composedPath) => {
      const { registeredElements } = this;
      const registeredElement = composedPath.find((pathEl) => registeredElements.has(pathEl));
      return registeredElements.get(registeredElement);
    };
    this.togglePopovers = (event) => {
      const composedPath = event.composedPath();
      const togglePopover = this.queryPopover(composedPath);
      if (togglePopover && !togglePopover.triggerDisabled) {
        togglePopover.open = !togglePopover.open;
      }
      Array.from(this.registeredElements.values())
        .filter((popover) => popover !== togglePopover && popover.autoClose && popover.open && !composedPath.includes(popover))
        .forEach((popover) => (popover.open = false));
    };
    this.keyHandler = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      if (event.key === "Escape") {
        this.closeAllPopovers();
      }
      else if (key.isActivationKey(event.key)) {
        this.togglePopovers(event);
      }
    };
    this.clickHandler = (event) => {
      if (dom.isPrimaryPointerButton(event)) {
        this.togglePopovers(event);
      }
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(referenceEl, popover) {
    this.registeredElementCount++;
    this.registeredElements.set(referenceEl, popover);
    if (this.registeredElementCount === 1) {
      this.addListeners();
    }
  }
  unregisterElement(referenceEl) {
    if (this.registeredElements.delete(referenceEl)) {
      this.registeredElementCount--;
    }
    if (this.registeredElementCount === 0) {
      this.removeListeners();
    }
  }
  closeAllPopovers() {
    Array.from(this.registeredElements.values()).forEach((popover) => (popover.open = false));
  }
  addListeners() {
    document.addEventListener("pointerdown", this.clickHandler, { capture: true });
    document.addEventListener("keydown", this.keyHandler, { capture: true });
  }
  removeListeners() {
    document.removeEventListener("pointerdown", this.clickHandler, { capture: true });
    document.removeEventListener("keydown", this.keyHandler, { capture: true });
  }
}

const popoverCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, 900);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:\"\";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^=top]) .arrow{inset-block-end:-4px}:host([data-placement^=bottom]) .arrow{inset-block-start:-4px}:host([data-placement^=right]) .arrow,:host([data-placement^=left]) .arrow{direction:ltr;text-align:start}:host([data-placement^=left]) .arrow{inset-inline-end:-4px}:host([data-placement^=right]) .arrow{inset-inline-start:-4px}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}";

const manager = new PopoverManager();
let Popover = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calcitePopoverBeforeClose = index.createEvent(this, "calcitePopoverBeforeClose", 6);
    this.calcitePopoverClose = index.createEvent(this, "calcitePopoverClose", 6);
    this.calcitePopoverBeforeOpen = index.createEvent(this, "calcitePopoverBeforeOpen", 6);
    this.calcitePopoverOpen = index.createEvent(this, "calcitePopoverOpen", 6);
    this.guid = `calcite-popover-${guid.guid()}`;
    this.openTransitionProp = "opacity";
    this.hasLoaded = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
      openCloseComponent.connectOpenCloseComponent(this);
      this.focusTrapEl = el;
      focusTrapComponent.connectFocusTrap(this);
    };
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? floatingUi.filterComputedPlacements(flipPlacements, el)
        : null;
    };
    this.setUpReferenceElement = (warn = true) => {
      this.removeReferences();
      this.effectiveReferenceElement = this.getReferenceElement();
      floatingUi.connectFloatingUI(this, this.effectiveReferenceElement, this.el);
      const { el, referenceElement, effectiveReferenceElement } = this;
      if (warn && referenceElement && !effectiveReferenceElement) {
        console.warn(`${el.tagName}: reference-element id "${referenceElement}" was not found.`, {
          el
        });
      }
      this.addReferences();
    };
    this.getId = () => {
      return this.el.id || this.guid;
    };
    this.setExpandedAttr = () => {
      const { effectiveReferenceElement, open } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      if ("setAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.setAttribute(ARIA_EXPANDED, dom.toAriaBoolean(open));
      }
    };
    this.addReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      const id = this.getId();
      if ("setAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.setAttribute(ARIA_CONTROLS, id);
      }
      manager.registerElement(effectiveReferenceElement, this.el);
      this.setExpandedAttr();
    };
    this.removeReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      if ("removeAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.removeAttribute(ARIA_CONTROLS);
        effectiveReferenceElement.removeAttribute(ARIA_EXPANDED);
      }
      manager.unregisterElement(effectiveReferenceElement);
    };
    this.hide = () => {
      this.open = false;
    };
    this.storeArrowEl = (el) => {
      this.arrowEl = el;
      this.reposition(true);
    };
    this.autoClose = false;
    this.closable = false;
    this.flipDisabled = false;
    this.focusTrapDisabled = false;
    this.pointerDisabled = false;
    this.flipPlacements = undefined;
    this.heading = undefined;
    this.headingLevel = undefined;
    this.label = undefined;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.offsetDistance = floatingUi.defaultOffsetDistance;
    this.offsetSkidding = 0;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = defaultPopoverPlacement;
    this.referenceElement = undefined;
    this.scale = "m";
    this.triggerDisabled = false;
    this.effectiveLocale = "";
    this.effectiveReferenceElement = undefined;
    this.defaultMessages = undefined;
  }
  handlefocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? focusTrapComponent.deactivateFocusTrap(this) : focusTrapComponent.activateFocusTrap(this);
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  offsetDistanceOffsetHandler() {
    this.reposition(true);
  }
  offsetSkiddingHandler() {
    this.reposition(true);
  }
  openHandler(value) {
    if (value) {
      this.reposition(true);
    }
    else {
      floatingUi.updateAfterClose(this.el);
    }
    this.setExpandedAttr();
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  placementHandler() {
    this.reposition(true);
  }
  referenceElementHandler() {
    this.setUpReferenceElement();
    this.reposition(true);
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
    this.setFilteredPlacements();
    locale.connectLocalized(this);
    t9n.connectMessages(this);
    openCloseComponent.connectOpenCloseComponent(this);
    this.setUpReferenceElement(this.hasLoaded);
  }
  async componentWillLoad() {
    await t9n.setUpMessages(this);
    loadable.setUpLoadableComponent(this);
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
    if (this.referenceElement && !this.effectiveReferenceElement) {
      this.setUpReferenceElement();
    }
    this.reposition();
    this.hasLoaded = true;
  }
  disconnectedCallback() {
    this.removeReferences();
    locale.disconnectLocalized(this);
    t9n.disconnectMessages(this);
    floatingUi.disconnectFloatingUI(this, this.effectiveReferenceElement, this.el);
    openCloseComponent.disconnectOpenCloseComponent(this);
    focusTrapComponent.deactivateFocusTrap(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    const { el, effectiveReferenceElement, placement, overlayPositioning, flipDisabled, filteredFlipPlacements, offsetDistance, offsetSkidding, arrowEl } = this;
    return floatingUi.reposition(this, {
      floatingEl: el,
      referenceEl: effectiveReferenceElement,
      overlayPositioning,
      placement,
      flipDisabled,
      flipPlacements: filteredFlipPlacements,
      offsetDistance,
      offsetSkidding,
      includeArrow: !this.pointerDisabled,
      arrowEl,
      type: "popover"
    }, delayed);
  }
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await loadable.componentLoaded(this);
    index.forceUpdate(this.el);
    dom.focusFirstTabbable(this.focusTrapEl);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    focusTrapComponent.updateFocusTrapElements(this);
  }
  getReferenceElement() {
    const { referenceElement, el } = this;
    return ((typeof referenceElement === "string"
      ? dom.queryElementRoots(el, { id: referenceElement })
      : referenceElement) || null);
  }
  onBeforeOpen() {
    this.calcitePopoverBeforeOpen.emit();
  }
  onOpen() {
    this.calcitePopoverOpen.emit();
    focusTrapComponent.activateFocusTrap(this);
  }
  onBeforeClose() {
    this.calcitePopoverBeforeClose.emit();
  }
  onClose() {
    this.calcitePopoverClose.emit();
    focusTrapComponent.deactivateFocusTrap(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderCloseButton() {
    const { messages, closable } = this;
    return closable ? (index.h("div", { class: CSS.closeButtonContainer, key: CSS.closeButtonContainer }, index.h("calcite-action", { class: CSS.closeButton, onClick: this.hide, scale: this.scale, text: messages.close,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (closeButtonEl) => (this.closeButtonEl = closeButtonEl) }, index.h("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : this.scale })))) : null;
  }
  renderHeader() {
    const { heading, headingLevel } = this;
    const headingNode = heading ? (index.h(Heading.Heading, { class: CSS.heading, level: headingLevel }, heading)) : null;
    return headingNode ? (index.h("div", { class: CSS.header, key: CSS.header }, headingNode, this.renderCloseButton())) : null;
  }
  render() {
    const { effectiveReferenceElement, heading, label, open, pointerDisabled } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    const arrowNode = !pointerDisabled ? (index.h("div", { class: CSS.arrow,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeArrowEl })) : null;
    return (index.h(index.Host, { "aria-hidden": dom.toAriaBoolean(hidden), "aria-label": label, "aria-live": "polite", "calcite-hydrated-hidden": hidden, id: this.getId(), role: "dialog" }, index.h("div", { class: {
        [floatingUi.FloatingCSS.animation]: true,
        [floatingUi.FloatingCSS.animationActive]: displayed
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, arrowNode, index.h("div", { class: {
        [CSS.hasHeader]: !!heading,
        [CSS.container]: true
      } }, this.renderHeader(), index.h("div", { class: CSS.content }, index.h("slot", null)), !heading ? this.renderCloseButton() : null))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "focusTrapDisabled": ["handlefocusTrapDisabled"],
    "flipPlacements": ["flipPlacementsHandler"],
    "messageOverrides": ["onMessagesChange"],
    "offsetDistance": ["offsetDistanceOffsetHandler"],
    "offsetSkidding": ["offsetSkiddingHandler"],
    "open": ["openHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "placement": ["placementHandler"],
    "referenceElement": ["referenceElementHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Popover.style = popoverCss;

exports.calcite_action_menu = ActionMenu;
exports.calcite_popover = Popover;

//# sourceMappingURL=calcite-action-menu_2.cjs.entry.js.map