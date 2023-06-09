import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-9b24d2d4.js';
import { s as slotChangeHasAssignedElement, b as getElementDir, t as toAriaBoolean } from './dom-67db067b.js';
import { u as updateHostInteraction } from './interactive-5738af71.js';
import { g as getListItemChildren, u as updateListItemChildren, a as getDepth, I as ICONS, C as CSS, S as SLOTS } from './utils-ccacdd21.js';
import { a as setUpLoadableComponent, s as setComponentLoaded, c as componentLoaded } from './loadable-eeabeb84.js';
import './guid-89dde75d.js';
import './resources-2916eda2.js';

const listItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-ui-brand);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}.container--border-selected{border-inline-start:4px solid var(--calcite-ui-brand)}.container--border-unselected{border-inline-start:4px solid transparent}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{z-index:300;outline:2px solid var(--calcite-ui-brand)}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-list-item-icon-color)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}[hidden]{display:none}";

const focusMap = new Map();
const listSelector = "calcite-list";
let ListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteListItemSelect = createEvent(this, "calciteListItemSelect", 6);
    this.calciteInternalListItemSelect = createEvent(this, "calciteInternalListItemSelect", 6);
    this.calciteInternalListItemActive = createEvent(this, "calciteInternalListItemActive", 6);
    this.calciteInternalFocusPreviousItem = createEvent(this, "calciteInternalFocusPreviousItem", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleContentSlotChange = (event) => {
      this.hasCustomContent = slotChangeHasAssignedElement(event);
    };
    this.handleActionsStartSlotChange = (event) => {
      this.hasActionsStart = slotChangeHasAssignedElement(event);
    };
    this.handleActionsEndSlotChange = (event) => {
      this.hasActionsEnd = slotChangeHasAssignedElement(event);
    };
    this.handleContentStartSlotChange = (event) => {
      this.hasContentStart = slotChangeHasAssignedElement(event);
    };
    this.handleContentEndSlotChange = (event) => {
      this.hasContentEnd = slotChangeHasAssignedElement(event);
    };
    this.handleDefaultSlotChange = (event) => {
      const { parentListEl } = this;
      const listItemChildren = getListItemChildren(event);
      updateListItemChildren(listItemChildren);
      const openable = !!listItemChildren.length;
      if (openable && parentListEl && !parentListEl.openable) {
        parentListEl.openable = true;
      }
      this.openable = openable;
      if (!openable) {
        this.open = false;
      }
    };
    this.toggleOpen = () => {
      this.open = !this.open;
    };
    this.itemClicked = () => {
      this.toggleSelected();
      this.calciteInternalListItemActive.emit();
    };
    this.toggleSelected = () => {
      if (this.disabled) {
        return;
      }
      if (this.selectionMode !== "none") {
        this.selected = !this.selected;
      }
      this.calciteListItemSelect.emit();
    };
    this.handleItemKeyDown = (event) => {
      const { key } = event;
      const composedPath = event.composedPath();
      const { containerEl, contentEl, actionsStartEl, actionsEndEl, open, openable } = this;
      const cells = [actionsStartEl, contentEl, actionsEndEl].filter(Boolean);
      const currentIndex = cells.findIndex((cell) => composedPath.includes(cell));
      if (key === " ") {
        event.preventDefault();
        this.toggleSelected();
      }
      else if (key === "ArrowRight") {
        event.preventDefault();
        const nextIndex = currentIndex + 1;
        if (currentIndex === -1) {
          if (!open && openable) {
            this.open = true;
            this.focusCell(null);
          }
          else if (cells[0]) {
            this.focusCell(cells[0]);
          }
        }
        else if (cells[currentIndex] && cells[nextIndex]) {
          this.focusCell(cells[nextIndex]);
        }
      }
      else if (key === "ArrowLeft") {
        event.preventDefault();
        const prevIndex = currentIndex - 1;
        if (currentIndex === -1) {
          this.focusCell(null);
          if (open && openable) {
            this.open = false;
          }
          else {
            this.calciteInternalFocusPreviousItem.emit();
          }
        }
        else if (currentIndex === 0) {
          this.focusCell(null);
          containerEl.focus();
        }
        else if (cells[currentIndex] && cells[prevIndex]) {
          this.focusCell(cells[prevIndex]);
        }
      }
    };
    this.focusCellNull = () => {
      this.focusCell(null);
    };
    this.focusCell = (focusEl, saveFocusIndex = true) => {
      const { contentEl, actionsStartEl, actionsEndEl, parentListEl } = this;
      if (saveFocusIndex) {
        focusMap.set(parentListEl, null);
      }
      [actionsStartEl, contentEl, actionsEndEl].filter(Boolean).forEach((tableCell, cellIndex) => {
        const tabIndexAttr = "tabindex";
        if (tableCell === focusEl) {
          tableCell.setAttribute(tabIndexAttr, "0");
          saveFocusIndex && focusMap.set(parentListEl, cellIndex);
        }
        else {
          tableCell.removeAttribute(tabIndexAttr);
        }
      });
      focusEl === null || focusEl === void 0 ? void 0 : focusEl.focus();
    };
    this.active = false;
    this.description = undefined;
    this.disabled = false;
    this.label = undefined;
    this.metadata = undefined;
    this.open = false;
    this.setSize = null;
    this.setPosition = null;
    this.selected = false;
    this.value = undefined;
    this.selectionMode = null;
    this.selectionAppearance = null;
    this.level = null;
    this.visualLevel = null;
    this.parentListEl = undefined;
    this.openable = false;
    this.hasActionsStart = false;
    this.hasActionsEnd = false;
    this.hasCustomContent = false;
    this.hasContentStart = false;
    this.hasContentEnd = false;
  }
  activeHandler(active) {
    if (!active) {
      this.focusCell(null, false);
    }
  }
  handleSelectedChange(value) {
    if (value) {
      this.calciteInternalListItemSelect.emit();
    }
  }
  connectedCallback() {
    const { el } = this;
    this.parentListEl = el.closest(listSelector);
    this.level = getDepth(el) + 1;
    this.visualLevel = getDepth(el, true);
    this.setSelectionDefaults();
  }
  componentWillLoad() {
    setUpLoadableComponent(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  componentDidRender() {
    updateHostInteraction(this, "managed");
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await componentLoaded(this);
    const { containerEl, contentEl, actionsStartEl, actionsEndEl, parentListEl } = this;
    const focusIndex = focusMap.get(parentListEl);
    if (typeof focusIndex === "number") {
      const cells = [actionsStartEl, contentEl, actionsEndEl].filter(Boolean);
      if (cells[focusIndex]) {
        this.focusCell(cells[focusIndex]);
      }
      else {
        containerEl === null || containerEl === void 0 ? void 0 : containerEl.focus();
      }
      return;
    }
    containerEl === null || containerEl === void 0 ? void 0 : containerEl.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderSelected() {
    const { selected, selectionMode, selectionAppearance } = this;
    if (selectionMode === "none" || selectionAppearance === "border") {
      return null;
    }
    return (h("td", { class: CSS.selectionContainer, key: "selection-container", onClick: this.itemClicked }, h("calcite-icon", { icon: selected
        ? selectionMode === "multiple"
          ? ICONS.selectedMultiple
          : ICONS.selectedSingle
        : ICONS.unselected, scale: "s" })));
  }
  renderOpen() {
    const { el, open, openable, parentListEl } = this;
    const dir = getElementDir(el);
    return openable ? (h("td", { class: CSS.openContainer, key: "open-container", onClick: this.toggleOpen }, h("calcite-icon", { icon: open ? ICONS.open : dir === "rtl" ? ICONS.closedRTL : ICONS.closedLTR, scale: "s" }))) : (parentListEl === null || parentListEl === void 0 ? void 0 : parentListEl.openable) ? (h("td", { class: CSS.openContainer, key: "open-container", onClick: this.itemClicked }, h("calcite-icon", { icon: ICONS.blank, scale: "s" }))) : null;
  }
  renderActionsStart() {
    const { label, hasActionsStart } = this;
    return (h("td", { "aria-label": label, class: CSS.actionsStart, hidden: !hasActionsStart, key: "actions-start-container", role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.actionsStartEl = el) }, h("slot", { name: SLOTS.actionsStart, onSlotchange: this.handleActionsStartSlotChange })));
  }
  renderActionsEnd() {
    const { label, hasActionsEnd } = this;
    return (h("td", { "aria-label": label, class: CSS.actionsEnd, hidden: !hasActionsEnd, key: "actions-end-container", role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.actionsEndEl = el) }, h("slot", { name: SLOTS.actionsEnd, onSlotchange: this.handleActionsEndSlotChange })));
  }
  renderContentStart() {
    const { hasContentStart } = this;
    return (h("div", { class: CSS.contentStart, hidden: !hasContentStart }, h("slot", { name: SLOTS.contentStart, onSlotchange: this.handleContentStartSlotChange })));
  }
  renderCustomContent() {
    const { hasCustomContent } = this;
    return (h("div", { class: CSS.customContent, hidden: !hasCustomContent }, h("slot", { name: SLOTS.content, onSlotchange: this.handleContentSlotChange })));
  }
  renderContentEnd() {
    const { hasContentEnd } = this;
    return (h("div", { class: CSS.contentEnd, hidden: !hasContentEnd }, h("slot", { name: SLOTS.contentEnd, onSlotchange: this.handleContentEndSlotChange })));
  }
  renderContentProperties() {
    const { label, description, hasCustomContent } = this;
    return !hasCustomContent && (!!label || !!description) ? (h("div", { class: CSS.content, key: "content" }, label ? (h("div", { class: CSS.label, key: "label" }, label)) : null, description ? (h("div", { class: CSS.description, key: "description" }, description)) : null)) : null;
  }
  renderContentContainer() {
    const { description, label, selectionMode, hasCustomContent } = this;
    const hasCenterContent = hasCustomContent || !!label || !!description;
    const content = [
      this.renderContentStart(),
      this.renderCustomContent(),
      this.renderContentProperties(),
      this.renderContentEnd()
    ];
    return (h("td", { "aria-label": label, class: {
        [CSS.contentContainer]: true,
        [CSS.contentContainerSelectable]: selectionMode !== "none",
        [CSS.contentContainerHasCenterContent]: hasCenterContent
      }, key: "content-container", onClick: this.itemClicked, role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.contentEl = el) }, content));
  }
  render() {
    const { openable, open, level, setPosition, setSize, active, label, selected, selectionAppearance, selectionMode } = this;
    const showBorder = selectionMode !== "none" && selectionAppearance === "border";
    const borderSelected = showBorder && selected;
    const borderUnselected = showBorder && !selected;
    return (h(Host, null, h("tr", { "aria-expanded": openable ? toAriaBoolean(open) : null, "aria-label": label, "aria-level": level, "aria-posinset": setPosition, "aria-selected": toAriaBoolean(selected), "aria-setsize": setSize, class: {
        [CSS.container]: true,
        [CSS.containerBorderSelected]: borderSelected,
        [CSS.containerBorderUnselected]: borderUnselected
      }, onFocus: this.focusCellNull, onKeyDown: this.handleItemKeyDown, role: "row", style: { "--calcite-list-item-spacing-indent-multiplier": `${this.visualLevel}` }, tabIndex: active ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.containerEl = el) }, this.renderSelected(), this.renderOpen(), this.renderActionsStart(), this.renderContentContainer(), this.renderActionsEnd()), h("div", { class: {
        [CSS.nestedContainer]: true,
        [CSS.nestedContainerHidden]: openable && !open
      } }, h("slot", { onSlotchange: this.handleDefaultSlotChange }))));
  }
  setSelectionDefaults() {
    const { parentListEl, selectionMode, selectionAppearance } = this;
    if (!parentListEl) {
      return;
    }
    if (!selectionMode) {
      this.selectionMode = parentListEl.selectionMode;
    }
    if (!selectionAppearance) {
      this.selectionAppearance = parentListEl.selectionAppearance;
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "active": ["activeHandler"],
    "selected": ["handleSelectedChange"]
  }; }
};
ListItem.style = listItemCss;

export { ListItem as calcite_list_item };

//# sourceMappingURL=calcite-list-item.entry.js.map