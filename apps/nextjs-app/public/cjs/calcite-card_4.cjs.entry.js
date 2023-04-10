'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const conditionalSlot = require('./conditionalSlot-1fd35835.js');
const dom = require('./dom-5643dc8d.js');
const locale = require('./locale-dbbec1a1.js');
const t9n = require('./t9n-30d5587d.js');
const form = require('./form-8a432189.js');
const guid = require('./guid-504c591e.js');
const interactive = require('./interactive-aacdfedd.js');
const key = require('./key-75cf5e40.js');
const label = require('./label-30c64fdd.js');
const loadable = require('./loadable-0d54a318.js');
const Heading = require('./Heading-cd9bfe1e.js');
require('./observers-6da0c0fa.js');
require('./resources-0be54a9c.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS$2 = {
  container: "container",
  header: "header",
  footer: "footer",
  title: "title",
  subtitle: "subtitle",
  checkboxWrapper: "checkbox-wrapper",
  thumbnailWrapper: "thumbnail-wrapper"
};
const SLOTS$1 = {
  thumbnail: "thumbnail",
  title: "title",
  subtitle: "subtitle",
  footerStart: "footer-start",
  footerEnd: "footer-end"
};

const cardCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block;max-inline-size:100%}:host .calcite-card-container{position:relative;display:flex;block-size:100%;flex-direction:column;justify-content:space-between;overflow:hidden;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:var(--calcite-border-radius-base)}.container{position:relative;display:flex;flex:1 1 auto;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){pointer-events:none;opacity:0}:host([loading]) .calcite-card-loader-container{position:absolute;inset:0px;display:flex;align-items:center}.header,.footer{display:flex;padding-inline:0.75rem;padding-block:0.75rem 0.25rem}.header{flex-direction:column}.footer{margin-block-start:auto;flex-direction:row;align-content:space-between;justify-content:space-between;padding-inline:0.75rem;padding-block:0.25rem 0.75rem}.card-content{padding:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-brand)}slot[name=title]::slotted(*),*::slotted([slot=title]){margin:0px;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selectable]) .header{padding-inline-end:2rem}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){margin:0px;margin-block-start:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){min-inline-size:100%;max-inline-size:100%}slot[name=footer-start]::slotted(*),*::slotted([slot=footer-start]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;margin-inline-end:auto}slot[name=footer-end]::slotted(*),*::slotted([slot=footer-end]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375}.checkbox-wrapper{position:absolute;margin:0px;padding:0px;inset-block-start:0.5rem;inset-inline-end:0.5rem}.thumbnail-wrapper{display:flex}.calcite-card-container.inline{flex-direction:row}.calcite-card-container.inline>.container{inline-size:60%}.calcite-card-container.inline>.thumbnail-wrapper{inline-size:40%;align-items:flex-start}.calcite-card-container.inline slot[name=thumbnail]::slotted(img),.calcite-card-container.inline img::slotted([slot=thumbnail]){inline-size:100%}slot[name=footer-start]::slotted(*),slot[name=footer-end]::slotted(*){display:flex;gap:0.25rem}";

