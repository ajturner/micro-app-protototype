import { r as registerInstance, c as createEvent, h, F as Fragment, g as getElement } from './index-9b24d2d4.js';
import { f as filter } from './filter-1d33c16e.js';
import { u as updateHostInteraction } from './interactive-5738af71.js';
import { a as setUpLoadableComponent, s as setComponentLoaded, c as componentLoaded } from './loadable-eeabeb84.js';
import { c as connectLocalized, d as disconnectLocalized } from './locale-6fffb6ae.js';
import { u as updateMessages, s as setUpMessages, c as connectMessages, d as disconnectMessages } from './t9n-802ef166.js';
import { d as debounce } from './debounce-f5f6068a.js';
import './dom-67db067b.js';
import './guid-89dde75d.js';
import './resources-2916eda2.js';
import './key-4fdf42f2.js';
import './observers-38221b96.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  container: "container",
  searchIcon: "search-icon"
};
const ICONS = {
  search: "search",
  close: "x"
};
const DEBOUNCE_TIMEOUT = 250;

const filterCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-ui-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-ui-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}";

let Filter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteFilterChange = createEvent(this, "calciteFilterChange", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.filter = debounce((value, emit = false) => this.updateFiltered(filter(this.items, value), emit), DEBOUNCE_TIMEOUT);
    this.inputHandler = (event) => {
      const target = event.target;
      this.value = target.value;
      this.filter(target.value, true);
    };
    this.keyDownHandler = (event) => {
      if (event.key === "Escape") {
        this.clear();
        event.preventDefault();
      }
      if (event.key === "Enter") {
        event.preventDefault();
      }
    };
    this.clear = () => {
      this.value = "";
      this.filter("", true);
      this.setFocus();
    };
    this.items = [];
    this.disabled = false;
    this.filteredItems = [];
    this.placeholder = undefined;
    this.scale = "m";
    this.value = "";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  watchItemsHandler() {
    this.filter(this.value);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  valueHandler(value) {
    this.filter(value);
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    setUpLoadableComponent(this);
    this.updateFiltered(filter(this.items, this.value));
    await setUpMessages(this);
  }
  connectedCallback() {
    connectLocalized(this);
    connectMessages(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  disconnectedCallback() {
    disconnectLocalized(this);
    disconnectMessages(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    await componentLoaded(this);
    (_a = this.el) === null || _a === void 0 ? void 0 : _a.focus();
  }
  updateFiltered(filtered, emit = false) {
    this.filteredItems.length = 0;
    this.filteredItems = this.filteredItems.concat(filtered);
    if (emit) {
      this.calciteFilterChange.emit();
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled, scale } = this;
    return (h(Fragment, null, h("div", { class: CSS.container }, h("label", null, h("calcite-input", { "aria-label": this.messages.label, clearable: true, disabled: disabled, icon: ICONS.search, messageOverrides: { clear: this.messages.clear }, onCalciteInputInput: this.inputHandler, onKeyDown: this.keyDownHandler, placeholder: this.placeholder, scale: scale, type: "text", value: this.value,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => {
        this.textInput = el;
      } })))));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "items": ["watchItemsHandler"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["valueHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Filter.style = filterCss;

export { Filter as calcite_filter };

//# sourceMappingURL=calcite-filter.entry.js.map