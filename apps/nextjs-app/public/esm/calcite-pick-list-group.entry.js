import { r as registerInstance, h, F as Fragment, g as getElement } from './index-9b24d2d4.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-b360d7fb.js';
import { a as getSlotted } from './dom-67db067b.js';
import { H as Heading, c as constrainHeadingLevel } from './Heading-44708bf6.js';
import { S as SLOTS, C as CSS } from './resources-374ef985.js';
import './observers-38221b96.js';
import './guid-89dde75d.js';
import './resources-2916eda2.js';

const pickListGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{margin-block-end:0.25rem;box-sizing:border-box;display:block;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host(:last-child){margin-block-end:0px}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.heading{margin-block:0.5rem;margin-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-size:var(--calcite-font-size--1);line-height:1.375;color:var(--calcite-ui-text-3)}.container--indented{margin-inline-start:1.5rem}";

let PickListGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.groupTitle = undefined;
    this.headingLevel = undefined;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    disconnectConditionalSlotComponent(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    var _a;
    const { el, groupTitle, headingLevel } = this;
    const hasParentItem = getSlotted(el, SLOTS.parentItem) !== null;
    const sectionClasses = {
      [CSS.container]: true,
      [CSS.indented]: hasParentItem
    };
    const title = groupTitle;
    const parentLevel = (_a = el.closest("calcite-pick-list")) === null || _a === void 0 ? void 0 : _a.headingLevel;
    const relativeLevel = parentLevel ? constrainHeadingLevel(parentLevel + 1) : null;
    const level = headingLevel || relativeLevel;
    return (h(Fragment, null, title ? (h(Heading, { class: CSS.heading, level: level }, title)) : null, h("slot", { name: SLOTS.parentItem }), h("section", { class: sectionClasses }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
PickListGroup.style = pickListGroupCss;

export { PickListGroup as calcite_pick_list_group };

//# sourceMappingURL=calcite-pick-list-group.entry.js.map