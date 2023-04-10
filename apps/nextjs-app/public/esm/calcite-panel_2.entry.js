import { r as registerInstance, c as createEvent, h, F as Fragment, g as getElement, H as Host } from './index-9b24d2d4.js';
import { j as focusFirstTabbable, t as toAriaBoolean, q as queryElementRoots, i as isPrimaryPointerButton } from './dom-67db067b.js';
import { u as updateHostInteraction } from './interactive-5738af71.js';
import { a as setUpLoadableComponent, s as setComponentLoaded, c as componentLoaded } from './loadable-eeabeb84.js';
import { c as createObserver } from './observers-38221b96.js';
import { S as SLOTS$1 } from './resources-149d82da.js';
import { H as Heading } from './Heading-44708bf6.js';
import { S as SLOTS, C as CSS$1, I as ICONS } from './resources-f451a3f4.js';
import { c as connectLocalized, d as disconnectLocalized } from './locale-6fffb6ae.js';
import { c as connectMessages, s as setUpMessages, d as disconnectMessages, u as updateMessages } from './t9n-802ef166.js';
import { c as connectFloatingUI, b as defaultOffsetDistance, u as updateAfterClose, a as disconnectFloatingUI, r as reposition, F as FloatingCSS } from './floating-ui-75c36572.js';
import { g as guid } from './guid-89dde75d.js';
import { c as connectOpenCloseComponent, d as disconnectOpenCloseComponent } from './openCloseComponent-77161dfa.js';
import './resources-2916eda2.js';
import './key-4fdf42f2.js';
import './debounce-f5f6068a.js';

const panelCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{border-block-end:1px solid;position:sticky;inset-block-start:0px;z-index:400;inline-size:100%;align-items:stretch;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3);flex:0 0 auto}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{overflow:auto}.content-height{block-size:100%}.content-container{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-block-start:1px solid;position:sticky;inset-block-end:0px;display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-block-start-color:var(--calcite-ui-border-3);flex:0 0 auto;min-block-size:3rem;padding:0.5rem}.fab-container{position:sticky;inset-block-end:0px;z-index:300;margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}[hidden]{display:none}";

