import { HTMLElement, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { c as connectForm, d as disconnectForm, H as HiddenFormInputSlot } from './form.js';
import { c as connectLabel, d as disconnectLabel, g as getLabelText } from './label.js';
import { t as toAriaBoolean, s as slotChangeHasAssignedElement } from './dom.js';
import { n as numberStringFormatter, c as connectLocalized, d as disconnectLocalized } from './locale.js';
import { c as createObserver } from './observers.js';
import { c as componentLoaded, s as setUpLoadableComponent, a as setComponentLoaded } from './loadable.js';
import { c as connectMessages, s as setUpMessages, d as disconnectMessages, u as updateMessages } from './t9n.js';
import { u as updateHostInteraction } from './interactive.js';
import { t as throttle } from './throttle.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  characterLimit: "character-limit",
  content: "content",
  container: "container",
  footer: "footer",
  resizeDisabled: "resize--disabled",
  resizeDisabledX: "resize--disabled-x",
  resizeDisabledY: "resize--disabled-y",
  characterOverLimit: "character--over-limit",
  readOnly: "readonly",
  textAreaInvalid: "text-area--invalid",
  footerSlotted: "footer--slotted",
  borderColor: "border--color",
  hide: "hide",
  blockSizeFull: "block-size--full",
  footerEndSlotOnly: "footer--end-only"
};
const SLOTS = {
  footerStart: "footer-start",
  footerEnd: "footer-end"
};
const RESIZE_TIMEOUT = 100;

const textAreaCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:inline-block;block-size:100%;inline-size:100%}textarea{position:relative;margin:0px;box-sizing:border-box;display:block;inline-size:100%;border-width:1px;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);color:var(--calcite-ui-text-1);min-inline-size:12rem;border-block-end:1px solid var(--calcite-ui-border-3)}@media screen and (max-width: 480px){textarea{resize:none}}textarea:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}textarea.text-area--invalid{border-width:1px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-danger)}textarea.text-area--invalid:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}textarea.footer--slotted{min-inline-size:18rem}.footer{box-sizing:border-box;display:flex;align-items:center;border-width:1px;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1)}.character-limit{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}.character--over-limit{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-danger)}:host([resize=none]) textarea{resize:none}:host([resize=horizontal]) textarea{resize:horizontal}:host([resize=vertical]) textarea{resize:vertical}:host([scale=s]){font-size:var(--calcite-font-size--2)}:host([scale=s]) .footer{padding-block:0.25rem;padding-inline:0.5rem;min-block-size:1.75rem}:host([scale=s]) textarea{padding-block:0.25rem;padding-inline:0.5rem}:host([scale=s]) textarea,:host([scale=s]) .footer,:host([scale=s]) .character-limit{padding-inline-start:0.5rem;font-size:var(--calcite-font-size--2)}:host([scale=m]) textarea{padding-block:0.5rem;padding-inline:0.75rem}:host([scale=m]) .footer{padding-block:0.5rem;padding-inline:0.75rem;min-block-size:2.25rem}:host([scale=m]) textarea,:host([scale=m]) .footer,:host([scale=m]) .character-limit{padding-inline-start:0.75rem;font-size:var(--calcite-font-size--1)}:host([scale=l]){font-size:var(--calcite-font-size-0)}:host([scale=l]) textarea{padding-block:0.75rem;padding-inline:1rem}:host([scale=l]) .footer{padding-block:0.75rem;padding-inline:1rem;min-block-size:2.75rem}:host([scale=l]) textarea,:host([scale=l]) .footer,:host([scale=l]) .character-limit{padding-inline-start:1rem;font-size:var(--calcite-font-size-0)}.readonly{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host([disabled]) textarea,:host([disabled]) footer{opacity:0.5}.border--color{border-block-end-width:1px;border-color:var(--calcite-ui-border-input)}.border--color:focus{border-block-end-width:2px}textarea.block-size--full{block-size:100%}.content,.hide{display:none}.container{display:flex;inline-size:100%;justify-content:space-between}.footer--end-only{justify-content:flex-end}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";

let TextArea = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTextAreaInput = createEvent(this, "calciteTextAreaInput", 7);
    this.calciteTextAreaChange = createEvent(this, "calciteTextAreaChange", 7);
    this.handleInput = (event) => {
      this.value = event.target["value"];
      this.calciteTextAreaInput.emit();
    };
    this.handleChange = () => {
      this.calciteTextAreaChange.emit();
    };
    this.contentSlotChangeHandler = () => {
      if (!this.value) {
        const nodes = this.el.childNodes;
        nodes.forEach((el) => {
          if (el.nodeName === "#text") {
            this.value = el.nodeValue.trim();
          }
        });
      }
    };
    this.renderCharacterLimit = () => {
      var _a;
      return this.maxLength ? (h("span", { class: CSS.characterLimit }, h("span", { class: { [CSS.characterOverLimit]: ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) > this.maxLength } }, this.getLocalizedCharacterLength()), "/", numberStringFormatter.localize(this.maxLength.toString()))) : null;
    };
    this.resizeObserver = createObserver("resize", async () => {
      await componentLoaded(this);
      const { textAreaHeight, textAreaWidth, elHeight, elWidth, footerHeight, footerWidth } = this.getHeightandWidthOfElements();
      if (footerWidth > 0 && footerWidth !== textAreaWidth) {
        this.footerEl.style.width = `${textAreaWidth}px`;
      }
      if (elWidth !== textAreaWidth || elHeight !== textAreaHeight + (footerHeight || 0)) {
        this.setHeightAndWidthToAuto();
      }
    });
    // height and width are set to auto here to avoid overlapping on to neighboring elements in the layout when user starts resizing.
    // throttle is used to avoid flashing of textarea when user resizes.
    this.setHeightAndWidthToAuto = throttle(() => {
      if (this.resize === "vertical" || this.resize === "both") {
        this.el.style.height = "auto";
      }
      if (this.resize === "horizontal" || this.resize === "both") {
        this.el.style.width = "auto";
      }
    }, RESIZE_TIMEOUT, { leading: false });
    this.setTextAreaEl = (el) => {
      this.textAreaEl = el;
      this.resizeObserver.observe(el);
    };
    this.autofocus = false;
    this.columns = undefined;
    this.disabled = false;
    this.form = undefined;
    this.groupSeparator = false;
    this.label = undefined;
    this.maxLength = undefined;
    this.messages = undefined;
    this.name = undefined;
    this.numberingSystem = undefined;
    this.placeholder = undefined;
    this.readOnly = false;
    this.required = false;
    this.resize = "both";
    this.rows = undefined;
    this.scale = "m";
    this.value = undefined;
    this.wrap = "soft";
    this.messageOverrides = undefined;
    this.defaultMessages = undefined;
    this.endSlotHasElements = undefined;
    this.startSlotHasElements = undefined;
    this.effectiveLocale = "";
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    connectLabel(this);
    connectForm(this);
    connectLocalized(this);
    connectMessages(this);
  }
  async componentWillLoad() {
    setUpLoadableComponent(this);
    await setUpMessages(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
    this.setTextAreaHeight();
  }
  disconnectedCallback() {
    var _a;
    disconnectLabel(this);
    disconnectForm(this);
    disconnectLocalized(this);
    disconnectMessages(this);
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  render() {
    var _a, _b;
    const hasFooter = this.startSlotHasElements || this.endSlotHasElements || !!this.maxLength;
    return (h(Host, null, h("textarea", { "aria-invalid": toAriaBoolean(((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) > this.maxLength), "aria-label": getLabelText(this), autofocus: this.autofocus, class: {
        [CSS.readOnly]: this.readOnly,
        [CSS.textAreaInvalid]: ((_b = this.value) === null || _b === void 0 ? void 0 : _b.length) > this.maxLength,
        [CSS.footerSlotted]: this.endSlotHasElements && this.startSlotHasElements,
        [CSS.blockSizeFull]: !hasFooter,
        [CSS.borderColor]: !hasFooter
      }, cols: this.columns, disabled: this.disabled, name: this.name, onChange: this.handleChange, onInput: this.handleInput, placeholder: this.placeholder, readonly: this.readOnly, required: this.required, rows: this.rows, value: this.value, wrap: this.wrap,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTextAreaEl }), h("span", { class: { [CSS.content]: true } }, h("slot", { onSlotchange: this.contentSlotChangeHandler })), h("footer", { class: {
        [CSS.footer]: true,
        [CSS.readOnly]: this.readOnly,
        [CSS.hide]: !hasFooter
      }, ref: (el) => (this.footerEl = el) }, h("div", { class: {
        [CSS.container]: true,
        [CSS.footerEndSlotOnly]: !this.startSlotHasElements && this.endSlotHasElements
      } }, h("slot", { name: SLOTS.footerStart, onSlotchange: (event) => (this.startSlotHasElements = slotChangeHasAssignedElement(event)) }), h("slot", { name: SLOTS.footerEnd, onSlotchange: (event) => (this.endSlotHasElements = slotChangeHasAssignedElement(event)) })), this.renderCharacterLimit()), h(HiddenFormInputSlot, { component: this })));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await componentLoaded(this);
    this.textAreaEl.focus();
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    await componentLoaded(this);
    this.textAreaEl.select();
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onFormReset() {
    this.value = this.defaultValue;
  }
  onLabelClick() {
    this.setFocus();
  }
  getLocalizedCharacterLength() {
    numberStringFormatter.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      signDisplay: "never",
      useGrouping: this.groupSeparator
    };
    return numberStringFormatter.localize(this.value ? this.value.length.toString() : "0");
  }
  syncHiddenFormInput(input) {
    var _a;
    input.setCustomValidity("");
    if (((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) > this.maxLength) {
      input.setCustomValidity(this.messages.tooLong);
    }
  }
  setTextAreaHeight() {
    const { textAreaHeight, elHeight, footerHeight } = this.getHeightandWidthOfElements();
    if (footerHeight > 0 && textAreaHeight + footerHeight != elHeight) {
      this.textAreaEl.style.height = `${elHeight - footerHeight}px`;
    }
  }
  getHeightandWidthOfElements() {
    var _a;
    const { height: textAreaHeight, width: textAreaWidth } = this.textAreaEl.getBoundingClientRect();
    const { height: elHeight, width: elWidth } = this.el.getBoundingClientRect();
    const { height: footerHeight, width: footerWidth } = (_a = this.footerEl) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    return {
      textAreaHeight,
      textAreaWidth,
      elHeight,
      elWidth,
      footerHeight,
      footerWidth
    };
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return textAreaCss; }
};
TextArea = /*@__PURE__*/ proxyCustomElement(TextArea, [1, "calcite-text-area", {
    "autofocus": [516],
    "columns": [514],
    "disabled": [516],
    "form": [513],
    "groupSeparator": [516, "group-separator"],
    "label": [1],
    "maxLength": [514, "max-length"],
    "messages": [1040],
    "name": [513],
    "numberingSystem": [1, "numbering-system"],
    "placeholder": [1],
    "readOnly": [516, "read-only"],
    "required": [516],
    "resize": [513],
    "rows": [514],
    "scale": [513],
    "value": [1025],
    "wrap": [513],
    "messageOverrides": [1040],
    "defaultMessages": [32],
    "endSlotHasElements": [32],
    "startSlotHasElements": [32],
    "effectiveLocale": [32],
    "setFocus": [64],
    "selectText": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-text-area"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-text-area":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TextArea);
      }
      break;
  } });
}

const CalciteTextArea = TextArea;
const defineCustomElement = defineCustomElement$1;

export { CalciteTextArea, defineCustomElement };

//# sourceMappingURL=calcite-text-area.js.map