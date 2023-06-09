'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const dom = require('./dom-5643dc8d.js');
const form = require('./form-8a432189.js');
const interactive = require('./interactive-aacdfedd.js');
const label = require('./label-30c64fdd.js');
const loadable = require('./loadable-0d54a318.js');
const locale = require('./locale-dbbec1a1.js');
const observers = require('./observers-6da0c0fa.js');
const resources = require('./resources-0be54a9c.js');
const t9n = require('./t9n-30d5587d.js');
require('./guid-504c591e.js');
require('./key-75cf5e40.js');

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
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  resizeIconWrapper: "resize-icon-wrapper"
};
const SLOTS = {
  action: "action"
};

const inputTextCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}:host input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:1;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.inline-child .editing-enabled{background-color:inherit}.inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

let InputText = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteInternalInputTextFocus = index.createEvent(this, "calciteInternalInputTextFocus", 7);
    this.calciteInternalInputTextBlur = index.createEvent(this, "calciteInternalInputTextBlur", 7);
    this.calciteInputTextInput = index.createEvent(this, "calciteInputTextInput", 7);
    this.calciteInputTextChange = index.createEvent(this, "calciteInputTextChange", 7);
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
        this.clearInputTextValue(event);
        event.preventDefault();
      }
      if (event.key === "Enter" && !event.defaultPrevented) {
        if (form.submitForm(this)) {
          event.preventDefault();
        }
      }
    };
    this.clearInputTextValue = (nativeEvent) => {
      this.setValue({
        committing: true,
        nativeEvent,
        origin: "user",
        value: ""
      });
    };
    this.emitChangeIfUserModified = () => {
      if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue) {
        this.calciteInputTextChange.emit();
        this.setPreviousEmittedValue(this.value);
      }
    };
    this.inputTextBlurHandler = () => {
      this.calciteInternalInputTextBlur.emit({
        element: this.childEl,
        value: this.value
      });
      this.emitChangeIfUserModified();
    };
    this.clickHandler = (event) => {
      const slottedActionEl = dom.getSlotted(this.el, "action");
      if (event.target !== slottedActionEl) {
        this.setFocus();
      }
    };
    this.inputTextFocusHandler = () => {
      this.calciteInternalInputTextFocus.emit({
        element: this.childEl,
        value: this.value
      });
    };
    this.inputTextInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      this.setValue({
        nativeEvent,
        origin: "user",
        value: nativeEvent.target.value
      });
    };
    this.inputTextKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "Enter") {
        this.emitChangeIfUserModified();
      }
    };
    this.hiddenInputChangeHandler = (event) => {
      if (event.target.name === this.name) {
        this.setValue({
          value: event.target.value,
          origin: "direct"
        });
      }
      event.stopPropagation();
    };
    this.setChildElRef = (el) => {
      this.childEl = el;
    };
    this.setInputValue = (newInputValue) => {
      if (!this.childEl) {
        return;
      }
      this.childEl.value = newInputValue;
    };
    this.setPreviousEmittedValue = (value) => {
      this.previousEmittedValue = value;
    };
    this.setPreviousValue = (value) => {
      this.previousValue = value;
    };
    this.setValue = ({ committing = false, nativeEvent, origin, previousValue, value }) => {
      this.setPreviousValue(previousValue !== null && previousValue !== void 0 ? previousValue : this.value);
      this.previousValueOrigin = origin;
      this.userChangedValue = origin === "user" && value !== this.value;
      this.value = value;
      if (origin === "direct") {
        this.setInputValue(value);
        this.setPreviousEmittedValue(value);
      }
      if (nativeEvent) {
        const calciteInputTextInputEvent = this.calciteInputTextInput.emit();
        if (calciteInputTextInputEvent.defaultPrevented) {
          this.value = this.previousValue;
        }
        else if (committing) {
          this.emitChangeIfUserModified();
        }
      }
    };
    this.alignment = "start";
    this.autofocus = false;
    this.clearable = false;
    this.disabled = false;
    this.form = undefined;
    this.hidden = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.loading = false;
    this.maxLength = undefined;
    this.minLength = undefined;
    this.name = undefined;
    this.placeholder = undefined;
    this.prefixText = undefined;
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.autocomplete = undefined;
    this.inputMode = "text";
    this.enterKeyHint = undefined;
    this.pattern = undefined;
    this.suffixText = undefined;
    this.editingEnabled = false;
    this.value = "";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
    this.slottedActionElDisabledInternally = false;
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  valueWatcher(newValue, previousValue) {
    if (!this.userChangedValue) {
      this.setValue({
        origin: "direct",
        previousValue,
        value: !newValue ? "" : newValue
      });
    }
    this.userChangedValue = false;
  }
  updateRequestedIcon() {
    this.requestedIcon = dom.setRequestedIcon({}, this.icon, "text");
  }
  get isClearable() {
    return this.clearable && this.value.length > 0;
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
    var _a;
    locale.connectLocalized(this);
    t9n.connectMessages(this);
    this.scale = dom.getElementProp(this.el, "scale", this.scale);
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    this.setPreviousEmittedValue(this.value);
    this.setPreviousValue(this.value);
    label.connectLabel(this);
    form.connectForm(this);
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true });
    this.setDisabledAction();
    this.el.addEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
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
    loadable.setUpLoadableComponent(this);
    this.requestedIcon = dom.setRequestedIcon({}, this.icon, "text");
    await t9n.setUpMessages(this);
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
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
    (_a = this.childEl) === null || _a === void 0 ? void 0 : _a.focus();
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    var _a;
    (_a = this.childEl) === null || _a === void 0 ? void 0 : _a.select();
  }
  onLabelClick() {
    this.setFocus();
  }
  onFormReset() {
    this.setValue({
      origin: "reset",
      value: this.defaultValue
    });
  }
  syncHiddenFormInput(input) {
    if (this.minLength != null) {
      input.minLength = this.minLength;
    }
    if (this.maxLength != null) {
      input.maxLength = this.maxLength;
    }
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
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = dom.getElementDir(this.el);
    const loader = (index.h("div", { class: CSS.loader }, index.h("calcite-progress", { label: this.messages.loading, type: "indeterminate" })));
    const inputClearButton = (index.h("button", { "aria-label": this.messages.clear, class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputTextValue, tabIndex: -1, type: "button" }, index.h("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })));
    const iconEl = (index.h("calcite-icon", { class: CSS.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: this.scale === "l" ? "m" : "s" }));
    const prefixText = index.h("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = index.h("div", { class: CSS.suffix }, this.suffixText);
    const childEl = (index.h("input", { "aria-label": label.getLabelText(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, class: {
        [CSS.editingEnabled]: this.editingEnabled,
        [CSS.inlineChild]: !!this.inlineEditableEl
      }, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, maxLength: this.maxLength, minLength: this.minLength, name: this.name, onBlur: this.inputTextBlurHandler, onFocus: this.inputTextFocusHandler, onInput: this.inputTextInputHandler, onKeyDown: this.inputTextKeyDownHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, required: this.required ? true : null, tabIndex: this.disabled || (this.inlineEditableEl && !this.editingEnabled) ? -1 : null, type: "text", value: this.value,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setChildElRef }));
    return (index.h(index.Host, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, index.h("div", { class: { [CSS.inputWrapper]: true, [resources.CSS_UTILITY.rtl]: dir === "rtl" } }, this.prefixText ? prefixText : null, index.h("div", { class: CSS.wrapper }, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), index.h("div", { class: CSS.actionWrapper }, index.h("slot", { name: SLOTS.action })), this.suffixText ? suffixText : null, index.h(form.HiddenFormInputSlot, { component: this }))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["valueWatcher"],
    "icon": ["updateRequestedIcon"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
InputText.style = inputTextCss;

exports.calcite_input_text = InputText;

//# sourceMappingURL=calcite-input-text.cjs.entry.js.map