import { HTMLElement, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot.js';
import { t as toAriaBoolean, a as getSlotted } from './dom.js';
import { c as connectLocalized, d as disconnectLocalized } from './locale.js';
import { c as connectMessages, d as disconnectMessages, s as setUpMessages, u as updateMessages } from './t9n.js';
import { d as defineCustomElement$3 } from './checkbox.js';
import { d as defineCustomElement$2 } from './label2.js';
import { d as defineCustomElement$1 } from './loader.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  container: "container",
  header: "header",
  footer: "footer",
  title: "title",
  subtitle: "subtitle",
  checkboxWrapper: "checkbox-wrapper",
  thumbnailWrapper: "thumbnail-wrapper"
};
const SLOTS = {
  thumbnail: "thumbnail",
  title: "title",
  subtitle: "subtitle",
  footerStart: "footer-start",
  footerEnd: "footer-end"
};

const cardCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block;max-inline-size:100%}:host .calcite-card-container{position:relative;display:flex;block-size:100%;flex-direction:column;justify-content:space-between;overflow:hidden;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:var(--calcite-border-radius-base)}.container{position:relative;display:flex;flex:1 1 auto;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){pointer-events:none;opacity:0}:host([loading]) .calcite-card-loader-container{position:absolute;inset:0px;display:flex;align-items:center}.header,.footer{display:flex;padding-inline:0.75rem;padding-block:0.75rem 0.25rem}.header{flex-direction:column}.footer{margin-block-start:auto;flex-direction:row;align-content:space-between;justify-content:space-between;padding-inline:0.75rem;padding-block:0.25rem 0.75rem}.card-content{padding:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-brand)}slot[name=title]::slotted(*),*::slotted([slot=title]){margin:0px;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selectable]) .header{padding-inline-end:2rem}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){margin:0px;margin-block-start:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){min-inline-size:100%;max-inline-size:100%}slot[name=footer-start]::slotted(*),*::slotted([slot=footer-start]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;margin-inline-end:auto}slot[name=footer-end]::slotted(*),*::slotted([slot=footer-end]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375}.checkbox-wrapper{position:absolute;margin:0px;padding:0px;inset-block-start:0.5rem;inset-inline-end:0.5rem}.thumbnail-wrapper{display:flex}.calcite-card-container.inline{flex-direction:row}.calcite-card-container.inline>.container{inline-size:60%}.calcite-card-container.inline>.thumbnail-wrapper{inline-size:40%;align-items:flex-start}.calcite-card-container.inline slot[name=thumbnail]::slotted(img),.calcite-card-container.inline img::slotted([slot=thumbnail]){inline-size:100%}slot[name=footer-start]::slotted(*),slot[name=footer-end]::slotted(*){display:flex;gap:0.25rem}";

let Card = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteCardSelect = createEvent(this, "calciteCardSelect", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.cardSelectClick = () => {
      this.selectCard();
    };
    this.cardSelectKeyDown = (event) => {
      switch (event.key) {
        case " ":
        case "Enter":
          this.selectCard();
          event.preventDefault();
          break;
      }
    };
    this.loading = false;
    this.selected = false;
    this.selectable = false;
    this.thumbnailPosition = "block-start";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectConditionalSlotComponent(this);
    connectLocalized(this);
    connectMessages(this);
  }
  disonnectedCallback() {
    disconnectConditionalSlotComponent(this);
    disconnectLocalized(this);
    disconnectMessages(this);
  }
  async componentWillLoad() {
    await setUpMessages(this);
  }
  render() {
    const thumbnailInline = this.thumbnailPosition.startsWith("inline");
    const thumbnailStart = this.thumbnailPosition.endsWith("start");
    return (h("div", { class: { "calcite-card-container": true, inline: thumbnailInline } }, this.loading ? (h("div", { class: "calcite-card-loader-container" }, h("calcite-loader", { label: this.messages.loading }))) : null, thumbnailStart && this.renderThumbnail(), h("section", { "aria-busy": toAriaBoolean(this.loading), class: { [CSS.container]: true } }, this.selectable ? this.renderCheckbox() : null, this.renderHeader(), h("div", { class: "card-content" }, h("slot", null)), this.renderFooter()), !thumbnailStart && this.renderThumbnail()));
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  selectCard() {
    this.selected = !this.selected;
    this.calciteCardSelect.emit();
  }
  renderThumbnail() {
    return getSlotted(this.el, SLOTS.thumbnail) ? (h("section", { class: CSS.thumbnailWrapper }, h("slot", { name: SLOTS.thumbnail }))) : null;
  }
  renderCheckbox() {
    return (h("calcite-label", { class: CSS.checkboxWrapper, onClick: this.cardSelectClick, onKeyDown: this.cardSelectKeyDown }, h("calcite-checkbox", { checked: this.selected, label: this.messages.select })));
  }
  renderHeader() {
    const { el } = this;
    const title = getSlotted(el, SLOTS.title);
    const subtitle = getSlotted(el, SLOTS.subtitle);
    const hasHeader = title || subtitle;
    return hasHeader ? (h("header", { class: CSS.header }, h("slot", { name: SLOTS.title }), h("slot", { name: SLOTS.subtitle }))) : null;
  }
  renderFooter() {
    const { el } = this;
    const startFooter = getSlotted(el, SLOTS.footerStart);
    const endFooter = getSlotted(el, SLOTS.footerEnd);
    const hasFooter = startFooter || endFooter;
    return hasFooter ? (h("footer", { class: CSS.footer }, h("slot", { name: SLOTS.footerStart }), h("slot", { name: SLOTS.footerEnd }))) : null;
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return cardCss; }
};
Card = /*@__PURE__*/ proxyCustomElement(Card, [1, "calcite-card", {
    "loading": [516],
    "selected": [1540],
    "selectable": [516],
    "thumbnailPosition": [513, "thumbnail-position"],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-card", "calcite-checkbox", "calcite-label", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Card);
      }
      break;
    case "calcite-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "calcite-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { Card as C, defineCustomElement as d };

//# sourceMappingURL=card.js.map