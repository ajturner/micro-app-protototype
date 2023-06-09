'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const dom = require('./dom-5643dc8d.js');
const form = require('./form-8a432189.js');
const interactive = require('./interactive-aacdfedd.js');
const key = require('./key-75cf5e40.js');
const label = require('./label-30c64fdd.js');
const loadable = require('./loadable-0d54a318.js');
const locale = require('./locale-dbbec1a1.js');
const observers = require('./observers-6da0c0fa.js');
const resources = require('./resources-0be54a9c.js');
const t9n = require('./t9n-30d5587d.js');
require('./guid-504c591e.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  loader: "loader",
  clearButton: "clear-button",
  editingEnabled: "editing-enabled",
  inlineChild: "inline-child",
  inputIcon: "icon",
  prefix: "prefix",
  suffix: "suffix",
  numberButtonWrapper: "number-button-wrapper",
  buttonItemHorizontal: "number-button-item--horizontal",
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  resizeIconWrapper: "resize-icon-wrapper",
  numberButtonItem: "number-button-item"
};
const SLOTS = {
  action: "action"
};

const inputNumberCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}:host input{outline-color:transparent}:host input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:1;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}:host .inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .inline-child .editing-enabled{background-color:inherit}:host .inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

let InputNumber = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteInternalInputNumberFocus = index.createEvent(this, "calciteInternalInputNumberFocus", 6);
    this.calciteInternalInputNumberBlur = index.createEvent(this, "calciteInternalInputNumberBlur", 6);
    this.calciteInputNumberInput = index.createEvent(this, "calciteInputNumberInput", 7);
    this.calciteInputNumberChange = index.createEvent(this, "calciteInputNumberChange", 6);
    this.previousValueOrigin = "initial";
    this.mutationObserver = observers.createObserver("mutation", () => this.setDisabledAction());
    this.userChangedValue = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      if (this.readOnly || this.disabled) {
        return;
      }
      if (this.isClearable && event.key === "Escape") {
        this.clearInputValue(event);
        event.preventDefault();
      }
      if (event.key === "Enter" && !event.defaultPrevented) {
        if (form.submitForm(this)) {
          event.preventDefault();
        }
      }
    };
    this.clearInputValue = (nativeEvent) => {
      this.setNumberValue({
        committing: true,
        nativeEvent,
        origin: "user",
        value: ""
      });
    };
    this.emitChangeIfUserModified = () => {
      if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedNumberValue) {
        this.calciteInputNumberChange.emit();
        this.setPreviousEmittedNumberValue(this.value);
      }
    };
    this.inputNumberBlurHandler = () => {
      this.calciteInternalInputNumberBlur.emit();
      this.emitChangeIfUserModified();
    };
    this.clickHandler = (event) => {
      const slottedActionEl = dom.getSlotted(this.el, "action");
      if (event.target !== slottedActionEl) {
        this.setFocus();
      }
    };
    this.inputNumberFocusHandler = () => {
      this.calciteInternalInputNumberFocus.emit();
    };
    this.inputNumberInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      const value = nativeEvent.target.value;
      locale.numberStringFormatter.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      const delocalizedValue = locale.numberStringFormatter.delocalize(value);
      if (nativeEvent.inputType === "insertFromPaste") {
        if (!locale.isValidNumber(delocalizedValue)) {
          nativeEvent.preventDefault();
        }
        this.setNumberValue({
          nativeEvent,
          origin: "user",
          value: locale.parseNumberString(delocalizedValue)
        });
        this.childNumberEl.value = this.localizedValue;
      }
      else {
        this.setNumberValue({
          nativeEvent,
          origin: "user",
          value: delocalizedValue
        });
      }
    };
    this.inputNumberKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "ArrowUp") {
        /* prevent default behavior of moving cursor to the beginning of the input when holding down ArrowUp */
        event.preventDefault();
        this.nudgeNumberValue("up", event);
        return;
      }
      if (event.key === "ArrowDown") {
        this.nudgeNumberValue("down", event);
        return;
      }
      const supportedKeys = [
        ...key.numberKeys,
        "ArrowLeft",
        "ArrowRight",
        "Backspace",
        "Delete",
        "Enter",
        "Escape",
        "Tab"
      ];
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }
      const isShiftTabEvent = event.shiftKey && event.key === "Tab";
      if (supportedKeys.includes(event.key) && (!event.shiftKey || isShiftTabEvent)) {
        if (event.key === "Enter") {
          this.emitChangeIfUserModified();
        }
        return;
      }
      locale.numberStringFormatter.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      if (event.key === locale.numberStringFormatter.decimal) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.indexOf(locale.numberStringFormatter.decimal) === -1) {
          return;
        }
      }
      if (/[eE]/.test(event.key)) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && !/[eE]/.test(this.childNumberEl.value)) {
          return;
        }
      }
      if (event.key === "-") {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.split("-").length <= 2) {
          return;
        }
      }
      event.preventDefault();
    };
    this.nudgeNumberValue = (direction, nativeEvent) => {
      if (nativeEvent instanceof KeyboardEvent && nativeEvent.repeat) {
        return;
      }
      const inputMax = this.maxString ? parseFloat(this.maxString) : null;
      const inputMin = this.minString ? parseFloat(this.minString) : null;
      const valueNudgeDelayInMs = 150;
      this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      if (this.nudgeNumberValueIntervalId) {
        window.clearInterval(this.nudgeNumberValueIntervalId);
      }
      let firstValueNudge = true;
      this.nudgeNumberValueIntervalId = window.setInterval(() => {
        if (firstValueNudge) {
          firstValueNudge = false;
          return;
        }
        this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      }, valueNudgeDelayInMs);
    };
    this.nudgeButtonPointerUpAndOutHandler = (event) => {
      if (!dom.isPrimaryPointerButton(event)) {
        return;
      }
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.nudgeButtonPointerDownHandler = (event) => {
      if (!dom.isPrimaryPointerButton(event)) {
        return;
      }
      event.preventDefault();
      const direction = event.target.dataset.adjustment;
      if (!this.disabled) {
        this.nudgeNumberValue(direction, event);
      }
    };
    this.hiddenInputChangeHandler = (event) => {
      if (event.target.name === this.name) {
        this.setNumberValue({
          value: event.target.value,
          origin: "direct"
        });
      }
      event.stopPropagation();
    };
    this.setChildNumberElRef = (el) => {
      this.childNumberEl = el;
    };
    this.setInputNumberValue = (newInputValue) => {
      if (!this.childNumberEl) {
        return;
      }
      this.childNumberEl.value = newInputValue;
    };
    this.setPreviousEmittedNumberValue = (value) => {
      this.previousEmittedNumberValue = this.normalizeValue(value);
    };
    this.setPreviousNumberValue = (value) => {
      this.previousValue = this.normalizeValue(value);
    };
    this.setNumberValue = ({ committing = false, nativeEvent, origin, previousValue, value }) => {
      locale.numberStringFormatter.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      const sanitizedValue = locale.sanitizeNumberString(
      // no need to delocalize a string that ia already in latn numerals
      (this.numberingSystem && this.numberingSystem !== "latn") || locale.defaultNumberingSystem !== "latn"
        ? locale.numberStringFormatter.delocalize(value)
        : value);
      const newValue = value && !sanitizedValue
        ? locale.isValidNumber(this.previousValue)
          ? this.previousValue
          : ""
        : sanitizedValue;
      const newLocalizedValue = locale.numberStringFormatter.localize(newValue);
      this.localizedValue = newLocalizedValue;
      this.setPreviousNumberValue(previousValue !== null && previousValue !== void 0 ? previousValue : this.value);
      this.previousValueOrigin = origin;
      this.userChangedValue = origin === "user" && this.value !== newValue;
      // don't sanitize the start of negative/decimal numbers, but
      // don't set value to an invalid number
      this.value = ["-", "."].includes(newValue) ? "" : newValue;
      if (origin === "direct") {
        this.setInputNumberValue(newLocalizedValue);
        this.setPreviousEmittedNumberValue(newLocalizedValue);
      }
      if (nativeEvent) {
        const calciteInputNumberInputEvent = this.calciteInputNumberInput.emit();
        if (calciteInputNumberInputEvent.defaultPrevented) {
          this.value = this.previousValue;
          this.localizedValue = locale.numberStringFormatter.localize(this.previousValue);
        }
        else if (committing) {
          this.emitChangeIfUserModified();
        }
      }
    };
    this.inputNumberKeyUpHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.alignment = "start";
    this.autofocus = false;
    this.clearable = false;
    this.disabled = false;
    this.form = undefined;
    this.groupSeparator = false;
    this.hidden = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.loading = false;
    this.numberingSystem = undefined;
    this.localeFormat = false;
    this.max = undefined;
    this.min = undefined;
    this.maxLength = undefined;
    this.minLength = undefined;
    this.name = undefined;
    this.numberButtonType = "vertical";
    this.placeholder = undefined;
    this.prefixText = undefined;
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.step = undefined;
    this.autocomplete = undefined;
    this.inputMode = "decimal";
    this.enterKeyHint = undefined;
    this.suffixText = undefined;
    this.editingEnabled = false;
    this.value = "";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
    this.localizedValue = undefined;
    this.slottedActionElDisabledInternally = false;
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  /** watcher to update number-to-string for max */
  maxWatcher() {
    var _a;
    this.maxString = ((_a = this.max) === null || _a === void 0 ? void 0 : _a.toString()) || null;
  }
  /** watcher to update number-to-string for min */
  minWatcher() {
    var _a;
    this.minString = ((_a = this.min) === null || _a === void 0 ? void 0 : _a.toString()) || null;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  valueWatcher(newValue, previousValue) {
    if (!this.userChangedValue) {
      this.setNumberValue({
        origin: "direct",
        previousValue,
        value: newValue == null || newValue == ""
          ? ""
          : locale.isValidNumber(newValue)
            ? newValue
            : this.previousValue || ""
      });
      this.warnAboutInvalidNumberValue(newValue);
    }
    this.userChangedValue = false;
  }
  updateRequestedIcon() {
    this.requestedIcon = dom.setRequestedIcon({}, this.icon, "number");
  }
  get isClearable() {
    return this.clearable && this.value.length > 0;
  }
  effectiveLocaleWatcher(locale$1) {
    t9n.updateMessages(this, this.effectiveLocale);
    locale.numberStringFormatter.numberFormatOptions = {
      locale: locale$1,
      numberingSystem: this.numberingSystem,
      useGrouping: false
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    locale.connectLocalized(this);
    t9n.connectMessages(this);
    this.scale = dom.getElementProp(this.el, "scale", this.scale);
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    label.connectLabel(this);
    form.connectForm(this);
    this.setPreviousEmittedNumberValue(this.value);
    this.setPreviousNumberValue(this.value);
    this.warnAboutInvalidNumberValue(this.value);
    this.setNumberValue({
      origin: "connected",
      value: locale.isValidNumber(this.value) ? this.value : ""
    });
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true });
    this.setDisabledAction();
    this.el.addEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
  }
  disconnectedCallback() {
    var _a;
    label.disconnectLabel(this);
    form.disconnectForm(this);
    locale.disconnectLocalized(this);
    t9n.disconnectMessages(this);
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.el.removeEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  async componentWillLoad() {
    var _a, _b;
    loadable.setUpLoadableComponent(this);
    this.maxString = (_a = this.max) === null || _a === void 0 ? void 0 : _a.toString();
    this.minString = (_b = this.min) === null || _b === void 0 ? void 0 : _b.toString();
    this.requestedIcon = dom.setRequestedIcon({}, this.icon, "number");
    await t9n.setUpMessages(this);
  }
  componentShouldUpdate(newValue, oldValue, property) {
    if (property === "value" && newValue && !locale.isValidNumber(newValue)) {
      this.setNumberValue({
        origin: "reset",
        value: oldValue
      });
      return false;
    }
    return true;
  }
  componentDidRender() {
    interactive.updateHostInteraction(this);
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
    (_a = this.childNumberEl) === null || _a === void 0 ? void 0 : _a.focus();
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    var _a;
    (_a = this.childNumberEl) === null || _a === void 0 ? void 0 : _a.select();
  }
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent) {
    const { value } = this;
    const adjustment = direction === "up" ? 1 : -1;
    const inputStep = this.step === "any" ? 1 : Math.abs(this.step || 1);
    const inputVal = new locale.BigDecimal(value !== "" ? value : "0");
    const nudgedValue = inputVal.add(`${inputStep * adjustment}`);
    const nudgedValueBelowInputMin = () => typeof inputMin === "number" &&
      !isNaN(inputMin) &&
      nudgedValue.subtract(`${inputMin}`).isNegative;
    const nudgedValueAboveInputMax = () => typeof inputMax === "number" &&
      !isNaN(inputMax) &&
      !nudgedValue.subtract(`${inputMax}`).isNegative;
    const finalValue = nudgedValueBelowInputMin()
      ? `${inputMin}`
      : nudgedValueAboveInputMax()
        ? `${inputMax}`
        : nudgedValue.toString();
    this.setNumberValue({
      committing: true,
      nativeEvent,
      origin: "user",
      value: finalValue
    });
  }
  onFormReset() {
    this.setNumberValue({
      origin: "reset",
      value: this.defaultValue
    });
  }
  syncHiddenFormInput(input) {
    var _a, _b, _c, _d;
    input.type = "number";
    input.min = (_b = (_a = this.min) === null || _a === void 0 ? void 0 : _a.toString(10)) !== null && _b !== void 0 ? _b : "";
    input.max = (_d = (_c = this.max) === null || _c === void 0 ? void 0 : _c.toString(10)) !== null && _d !== void 0 ? _d : "";
  }
  setDisabledAction() {
    const slottedActionEl = dom.getSlotted(this.el, "action");
    if (!slottedActionEl) {
      return;
    }
    if (this.disabled) {
      if (slottedActionEl.getAttribute("disabled") == null) {
        this.slottedActionElDisabledInternally = true;
      }
      slottedActionEl.setAttribute("disabled", "");
    }
    else if (this.slottedActionElDisabledInternally) {
      slottedActionEl.removeAttribute("disabled");
      this.slottedActionElDisabledInternally = false;
    }
  }
  normalizeValue(value) {
    return locale.isValidNumber(value) ? value : "";
  }
  warnAboutInvalidNumberValue(value) {
    if (value && !locale.isValidNumber(value)) {
      console.warn(`The specified value "${value}" cannot be parsed, or is out of range.`);
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = dom.getElementDir(this.el);
    const loader = (index.h("div", { class: CSS.loader }, index.h("calcite-progress", { label: this.messages.loading, type: "indeterminate" })));
    const inputClearButton = (index.h("button", { "aria-label": this.messages.clear, class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: -1, type: "button" }, index.h("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })));
    const iconEl = (index.h("calcite-icon", { class: CSS.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: this.scale === "l" ? "m" : "s" }));
    const isHorizontalNumberButton = this.numberButtonType === "horizontal";
    const numberButtonsHorizontalUp = (index.h("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onPointerDown: this.nudgeButtonPointerDownHandler, onPointerOut: this.nudgeButtonPointerUpAndOutHandler, onPointerUp: this.nudgeButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, index.h("calcite-icon", { icon: "chevron-up", scale: this.scale === "l" ? "m" : "s" })));
    const numberButtonsHorizontalDown = (index.h("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onPointerDown: this.nudgeButtonPointerDownHandler, onPointerOut: this.nudgeButtonPointerUpAndOutHandler, onPointerUp: this.nudgeButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, index.h("calcite-icon", { icon: "chevron-down", scale: this.scale === "l" ? "m" : "s" })));
    const numberButtonsVertical = (index.h("div", { class: CSS.numberButtonWrapper }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
    const prefixText = index.h("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = index.h("div", { class: CSS.suffix }, this.suffixText);
    const childEl = (index.h("input", { "aria-label": label.getLabelText(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, name: undefined, onBlur: this.inputNumberBlurHandler, onFocus: this.inputNumberFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputNumberKeyUpHandler, placeholder: this.placeholder || "", readOnly: this.readOnly, type: "text", value: this.localizedValue,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setChildNumberElRef }));
    return (index.h(index.Host, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, index.h("div", { class: { [CSS.inputWrapper]: true, [resources.CSS_UTILITY.rtl]: dir === "rtl" } }, this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalDown
      : null, this.prefixText ? prefixText : null, index.h("div", { class: CSS.wrapper }, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), index.h("div", { class: CSS.actionWrapper }, index.h("slot", { name: SLOTS.action })), this.numberButtonType === "vertical" && !this.readOnly ? numberButtonsVertical : null, this.suffixText ? suffixText : null, this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalUp
      : null, index.h(form.HiddenFormInputSlot, { component: this }))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "max": ["maxWatcher"],
    "min": ["minWatcher"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["valueWatcher"],
    "icon": ["updateRequestedIcon"],
    "effectiveLocale": ["effectiveLocaleWatcher"]
  }; }
};
InputNumber.style = inputNumberCss;

exports.calcite_input_number = InputNumber;

//# sourceMappingURL=calcite-input-number.cjs.entry.js.map