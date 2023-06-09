'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const conditionalSlot = require('./conditionalSlot-1fd35835.js');
const dom = require('./dom-5643dc8d.js');
const loadable = require('./loadable-0d54a318.js');
const locale = require('./locale-dbbec1a1.js');
const t9n = require('./t9n-30d5587d.js');
const resources$1 = require('./resources-8af869af.js');
const resources = require('./resources-c79c98f1.js');
require('./observers-6da0c0fa.js');
require('./guid-504c591e.js');
require('./resources-0be54a9c.js');
require('./key-75cf5e40.js');

const actionGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3}:host([columns=\"1\"]){--calcite-action-group-columns:1}:host([columns=\"2\"]){--calcite-action-group-columns:2}:host([columns=\"3\"]){--calcite-action-group-columns:3}:host([columns=\"4\"]){--calcite-action-group-columns:4}:host([columns=\"5\"]){--calcite-action-group-columns:5}:host([columns=\"6\"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]){flex-direction:row}:host([layout=grid]){display:grid;place-content:stretch;gap:1px;background-color:var(--calcite-ui-background);padding:1px;grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}";

let ActionGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setMenuOpen = (event) => {
      this.menuOpen = !!event.target.open;
    };
    this.expanded = false;
    this.layout = "vertical";
    this.columns = undefined;
    this.menuOpen = false;
    this.scale = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
  }
  expandedHandler() {
    this.menuOpen = false;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    t9n.updateMessages(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await loadable.componentLoaded(this);
    this.el.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    locale.connectLocalized(this);
    t9n.connectMessages(this);
    conditionalSlot.connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    locale.disconnectLocalized(this);
    t9n.disconnectMessages(this);
    conditionalSlot.disconnectConditionalSlotComponent(this);
  }
  async componentWillLoad() {
    loadable.setUpLoadableComponent(this);
    await t9n.setUpMessages(this);
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  renderTooltip() {
    const { el } = this;
    const hasTooltip = dom.getSlotted(el, resources.SLOTS.menuTooltip);
    return hasTooltip ? index.h("slot", { name: resources.SLOTS.menuTooltip, slot: resources$1.SLOTS.tooltip }) : null;
  }
  renderMenu() {
    const { el, expanded, menuOpen, scale, layout, messages } = this;
    const hasMenuItems = dom.getSlotted(el, resources.SLOTS.menuActions);
    return hasMenuItems ? (index.h("calcite-action-menu", { expanded: expanded, flipPlacements: ["left", "right"], label: messages.more, onCalciteActionMenuOpen: this.setMenuOpen, open: menuOpen, placement: layout === "horizontal" ? "bottom-start" : "leading-start", scale: scale }, index.h("calcite-action", { icon: resources.ICONS.menu, scale: scale, slot: resources$1.SLOTS.trigger, text: messages.more, textEnabled: expanded }), index.h("slot", { name: resources.SLOTS.menuActions }), this.renderTooltip())) : null;
  }
  render() {
    return (index.h(index.Fragment, null, index.h("slot", null), this.renderMenu()));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
ActionGroup.style = actionGroupCss;

exports.calcite_action_group = ActionGroup;

//# sourceMappingURL=calcite-action-group.cjs.entry.js.map