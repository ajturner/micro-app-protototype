'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4922fbcf.js');
const conditionalSlot = require('./conditionalSlot-1fd35835.js');
const dom = require('./dom-5643dc8d.js');
const guid = require('./guid-504c591e.js');
const interactive = require('./interactive-aacdfedd.js');
const loadable = require('./loadable-0d54a318.js');
const resources$1 = require('./resources-5202afc8.js');
const resources = require('./resources-3fcd22a2.js');
require('./observers-6da0c0fa.js');
require('./resources-0be54a9c.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const ICONS = {
  drag: "drag"
};
const SLOTS = {
  actionsEnd: "actions-end",
  actionsStart: "actions-start"
};

const valueListItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{margin-block-end:1px;box-sizing:border-box;display:flex;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}:host *{box-sizing:border-box}calcite-pick-list-item{position:relative;margin:0px;flex-grow:1;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([active]),:host([selected]){--tw-shadow:0 0 0 1px var(--calcite-ui-brand);--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.handle{display:flex;cursor:move;align-items:center;justify-content:center;border-style:none;background-color:transparent;padding-block:0px;padding-inline:0.25rem;color:var(--calcite-ui-border-input);outline-color:transparent}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";

let ValueListItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteListItemRemove = index.createEvent(this, "calciteListItemRemove", 7);
    this.calciteValueListItemDragHandleBlur = index.createEvent(this, "calciteValueListItemDragHandleBlur", 6);
    this.pickListItem = null;
    this.guid = `calcite-value-list-item-${guid.guid()}`;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.getPickListRef = (el) => (this.pickListItem = el);
    this.handleKeyDown = (event) => {
      if (event.key === " ") {
        this.handleActivated = !this.handleActivated;
      }
    };
    this.handleBlur = () => {
      this.handleActivated = false;
      this.calciteValueListItemDragHandleBlur.emit({ item: this.el, handle: this.handleEl });
    };
    this.handleSelectChange = (event) => {
      this.selected = event.detail.selected;
    };
    this.description = undefined;
    this.disabled = false;
    this.deselectDisabled = false;
    this.nonInteractive = false;
    this.handleActivated = false;
    this.icon = null;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.metadata = undefined;
    this.removable = false;
    this.selected = false;
    this.value = undefined;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    conditionalSlot.connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    conditionalSlot.disconnectConditionalSlotComponent(this);
  }
  componentWillLoad() {
    loadable.setUpLoadableComponent(this);
  }
  componentDidLoad() {
    loadable.setComponentLoaded(this);
  }
  componentDidRender() {
    interactive.updateHostInteraction(this, this.el.closest("calcite-value-list") ? "managed" : false);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   *
   * @param coerce
   */
  async toggleSelected(coerce) {
    this.pickListItem.toggleSelected(coerce);
  }
  /** Set focus on the component. */
  async setFocus() {
    var _a;
    await loadable.componentLoaded(this);
    (_a = this.pickListItem) === null || _a === void 0 ? void 0 : _a.setFocus();
  }
  calciteListItemChangeHandler(event) {
    // adjust item payload from wrapped item before bubbling
    event.detail.item = this.el;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsEnd() {
    const { el } = this;
    const hasActionsEnd = dom.getSlotted(el, SLOTS.actionsEnd);
    return hasActionsEnd ? (index.h("slot", { name: SLOTS.actionsEnd, slot: resources$1.SLOTS.actionsEnd })) : null;
  }
  renderActionsStart() {
    const { el } = this;
    const hasActionsStart = dom.getSlotted(el, SLOTS.actionsStart);
    return hasActionsStart ? (index.h("slot", { name: SLOTS.actionsStart, slot: resources$1.SLOTS.actionsStart })) : null;
  }
  renderHandle() {
    const { icon, iconFlipRtl } = this;
    if (icon === resources.ICON_TYPES.grip) {
      return (index.h("span", { class: {
          [resources$1.CSS.handle]: true,
          [resources$1.CSS.handleActivated]: this.handleActivated
        }, "data-js-handle": true, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, ref: (el) => (this.handleEl = el), role: "button", tabindex: "0" }, index.h("calcite-icon", { flipRtl: iconFlipRtl, icon: ICONS.drag, scale: "s" })));
    }
  }
  render() {
    return (index.h(index.Host, { id: this.el.id || this.guid }, this.renderHandle(), index.h("calcite-pick-list-item", { description: this.description, deselectDisabled: this.deselectDisabled, disabled: this.disabled, label: this.label, metadata: this.metadata, nonInteractive: this.nonInteractive, onCalciteListItemChange: this.handleSelectChange, removable: this.removable, selected: this.selected, value: this.value,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.getPickListRef }, this.renderActionsStart(), this.renderActionsEnd())));
  }
  get el() { return index.getElement(this); }
};
ValueListItem.style = valueListItemCss;

exports.calcite_value_list_item = ValueListItem;

//# sourceMappingURL=calcite-value-list-item.cjs.entry.js.map