let Card = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteCardSelect = index.createEvent(this, "calciteCardSelect", 6);
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
    conditionalSlot.connectConditionalSlotComponent(this);
    locale.connectLocalized(this);
    t9n.connectMessages(this);
  }
  disonnectedCallback() {
    conditionalSlot.disconnectConditionalSlotComponent(this);
    locale.disconnectLocalized(this);
    t9n.disconnectMessages(this);
  }
  async componentWillLoad() {
    await t9n.setUpMessages(this);
  }
  render() {
    const thumbnailInline = this.thumbnailPosition.startsWith("inline");
    const thumbnailStart = this.thumbnailPosition.endsWith("start");
    return (index.h("div", { class: { "calcite-card-container": true, inline: thumbnailInline } }, this.loading ? (index.h("div", { class: "calcite-card-loader-container" }, index.h("calcite-loader", { label: this.messages.loading }))) : null, thumbnailStart && this.renderThumbnail(), index.h("section", { "aria-busy": dom.toAriaBoolean(this.loading), class: { [CSS$2.container]: true } }, this.selectable ? this.renderCheckbox() : null, this.renderHeader(), index.h("div", { class: "card-content" }, index.h("slot", null)), this.renderFooter()), !thumbnailStart && this.renderThumbnail()));
  }
  effectiveLocaleChange() {
    t9n.updateMessages(this, this.effectiveLocale);
  }
  selectCard() {
    this.selected = !this.selected;
    this.calciteCardSelect.emit();
  }
  renderThumbnail() {
    return dom.getSlotted(this.el, SLOTS$1.thumbnail) ? (index.h("section", { class: CSS$2.thumbnailWrapper }, index.h("slot", { name: SLOTS$1.thumbnail }))) : null;
  }
  renderCheckbox() {
    return (index.h("calcite-label", { class: CSS$2.checkboxWrapper, onClick: this.cardSelectClick, onKeyDown: this.cardSelectKeyDown }, index.h("calcite-checkbox", { checked: this.selected, label: this.messages.select })));
  }
  renderHeader() {
    const { el } = this;
    const title = dom.getSlotted(el, SLOTS$1.title);
    const subtitle = dom.getSlotted(el, SLOTS$1.subtitle);
    const hasHeader = title || subtitle;
    return hasHeader ? (index.h("header", { class: CSS$2.header }, index.h("slot", { name: SLOTS$1.title }), index.h("slot", { name: SLOTS$1.subtitle }))) : null;
  }
  renderFooter() {
    const { el } = this;
    const startFooter = dom.getSlotted(el, SLOTS$1.footerStart);
    const endFooter = dom.getSlotted(el, SLOTS$1.footerEnd);
    const hasFooter = startFooter || endFooter;
    return hasFooter ? (index.h("footer", { class: CSS$2.footer }, index.h("slot", { name: SLOTS$1.footerStart }), index.h("slot", { name: SLOTS$1.footerEnd }))) : null;
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Card.style = cardCss;

const checkboxCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg,:host .toggle{inline-size:var(--calcite-checkbox-size);block-size:var(--calcite-checkbox-size)}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-ui-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);color:var(--calcite-ui-background)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}.toggle{outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

let Checkbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteInternalCheckboxBlur = index.createEvent(this, "calciteInternalCheckboxBlur", 6);
    this.calciteCheckboxChange = index.createEvent(this, "calciteCheckboxChange", 6);
    this.calciteInternalCheckboxFocus = index.createEvent(this, "calciteInternalCheckboxFocus", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Properties
    //
    //--------------------------------------------------------------------------
    this.checkedPath = "M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z";
    this.indeterminatePath = "M13 8v1H3V8z";
    this.getPath = () => this.indeterminate ? this.indeterminatePath : this.checked ? this.checkedPath : "";
    this.toggle = () => {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.setFocus();
        this.indeterminate = false;
        this.calciteCheckboxChange.emit();
      }
    };
    this.keyDownHandler = (event) => {
      if (key.isActivationKey(event.key)) {
        this.toggle();
        event.preventDefault();
      }
    };
    this.clickHandler = () => {
      this.toggle();
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.onToggleBlur = () => {
      this.calciteInternalCheckboxBlur.emit(false);
    };
    this.onToggleFocus = () => {
      this.calciteInternalCheckboxFocus.emit(true);
    };
    this.onLabelClick = () => {
      this.toggle();
    };
    this.checked = false;
    this.disabled = false;
    this.form = undefined;
    this.guid = undefined;
    this.hovered = false;
    this.indeterminate = false;
    this.label = undefined;
    this.name = undefined;
    this.required = false;
    this.scale = "m";
    this.value = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    await loadable.componentLoaded(this);
    (_a = this.toggleEl) === null || _a === void 0 ? void 0 : _a.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  syncHiddenFormInput(input) {
    input.type = "checkbox";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.guid = this.el.id || `calcite-checkbox-${guid.guid()}`;
    label.connectLabel(this);
    form.connectForm(this);
  }
  disconnectedCallback() {
    label.disconnectLabel(this);
    form.disconnectForm(this);
  }
  componentWillLoad() {
    loadable.setUpLoadableComponent(this);
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
  }
  componentDidRender() {
    interactive.updateHostInteraction(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (index.h(index.Host, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, index.h("div", { "aria-checked": dom.toAriaBoolean(this.checked), "aria-label": label.getLabelText(this), class: "toggle", onBlur: this.onToggleBlur, onFocus: this.onToggleFocus, role: "checkbox", tabIndex: this.disabled ? undefined : 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (toggleEl) => (this.toggleEl = toggleEl) }, index.h("svg", { "aria-hidden": "true", class: "check-svg", viewBox: "0 0 16 16" }, index.h("path", { d: this.getPath() })), index.h("slot", null)), index.h(form.HiddenFormInputSlot, { component: this })));
  }
  get el() { return index.getElement(this); }
};
Checkbox.style = checkboxCss;

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS$1 = {
  container: "container"
};

const labelCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-ui-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*){pointer-events:none}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";

let Label = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteInternalLabelClick = index.createEvent(this, "calciteInternalLabelClick", 2);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.labelClickHandler = (event) => {
      this.calciteInternalLabelClick.emit({
        sourceEvent: event
      });
    };
    this.alignment = "start";
    this.for = undefined;
    this.scale = "m";
    this.layout = "default";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    document.dispatchEvent(new CustomEvent(label.labelConnectedEvent));
  }
  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent(label.labelDisconnectedEvent));
  }
  render() {
    return (index.h(index.Host, { onClick: this.labelClickHandler }, index.h("div", { class: CSS$1.container }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
Label.style = labelCss;

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

let Tip = class {
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

exports.calcite_card = Card;
exports.calcite_checkbox = Checkbox;
exports.calcite_label = Label;
exports.calcite_tip = Tip;

//# sourceMappingURL=calcite-card_4.cjs.entry.js.map