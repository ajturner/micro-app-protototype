import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-9b24d2d4.js';
import { a as getSlotted, s as slotChangeHasAssignedElement, b as getElementDir, t as toAriaBoolean, y as filterDirectChildren, n as nodeListToArray } from './dom-67db067b.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-b360d7fb.js';
import { u as updateHostInteraction } from './interactive-5738af71.js';
import { o as onToggleOpenCloseComponent } from './openCloseComponent-77161dfa.js';
import { C as CSS_UTILITY } from './resources-2916eda2.js';
import './guid-89dde75d.js';
import './observers-38221b96.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const CSS = {
  actionsEnd: "actions-end",
  checkboxLabel: "checkbox-label",
  checkbox: "checkbox",
  chevron: "chevron",
  nodeContainer: "node-container",
  childrenContainer: "children-container",
  bulletPointIcon: "bullet-point",
  checkmarkIcon: "checkmark",
  itemExpanded: "item--expanded",
  iconStart: "icon-start",
  nodeAndActionsContainer: "node-actions-container"
};
const SLOTS = {
  actionsEnd: "actions-end",
  children: "children"
};
const ICONS = {
  bulletPoint: "bullet-point",
  checkmark: "check",
  chevronRight: "chevron-right",
  blank: "blank"
};

const treeItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block;max-inline-size:100%;cursor:pointer;color:var(--calcite-ui-text-3)}[hidden]{display:none}.node-actions-container{display:flex;justify-content:space-between}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .node-actions-container{min-block-size:1.5rem}:host([scale=s]) .node-actions-container .node-container .checkbox,:host([scale=s]) .node-actions-container .node-container .chevron,:host([scale=s]) .node-actions-container .node-container .checkmark,:host([scale=s]) .node-actions-container .node-container .bullet-point{margin-inline:0.25rem}:host([scale=s]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .node-actions-container{min-block-size:2rem}:host([scale=m]) .node-actions-container .node-container .checkbox,:host([scale=m]) .node-actions-container .node-container .chevron,:host([scale=m]) .node-actions-container .node-container .checkmark,:host([scale=m]) .node-actions-container .node-container .bullet-point{margin-inline:0.5rem}:host([scale=m]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .node-actions-container{min-block-size:2.75rem}:host([scale=l]) .node-actions-container .node-container .checkbox,:host([scale=l]) .node-actions-container .node-container .chevron,:host([scale=l]) .node-actions-container .node-container .checkmark,:host([scale=l]) .node-actions-container .node-container .bullet-point{margin-inline:0.75rem}:host([scale=l]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([lines]) .children-container:after{position:absolute;inset-block-start:0px;z-index:1;inline-size:1px;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;block-size:96%;content:\"\";background-color:var(--calcite-ui-border-2)}:host(:not([lines])) .node-container:after{display:none}::slotted(*){min-inline-size:0px;max-inline-size:100%;overflow-wrap:break-word;color:inherit;text-decoration:none !important}::slotted(*):hover{text-decoration:none !important}::slotted(a){inline-size:100%;text-decoration-line:none}:host{outline-color:transparent}:host:focus,:host:active{outline:2px solid transparent;outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host(:focus:not([disabled])){outline:2px solid transparent;outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.actions-end{display:flex;flex-direction:row;align-items:center;align-self:stretch}.checkbox{line-height:0}.checkbox-label{pointer-events:none;display:flex;align-items:center}.checkbox:focus{outline:2px solid transparent;outline-offset:2px}.children-container{position:relative;block-size:0px;overflow:hidden;margin-inline-start:1.25rem;transform:scaleY(0);opacity:0;transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out;transform-origin:top}.item--expanded>.children-container{overflow:visible;opacity:1;block-size:auto}.node-container{position:relative;display:flex;min-inline-size:0px;align-items:center}.node-container .checkmark,.node-container .bullet-point{opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;color:var(--calcite-ui-border-1)}.node-container:hover .checkmark,.node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark,:host([selected]) .node-container:hover .bullet-point,:host(:focus:not([disabled])) .node-container .checkmark,:host(:focus:not([disabled])) .node-container .bullet-point{opacity:1}:host([selected]) .node-container,:host([selected]) .node-container:hover{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected]) .node-container .bullet-point,:host([selected]) .node-container .checkmark,:host([selected]) .node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark{opacity:1;color:var(--calcite-ui-brand)}:host([selection-mode=none]:not([has-children])):host([scale=s]) .node-container{padding-inline-start:0.5rem}:host([selection-mode=none]:not([has-children])):host([scale=m]) .node-container{padding-inline-start:1rem}:host([selection-mode=none]:not([has-children])):host([scale=l]) .node-container{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=s]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.25rem}:host(:not([has-children])):host([scale=m]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=l]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.75rem}:host([has-children]) .node-container[data-selection-mode=ancestors] .checkbox{margin-inline-start:0}:host([has-children]) .node-container .bullet-point,:host([has-children]) .node-container .checkmark{display:none}:host([has-children][expanded]:not([selected]):not([selection-mode=none])) .node-container ::slotted(*){font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([has-children][selected]) .node-container[data-selection-mode=children],:host([has-children][selected]) .node-container[data-selection-mode=multichildren]{color:var(--calcite-ui-brand)}.chevron{position:relative;align-self:center;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;flex:0 0 auto;transform:rotate(0deg)}.calcite--rtl .chevron{transform:rotate(180deg)}.item--expanded .node-container>.chevron{transform:rotate(90deg)}:host([selected]) .checkmark,:host([selected]) .bullet-point{color:var(--calcite-ui-brand)}";

let TreeItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteInternalTreeItemSelect = createEvent(this, "calciteInternalTreeItemSelect", 6);
    this.openTransitionProp = "opacity";
    this.transitionProp = "expanded";
    this.iconClickHandler = (event) => {
      event.stopPropagation();
      this.expanded = !this.expanded;
    };
    this.childrenClickHandler = (event) => event.stopPropagation();
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.updateParentIsExpanded = (el, expanded) => {
      const items = getSlotted(el, SLOTS.children, {
        all: true,
        selector: "calcite-tree-item"
      });
      items.forEach((item) => (item.parentExpanded = expanded));
    };
    this.updateAncestorTree = () => {
      var _a;
      if (this.selected && this.selectionMode === "ancestors") {
        const ancestors = [];
        let parent = this.parentTreeItem;
        while (parent) {
          ancestors.push(parent);
          parent = (_a = parent.parentElement) === null || _a === void 0 ? void 0 : _a.closest("calcite-tree-item");
        }
        ancestors.forEach((item) => (item.indeterminate = true));
        return;
      }
    };
    this.actionsEndSlotChangeHandler = (event) => {
      this.hasEndActions = slotChangeHasAssignedElement(event);
    };
    this.disabled = false;
    this.expanded = false;
    this.iconFlipRtl = undefined;
    this.iconStart = undefined;
    this.selected = false;
    this.parentExpanded = false;
    this.depth = -1;
    this.hasChildren = null;
    this.lines = undefined;
    this.scale = undefined;
    this.indeterminate = undefined;
    this.selectionMode = undefined;
    this.updateAfterInitialRender = false;
    this.hasEndActions = false;
  }
  expandedHandler(newValue) {
    this.updateParentIsExpanded(this.el, newValue);
    onToggleOpenCloseComponent(this, true);
  }
  getselectionMode() {
    this.isSelectionMultiLike =
      this.selectionMode === "multiple" || this.selectionMode === "multichildren";
  }
  /**
   * Defines method for `beforeOpen` event handler.
   */
  onBeforeOpen() {
    this.transitionEl.style.transform = "scaleY(1)";
  }
  /**
   * Defines method for `open` event handler:
   */
  onOpen() {
    this.transitionEl.style.transform = "none";
  }
  /**
   * Defines method for `beforeClose` event handler:
   */
  onBeforeClose() {
    // pattern needs to be defined on how we emit events for components without `open` prop.
  }
  /**
   * Defines method for `close` event handler:
   */
  onClose() {
    this.transitionEl.style.transform = "scaleY(0)";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    this.parentTreeItem = (_a = this.el.parentElement) === null || _a === void 0 ? void 0 : _a.closest("calcite-tree-item");
    if (this.parentTreeItem) {
      const { expanded } = this.parentTreeItem;
      this.updateParentIsExpanded(this.parentTreeItem, expanded);
    }
    connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    disconnectConditionalSlotComponent(this);
  }
  componentWillRender() {
    var _a;
    this.hasChildren = !!this.el.querySelector("calcite-tree");
    this.depth = 0;
    let parentTree = this.el.closest("calcite-tree");
    if (!parentTree) {
      return;
    }
    this.selectionMode = parentTree.selectionMode;
    this.scale = parentTree.scale || "m";
    this.lines = parentTree.lines;
    let nextParentTree;
    while (parentTree) {
      nextParentTree = (_a = parentTree.parentElement) === null || _a === void 0 ? void 0 : _a.closest("calcite-tree");
      if (nextParentTree === parentTree) {
        break;
      }
      else {
        parentTree = nextParentTree;
        this.depth = this.depth + 1;
      }
    }
  }
  componentWillLoad() {
    if (this.expanded) {
      onToggleOpenCloseComponent(this, true);
    }
    requestAnimationFrame(() => (this.updateAfterInitialRender = true));
  }
  componentDidLoad() {
    this.updateAncestorTree();
  }
  componentDidRender() {
    updateHostInteraction(this, () => this.parentExpanded || this.depth === 1);
  }
  render() {
    const rtl = getElementDir(this.el) === "rtl";
    const showBulletPoint = this.selectionMode === "single" || this.selectionMode === "children";
    const showCheckmark = this.selectionMode === "multiple" || this.selectionMode === "multichildren";
    const showBlank = this.selectionMode === "none" && !this.hasChildren;
    const chevron = this.hasChildren ? (h("calcite-icon", { class: {
        [CSS.chevron]: true,
        [CSS_UTILITY.rtl]: rtl
      }, "data-test-id": "icon", icon: ICONS.chevronRight, onClick: this.iconClickHandler, scale: this.scale === "l" ? "m" : "s" })) : null;
    const defaultSlotNode = h("slot", { key: "default-slot" });
    const checkbox = this.selectionMode === "ancestors" ? (h("label", { class: CSS.checkboxLabel, key: "checkbox-label" }, h("calcite-checkbox", { checked: this.selected, class: CSS.checkbox, "data-test-id": "checkbox", indeterminate: this.hasChildren && this.indeterminate, scale: this.scale, tabIndex: -1 }), defaultSlotNode)) : null;
    const selectedIcon = showBulletPoint
      ? ICONS.bulletPoint
      : showCheckmark
        ? ICONS.checkmark
        : showBlank
          ? ICONS.blank
          : null;
    const itemIndicator = selectedIcon ? (h("calcite-icon", { class: {
        [CSS.bulletPointIcon]: selectedIcon === ICONS.bulletPoint,
        [CSS.checkmarkIcon]: selectedIcon === ICONS.checkmark,
        [CSS_UTILITY.rtl]: rtl
      }, icon: selectedIcon, scale: this.scale === "l" ? "m" : "s" })) : null;
    const hidden = !(this.parentExpanded || this.depth === 1);
    const isExpanded = this.updateAfterInitialRender && this.expanded;
    const { hasEndActions } = this;
    const slotNode = (h("slot", { key: "actionsEndSlot", name: SLOTS.actionsEnd, onSlotchange: this.actionsEndSlotChangeHandler }));
    const iconStartEl = (h("calcite-icon", { class: CSS.iconStart, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: this.scale === "l" ? "m" : "s" }));
    return (h(Host, { "aria-expanded": this.hasChildren ? toAriaBoolean(isExpanded) : undefined, "aria-hidden": toAriaBoolean(hidden), "aria-selected": this.selected ? "true" : showCheckmark ? "false" : undefined, "calcite-hydrated-hidden": hidden, role: "treeitem" }, h("div", { class: { [CSS.itemExpanded]: isExpanded } }, h("div", { class: CSS.nodeAndActionsContainer }, h("div", { class: {
        [CSS.nodeContainer]: true,
        [CSS_UTILITY.rtl]: rtl
      }, "data-selection-mode": this.selectionMode,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.defaultSlotWrapper = el) }, chevron, itemIndicator, this.iconStart ? iconStartEl : null, checkbox ? checkbox : defaultSlotNode), h("div", { class: CSS.actionsEnd, hidden: !hasEndActions }, slotNode)), h("div", { class: {
        [CSS.childrenContainer]: true,
        [CSS_UTILITY.rtl]: rtl
      }, "data-test-id": "calcite-tree-children", onClick: this.childrenClickHandler, role: this.hasChildren ? "group" : undefined,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => this.setTransitionEl(el) }, h("slot", { name: SLOTS.children })))));
  }
  setTransitionEl(el) {
    this.transitionEl = el;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick(event) {
    // Solve for if the item is clicked somewhere outside the slotted anchor.
    // Anchor is triggered anywhere you click
    const [link] = filterDirectChildren(this.el, "a");
    if (link && event.composedPath()[0].tagName.toLowerCase() !== "a") {
      const target = link.target === "" ? "_self" : link.target;
      window.open(link.href, target);
    }
    this.calciteInternalTreeItemSelect.emit({
      modifyCurrentSelection: this.selectionMode === "ancestors" || this.isSelectionMultiLike,
      forceToggle: false
    });
  }
  keyDownHandler(event) {
    let root;
    switch (event.key) {
      case " ":
        if (this.selectionMode === "none") {
          return;
        }
        this.calciteInternalTreeItemSelect.emit({
          modifyCurrentSelection: this.isSelectionMultiLike,
          forceToggle: false
        });
        event.preventDefault();
        break;
      case "Enter":
        if (this.selectionMode === "none") {
          return;
        }
        // activates a node, i.e., performs its default action. For parent nodes, one possible default action is to open or close the node. In single-select trees where selection does not follow focus (see note below), the default action is typically to select the focused node.
        const link = nodeListToArray(this.el.children).find((el) => el.matches("a"));
        if (link) {
          link.click();
          this.selected = true;
        }
        else {
          this.calciteInternalTreeItemSelect.emit({
            modifyCurrentSelection: this.isSelectionMultiLike,
            forceToggle: false
          });
        }
        event.preventDefault();
        break;
      case "Home":
        root = this.el.closest("calcite-tree:not([child])");
        const firstNode = root.querySelector("calcite-tree-item");
        firstNode === null || firstNode === void 0 ? void 0 : firstNode.focus();
        break;
      case "End":
        root = this.el.closest("calcite-tree:not([child])");
        let currentNode = root.children[root.children.length - 1]; // last child
        let currentTree = nodeListToArray(currentNode.children).find((el) => el.matches("calcite-tree"));
        while (currentTree) {
          currentNode = currentTree.children[root.children.length - 1];
          currentTree = nodeListToArray(currentNode.children).find((el) => el.matches("calcite-tree"));
        }
        currentNode === null || currentNode === void 0 ? void 0 : currentNode.focus();
        break;
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "selectionMode": ["getselectionMode"]
  }; }
};
TreeItem.style = treeItemCss;

export { TreeItem as calcite_tree_item };

//# sourceMappingURL=calcite-tree-item.entry.js.map