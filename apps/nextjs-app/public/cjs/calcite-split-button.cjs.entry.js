'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const interactive = require('./interactive-aacdfedd.js');
const loadable = require('./loadable-0d54a318.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  container: "split-button__container",
  dividerContainer: "split-button__divider-container",
  divider: "split-button__divider",
  widthAuto: "width-auto",
  widthHalf: "width-half",
  widthFull: "width-full"
};

const splitButtonCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline-block}:host .split-button__container{display:flex;align-items:stretch}:host .split-button__container>calcite-dropdown>calcite-button{block-size:100%;vertical-align:top}:host:host([kind=brand]){--calcite-split-button-background:var(--calcite-ui-brand);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host:host([kind=danger]){--calcite-split-button-background:var(--calcite-ui-danger);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host:host([kind=neutral]){--calcite-split-button-background:var(--calcite-ui-foreground-3);--calcite-split-button-divider:var(--calcite-ui-text-1)}:host:host([kind=inverse]){--calcite-split-button-background:var(--calcite-ui-inverse);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host([appearance=transparent]):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand)}:host([appearance=transparent]):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger)}:host([appearance=transparent]):host([kind=neutral]){--calcite-split-button-divider:var(--calcite-ui-text-1)}:host([appearance=transparent]):host([kind=inverse]){--calcite-split-button-divider:var(--calcite-ui-foreground-1);--calcite-split-button-background:transparent}:host([appearance=outline]),:host([appearance=transparent]){--calcite-split-button-background:transparent}:host([appearance=outline-fill]){--calcite-split-button-background:var(--calcite-ui-foreground-1)}:host([appearance=outline]):host([kind=brand]),:host([appearance=outline-fill]):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand)}:host([appearance=outline]):host([kind=danger]),:host([appearance=outline-fill]):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger)}:host([appearance=outline]):host([kind=neutral]),:host([appearance=outline-fill]):host([kind=neutral]){--calcite-split-button-divider:var(--calcite-ui-foreground-3)}:host([appearance=outline]):host([kind=inverse]),:host([appearance=outline-fill]):host([kind=inverse]){--calcite-split-button-divider:var(--calcite-ui-inverse)}.width-auto{inline-size:auto}.width-half{inline-size:50%}.width-full{inline-size:100%}.split-button__divider-container{display:flex;inline-size:1px;align-items:stretch;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-split-button-background)}.split-button__divider{margin-block:0.25rem;display:inline-block;inline-size:1px;background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]) .split-button__divider-container,:host([appearance=outline]) .split-button__divider-container{border-block:1px solid var(--calcite-split-button-divider)}:host([appearance=outline-fill]):hover .split-button__divider-container,:host([appearance=outline]):hover .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]:hover) .split-button__divider-container,:host([appearance=outline]:hover) .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]:focus-within):host([kind=brand]),:host([appearance=outline]:focus-within):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand-press)}:host([appearance=outline-fill]:focus-within):host([kind=danger]),:host([appearance=outline]:focus-within):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger-press)}:host([appearance=outline-fill]:focus-within) .split-button__divider-container,:host([appearance=outline]:focus-within) .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([disabled]) .split-button__divider-container{opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) calcite-dropdown>calcite-button{pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";

let SplitButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteSplitButtonPrimaryClick = index.createEvent(this, "calciteSplitButtonPrimaryClick", 6);
    this.calciteSplitButtonSecondaryClick = index.createEvent(this, "calciteSplitButtonSecondaryClick", 6);
    this.calciteSplitButtonPrimaryClickHandler = () => this.calciteSplitButtonPrimaryClick.emit();
    this.calciteSplitButtonSecondaryClickHandler = () => this.calciteSplitButtonSecondaryClick.emit();
    this.appearance = "solid";
    this.kind = "brand";
    this.disabled = false;
    this.active = false;
    this.dropdownIconType = "chevron";
    this.dropdownLabel = undefined;
    this.loading = false;
    this.overlayPositioning = "absolute";
    this.primaryIconEnd = undefined;
    this.primaryIconFlipRtl = undefined;
    this.primaryIconStart = undefined;
    this.primaryLabel = undefined;
    this.primaryText = undefined;
    this.scale = "m";
    this.width = "auto";
  }
  handleDisabledChange(value) {
    if (!value) {
      this.active = false;
    }
  }
  activeHandler() {
    if (this.disabled) {
      this.active = false;
    }
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
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    loadable.setUpLoadableComponent(this);
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
  }
  componentDidRender() {
    interactive.updateHostInteraction(this);
  }
  render() {
    const widthClasses = {
      [CSS.container]: true,
      [CSS.widthAuto]: this.width === "auto",
      [CSS.widthHalf]: this.width === "half",
      [CSS.widthFull]: this.width === "full"
    };
    const buttonWidth = this.width === "auto" ? "auto" : "full";
    return (index.h("div", { class: widthClasses }, index.h("calcite-button", { appearance: this.appearance, disabled: this.disabled, "icon-end": this.primaryIconEnd ? this.primaryIconEnd : null, "icon-start": this.primaryIconStart ? this.primaryIconStart : null, iconFlipRtl: this.primaryIconFlipRtl ? this.primaryIconFlipRtl : null, kind: this.kind, label: this.primaryLabel, loading: this.loading, onClick: this.calciteSplitButtonPrimaryClickHandler, scale: this.scale, splitChild: "primary", type: "button", width: buttonWidth }, this.primaryText), index.h("div", { class: CSS.dividerContainer }, index.h("div", { class: CSS.divider })), index.h("calcite-dropdown", { disabled: this.disabled, onClick: this.calciteSplitButtonSecondaryClickHandler, open: this.active, overlayPositioning: this.overlayPositioning, placement: "bottom-end", scale: this.scale, width: this.scale }, index.h("calcite-button", { appearance: this.appearance, disabled: this.disabled, "icon-start": this.dropdownIcon, kind: this.kind, label: this.dropdownLabel, scale: this.scale, slot: "trigger", splitChild: "secondary", type: "button" }), index.h("slot", null))));
  }
  get dropdownIcon() {
    return this.dropdownIconType === "chevron"
      ? "chevronDown"
      : this.dropdownIconType === "caret"
        ? "caretDown"
        : this.dropdownIconType === "ellipsis"
          ? "ellipsis"
          : "handle-vertical";
  }
  static get delegatesFocus() { return true; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["handleDisabledChange"],
    "active": ["activeHandler"]
  }; }
};
SplitButton.style = splitButtonCss;

exports.calcite_split_button = SplitButton;

//# sourceMappingURL=calcite-split-button.cjs.entry.js.map