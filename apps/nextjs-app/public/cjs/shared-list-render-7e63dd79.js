'use strict';

const array = require('./array-48ba30e4.js');
const dom = require('./dom-706b487b.js');
const resources = require('./resources-512c8863.js');
const debounce = require('./debounce-11980960.js');
const index = require('./index-e13107cb.js');
const resources$1 = require('./resources-9d891ff3.js');

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
  this.emitCalciteListChange = debounce.debounce(internalCalciteListChangeEvent.bind(this), 0);
  this.emitCalciteListFilter = debounce.debounce(internalCalciteListFilterEvent.bind(this), 0);
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
      dom.focusElement(item);
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
  dom.focusElement(item);
}
function moveItemIndex(list, item, direction) {
  const { items } = list;
  const { length: totalItems } = items;
  const currentIndex = items.indexOf(item);
  const directionFactor = direction === "up" ? -1 : 1;
  let moveOffset = 1;
  let index = array.getRoundRobinIndex(currentIndex + directionFactor * moveOffset++, totalItems);
  const firstMovedIndex = index;
  while (items[index].disabled) {
    index = array.getRoundRobinIndex(currentIndex + directionFactor * moveOffset++, totalItems);
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
  if (item.parentElement.tagName === "CALCITE-PICK-LIST-GROUP" && item.slot === resources.SLOTS.parentItem) {
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
    await dom.focusElement(this.filterEl);
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
    const parentItem = dom.getSlotted(group, "parent-item");
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
  const defaultSlot = index.h("slot", null);
  return (index.h(index.Host, { "aria-busy": dom.toAriaBoolean(loading), role: "menu", ...rest }, index.h("section", null, dragEnabled ? (index.h("span", { "aria-live": "assertive", class: "assistive-text",
    // eslint-disable-next-line react/jsx-sort-props
    ref: storeAssistiveEl })) : null, index.h("header", { class: { [resources$1.CSS.sticky]: true } }, filterEnabled ? (index.h("calcite-filter", { "aria-label": filterPlaceholder, disabled: loading || disabled, items: dataForFilter, onCalciteFilterChange: handleFilterEvent, placeholder: filterPlaceholder, value: filterText,
    // eslint-disable-next-line react/jsx-sort-props
    ref: setFilterEl })) : null, index.h("slot", { name: resources$1.SLOTS.menuActions })), loading ? index.h("calcite-scrim", { loading: loading }) : null, defaultSlot)));
};

exports.List = List;
exports.calciteInternalListItemValueChangeHandler = calciteInternalListItemValueChangeHandler;
exports.calciteListFocusOutHandler = calciteListFocusOutHandler;
exports.calciteListItemChangeHandler = calciteListItemChangeHandler;
exports.cleanUpObserver = cleanUpObserver;
exports.deselectRemovedItems = deselectRemovedItems;
exports.deselectSiblingItems = deselectSiblingItems;
exports.getItemData = getItemData;
exports.getItemIndex = getItemIndex;
exports.handleFilter = handleFilter;
exports.handleFilterEvent = handleFilterEvent;
exports.handleInitialFilter = handleInitialFilter;
exports.initialize = initialize;
exports.initializeObserver = initializeObserver;
exports.keyDownHandler = keyDownHandler;
exports.moveItemIndex = moveItemIndex;
exports.mutationObserverCallback = mutationObserverCallback;
exports.removeItem = removeItem;
exports.selectSiblings = selectSiblings;
exports.setFocus = setFocus;
exports.setUpItems = setUpItems;

//# sourceMappingURL=shared-list-render-7e63dd79.js.map