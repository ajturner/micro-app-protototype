import { HTMLElement, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { s as submitForm, c as connectForm, d as disconnectForm, H as HiddenFormInputSlot } from './form.js';
import { g as guid } from './guid.js';
import { u as updateHostInteraction } from './interactive.js';
import { n as numberKeys } from './key.js';
import { c as connectLabel, d as disconnectLabel, g as getLabelText } from './label.js';
import { c as componentLoaded, s as setUpLoadableComponent, a as setComponentLoaded } from './loadable.js';
import { n as numberStringFormatter, c as connectLocalized, d as disconnectLocalized } from './locale.js';
import { l as localizeTimeString, f as formatTimeString, i as isValidTime, d as defineCustomElement$2 } from './time-picker.js';
import { d as defineCustomElement$8 } from './action.js';
import { d as defineCustomElement$7 } from './icon.js';
import { d as defineCustomElement$6 } from './input.js';
import { d as defineCustomElement$5 } from './loader.js';
import { d as defineCustomElement$4 } from './popover.js';
import { d as defineCustomElement$3 } from './progress.js';

const inputTimePickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline-block;-webkit-user-select:none;user-select:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

let InputTimePicker = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInputTimePickerChange = createEvent(this, "calciteInputTimePickerChange", 7);
    /** whether the value of the input was changed as a result of user typing or not */
    this.internalValueChange = false;
    this.previousValidValue = null;
    this.referenceElementId = `input-time-picker-${guid()}`;
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.calciteInternalInputBlurHandler = () => {
      this.open = false;
      const shouldIncludeSeconds = this.shouldIncludeSeconds();
      const { effectiveLocale: locale, numberingSystem, value, calciteInputEl } = this;
      numberStringFormatter.numberFormatOptions = {
        locale,
        numberingSystem,
        useGrouping: false
      };
      const delocalizedValue = numberStringFormatter.delocalize(calciteInputEl.value);
      const localizedInputValue = localizeTimeString({
        value: delocalizedValue,
        includeSeconds: shouldIncludeSeconds,
        locale,
        numberingSystem
      });
      this.setInputValue(localizedInputValue ||
        localizeTimeString({ value, locale, numberingSystem, includeSeconds: shouldIncludeSeconds }));
    };
    this.calciteInternalInputFocusHandler = (event) => {
      if (!this.readOnly) {
        this.open = true;
        event.stopPropagation();
      }
    };
    this.calciteInputInputHandler = (event) => {
      const target = event.target;
      numberStringFormatter.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: false
      };
      const delocalizedValue = numberStringFormatter.delocalize(target.value);
      this.setValue({ value: delocalizedValue });
      // only translate the numerals until blur
      const localizedValue = delocalizedValue
        .split("")
        .map((char) => numberKeys.includes(char)
        ? numberStringFormatter.numberFormatter.format(Number(char))
        : char)
        .join("");
      this.setInputValue(localizedValue);
    };
    this.timePickerChangeHandler = (event) => {
      event.stopPropagation();
      const target = event.target;
      const value = target.value;
      this.setValue({ value, origin: "time-picker" });
    };
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      const { defaultPrevented, key } = event;
      if (defaultPrevented) {
        return;
      }
      if (key === "Enter") {
        if (submitForm(this)) {
          event.preventDefault();
        }
      }
      if (key === "Escape" && this.open) {
        this.open = false;
        event.preventDefault();
      }
    };
    this.setCalcitePopoverEl = (el) => {
      this.popoverEl = el;
    };
    this.setCalciteInputEl = (el) => {
      this.calciteInputEl = el;
    };
    this.setCalciteTimePickerEl = (el) => {
      this.calciteTimePickerEl = el;
    };
    this.setInputValue = (newInputValue) => {
      if (!this.calciteInputEl) {
        return;
      }
      this.calciteInputEl.value = newInputValue;
    };
    this.setValue = ({ value, origin = "input" }) => {
      const previousValue = this.value;
      const newValue = formatTimeString(value);
      const newLocalizedValue = localizeTimeString({
        value: newValue,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        includeSeconds: this.shouldIncludeSeconds()
      });
      this.internalValueChange = origin !== "external" && origin !== "loading";
      const shouldEmit = origin !== "loading" &&
        origin !== "external" &&
        ((value !== this.previousValidValue && !value) ||
          !!(!this.previousValidValue && newValue) ||
          (newValue !== this.previousValidValue && newValue));
      if (value) {
        if (shouldEmit) {
          this.previousValidValue = newValue;
        }
        if (newValue && newValue !== this.value) {
          this.value = newValue;
        }
        this.localizedValue = newLocalizedValue;
      }
      else {
        this.value = value;
        this.localizedValue = null;
      }
      if (origin === "time-picker" || origin === "external") {
        this.setInputValue(newLocalizedValue);
      }
      if (shouldEmit) {
        const changeEvent = this.calciteInputTimePickerChange.emit();
        if (changeEvent.defaultPrevented) {
          this.internalValueChange = false;
          this.value = previousValue;
          this.setInputValue(previousValue);
          this.previousValidValue = previousValue;
        }
        else {
          this.previousValidValue = newValue;
        }
      }
    };
    this.open = false;
    this.disabled = false;
    this.form = undefined;
    this.readOnly = false;
    this.messagesOverrides = undefined;
    this.name = undefined;
    this.numberingSystem = undefined;
    this.required = false;
    this.scale = "m";
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.step = 60;
    this.value = null;
    this.effectiveLocale = "";
    this.localizedValue = undefined;
  }
  openHandler(value) {
    if (this.disabled || this.readOnly) {
      this.open = false;
      return;
    }
    if (value) {
      this.reposition(true);
    }
  }
  handleDisabledAndReadOnlyChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  valueWatcher(newValue) {
    if (!this.internalValueChange) {
      this.setValue({ value: newValue, origin: "external" });
    }
    this.internalValueChange = false;
  }
  effectiveLocaleWatcher() {
    this.setInputValue(localizeTimeString({
      value: this.value,
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      includeSeconds: this.shouldIncludeSeconds()
    }));
  }
  clickHandler(event) {
    if (event.composedPath().includes(this.calciteTimePickerEl)) {
      return;
    }
    this.setFocus();
  }
  timePickerBlurHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    this.open = false;
  }
  timePickerFocusHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.readOnly) {
      this.open = true;
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await componentLoaded(this);
    this.el.focus();
  }
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    var _a;
    (_a = this.popoverEl) === null || _a === void 0 ? void 0 : _a.reposition(delayed);
  }
  onLabelClick() {
    this.setFocus();
  }
  shouldIncludeSeconds() {
    return this.step < 60;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    connectLocalized(this);
    if (this.value) {
      this.setValue({ value: isValidTime(this.value) ? this.value : undefined, origin: "loading" });
    }
    connectLabel(this);
    connectForm(this);
  }
  componentWillLoad() {
    setUpLoadableComponent(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
    this.setInputValue(this.localizedValue);
  }
  disconnectedCallback() {
    disconnectLabel(this);
    disconnectForm(this);
    disconnectLocalized(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const popoverId = `${this.referenceElementId}-popover`;
    return (h(Host, { onKeyDown: this.keyDownHandler }, h("div", { "aria-controls": popoverId, "aria-haspopup": "dialog", "aria-label": this.name, "aria-owns": popoverId, id: this.referenceElementId, role: "combobox" }, h("calcite-input", { disabled: this.disabled, icon: "clock", label: getLabelText(this), onCalciteInputInput: this.calciteInputInputHandler, onCalciteInternalInputBlur: this.calciteInternalInputBlurHandler, onCalciteInternalInputFocus: this.calciteInternalInputFocusHandler, readOnly: this.readOnly, scale: this.scale, step: this.step,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setCalciteInputEl })), h("calcite-popover", { focusTrapDisabled: true, id: popoverId, label: "Time Picker", open: this.open, overlayPositioning: this.overlayPositioning, placement: this.placement, referenceElement: this.referenceElementId, triggerDisabled: true,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setCalcitePopoverEl }, h("calcite-time-picker", { lang: this.effectiveLocale, messageOverrides: this.messagesOverrides, numberingSystem: this.numberingSystem, onCalciteInternalTimePickerChange: this.timePickerChangeHandler, scale: this.scale, step: this.step, value: this.value,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setCalciteTimePickerEl })), h(HiddenFormInputSlot, { component: this })));
  }
  static get delegatesFocus() { return true; }
  get el() { return this; }
  static get watchers() { return {
    "open": ["openHandler"],
    "disabled": ["handleDisabledAndReadOnlyChange"],
    "readOnly": ["handleDisabledAndReadOnlyChange"],
    "value": ["valueWatcher"],
    "effectiveLocale": ["effectiveLocaleWatcher"]
  }; }
  static get style() { return inputTimePickerCss; }
};
InputTimePicker = /*@__PURE__*/ proxyCustomElement(InputTimePicker, [17, "calcite-input-time-picker", {
    "open": [1540],
    "disabled": [516],
    "form": [513],
    "readOnly": [516, "read-only"],
    "messagesOverrides": [16],
    "name": [1],
    "numberingSystem": [1, "numbering-system"],
    "required": [516],
    "scale": [513],
    "overlayPositioning": [1, "overlay-positioning"],
    "placement": [513],
    "step": [2],
    "value": [1025],
    "effectiveLocale": [32],
    "localizedValue": [32],
    "setFocus": [64],
    "reposition": [64]
  }, [[0, "click", "clickHandler"], [0, "calciteInternalTimePickerBlur", "timePickerBlurHandler"], [0, "calciteInternalTimePickerFocus", "timePickerFocusHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-input-time-picker", "calcite-action", "calcite-icon", "calcite-input", "calcite-loader", "calcite-popover", "calcite-progress", "calcite-time-picker"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-input-time-picker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InputTimePicker);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "calcite-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "calcite-time-picker":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CalciteInputTimePicker = InputTimePicker;
const defineCustomElement = defineCustomElement$1;

export { CalciteInputTimePicker, defineCustomElement };

//# sourceMappingURL=calcite-input-time-picker.js.map