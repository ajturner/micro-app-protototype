import { HTMLElement, createEvent, Build, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { g as getElementProp, t as toAriaBoolean, b as getElementDir } from './dom.js';
import { g as guid } from './guid.js';
import { u as updateHostInteraction } from './interactive.js';
import { c as createObserver } from './observers.js';
import { d as defineCustomElement$1 } from './icon.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  container: "container",
  containerHasText: "container--has-text",
  iconEnd: "icon-end",
  iconStart: "icon-start",
  iconPresent: "icon-present",
  titleIcon: "calcite-tab-title--icon"
};

const tabTitleCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block;flex:0 1 auto;outline:2px solid transparent;outline-offset:2px;margin-inline-start:0px;margin-inline-end:1.25rem}:host([layout=center]){margin-block:0px;margin-inline:1.25rem;text-align:center;flex-basis:12rem;margin:auto}:host([position=bottom]) .container{border-block-end-width:0px;border-block-start-width:2px;border-block-start-color:transparent;border-block-start-style:solid}:host .container{outline-color:transparent}:host(:focus) .container{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-ui-border-2);color:var(--calcite-ui-text-1);text-decoration-line:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-ui-text-1)}:host([disabled]) .container{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){margin-inline-end:1rem}:host([scale=s]) .container{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .container{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){margin-inline-end:1.5rem}:host([scale=l]) .container{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}.container{box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;-webkit-appearance:none;appearance:none;justify-content:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-block-end-width:2px;padding-inline:0px;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end-color:transparent;border-block-end-style:solid}.calcite-tab-title--icon{position:relative;margin:0px;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.container--has-text{padding:0.25rem}.container--has-text .calcite-tab-title--icon.icon-start{margin-inline-end:0.5rem}.container--has-text .calcite-tab-title--icon.icon-end{margin-inline-start:0.5rem}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-inline-end:0.5rem}:host([bordered]){margin-inline-end:0}:host([bordered][selected]){box-shadow:inset 0px -2px var(--calcite-ui-foreground-1)}:host([bordered][selected][position=bottom]){box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1)}:host([bordered]:hover) .container,:host([bordered]:focus) .container,:host([bordered]:active) .container{position:relative}:host([bordered]:hover) .container{background-color:var(--calcite-button-transparent-hover)}:host([bordered]) .container{border-block-end-style:unset;border-inline-start:1px solid transparent;border-inline-end:1px solid transparent}:host([bordered][position=bottom]) .container{border-block-start-style:unset}:host([selected][bordered]) .container{border-inline-start-color:var(--calcite-ui-border-1);border-inline-end-color:var(--calcite-ui-border-1)}:host([bordered]) .container{padding-inline:0.75rem}:host([bordered][scale=s]) .container{padding-inline:0.5rem}:host([bordered][scale=l]) .container{padding-inline:1rem}:host([bordered][scale=l]) .icon-present{padding-block:11px}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered]) .container{border-block-end-style:solid}:host([bordered][position=bottom]) .container{border-block-start-style:solid}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][position=bottom][selected]) .container{border-block-start-style:none}}";

