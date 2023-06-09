import { HTMLElement, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { c as createObserver } from './observers.js';

const radioButtonGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:flex;max-inline-size:100vw}:host([layout=horizontal]){flex-direction:row;flex-wrap:wrap}:host([layout=horizontal][scale=s]){gap:1rem}:host([layout=horizontal][scale=m]){gap:1.25rem}:host([layout=horizontal][scale=l]){gap:1.5rem}:host([layout=vertical]){flex-direction:column}";

let RadioButtonGroup = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteRadioButtonGroupChange = createEvent(this, "calciteRadioButtonGroupChange", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.mutationObserver = createObserver("mutation", () => this.passPropsToRadioButtons());
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.passPropsToRadioButtons = () => {
      const radioButtons = this.el.querySelectorAll("calcite-radio-button");
      this.selectedItem = Array.from(radioButtons).find((radioButton) => radioButton.checked) || null;
      if (radioButtons.length > 0) {
        radioButtons.forEach((radioButton) => {
          radioButton.disabled = this.disabled || radioButton.disabled;
          radioButton.hidden = this.hidden;
          radioButton.name = this.name;
          radioButton.required = this.required;
          radioButton.scale = this.scale;
        });
      }
    };
    this.disabled = false;
    this.hidden = false;
    this.layout = "horizontal";
    this.name = undefined;
    this.required = false;
    this.selectedItem = null;
    this.scale = "m";
  }
  onDisabledChange() {
    this.passPropsToRadioButtons();
  }
  onHiddenChange() {
    this.passPropsToRadioButtons();
  }
  onLayoutChange() {
    this.passPropsToRadioButtons();
  }
  onScaleChange() {
    this.passPropsToRadioButtons();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    this.passPropsToRadioButtons();
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  radioButtonChangeHandler(event) {
    this.selectedItem = event.target;
    this.calciteRadioButtonGroupChange.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (h(Host, { role: "radiogroup" }, h("slot", null)));
  }
  static get delegatesFocus() { return true; }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["onDisabledChange"],
    "hidden": ["onHiddenChange"],
    "layout": ["onLayoutChange"],
    "scale": ["onScaleChange"]
  }; }
  static get style() { return radioButtonGroupCss; }
};
RadioButtonGroup = /*@__PURE__*/ proxyCustomElement(RadioButtonGroup, [17, "calcite-radio-button-group", {
    "disabled": [516],
    "hidden": [516],
    "layout": [513],
    "name": [513],
    "required": [516],
    "selectedItem": [1040],
    "scale": [513]
  }, [[0, "calciteRadioButtonChange", "radioButtonChangeHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-radio-button-group"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-radio-button-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RadioButtonGroup);
      }
      break;
  } });
}

const CalciteRadioButtonGroup = RadioButtonGroup;
const defineCustomElement = defineCustomElement$1;

export { CalciteRadioButtonGroup, defineCustomElement };

//# sourceMappingURL=calcite-radio-button-group.js.map