'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const conditionalSlot = require('./conditionalSlot-1fd35835.js');
const dom = require('./dom-5643dc8d.js');
const guid = require('./guid-504c591e.js');
const interactive = require('./interactive-aacdfedd.js');
const utils = require('./utils-184672b3.js');
require('./observers-6da0c0fa.js');
require('./resources-0be54a9c.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  icon: "icon",
  iconActive: "icon--active",
  iconIndent: "icon--indent",
  custom: "icon--custom",
  dot: "icon--dot",
  single: "label--single",
  label: "label",
  active: "label--active",
  selected: "label--selected",
  title: "title",
  textContainer: "text-container"
};

const comboboxItemCss = "@charset \"UTF-8\";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.label--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.label:hover,.label:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-block-start:-1px;padding-inline-start:var(--calcite-combobox-item-spacing-unit-l);color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot:before{text-align:start;content:\"•\"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}";

let ComboboxItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteComboboxItemChange = index.createEvent(this, "calciteComboboxItemChange", 6);
    /** Specifies the scale of the combobox-item controlled by parent, defaults to m */
    this.scale = "m";
    this.itemClickHandler = (event) => {
      event.preventDefault();
      this.toggleSelected();
    };
    this.disabled = false;
    this.selected = false;
    this.active = false;
    this.ancestors = undefined;
    this.guid = guid.guid();
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.textLabel = undefined;
    this.value = undefined;
    this.filterDisabled = undefined;
  }
  selectedWatchHandler() {
    this.calciteComboboxItemChange.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.ancestors = utils.getAncestors(this.el);
    this.scale = dom.getElementProp(this.el, "scale", this.scale);
    conditionalSlot.connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    conditionalSlot.disconnectConditionalSlotComponent(this);
  }
  componentDidRender() {
    interactive.updateHostInteraction(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  toggleSelected(coerce) {
    if (this.disabled) {
      return;
    }
    this.selected = typeof coerce === "boolean" ? coerce : !this.selected;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderIcon(iconPath) {
    return this.icon ? (index.h("calcite-icon", { class: {
        [CSS.custom]: !!this.icon,
        [CSS.iconActive]: this.icon && this.selected,
        [CSS.iconIndent]: true
      }, flipRtl: this.iconFlipRtl, icon: this.icon || iconPath, key: "icon", scale: this.scale === "l" ? "m" : "s" })) : null;
  }
  renderSelectIndicator(showDot, iconPath) {
    return showDot ? (index.h("span", { class: {
        [CSS.icon]: true,
        [CSS.dot]: true,
        [CSS.iconIndent]: true
      } })) : (index.h("calcite-icon", { class: {
        [CSS.icon]: true,
        [CSS.iconActive]: this.selected,
        [CSS.iconIndent]: true
      }, flipRtl: this.iconFlipRtl, icon: iconPath, key: "indicator", scale: this.scale === "l" ? "m" : "s" }));
  }
  renderChildren() {
    if (dom.getSlotted(this.el)) {
      return (index.h("ul", { key: "default-slot-container" }, index.h("slot", null)));
    }
    return null;
  }
  render() {
    const isSingleSelect = dom.getElementProp(this.el, "selection-mode", "multiple") === "single";
    const showDot = isSingleSelect && !this.disabled;
    const defaultIcon = isSingleSelect ? "dot" : "check";
    const iconPath = this.disabled ? "circle-disallowed" : defaultIcon;
    const classes = {
      [CSS.label]: true,
      [CSS.selected]: this.selected,
      [CSS.active]: this.active,
      [CSS.single]: isSingleSelect
    };
    const depth = utils.getDepth(this.el);
    return (index.h(index.Host, { "aria-hidden": "true" }, index.h("div", { class: `container scale--${this.scale}`, style: { "--calcite-combobox-item-spacing-indent-multiplier": `${depth}` } }, index.h("li", { class: classes, id: this.guid, onClick: this.itemClickHandler }, this.renderSelectIndicator(showDot, iconPath), this.renderIcon(iconPath), index.h("span", { class: "title" }, this.textLabel)), this.renderChildren())));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "selected": ["selectedWatchHandler"]
  }; }
};
ComboboxItem.style = comboboxItemCss;

exports.calcite_combobox_item = ComboboxItem;

//# sourceMappingURL=calcite-combobox-item.cjs.entry.js.map