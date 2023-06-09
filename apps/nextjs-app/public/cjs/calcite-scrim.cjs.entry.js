'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const locale = require('./locale-dbbec1a1.js');
const t9n = require('./t9n-30d5587d.js');
require('./dom-5643dc8d.js');
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
  scrim: "scrim",
  content: "content"
};

const scrimCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:absolute;inset:0px;z-index:700;display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}";

let Scrim = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.loading = false;
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
  }
  disconnectedCallback() {
    locale.disconnectLocalized(this);
    t9n.disconnectMessages(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Method
  //
  // --------------------------------------------------------------------------
  render() {
    const { el, loading, messages } = this;
    const hasContent = el.innerHTML.trim().length > 0;
    const loaderNode = loading ? index.h("calcite-loader", { label: messages.loading }) : null;
    const contentNode = hasContent ? (index.h("div", { class: CSS.content }, index.h("slot", null))) : null;
    return (index.h("div", { class: CSS.scrim }, loaderNode, contentNode));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Scrim.style = scrimCss;

exports.calcite_scrim = Scrim;

//# sourceMappingURL=calcite-scrim.cjs.entry.js.map