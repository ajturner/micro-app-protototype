import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-9b24d2d4.js';
import { b as getElementDir } from './dom-67db067b.js';
import { a as afterConnectDefaultValueSet, c as connectForm, d as disconnectForm, H as HiddenFormInputSlot } from './form-f888e66d.js';
import { u as updateHostInteraction } from './interactive-5738af71.js';
import { c as connectLabel, d as disconnectLabel } from './label-df96ca5f.js';
import { a as setUpLoadableComponent, s as setComponentLoaded, c as componentLoaded } from './loadable-eeabeb84.js';
import './guid-89dde75d.js';
import './resources-2916eda2.js';

const segmentedControlCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;background-color:var(--calcite-ui-foreground-1);inline-size:-moz-fit-content;inline-size:fit-content;outline:1px solid var(--calcite-ui-border-input);outline-offset:-1px}:host([appearance=outline]){background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([layout=vertical]){flex-direction:column;align-items:flex-start;align-self:flex-start}:host([width=full]){inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content}:host([width=full]) ::slotted(calcite-segmented-control-item){flex:1 1 auto}:host([width=full][layout=vertical]) ::slotted(calcite-segmented-control-item){justify-content:flex-start}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

let SegmentedControl = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteSegmentedControlChange = createEvent(this, "calciteSegmentedControlChange", 6);
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.handleClick = (event) => {
      if (event.target.localName === "calcite-segmented-control-item") {
        this.selectItem(event.target, true);
      }
    };
    this.appearance = "solid";
    this.disabled = false;
    this.form = undefined;
    this.required = false;
    this.layout = "horizontal";
    this.name = undefined;
    this.scale = "m";
    this.value = null;
    this.selectedItem = undefined;
    this.width = "auto";
  }
  valueHandler(value) {
    const items = this.getItems();
    items.forEach((item) => (item.checked = item.value === value));
  }
  handleSelectedItemChange(newItem, oldItem) {
    this.value = newItem === null || newItem === void 0 ? void 0 : newItem.value;
    if (newItem === oldItem) {
      return;
    }
    const items = this.getItems();
    const match = Array.from(items)
      .filter((item) => item === newItem)
      .pop();
    if (match) {
      this.selectItem(match);
    }
    else if (items[0]) {
      items[0].tabIndex = 0;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    setUpLoadableComponent(this);
    const items = this.getItems();
    const lastChecked = Array.from(items)
      .filter((item) => item.checked)
      .pop();
    if (lastChecked) {
      this.selectItem(lastChecked);
    }
    else if (items[0]) {
      items[0].tabIndex = 0;
    }
  }
  componentDidLoad() {
    afterConnectDefaultValueSet(this, this.value);
    setComponentLoaded(this);
  }
  connectedCallback() {
    connectLabel(this);
    connectForm(this);
  }
  disconnectedCallback() {
    disconnectLabel(this);
    disconnectForm(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  render() {
    return (h(Host, { onClick: this.handleClick, role: "radiogroup" }, h("slot", null), h(HiddenFormInputSlot, { component: this })));
  }
  handleSelected(event) {
    event.preventDefault();
    this.selectItem(event.target);
    event.stopPropagation();
  }
  handleKeyDown(event) {
    const keys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", " "];
    const { key } = event;
    const { el, selectedItem } = this;
    if (keys.indexOf(key) === -1) {
      return;
    }
    let adjustedKey = key;
    if (getElementDir(el) === "rtl") {
      if (key === "ArrowRight") {
        adjustedKey = "ArrowLeft";
      }
      if (key === "ArrowLeft") {
        adjustedKey = "ArrowRight";
      }
    }
    const items = this.getItems();
    let selectedIndex = -1;
    items.forEach((item, index) => {
      if (item === selectedItem) {
        selectedIndex = index;
      }
    });
    switch (adjustedKey) {
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        const previous = selectedIndex < 1 ? items.item(items.length - 1) : items.item(selectedIndex - 1);
        this.selectItem(previous, true);
        return;
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        const next = selectedIndex === -1 ? items.item(1) : items.item(selectedIndex + 1) || items.item(0);
        this.selectItem(next, true);
        return;
      case " ":
        event.preventDefault();
        this.selectItem(event.target, true);
        return;
      default:
        return;
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    await componentLoaded(this);
    (_a = (this.selectedItem || this.getItems()[0])) === null || _a === void 0 ? void 0 : _a.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  getItems() {
    return this.el.querySelectorAll("calcite-segmented-control-item");
  }
  selectItem(selected, emit = false) {
    if (selected === this.selectedItem) {
      return;
    }
    const items = this.getItems();
    let match = null;
    items.forEach((item) => {
      const matches = item.value === selected.value;
      if ((matches && !item.checked) || (!matches && item.checked)) {
        item.checked = matches;
      }
      item.tabIndex = matches ? 0 : -1;
      if (matches) {
        match = item;
        if (emit) {
          this.calciteSegmentedControlChange.emit();
        }
      }
    });
    this.selectedItem = match;
    if (match) {
      match.focus();
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueHandler"],
    "selectedItem": ["handleSelectedItemChange"]
  }; }
};
SegmentedControl.style = segmentedControlCss;

export { SegmentedControl as calcite_segmented_control };

//# sourceMappingURL=calcite-segmented-control.entry.js.map