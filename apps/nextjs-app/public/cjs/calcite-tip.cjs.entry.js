'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e13107cb.js');
const conditionalSlot = require('./conditionalSlot-a106ace9.js');
const dom = require('./dom-706b487b.js');
const locale = require('./locale-85368e13.js');
const t9n = require('./t9n-df6ee4f9.js');
const Heading = require('./Heading-e1c03fc0.js');
require('./observers-4e1b61ab.js');
require('./guid-cf963553.js');
require('./resources-1e445af3.js');
require('./key-457d19eb.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  container: "container",
  header: "header",
  heading: "heading",
  close: "close",
  imageFrame: "image-frame",
  content: "content",
  info: "info"
};
const ICONS = {
  close: "x"
};
const SLOTS = {
  thumbnail: "thumbnail"
};

const tipCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;margin:1rem;box-sizing:border-box;display:flex;flex-direction:row;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}.container{inline-size:100%;padding:1rem}:host([closed]),:host([closed]) .container{display:none}:host([selected]) .container{margin:0px;border-style:none;padding:0px}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{margin-block-end:0.5rem}.header .heading{padding:0px;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-1)}.container[hidden]{display:none}.content{display:flex}.info{padding-block:0px;padding-inline:1rem;inline-size:70%}.info:only-child{inline-size:100%;padding-inline:0px}::slotted(p){margin-block-start:0px}::slotted(a){outline-color:transparent;color:var(--calcite-ui-brand)}::slotted(a:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.image-frame{inline-size:25%}.image-frame img{max-inline-size:100%}::slotted(img){max-inline-size:100%}";

const Tip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteTipDismiss = index.createEvent(this, "calciteTipDismiss", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.hideTip = () => {
      this.closed = true;
      this.calciteTipDismiss.emit();
    };
    this.closed = false;
    this.closeDisabled = false;
    this.heading = undefined;
    this.headingLevel = undefined;
    this.selected = false;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
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
    conditionalSlot.connectConditionalSlotComponent(this);
    locale.connectLocalized(this);
    t9n.connectMessages(this);
  }
  async componentWillLoad() {
    await t9n.setUpMessages(this);
  }
  disconnectedCallback() {
    conditionalSlot.disconnectConditionalSlotComponent(this);
    locale.disconnectLocalized(this);
    t9n.disconnectMessages(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeader() {
    var _a;
    const { heading, headingLevel, el } = this;
    const parentLevel = (_a = el.closest("calcite-tip-manager")) === null || _a === void 0 ? void 0 : _a.headingLevel;
    const relativeLevel = parentLevel ? Heading.constrainHeadingLevel(parentLevel + 1) : null;
    const level = headingLevel || relativeLevel;
    return heading ? (index.h("header", { class: CSS.header }, index.h(Heading.Heading, { class: CSS.heading, level: level }, heading))) : null;
  }
  renderDismissButton() {
    const { closeDisabled, hideTip } = this;
    return !closeDisabled ? (index.h("calcite-action", { class: CSS.close, icon: ICONS.close, onClick: hideTip, scale: "l", text: this.messages.close })) : null;
  }
  renderImageFrame() {
    const { el } = this;
    return dom.getSlotted(el, SLOTS.thumbnail) ? (index.h("div", { class: CSS.imageFrame, key: "thumbnail" }, index.h("slot", { name: SLOTS.thumbnail }))) : null;
  }
  renderInfoNode() {
    return (index.h("div", { class: CSS.info }, index.h("slot", null)));
  }
  renderContent() {
    return (index.h("div", { class: CSS.content }, this.renderImageFrame(), this.renderInfoNode()));
  }
  render() {
    return (index.h(index.Fragment, null, index.h("article", { class: CSS.container }, this.renderHeader(), this.renderContent()), this.renderDismissButton()));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Tip.style = tipCss;

exports.calcite_tip = Tip;

//# sourceMappingURL=calcite-tip.cjs.entry.js.map