'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const dom = require('./dom-5643dc8d.js');
const interactive = require('./interactive-aacdfedd.js');
const loadable = require('./loadable-0d54a318.js');
const locale = require('./locale-dbbec1a1.js');
const t9n = require('./t9n-30d5587d.js');
const resources = require('./resources-e86b7fd3.js');
require('./guid-504c591e.js');
require('./resources-0be54a9c.js');
require('./key-75cf5e40.js');
require('./observers-6da0c0fa.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  backButton: "back-button"
};
const ICONS = {
  backLeft: "chevron-left",
  backRight: "chevron-right"
};
const SLOTS = {
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerActions: "footer-actions"
};

const flowItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}";

let FlowItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteFlowItemBack = index.createEvent(this, "calciteFlowItemBack", 6);
    this.calciteFlowItemScroll = index.createEvent(this, "calciteFlowItemScroll", 6);
    this.calciteFlowItemClose = index.createEvent(this, "calciteFlowItemClose", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handlePanelScroll = (event) => {
      event.stopPropagation();
      this.calciteFlowItemScroll.emit();
    };
    this.handlePanelClose = (event) => {
      event.stopPropagation();
      this.calciteFlowItemClose.emit();
    };
    this.backButtonClick = () => {
      this.calciteFlowItemBack.emit();
    };
    this.setBackRef = (node) => {
      this.backButtonEl = node;
    };
    this.setContainerRef = (node) => {
      this.containerEl = node;
    };
    this.closable = false;
    this.closed = false;
    this.beforeBack = undefined;
    this.description = undefined;
    this.disabled = false;
    this.heading = undefined;
    this.headingLevel = undefined;
    this.loading = false;
    this.menuOpen = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.showBackButton = false;
    this.backButtonEl = undefined;
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
    locale.connectLocalized(this);
    t9n.connectMessages(this);
  }
  async componentWillLoad() {
    await t9n.setUpMessages(this);
    loadable.setUpLoadableComponent(this);
  }
  componentDidRender() {
    interactive.updateHostInteraction(this);
  }
  disconnectedCallback() {
    locale.disconnectLocalized(this);
    t9n.disconnectMessages(this);
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
  }
  effectiveLocaleChange() {
    t9n.updateMessages(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component.
   */
  async setFocus() {
    await loadable.componentLoaded(this);
    const { backButtonEl, containerEl } = this;
    if (backButtonEl) {
      backButtonEl.setFocus();
      return;
    }
    containerEl === null || containerEl === void 0 ? void 0 : containerEl.setFocus();
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
    await ((_a = this.containerEl) === null || _a === void 0 ? void 0 : _a.scrollContentTo(options));
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBackButton() {
    const { el } = this;
    const rtl = dom.getElementDir(el) === "rtl";
    const { showBackButton, backButtonClick, messages } = this;
    const label = messages.back;
    const icon = rtl ? ICONS.backRight : ICONS.backLeft;
    return showBackButton ? (index.h("calcite-action", { "aria-label": label, class: CSS.backButton, icon: icon, key: "flow-back-button", onClick: backButtonClick, scale: "s", slot: "header-actions-start", text: label,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setBackRef })) : null;
  }
  render() {
    const { closable, closed, description, disabled, heading, headingLevel, loading, menuOpen, messages, backButtonEl } = this;
    const label = messages.back;
    return (index.h(index.Host, null, index.h("calcite-panel", { closable: closable, closed: closed, description: description, disabled: disabled, heading: heading, headingLevel: headingLevel, loading: loading, menuOpen: menuOpen, messageOverrides: messages, onCalcitePanelClose: this.handlePanelClose, onCalcitePanelScroll: this.handlePanelScroll,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setContainerRef }, this.renderBackButton(), index.h("slot", { name: SLOTS.headerActionsStart, slot: resources.SLOTS.headerActionsStart }), index.h("slot", { name: SLOTS.headerActionsEnd, slot: resources.SLOTS.headerActionsEnd }), index.h("slot", { name: SLOTS.headerContent, slot: resources.SLOTS.headerContent }), index.h("slot", { name: SLOTS.headerMenuActions, slot: resources.SLOTS.headerMenuActions }), index.h("slot", { name: SLOTS.fab, slot: resources.SLOTS.fab }), index.h("slot", { name: SLOTS.footerActions, slot: resources.SLOTS.footerActions }), index.h("slot", { name: SLOTS.footer, slot: resources.SLOTS.footer }), index.h("slot", null)), backButtonEl ? (index.h("calcite-tooltip", { label: label, overlayPositioning: "fixed", placement: "top", referenceElement: backButtonEl }, label)) : null));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
FlowItem.style = flowItemCss;

exports.calcite_flow_item = FlowItem;

//# sourceMappingURL=calcite-flow-item.cjs.entry.js.map