'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const dom = require('./dom-5643dc8d.js');
const guid = require('./guid-504c591e.js');
const key = require('./key-75cf5e40.js');
const locale = require('./locale-dbbec1a1.js');
const t9n = require('./t9n-30d5587d.js');
require('./resources-0be54a9c.js');
require('./observers-6da0c0fa.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  content: "content",
  invalid: "invalid",
  toggle: "toggle",
  toggleSwitch: "toggle--switch",
  toggleSwitchContent: "toggle--switch__content",
  toggleSwitchText: "toggle--switch__text",
  sectionHeader: "section-header",
  sectionHeaderText: "section-header__text",
  statusIcon: "status-icon",
  valid: "valid"
};
const ICONS = {
  menuOpen: "chevron-down",
  menuClosedLeft: "chevron-left",
  menuClosedRight: "chevron-right",
  valid: "check-circle",
  invalid: "exclamation-mark-triangle"
};

const blockSectionCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch calcite-switch{pointer-events:none;margin-inline-start:0.25rem}.toggle--switch .status-icon{margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}";

let BlockSection = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteBlockSectionToggle = index.createEvent(this, "calciteBlockSectionToggle", 6);
    this.guid = guid.guid();
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleHeaderKeyDown = (event) => {
      if (key.isActivationKey(event.key)) {
        this.toggleSection();
        event.preventDefault();
        event.stopPropagation();
      }
    };
    this.toggleSection = () => {
      this.open = !this.open;
      this.calciteBlockSectionToggle.emit();
    };
    this.open = false;
    this.status = undefined;
    this.text = undefined;
    this.toggleDisplay = "button";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
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
  }
  disconnectedCallback() {
    locale.disconnectLocalized(this);
    t9n.disconnectMessages(this);
  }
  async componentWillLoad() {
    await t9n.setUpMessages(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderStatusIcon() {
    var _a;
    const { status } = this;
    const statusIcon = (_a = ICONS[status]) !== null && _a !== void 0 ? _a : false;
    const statusIconClasses = {
      [CSS.statusIcon]: true,
      [CSS.valid]: status == "valid",
      [CSS.invalid]: status == "invalid"
    };
    return !!statusIcon ? (index.h("calcite-icon", { class: statusIconClasses, icon: statusIcon, scale: "s" })) : null;
  }
  render() {
    const { el, messages, open, text, toggleDisplay } = this;
    const dir = dom.getElementDir(el);
    const arrowIcon = open
      ? ICONS.menuOpen
      : dir === "rtl"
        ? ICONS.menuClosedLeft
        : ICONS.menuClosedRight;
    const toggleLabel = open ? messages.collapse : messages.expand;
    const { guid } = this;
    const regionId = `${guid}-region`;
    const buttonId = `${guid}-button`;
    const headerNode = toggleDisplay === "switch" ? (index.h("div", { "aria-controls": regionId, "aria-label": toggleLabel, class: {
        [CSS.toggle]: true,
        [CSS.toggleSwitch]: true
      }, id: buttonId, onClick: this.toggleSection, onKeyDown: this.handleHeaderKeyDown, tabIndex: 0, title: toggleLabel }, index.h("div", { class: CSS.toggleSwitchContent }, index.h("span", { class: CSS.toggleSwitchText }, text)), index.h("calcite-switch", { checked: open, label: toggleLabel, scale: "s", tabIndex: -1 }), this.renderStatusIcon())) : (index.h("button", { "aria-controls": regionId, "aria-label": toggleLabel, class: {
        [CSS.sectionHeader]: true,
        [CSS.toggle]: true
      }, id: buttonId, name: toggleLabel, onClick: this.toggleSection }, index.h("calcite-icon", { icon: arrowIcon, scale: "s" }), index.h("span", { class: CSS.sectionHeaderText }, text), this.renderStatusIcon()));
    return (index.h(index.Host, null, headerNode, index.h("section", { "aria-expanded": dom.toAriaBoolean(open), "aria-labelledby": buttonId, class: CSS.content, hidden: !open, id: regionId }, index.h("slot", null))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
BlockSection.style = blockSectionCss;

exports.calcite_block_section = BlockSection;

//# sourceMappingURL=calcite-block-section.cjs.entry.js.map