let Panel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calcitePanelClose = createEvent(this, "calcitePanelClose", 6);
    this.calcitePanelScroll = createEvent(this, "calcitePanelScroll", 6);
    this.resizeObserver = createObserver("resize", () => this.resizeHandler());
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.resizeHandler = () => {
      const { panelScrollEl } = this;
      if (!panelScrollEl ||
        typeof panelScrollEl.scrollHeight !== "number" ||
        typeof panelScrollEl.offsetHeight !== "number") {
        return;
      }
      panelScrollEl.tabIndex = panelScrollEl.scrollHeight > panelScrollEl.offsetHeight ? 0 : -1;
    };
    this.setContainerRef = (node) => {
      this.containerEl = node;
    };
    this.setCloseRef = (node) => {
      this.closeButtonEl = node;
    };
    this.setBackRef = (node) => {
      this.backButtonEl = node;
    };
    this.panelKeyDownHandler = (event) => {
      if (this.closable && event.key === "Escape" && !event.defaultPrevented) {
        this.close();
        event.preventDefault();
      }
    };
    this.close = () => {
      this.closed = true;
      this.calcitePanelClose.emit();
    };
    this.panelScrollHandler = () => {
      this.calcitePanelScroll.emit();
    };
    this.handleHeaderActionsStartSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasStartActions = !!elements.length;
    };
    this.handleHeaderActionsEndSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasEndActions = !!elements.length;
    };
    this.handleHeaderMenuActionsSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasMenuItems = !!elements.length;
    };
    this.handleHeaderContentSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasHeaderContent = !!elements.length;
    };
    this.handleFooterSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasFooterContent = !!elements.length;
    };
    this.handleFooterActionsSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasFooterActions = !!elements.length;
    };
    this.handleFabSlotChange = (event) => {
      const elements = event.target.assignedElements({
        flatten: true
      });
      this.hasFab = !!elements.length;
    };
    this.setPanelScrollEl = (el) => {
      var _a, _b;
      this.panelScrollEl = el;
      (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      if (el) {
        (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.observe(el);
        this.resizeHandler();
      }
    };
    this.closed = false;
    this.disabled = false;
    this.closable = false;
    this.headingLevel = undefined;
    this.loading = false;
    this.heading = undefined;
    this.description = undefined;
    this.menuOpen = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.hasStartActions = false;
    this.hasEndActions = false;
    this.hasMenuItems = false;
    this.hasHeaderContent = false;
    this.hasFooterContent = false;
    this.hasFooterActions = false;
    this.hasFab = false;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    connectLocalized(this);
    connectMessages(this);
  }
  async componentWillLoad() {
    setUpLoadableComponent(this);
    await setUpMessages(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  disconnectedCallback() {
    var _a;
    disconnectLocalized(this);
    disconnectMessages(this);
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await componentLoaded(this);
    focusFirstTabbable(this.containerEl);
  }
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options
   */
  async scrollContentTo(options) {
    var _a;
    (_a = this.panelScrollEl) === null || _a === void 0 ? void 0 : _a.scrollTo(options);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeaderContent() {
    const { heading, headingLevel, description, hasHeaderContent } = this;
    const headingNode = heading ? (h(Heading, { class: CSS$1.heading, level: headingLevel }, heading)) : null;
    const descriptionNode = description ? h("span", { class: CSS$1.description }, description) : null;
    return !hasHeaderContent && (headingNode || descriptionNode) ? (h("div", { class: CSS$1.headerContent, key: "header-content" }, headingNode, descriptionNode)) : null;
  }
  /**
   * Allows user to override the entire header-content node.
   */
  renderHeaderSlottedContent() {
    return (h("div", { class: CSS$1.headerContent, hidden: !this.hasHeaderContent, key: "slotted-header-content" }, h("slot", { name: SLOTS.headerContent, onSlotchange: this.handleHeaderContentSlotChange })));
  }
  renderHeaderStartActions() {
    const { hasStartActions } = this;
    return (h("div", { class: { [CSS$1.headerActionsStart]: true, [CSS$1.headerActions]: true }, hidden: !hasStartActions, key: "header-actions-start" }, h("slot", { name: SLOTS.headerActionsStart, onSlotchange: this.handleHeaderActionsStartSlotChange })));
  }
  renderHeaderActionsEnd() {
    const { close, hasEndActions, messages, closable } = this;
    const text = messages.close;
    const closableNode = closable ? (h("calcite-action", { "aria-label": text, icon: ICONS.close, onClick: close, text: text,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setCloseRef })) : null;
    const slotNode = (h("slot", { name: SLOTS.headerActionsEnd, onSlotchange: this.handleHeaderActionsEndSlotChange }));
    const showContainer = hasEndActions || closableNode;
    return (h("div", { class: { [CSS$1.headerActionsEnd]: true, [CSS$1.headerActions]: true }, hidden: !showContainer, key: "header-actions-end" }, slotNode, closableNode));
  }
  renderMenu() {
    const { hasMenuItems, messages, menuOpen } = this;
    return (h("calcite-action-menu", { flipPlacements: ["top", "bottom"], hidden: !hasMenuItems, key: "menu", label: messages.options, open: menuOpen, placement: "bottom-end" }, h("calcite-action", { icon: ICONS.menu, slot: SLOTS$1.trigger, text: messages.options }), h("slot", { name: SLOTS.headerMenuActions, onSlotchange: this.handleHeaderMenuActionsSlotChange })));
  }
  renderHeaderNode() {
    const { hasHeaderContent, hasStartActions, hasEndActions, closable, hasMenuItems } = this;
    const headerContentNode = this.renderHeaderContent();
    const showHeader = hasHeaderContent ||
      headerContentNode ||
      hasStartActions ||
      hasEndActions ||
      closable ||
      hasMenuItems;
    return (h("header", { class: CSS$1.header, hidden: !showHeader }, this.renderHeaderStartActions(), this.renderHeaderSlottedContent(), headerContentNode, this.renderHeaderActionsEnd(), this.renderMenu()));
  }
  renderFooterNode() {
    const { hasFooterContent, hasFooterActions } = this;
    const showFooter = hasFooterContent || hasFooterActions;
    return (h("footer", { class: CSS$1.footer, hidden: !showFooter }, h("slot", { key: "footer-slot", name: SLOTS.footer, onSlotchange: this.handleFooterSlotChange }), h("slot", { key: "footer-actions-slot", name: SLOTS.footerActions, onSlotchange: this.handleFooterActionsSlotChange })));
  }
  renderContent() {
    const { hasFab } = this;
    const defaultSlotNode = h("slot", { key: "default-slot" });
    const containerNode = hasFab ? (h("section", { class: CSS$1.contentContainer }, defaultSlotNode)) : (defaultSlotNode);
    return (h("div", { class: {
        [CSS$1.contentWrapper]: true,
        [CSS$1.contentContainer]: !hasFab,
        [CSS$1.contentHeight]: hasFab
      }, onScroll: this.panelScrollHandler,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setPanelScrollEl }, containerNode, this.renderFab()));
  }
  renderFab() {
    return (h("div", { class: CSS$1.fabContainer, hidden: !this.hasFab }, h("slot", { name: SLOTS.fab, onSlotchange: this.handleFabSlotChange })));
  }
  render() {
    const { loading, panelKeyDownHandler, closed, closable } = this;
    const panelNode = (h("article", { "aria-busy": toAriaBoolean(loading), class: CSS$1.container, hidden: closed, onKeyDown: panelKeyDownHandler, tabIndex: closable ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setContainerRef }, this.renderHeaderNode(), this.renderContent(), this.renderFooterNode()));
    return (h(Fragment, null, loading ? h("calcite-scrim", { loading: loading }) : null, panelNode));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Panel.style = panelCss;

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  container: "container",
  arrow: "arrow"
};
const TOOLTIP_DELAY_MS = 500;
const ARIA_DESCRIBED_BY = "aria-describedby";

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
function getEffectiveReferenceElement(tooltip) {
  const { referenceElement } = tooltip;
  return ((typeof referenceElement === "string" ? queryElementRoots(tooltip, { id: referenceElement }) : referenceElement) ||
    null);
}

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
class TooltipManager {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.registeredElements = new WeakMap();
    this.hoverTimeout = null;
    this.registeredElementCount = 0;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.queryTooltip = (composedPath) => {
      const { registeredElements } = this;
      const registeredElement = composedPath.find((pathEl) => registeredElements.has(pathEl));
      return registeredElements.get(registeredElement);
    };
    this.keyDownHandler = (event) => {
      if (event.key === "Escape" && !event.defaultPrevented) {
        const { activeTooltipEl } = this;
        if (activeTooltipEl && activeTooltipEl.open) {
          this.clearHoverTimeout();
          this.toggleTooltip(activeTooltipEl, false);
          const referenceElement = getEffectiveReferenceElement(activeTooltipEl);
          if (referenceElement instanceof Element && referenceElement.contains(event.target)) {
            event.preventDefault();
          }
        }
      }
    };
    this.queryHoveredTooltip = (composedPath) => {
      const { activeTooltipEl } = this;
      if (activeTooltipEl && composedPath.includes(activeTooltipEl)) {
        this.clearHoverTimeout();
        return;
      }
      const tooltip = this.queryTooltip(composedPath);
      if (tooltip) {
        this.toggleHoveredTooltip(tooltip, true);
      }
      else if (activeTooltipEl) {
        this.toggleHoveredTooltip(activeTooltipEl, false);
      }
    };
    this.pointerMoveHandler = (event) => {
      const composedPath = event.composedPath();
      this.clearHoverTimeout();
      this.hoverTimeout = window.setTimeout(() => this.queryHoveredTooltip(composedPath), TOOLTIP_DELAY_MS );
    };
    this.pointerDownHandler = (event) => {
      if (!isPrimaryPointerButton(event)) {
        return;
      }
      const clickedTooltip = this.queryTooltip(event.composedPath());
      this.clickedTooltip = clickedTooltip;
      if (clickedTooltip?.closeOnClick) {
        this.toggleTooltip(clickedTooltip, false);
        this.clearHoverTimeout();
      }
    };
    this.focusInHandler = (event) => {
      this.queryFocusedTooltip(event, true);
    };
    this.focusOutHandler = (event) => {
      this.queryFocusedTooltip(event, false);
    };
    this.toggleHoveredTooltip = (tooltip, value) => {
      if (value) {
        this.closeExistingTooltip();
      }
      this.toggleTooltip(tooltip, value);
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(referenceEl, tooltip) {
    this.registeredElementCount++;
    this.registeredElements.set(referenceEl, tooltip);
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
  addListeners() {
    document.addEventListener("keydown", this.keyDownHandler, { capture: true });
    document.addEventListener("pointermove", this.pointerMoveHandler, { capture: true });
    document.addEventListener("pointerdown", this.pointerDownHandler, { capture: true });
    document.addEventListener("focusin", this.focusInHandler, { capture: true });
    document.addEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  removeListeners() {
    document.removeEventListener("keydown", this.keyDownHandler, { capture: true });
    document.removeEventListener("pointermove", this.pointerMoveHandler, { capture: true });
    document.removeEventListener("pointerdown", this.pointerDownHandler, { capture: true });
    document.removeEventListener("focusin", this.focusInHandler, { capture: true });
    document.removeEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  clearHoverTimeout() {
    window.clearTimeout(this.hoverTimeout);
  }
  closeExistingTooltip() {
    const { activeTooltipEl } = this;
    if (activeTooltipEl) {
      this.toggleTooltip(activeTooltipEl, false);
    }
  }
  toggleFocusedTooltip(tooltip, value) {
    this.closeExistingTooltip();
    if (value) {
      this.clearHoverTimeout();
    }
    this.toggleTooltip(tooltip, value);
  }
  toggleTooltip(tooltip, value) {
    tooltip.open = value;
    if (value) {
      this.activeTooltipEl = tooltip;
    }
  }
  queryFocusedTooltip(event, value) {
    const tooltip = this.queryTooltip(event.composedPath());
    if (!tooltip || tooltip === this.clickedTooltip) {
      this.clickedTooltip = null;
      return;
    }
    this.toggleFocusedTooltip(tooltip, value);
  }
}

const tooltipCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, 901);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:\"\";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^=top]) .arrow{inset-block-end:-4px}:host([data-placement^=bottom]) .arrow{inset-block-start:-4px}:host([data-placement^=right]) .arrow,:host([data-placement^=left]) .arrow{direction:ltr;text-align:start}:host([data-placement^=left]) .arrow{inset-inline-end:-4px}:host([data-placement^=right]) .arrow{inset-inline-start:-4px}.container{position:relative;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}";

const manager = new TooltipManager();
let Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteTooltipBeforeClose = createEvent(this, "calciteTooltipBeforeClose", 6);
    this.calciteTooltipClose = createEvent(this, "calciteTooltipClose", 6);
    this.calciteTooltipBeforeOpen = createEvent(this, "calciteTooltipBeforeOpen", 6);
    this.calciteTooltipOpen = createEvent(this, "calciteTooltipOpen", 6);
    this.guid = `calcite-tooltip-${guid()}`;
    this.hasLoaded = false;
    this.openTransitionProp = "opacity";
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
      connectOpenCloseComponent(this);
    };
    this.setUpReferenceElement = (warn = true) => {
      this.removeReferences();
      this.effectiveReferenceElement = getEffectiveReferenceElement(this.el);
      connectFloatingUI(this, this.effectiveReferenceElement, this.el);
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
    this.addReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      const id = this.getId();
      if ("setAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.setAttribute(ARIA_DESCRIBED_BY, id);
      }
      manager.registerElement(effectiveReferenceElement, this.el);
    };
    this.removeReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      if ("removeAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.removeAttribute(ARIA_DESCRIBED_BY);
      }
      manager.unregisterElement(effectiveReferenceElement);
    };
    this.closeOnClick = false;
    this.label = undefined;
    this.offsetDistance = defaultOffsetDistance;
    this.offsetSkidding = 0;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.referenceElement = undefined;
    this.effectiveReferenceElement = undefined;
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
      updateAfterClose(this.el);
    }
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  placementHandler() {
    this.reposition(true);
  }
  referenceElementHandler() {
    this.setUpReferenceElement();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectOpenCloseComponent(this);
    this.setUpReferenceElement(this.hasLoaded);
  }
  componentDidLoad() {
    if (this.referenceElement && !this.effectiveReferenceElement) {
      this.setUpReferenceElement();
    }
    this.reposition(true);
    this.hasLoaded = true;
  }
  disconnectedCallback() {
    this.removeReferences();
    disconnectFloatingUI(this, this.effectiveReferenceElement, this.el);
    disconnectOpenCloseComponent(this);
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
    const { el, effectiveReferenceElement, placement, overlayPositioning, offsetDistance, offsetSkidding, arrowEl } = this;
    return reposition(this, {
      floatingEl: el,
      referenceEl: effectiveReferenceElement,
      overlayPositioning,
      placement,
      offsetDistance,
      offsetSkidding,
      includeArrow: true,
      arrowEl,
      type: "tooltip"
    }, delayed);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  onBeforeOpen() {
    this.calciteTooltipBeforeOpen.emit();
  }
  onOpen() {
    this.calciteTooltipOpen.emit();
  }
  onBeforeClose() {
    this.calciteTooltipBeforeClose.emit();
  }
  onClose() {
    this.calciteTooltipClose.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { effectiveReferenceElement, label, open } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    return (h(Host, { "aria-hidden": toAriaBoolean(hidden), "aria-label": label, "aria-live": "polite", "calcite-hydrated-hidden": hidden, id: this.getId(), role: "tooltip" }, h("div", { class: {
        [FloatingCSS.animation]: true,
        [FloatingCSS.animationActive]: displayed
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, h("div", { class: CSS.arrow,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (arrowEl) => (this.arrowEl = arrowEl) }), h("div", { class: CSS.container }, h("slot", null)))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "offsetDistance": ["offsetDistanceOffsetHandler"],
    "offsetSkidding": ["offsetSkiddingHandler"],
    "open": ["openHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "placement": ["placementHandler"],
    "referenceElement": ["referenceElementHandler"]
  }; }
};
Tooltip.style = tooltipCss;

export { Panel as calcite_panel, Tooltip as calcite_tooltip };

//# sourceMappingURL=calcite-panel_2.entry.js.map