let TabTitle = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteTabsActivate = createEvent(this, "calciteTabsActivate", 6);
    this.calciteInternalTabsActivate = createEvent(this, "calciteInternalTabsActivate", 6);
    this.calciteInternalTabsFocusNext = createEvent(this, "calciteInternalTabsFocusNext", 6);
    this.calciteInternalTabsFocusPrevious = createEvent(this, "calciteInternalTabsFocusPrevious", 6);
    this.calciteInternalTabsFocusFirst = createEvent(this, "calciteInternalTabsFocusFirst", 6);
    this.calciteInternalTabsFocusLast = createEvent(this, "calciteInternalTabsFocusLast", 6);
    this.calciteInternalTabTitleRegister = createEvent(this, "calciteInternalTabTitleRegister", 6);
    this.calciteInternalTabIconChanged = createEvent(this, "calciteInternalTabIconChanged", 6);
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /** watches for changing text content */
    this.mutationObserver = createObserver("mutation", () => this.updateHasText());
    this.resizeObserver = createObserver("resize", () => {
      this.calciteInternalTabIconChanged.emit();
    });
    this.guid = `calcite-tab-title-${guid()}`;
    this.selected = false;
    this.disabled = false;
    this.iconEnd = undefined;
    this.iconFlipRtl = undefined;
    this.iconStart = undefined;
    this.layout = undefined;
    this.position = undefined;
    this.scale = undefined;
    this.bordered = false;
    this.tab = undefined;
    this.controls = undefined;
    this.hasText = false;
  }
  selectedHandler() {
    if (this.selected) {
      this.emitActiveTab(false);
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.setupTextContentObserver();
    this.parentTabNavEl = this.el.closest("calcite-tab-nav");
    this.parentTabsEl = this.el.closest("calcite-tabs");
  }
  disconnectedCallback() {
    var _a, _b, _c;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    // Dispatching to body in order to be listened by other elements that are still connected to the DOM.
    (_b = document.body) === null || _b === void 0 ? void 0 : _b.dispatchEvent(new CustomEvent("calciteTabTitleUnregister", {
      detail: this.el
    }));
    (_c = this.resizeObserver) === null || _c === void 0 ? void 0 : _c.disconnect();
  }
  componentWillLoad() {
    if (Build.isBrowser) {
      this.updateHasText();
    }
    if (this.tab && this.selected) {
      this.emitActiveTab(false);
    }
  }
  componentWillRender() {
    if (this.parentTabsEl) {
      this.layout = this.parentTabsEl.layout;
      this.position = this.parentTabsEl.position;
      this.scale = this.parentTabsEl.scale;
      this.bordered = this.parentTabsEl.bordered;
    }
    // handle case when tab-nav is only parent
    if (!this.parentTabsEl && this.parentTabNavEl) {
      this.position = getElementProp(this.parentTabNavEl, "position", this.position);
      this.scale = getElementProp(this.parentTabNavEl, "scale", this.scale);
    }
  }
  render() {
    const id = this.el.id || this.guid;
    const iconStartEl = (h("calcite-icon", { class: { [CSS.titleIcon]: true, [CSS.iconStart]: true }, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: this.scale === "l" ? "m" : "s" }));
    const iconEndEl = (h("calcite-icon", { class: { [CSS.titleIcon]: true, [CSS.iconEnd]: true }, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: this.scale === "l" ? "m" : "s" }));
    return (h(Host, { "aria-controls": this.controls, "aria-selected": toAriaBoolean(this.selected), id: id, role: "tab", tabIndex: this.selected ? 0 : -1 }, h("div", { class: {
        container: true,
        [CSS.iconPresent]: this.iconStart || this.iconEnd ? true : null,
        [CSS.containerHasText]: this.hasText
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => { var _a; return (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.observe(el); } }, this.iconStart ? iconStartEl : null, h("slot", null), this.iconEnd ? iconEndEl : null)));
  }
  async componentDidLoad() {
    this.calciteInternalTabTitleRegister.emit(await this.getTabIdentifier());
  }
  componentDidRender() {
    updateHostInteraction(this, () => {
      return this.selected;
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  internalTabChangeHandler(event) {
    const targetTabsEl = event
      .composedPath()
      .find((el) => el.tagName === "CALCITE-TABS");
    if (targetTabsEl !== this.parentTabsEl) {
      return;
    }
    if (this.tab) {
      this.selected = this.tab === event.detail.tab;
    }
    else {
      this.getTabIndex().then((index) => {
        this.selected = index === event.detail.tab;
      });
    }
    event.stopPropagation();
  }
  onClick() {
    this.emitActiveTab();
  }
  keyDownHandler(event) {
    switch (event.key) {
      case " ":
      case "Enter":
        this.emitActiveTab();
        event.preventDefault();
        break;
      case "ArrowRight":
        event.preventDefault();
        if (getElementDir(this.el) === "ltr") {
          this.calciteInternalTabsFocusNext.emit();
        }
        else {
          this.calciteInternalTabsFocusPrevious.emit();
        }
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (getElementDir(this.el) === "ltr") {
          this.calciteInternalTabsFocusPrevious.emit();
        }
        else {
          this.calciteInternalTabsFocusNext.emit();
        }
        break;
      case "Home":
        event.preventDefault();
        this.calciteInternalTabsFocusFirst.emit();
        break;
      case "End":
        event.preventDefault();
        this.calciteInternalTabsFocusLast.emit();
        break;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Returns the index of the title within the `calcite-tab-nav`.
   */
  async getTabIndex() {
    return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"), this.el);
  }
  /**
   * @internal
   */
  async getTabIdentifier() {
    return this.tab ? this.tab : this.getTabIndex();
  }
  /**
   * @param tabIds
   * @param titleIds
   * @internal
   */
  async updateAriaInfo(tabIds = [], titleIds = []) {
    this.controls = tabIds[titleIds.indexOf(this.el.id)] || null;
  }
  updateHasText() {
    this.hasText = this.el.textContent.trim().length > 0;
  }
  setupTextContentObserver() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  emitActiveTab(userTriggered = true) {
    if (this.disabled) {
      return;
    }
    const payload = { tab: this.tab };
    this.calciteInternalTabsActivate.emit(payload);
    if (userTriggered) {
      this.calciteTabsActivate.emit();
    }
  }
  get el() { return this; }
  static get watchers() { return {
    "selected": ["selectedHandler"]
  }; }
  static get style() { return tabTitleCss; }
};
TabTitle = /*@__PURE__*/ proxyCustomElement(TabTitle, [1, "calcite-tab-title", {
    "selected": [1540],
    "disabled": [516],
    "iconEnd": [513, "icon-end"],
    "iconFlipRtl": [513, "icon-flip-rtl"],
    "iconStart": [513, "icon-start"],
    "layout": [1537],
    "position": [1537],
    "scale": [1537],
    "bordered": [1540],
    "tab": [513],
    "controls": [32],
    "hasText": [32],
    "getTabIndex": [64],
    "getTabIdentifier": [64],
    "updateAriaInfo": [64]
  }, [[16, "calciteInternalTabChange", "internalTabChangeHandler"], [0, "click", "onClick"], [0, "keydown", "keyDownHandler"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tab-title", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-tab-title":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TabTitle);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { TabTitle as T, defineCustomElement as d };

//# sourceMappingURL=tab-title.js.map