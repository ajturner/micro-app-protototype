import { HTMLElement, createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot.js';
import { a as getSlotted } from './dom.js';
import { s as setUpLoadableComponent, a as setComponentLoaded, c as componentLoaded } from './loadable.js';
import { c as connectLocalized, d as disconnectLocalized } from './locale.js';
import { u as updateMessages, c as connectMessages, d as disconnectMessages, s as setUpMessages } from './t9n.js';
import { t as toggleChildActionText, E as ExpandToggle } from './ExpandToggle.js';
import { d as defineCustomElement$7 } from './action.js';
import { d as defineCustomElement$6 } from './action-group.js';
import { d as defineCustomElement$5 } from './action-menu.js';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './loader.js';
import { d as defineCustomElement$2 } from './popover.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  actionGroupBottom: "action-group--bottom",
  container: "container"
};
const SLOTS = {
  expandTooltip: "expand-tooltip"
};

const actionPadCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.125rem;--calcite-action-pad-expanded-max-width:auto;background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width)}::slotted(calcite-action-group){border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0px}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0px;padding:0px;border-inline-end-width:1px}::slotted(calcite-action-group:last-child){border-block-end-width:0px}";

let ActionPad = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteActionPadToggle = createEvent(this, "calciteActionPadToggle", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.actionMenuOpenHandler = (event) => {
      if (event.target.menuOpen) {
        const composedPath = event.composedPath();
        Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((group) => {
          if (!composedPath.includes(group)) {
            group.menuOpen = false;
          }
        });
      }
    };
    this.toggleExpand = () => {
      this.expanded = !this.expanded;
      this.calciteActionPadToggle.emit();
    };
    this.setExpandToggleRef = (el) => {
      this.expandToggleEl = el;
    };
    this.expandDisabled = false;
    this.expanded = false;
    this.layout = "vertical";
    this.position = undefined;
    this.scale = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
  }
  expandedHandler(expanded) {
    toggleChildActionText({ parent: this.el, expanded });
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectConditionalSlotComponent(this);
    connectLocalized(this);
    connectMessages(this);
  }
  disconnectedCallback() {
    disconnectLocalized(this);
    disconnectMessages(this);
    disconnectConditionalSlotComponent(this);
  }
  async componentWillLoad() {
    setUpLoadableComponent(this);
    const { el, expanded } = this;
    toggleChildActionText({ parent: el, expanded });
    await setUpMessages(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    var _a;
    await componentLoaded(this);
    (_a = this.el) === null || _a === void 0 ? void 0 : _a.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  renderBottomActionGroup() {
    const { expanded, expandDisabled, messages, el, position, toggleExpand, scale, layout } = this;
    const tooltip = getSlotted(el, SLOTS.expandTooltip);
    const expandToggleNode = !expandDisabled ? (h(ExpandToggle, { el: el, expanded: expanded, intlCollapse: messages.collapse, intlExpand: messages.expand, position: position, scale: scale, toggle: toggleExpand, tooltip: tooltip,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setExpandToggleRef })) : null;
    return expandToggleNode ? (h("calcite-action-group", { class: CSS.actionGroupBottom, layout: layout, scale: scale }, h("slot", { name: SLOTS.expandTooltip }), expandToggleNode)) : null;
  }
  render() {
    return (h(Host, { onCalciteActionMenuOpen: this.actionMenuOpenHandler }, h("div", { class: CSS.container }, h("slot", null), this.renderBottomActionGroup())));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
  static get style() { return actionPadCss; }
};
ActionPad = /*@__PURE__*/ proxyCustomElement(ActionPad, [17, "calcite-action-pad", {
    "expandDisabled": [516, "expand-disabled"],
    "expanded": [1540],
    "layout": [513],
    "position": [513],
    "scale": [513],
    "messages": [1040],
    "messageOverrides": [1040],
    "effectiveLocale": [32],
    "defaultMessages": [32],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-action-pad", "calcite-action", "calcite-action-group", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-action-pad":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionPad);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "calcite-action-group":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CalciteActionPad = ActionPad;
const defineCustomElement = defineCustomElement$1;

export { CalciteActionPad, defineCustomElement };

//# sourceMappingURL=calcite-action-pad.js.map