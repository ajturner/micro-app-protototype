'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const conditionalSlot = require('./conditionalSlot-1fd35835.js');
const dom = require('./dom-5643dc8d.js');
const guid = require('./guid-504c591e.js');
const loadable = require('./loadable-0d54a318.js');
const locale = require('./locale-dbbec1a1.js');
const observers = require('./observers-6da0c0fa.js');
const t9n = require('./t9n-30d5587d.js');
require('./resources-0be54a9c.js');
require('./key-75cf5e40.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  title: "title",
  close: "close",
  imageContainer: "image-container",
  chipIcon: "chip-icon",
  closeIcon: "close-icon",
  contentSlotted: "content--slotted",
  container: "container",
  imageSlotted: "image--slotted"
};
const SLOTS = {
  image: "image"
};
const ICONS = {
  close: "x"
};

const chipCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem;padding-inline-start:0.125rem}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:calc(0.75rem / 2)}:host([scale=m]) .image-container{block-size:1.5rem;inline-size:1.5rem;padding-inline-start:0.25rem}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale=l]) .image-container{block-size:2rem;inline-size:2rem;padding-inline-start:0.5rem}:host{box-sizing:border-box;display:inline-flex;cursor:default;align-items:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container{display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center}.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-block:0}.content--slotted .title{padding-inline:var(--calcite-chip-spacing-unit-l)}:host([closable][icon]) .container:not(.content--slotted) .title{padding-inline:0 var(--calcite-chip-spacing-unit-s)}:host(:not([closable])) .container:not(.content--slotted) .chip-icon{margin-inline:auto}.container:not(.image--slotted) .image-container{display:none}:host([scale=s][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.125rem}:host([scale=m][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.25rem}:host([scale=l][closable]) .container:not(.content--slotted) .image-container{margin-inline-end:0.5rem}:host([scale=s]:not([closable])) .container:not(.content--slotted){block-size:1.5rem;inline-size:1.5rem}:host([scale=s]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:0.125rem}:host([scale=m]:not([closable])) .container:not(.content--slotted){block-size:2rem;inline-size:2rem}:host([scale=m]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:0.25rem}:host([scale=l]:not([closable])) .container:not(.content--slotted){block-size:2.75rem;inline-size:2.75rem}:host([scale=l]:not([closable])) .container:not(.content--slotted) .image-container{padding-inline:calc(0.75rem / 2)}:host([closable]) .content--slotted .title{padding-inline:var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s)}:host([scale=s]) button{inline-size:1rem;block-size:1rem;margin-inline-end:0.125rem}:host([scale=m]) button{inline-size:1.5rem;block-size:1.5rem;margin-inline-end:0.25rem}:host([scale=l]) button{inline-size:2rem;block-size:2rem;margin-inline-end:0.5rem}button{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;padding-inline:var(--calcite-chip-spacing-unit-s);color:inherit;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}button:hover{background-color:var(--calcite-chip-transparent-hover)}button:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}button:active{background-color:var(--calcite-chip-transparent-press)}.image-container{display:inline-flex;overflow:hidden}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0;margin-inline-start:var(--calcite-chip-spacing-unit-l)}:host([kind=neutral]){border-color:transparent;background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([kind=neutral]) button,:host([kind=neutral]) .close-icon{color:var(--calcite-ui-text-3)}:host([kind=neutral]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([kind=inverse]){border-color:transparent;background-color:var(--calcite-ui-inverse);color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) button,:host([kind=inverse]) .close-icon{color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([kind=brand]){border-color:transparent;background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([kind=brand]) button,:host([kind=brand]) .close-icon{color:var(--calcite-ui-text-inverse)}:host([kind=brand]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([appearance=outline-fill]),:host([appearance=outline]){background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}:host([appearance=outline-fill]) button,:host([appearance=outline-fill]) .close-icon,:host([appearance=outline]) button,:host([appearance=outline]) .close-icon{color:var(--calcite-ui-text-3)}:host([appearance=outline-fill]) .chip-icon,:host([appearance=outline]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([appearance=outline-fill]){background-color:var(--calcite-ui-foreground-1)}:host([appearance=outline]){background-color:transparent}:host([kind=neutral][appearance=outline-fill]),:host([kind=neutral][appearance=outline]){border-color:var(--calcite-ui-border-1)}:host([kind=inverse][appearance=outline-fill]),:host([kind=inverse][appearance=outline]){border-color:var(--calcite-ui-border-inverse)}:host([kind=brand][appearance=outline-fill]),:host([kind=brand][appearance=outline]){border-color:var(--calcite-ui-brand)}:host([kind=brand][appearance=solid]) button,:host([kind=inverse][appearance=solid]) button{outline-color:var(--calcite-ui-text-inverse)}:host([closed]){display:none}";

let Chip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteChipClose = index.createEvent(this, "calciteChipClose", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.closeClickHandler = (event) => {
      event.preventDefault();
      this.calciteChipClose.emit();
      this.closed = true;
    };
    this.handleSlotImageChange = (event) => {
      this.hasImage = dom.slotChangeHasAssignedElement(event);
    };
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /** watches for changing text content */
    this.mutationObserver = observers.createObserver("mutation", () => this.updateHasContent());
    this.guid = guid.guid();
    this.appearance = "solid";
    this.kind = "neutral";
    this.closable = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.scale = "m";
    this.value = undefined;
    this.closed = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = undefined;
    this.hasContent = false;
    this.hasImage = false;
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
    this.setupTextContentObserver();
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
  }
  disconnectedCallback() {
    conditionalSlot.disconnectConditionalSlotComponent(this);
    locale.disconnectLocalized(this);
    t9n.disconnectMessages(this);
  }
  async componentWillLoad() {
    loadable.setUpLoadableComponent(this);
    {
      await t9n.setUpMessages(this);
      this.updateHasContent();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** When `closable` is `true`, sets focus on the component's "close" button (the first focusable item). */
  async setFocus() {
    var _a;
    await loadable.componentLoaded(this);
    (_a = this.closeButton) === null || _a === void 0 ? void 0 : _a.focus();
  }
  updateHasContent() {
    var _a, _b;
    const slottedContent = this.el.textContent.trim().length > 0 || this.el.childNodes.length > 0;
    this.hasContent =
      this.el.childNodes.length > 0 && ((_a = this.el.childNodes[0]) === null || _a === void 0 ? void 0 : _a.nodeName) === "#text"
        ? ((_b = this.el.textContent) === null || _b === void 0 ? void 0 : _b.trim().length) > 0
        : slottedContent;
  }
  setupTextContentObserver() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChipImage() {
    return (index.h("div", { class: CSS.imageContainer, key: "image" }, index.h("slot", { name: SLOTS.image, onSlotchange: this.handleSlotImageChange })));
  }
  render() {
    const iconEl = (index.h("calcite-icon", { class: CSS.chipIcon, flipRtl: this.iconFlipRtl, icon: this.icon, scale: this.scale === "l" ? "m" : "s" }));
    const closeButton = (index.h("button", { "aria-describedby": this.guid, "aria-label": this.messages.dismissLabel, class: CSS.close, onClick: this.closeClickHandler,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.closeButton = el) }, index.h("calcite-icon", { class: CSS.closeIcon, icon: ICONS.close, scale: this.scale === "l" ? "m" : "s" })));
    return (index.h("div", { class: {
        [CSS.container]: true,
        [CSS.contentSlotted]: this.hasContent,
        [CSS.imageSlotted]: this.hasImage
      } }, this.renderChipImage(), this.icon ? iconEl : null, index.h("span", { class: CSS.title, id: this.guid }, index.h("slot", null)), this.closable ? closeButton : null));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Chip.style = chipCss;

exports.calcite_chip = Chip;

//# sourceMappingURL=calcite-chip.cjs.entry.js.map