import { g as getRoundRobinIndex } from './array.js';
import { f as focusElement, a as getSlotted, t as toAriaBoolean } from './dom.js';
import { S as SLOTS } from './resources4.js';
import { d as debounce } from './debounce.js';
import { h, Host } from '@stencil/core/internal/client';
import { C as CSS, S as SLOTS$1 } from './resources3.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
function mutationObserverCallback() {
  this.setUpItems();
  this.setUpFilter();
  this.deselectRemovedItems();
}
const SUPPORTED_ARROW_KEYS = ["ArrowUp", "ArrowDown"];
// --------------------------------------------------------------------------
//
//  Lifecycle
//
// --------------------------------------------------------------------------
function initialize() {
  this.setUpItems();
  this.setUpFilter();
  this.emitCalciteListChange = debounce(internalCalciteListChangeEvent.bind(this), 0);
  this.emitCalciteListFilter = debounce(internalCalciteListFilterEvent.bind(this), 0);
}
function initializeObserver() {
  this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
}
function cleanUpObserver() {
  this.mutationObserver?.disconnect();
}
// --------------------------------------------------------------------------
//
//  Listeners
//
// --------------------------------------------------------------------------
function calciteListItemChangeHandler(event) {
  const { selectedValues } = this;
  const { item, value, selected, shiftPressed } = event.detail;
  if (selected) {
    if (this.multiple && shiftPressed) {
      this.selectSiblings(item);
    }
    if (!this.multiple) {
      this.deselectSiblingItems(item);
    }
    selectedValues.set(value, item);
  }
  else {
    selectedValues.delete(value);
    if (this.multiple && shiftPressed) {
      this.selectSiblings(item, true);
    }
  }
  if (!this.multiple) {
    toggleSingleSelectItemTabbing(item, selected);
    if (selected) {
      focusElement(item);
    }
  }
  this.lastSelectedItem = item;
  this.emitCalciteListChange();
}
function calciteInternalListItemValueChangeHandler(event) {
  const oldValue = event.detail.oldValue;
  const selectedValues = this.selectedValues;
  if (selectedValues.has(oldValue)) {
    const item = selectedValues.get(oldValue);
    selectedValues.delete(oldValue);
    selectedValues.set(event.detail.newValue, item);
  }
  event.stopPropagation();
}
// --------------------------------------------------------------------------
//
//  Private Methods
//
// --------------------------------------------------------------------------
function isValidNavigationKey(key) {
  return !!SUPPORTED_ARROW_KEYS.find((k) => k === key);
}
function calciteListFocusOutHandler(event) {
  const { el, items, multiple, selectedValues } = this;
  if (multiple) {
    return;
  }
  const focusedInside = el.contains(event.relatedTarget);
  if (focusedInside) {
    return;
  }
  filterOutDisabled(items).forEach((item) => {
    toggleSingleSelectItemTabbing(item, selectedValues.size === 0 ? item.contains(event.target) || event.target === item : item.selected);
  });
}
function keyDownHandler(event) {
  const { key, target } = event;
  if (!isValidNavigationKey(key)) {
    return;
  }
  const { items, multiple, selectionFollowsFocus } = this;
  const { length: totalItems } = items;
  const currentIndex = items.indexOf(target);
  if (!totalItems || currentIndex === -1) {
    return;
  }
  event.preventDefault();
  const index = moveItemIndex(this, target, key === "ArrowUp" ? "up" : "down");
  const item = items[index];
  items.forEach((i) => toggleSingleSelectItemTabbing(i, i === item));
  if (!multiple && selectionFollowsFocus) {
    item.selected = true;
  }
  focusElement(item);
}
function moveItemIndex(list, item, direction) {
  const { items } = list;
  const { length: totalItems } = items;
  const currentIndex = items.indexOf(item);
  const directionFactor = direction === "up" ? -1 : 1;
  let moveOffset = 1;
  let index = getRoundRobinIndex(currentIndex + directionFactor * moveOffset++, totalItems);
  const firstMovedIndex = index;
  while (items[index].disabled) {
    index = getRoundRobinIndex(currentIndex + directionFactor * moveOffset++, totalItems);
    if (index === firstMovedIndex) {
      break;
    }
  }
  return index;
}
function getItemIndex(list, item) {
  const { items } = list;
  return items.indexOf(item);
}
function filterOutDisabled(items) {
  return items.filter((item) => !item.disabled);
}
function internalCalciteListFilterEvent() {
  this.calciteListFilter.emit();
}
function internalCalciteListChangeEvent() {
  this.calciteListChange.emit(this.selectedValues);
}
function removeItem(event) {
  if (event.defaultPrevented) {
    return;
  }
  const item = event.target;
  const selectedValues = this.selectedValues;
  if (item.parentElement.tagName === "CALCITE-PICK-LIST-GROUP" && item.slot === SLOTS.parentItem) {
    item.parentElement.remove();
    Array.from(item.parentElement.children).forEach((item) => selectedValues.delete(item.value));
  }
  else {
    item.remove();
    selectedValues.delete(item.value);
  }
  this.emitCalciteListChange();
}
function toggleSingleSelectItemTabbing(item, selectable) {
  if (item.disabled) {
    return;
  }
  // using attribute intentionally
  if (selectable) {
    item.removeAttribute("tabindex");
  }
  else {
    item.setAttribute("tabindex", "-1");
  }
}
async function setFocus(focusId) {
  if (this.filterEnabled && focusId === "filter") {
    await focusElement(this.filterEl);
    return;
  }
  const { items, multiple, selectionFollowsFocus } = this;
  if (items.length === 0) {
    return;
  }
  if (multiple) {
    return filterOutDisabled(items)[0]?.setFocus();
  }
  const filtered = filterOutDisabled(items);
  const focusTarget = filtered.find((item) => item.selected) || filtered[0];
  if (selectionFollowsFocus && focusTarget) {
    focusTarget.selected = true;
  }
  return focusTarget.setFocus();
}
function setUpItems(tagName) {
  this.items = Array.from(this.el.querySelectorAll(tagName));
  let hasSelected = false;
  const { items } = this;
  items.forEach((item) => {
    item.icon = this.getIconType();
    if (!this.multiple) {
      item.deselectDisabled = true;
      toggleSingleSelectItemTabbing(item, false);
    }
    if (item.selected) {
      hasSelected = true;
      toggleSingleSelectItemTabbing(item, true);
      this.selectedValues.set(item.value, item);
    }
  });
  const [first] = items;
  if (!hasSelected && first && !first.disabled) {
    toggleSingleSelectItemTabbing(first, true);
  }
}
function deselectRemovedItems() {
  const selectedValues = this.selectedValues;
  const itemValues = this.items.map(({ value }) => value);
  selectedValues.forEach((selectedItem) => {
    if (!itemValues.includes(selectedItem.value)) {
      this.selectedValues.delete(selectedItem.value);
    }
  });
}
function deselectSiblingItems(item) {
  this.items.forEach((currentItem) => {
    if (currentItem.value !== item.value) {
      currentItem.toggleSelected(false);
      if (this.selectedValues.has(currentItem.value)) {
        this.selectedValues.delete(currentItem.value);
      }
    }
  });
}
function selectSiblings(item, deselect = false) {
  if (!this.lastSelectedItem) {
    return;
  }
  const { items } = this;
  const start = items.findIndex((currentItem) => {
    return currentItem.value === this.lastSelectedItem.value;
  });
  const end = items.findIndex((currentItem) => {
    return currentItem.value === item.value;
  });
  items.slice(Math.min(start, end), Math.max(start, end)).forEach((currentItem) => {
    currentItem.toggleSelected(!deselect);
    if (!deselect) {
      this.selectedValues.set(currentItem.value, currentItem);
    }
    else {
      this.selectedValues.delete(currentItem.value);
    }
  });
}
let groups;
function handleFilter(emit = false) {
  const { filteredData, filterText } = this;
  const values = filteredData.map((item) => item.value);
  let hasSelectedMatch = false;
  if (!groups) {
    groups = new Set();
  }
  const matchedItems = this.items?.filter((item) => {
    const parent = item.parentElement;
    const grouped = parent.matches("calcite-pick-list-group");
    if (grouped) {
      groups.add(parent);
    }
    const matches = filterText ? values.includes(item.value) : true;
    item.hidden = !matches;
    if (!hasSelectedMatch) {
      hasSelectedMatch = matches && item.selected;
    }
    return matches;
  }) || [];
  groups.forEach((group) => {
    const hasAtLeastOneMatch = matchedItems.some((item) => group.contains(item));
    group.hidden = !hasAtLeastOneMatch;
    if (!hasAtLeastOneMatch) {
      return;
    }
    const parentItem = getSlotted(group, "parent-item");
    if (parentItem) {
      parentItem.hidden = false;
      if (matchedItems.includes(parentItem)) {
        Array.from(group.children).forEach((child) => (child.hidden = false));
      }
    }
  });
  groups.clear();
  if (matchedItems.length > 0 && !hasSelectedMatch && !this.multiple) {
    toggleSingleSelectItemTabbing(matchedItems[0], true);
  }
  this.setFilteredItems(matchedItems);
  if (emit) {
    this.emitCalciteListFilter();
  }
}
function handleInitialFilter() {
  const filteredItems = this.filterEl?.filteredItems;
  if (filteredItems) {
    this.filteredData = filteredItems;
  }
  this.handleFilter();
}
function handleFilterEvent(event) {
  event.stopPropagation();
  const { filteredItems, value } = event.currentTarget;
  this.filterText = value;
  this.filteredData = filteredItems;
  this.handleFilter(true);
}
function getItemData() {
  return this.items.map((item) => ({
    label: item.label,
    description: item.description,
    metadata: item.metadata,
    value: item.value
  }));
}

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const List = ({ props: { disabled, loading, filterEnabled, dataForFilter, handleFilterEvent, filterPlaceholder, filterText, setFilterEl, dragEnabled, storeAssistiveEl }, ...rest }) => {
  const defaultSlot = h("slot", null);
  return (h(Host, { "aria-busy": toAriaBoolean(loading), role: "menu", ...rest }, h("section", null, dragEnabled ? (h("span", { "aria-live": "assertive", class: "assistive-text",
    // eslint-disable-next-line react/jsx-sort-props
    ref: storeAssistiveEl })) : null, h("header", { class: { [CSS.sticky]: true } }, filterEnabled ? (h("calcite-filter", { "aria-label": filterPlaceholder, disabled: loading || disabled, items: dataForFilter, onCalciteFilterChange: handleFilterEvent, placeholder: filterPlaceholder, value: filterText,
    // eslint-disable-next-line react/jsx-sort-props
    ref: setFilterEl })) : null, h("slot", { name: SLOTS$1.menuActions })), loading ? h("calcite-scrim", { loading: loading }) : null, defaultSlot)));
};

export { List as L, deselectSiblingItems as a, handleFilterEvent as b, initializeObserver as c, deselectRemovedItems as d, cleanUpObserver as e, handleInitialFilter as f, getItemData as g, handleFilter as h, initialize as i, calciteListItemChangeHandler as j, keyDownHandler as k, calciteInternalListItemValueChangeHandler as l, mutationObserverCallback as m, calciteListFocusOutHandler as n, setUpItems as o, setFocus as p, getItemIndex as q, removeItem as r, selectSiblings as s, moveItemIndex as t };

//# sourceMappingURL=shared-list-render.js.map