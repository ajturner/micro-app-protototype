'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const dom = require('./dom-5643dc8d.js');
const interactive = require('./interactive-aacdfedd.js');
const locale = require('./locale-dbbec1a1.js');
const loadable = require('./loadable-0d54a318.js');
require('./guid-504c591e.js');
require('./resources-0be54a9c.js');
require('./key-75cf5e40.js');
require('./observers-6da0c0fa.js');

const stepperItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([layout=horizontal][disabled]) .stepper-item-header,:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([scale=s]){--calcite-stepper-item-spacing-unit-s:0.25rem;--calcite-stepper-item-spacing-unit-m:0.75rem;--calcite-stepper-item-spacing-unit-l:1rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-inline-end:0.25rem}:host([scale=s]) .stepper-item-description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-stepper-item-spacing-unit-s:0.5rem;--calcite-stepper-item-spacing-unit-m:1rem;--calcite-stepper-item-spacing-unit-l:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-inline-end:0.5rem}:host([scale=m]) .stepper-item-description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-stepper-item-spacing-unit-s:0.75rem;--calcite-stepper-item-spacing-unit-m:1.25rem;--calcite-stepper-item-spacing-unit-l:1.5rem;font-size:var(--calcite-font-size-1);line-height:1.5rem;margin-inline-end:0.75rem}:host([scale=l]) .stepper-item-description{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:flex;flex-grow:1;flex-direction:column;align-self:flex-start;margin-block-end:var(--calcite-stepper-item-spacing-unit-s)}:host .container{position:relative;display:flex;flex-grow:1;cursor:pointer;flex-direction:column;border-width:0px;border-block-start-width:2px;border-style:solid;border-color:var(--calcite-ui-border-3);color:var(--calcite-ui-text-3);text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host{outline-color:transparent}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host .stepper-item-header{display:flex;cursor:pointer;align-items:flex-start}:host .stepper-item-content,:host .stepper-item-header{transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);padding-block:var(--calcite-stepper-item-spacing-unit-l);padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host .stepper-item-header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .stepper-item-content{display:none;inline-size:100%;flex-direction:column;font-size:var(--calcite-font-size--2);line-height:1.375}:host .stepper-item-icon{margin-inline-end:var(--calcite-stepper-item-spacing-unit-m);margin-block-start:1px;display:inline-flex;block-size:0.75rem;flex-shrink:0;align-self:flex-start;color:var(--calcite-ui-text-3);opacity:var(--calcite-ui-opacity-disabled);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .stepper-item-header-text{flex-direction:column;text-align:initial;margin-inline-end:auto}:host .stepper-item-heading,:host .stepper-item-description{display:flex;inline-size:100%}:host .stepper-item-heading{margin-block-end:0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .stepper-item-description{color:var(--calcite-ui-text-3)}:host .stepper-item-number{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-stepper-item-spacing-unit-m)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([complete]) .container .stepper-item-icon{color:var(--calcite-ui-brand)}:host([error]) .container{border-block-start-color:var(--calcite-ui-danger)}:host([error]) .container .stepper-item-number{color:var(--calcite-ui-danger)}:host([error]) .container .stepper-item-icon{opacity:1;color:var(--calcite-ui-danger)}:host(:hover:not([disabled]):not([selected])) .container,:host(:focus:not([disabled]):not([selected])) .container{border-block-start-color:var(--calcite-ui-brand)}:host(:hover:not([disabled]):not([selected])) .container .stepper-item-heading,:host(:focus:not([disabled]):not([selected])) .container .stepper-item-heading{color:var(--calcite-ui-text-1)}:host(:hover:not([disabled]):not([selected])) .container .stepper-item-description,:host(:focus:not([disabled]):not([selected])) .container .stepper-item-description{color:var(--calcite-ui-text-2)}:host([error]:hover:not([disabled]):not([selected])) .container,:host([error]:focus:not([disabled]):not([selected])) .container{border-block-start-color:var(--calcite-ui-danger-hover)}:host([selected]) .container{border-block-start-color:var(--calcite-ui-brand)}:host([selected]) .container .stepper-item-heading{color:var(--calcite-ui-text-1)}:host([selected]) .container .stepper-item-description{color:var(--calcite-ui-text-2)}:host([selected]) .container .stepper-item-number{color:var(--calcite-ui-brand)}:host([selected]) .container .stepper-item-icon{color:var(--calcite-ui-brand);opacity:1}:host([selected]) .container .stepper-item-content{display:flex}:host([layout=vertical]) .container{margin-inline:0px;margin-block-start:0px;flex:1 1 auto;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px;border-inline-start-width:2px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]) .container .stepper-item-icon{order:3;margin-block:1px 0px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-s);margin-inline-start:auto}:host([layout=vertical]) .container .stepper-item-header{padding-inline-end:0px}:host([layout=vertical]) .container .stepper-item-content{padding:0px}:host([layout=vertical][complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][complete]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical][complete]:focus:not([disabled]):not([selected])) .container{border-color:var(--calcite-ui-brand)}:host([layout=vertical][error]) .container{border-color:var(--calcite-ui-danger)}:host([layout=vertical][selected]) .container{border-color:var(--calcite-ui-brand)}:host([layout=vertical][selected]) .container .stepper-item-content:not(:empty){margin-block-end:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical]:focus:not([disabled]):not([selected])) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][error]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical][error]:focus:not([disabled]):not([selected])) .container{border-color:var(--calcite-ui-danger-hover)}:host([layout=horizontal]){display:contents}:host([layout=horizontal]) .container{display:contents}:host([layout=horizontal]) .stepper-item-header{border-width:0px;border-block-start-width:2px;border-style:solid;border-color:var(--calcite-ui-border-3);outline-color:transparent;grid-row:items;margin-inline-end:0.5rem;margin-block-end:var(--calcite-stepper-item-spacing-unit-s)}:host([layout=horizontal]) .stepper-item-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host([layout=horizontal]) .stepper-item-content{cursor:auto;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);padding-block:0;padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host([layout=horizontal][selected]) .stepper-item-content{grid-area:2/1/2/-1}:host([layout=horizontal][scale=s]) .stepper-item-header{margin-inline-end:0.25rem;margin-block-end:var(--calcite-stepper-item-spacing-unit-s)}:host([layout=horizontal][scale=l]) .stepper-item-header{margin-inline-end:0.75rem;margin-block-end:var(--calcite-stepper-item-spacing-unit-s)}:host([layout=horizontal][complete]) .stepper-item-header{border-color:rgba(0, 122, 194, 0.5)}:host([layout=horizontal][complete]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal][complete]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:var(--calcite-ui-brand)}:host([layout=horizontal][error]) .stepper-item-header{border-color:var(--calcite-ui-danger)}:host([layout=horizontal][selected]) .stepper-item-header{border-color:var(--calcite-ui-brand)}:host([layout=horizontal]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:rgba(0, 122, 194, 0.5)}:host([layout=horizontal][error]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal][error]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:var(--calcite-ui-danger-hover)}@media (forced-colors: active){:host .container{outline-width:0;outline-offset:0}:host(:focus),:host(:focus-visible){outline-color:canvasText}:host([selected]) .container{border-block-start-color:highlight}:host([selected]) .container .stepper-item-number{color:highlight}:host([selected]) .container .stepper-item-icon{color:highlight}:host([layout=vertical][selected]) .container{border-color:highlight}}";

let StepperItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteInternalStepperItemKeyEvent = index.createEvent(this, "calciteInternalStepperItemKeyEvent", 6);
    this.calciteInternalStepperItemSelect = index.createEvent(this, "calciteInternalStepperItemSelect", 6);
    this.calciteInternalUserRequestedStepperItemSelect = index.createEvent(this, "calciteInternalUserRequestedStepperItemSelect", 6);
    this.calciteInternalStepperItemRegister = index.createEvent(this, "calciteInternalStepperItemRegister", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      if (!this.disabled && event.target === this.el) {
        switch (event.key) {
          case " ":
          case "Enter":
            this.emitUserRequestedItem();
            event.preventDefault();
            break;
          case "ArrowUp":
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "Home":
          case "End":
            this.calciteInternalStepperItemKeyEvent.emit({ item: event });
            event.preventDefault();
            break;
        }
      }
    };
    this.handleItemClick = (event) => {
      if (this.layout === "horizontal" &&
        event
          .composedPath()
          .some((el) => { var _a; return (_a = el.classList) === null || _a === void 0 ? void 0 : _a.contains("stepper-item-content"); })) {
        return;
      }
      this.emitUserRequestedItem();
    };
    this.emitUserRequestedItem = () => {
      this.emitRequestedItem();
      if (!this.disabled) {
        const position = this.itemPosition;
        this.calciteInternalUserRequestedStepperItemSelect.emit({
          position
        });
      }
    };
    this.emitRequestedItem = () => {
      if (!this.disabled) {
        const position = this.itemPosition;
        this.calciteInternalStepperItemSelect.emit({
          position
        });
      }
    };
    this.selected = false;
    this.complete = false;
    this.error = false;
    this.disabled = false;
    this.heading = undefined;
    this.description = undefined;
    this.layout = "horizontal";
    this.icon = false;
    this.iconFlipRtl = false;
    this.numbered = false;
    this.scale = "m";
    this.effectiveLocale = "";
  }
  selectedHandler() {
    if (this.selected) {
      this.emitRequestedItem();
    }
  }
  // watch for removal of disabled to register step
  disabledWatcher() {
    this.registerStepperItem();
  }
  effectiveLocaleWatcher(locale$1) {
    var _a;
    locale.numberStringFormatter.numberFormatOptions = {
      locale: locale$1,
      numberingSystem: (_a = this.parentStepperEl) === null || _a === void 0 ? void 0 : _a.numberingSystem,
      useGrouping: false
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    locale.connectLocalized(this);
  }
  componentWillLoad() {
    loadable.setUpLoadableComponent(this);
    this.icon = dom.getElementProp(this.el, "icon", false);
    this.numbered = dom.getElementProp(this.el, "numbered", false);
    this.layout = dom.getElementProp(this.el, "layout", false);
    this.scale = dom.getElementProp(this.el, "scale", "m");
    this.parentStepperEl = this.el.parentElement;
    this.itemPosition = this.getItemPosition();
    this.registerStepperItem();
    if (this.selected) {
      this.emitRequestedItem();
    }
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
  }
  componentDidRender() {
    interactive.updateHostInteraction(this, true);
  }
  disconnectedCallback() {
    locale.disconnectLocalized(this);
  }
  render() {
    return (index.h(index.Host, { "aria-expanded": dom.toAriaBoolean(this.selected), onClick: this.handleItemClick, onKeyDown: this.keyDownHandler }, index.h("div", { class: "container" }, index.h("div", { class: "stepper-item-header", tabIndex: 
      /* additional tab index logic needed because of display: contents */
      this.layout === "horizontal" && !this.disabled ? 0 : null,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.headerEl = el) }, this.icon ? this.renderIcon() : null, this.numbered ? index.h("div", { class: "stepper-item-number" }, this.renderNumbers(), ".") : null, index.h("div", { class: "stepper-item-header-text" }, index.h("span", { class: "stepper-item-heading" }, this.heading), index.h("span", { class: "stepper-item-description" }, this.description))), index.h("div", { class: "stepper-item-content" }, index.h("slot", null)))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  updateActiveItemOnChange(event) {
    if (event.target === this.parentStepperEl ||
      event.composedPath().includes(this.parentStepperEl)) {
      this.selectedPosition = event.detail.position;
      this.determineSelectedItem();
    }
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
    (_a = (this.layout === "vertical" ? this.el : this.headerEl)) === null || _a === void 0 ? void 0 : _a.focus();
  }
  renderIcon() {
    const path = this.selected
      ? "circleF"
      : this.error
        ? "exclamationMarkCircleF"
        : this.complete
          ? "checkCircleF"
          : "circle";
    return (index.h("calcite-icon", { class: "stepper-item-icon", flipRtl: this.iconFlipRtl, icon: path, scale: "s" }));
  }
  determineSelectedItem() {
    this.selected = !this.disabled && this.itemPosition === this.selectedPosition;
  }
  registerStepperItem() {
    this.calciteInternalStepperItemRegister.emit({
      position: this.itemPosition
    });
  }
  getItemPosition() {
    var _a;
    return Array.from((_a = this.parentStepperEl) === null || _a === void 0 ? void 0 : _a.querySelectorAll("calcite-stepper-item")).indexOf(this.el);
  }
  renderNumbers() {
    var _a;
    locale.numberStringFormatter.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: (_a = this.parentStepperEl) === null || _a === void 0 ? void 0 : _a.numberingSystem,
      useGrouping: false
    };
    return locale.numberStringFormatter.numberFormatter.format(this.itemPosition + 1);
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "selected": ["selectedHandler"],
    "disabled": ["disabledWatcher"],
    "effectiveLocale": ["effectiveLocaleWatcher"]
  }; }
};
StepperItem.style = stepperItemCss;

exports.calcite_stepper_item = StepperItem;

//# sourceMappingURL=calcite-stepper-item.cjs.entry.js.map