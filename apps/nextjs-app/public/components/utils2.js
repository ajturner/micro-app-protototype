import { p as nodeListToArray } from './dom.js';
import { Build } from '@stencil/core/internal/client';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const ComboboxItem = "CALCITE-COMBOBOX-ITEM";
const ComboboxItemGroup = "CALCITE-COMBOBOX-ITEM-GROUP";
const ComboboxChildSelector = `${ComboboxItem}, ${ComboboxItemGroup}`;

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
function getAncestors(element) {
  const parent = element.parentElement?.closest(ComboboxChildSelector);
  const grandparent = parent?.parentElement?.closest(ComboboxChildSelector);
  return [parent, grandparent].filter((el) => el);
}
function getItemAncestors(item) {
  return (item.ancestors?.filter((el) => el.nodeName === "CALCITE-COMBOBOX-ITEM") || []);
}
function getItemChildren(item) {
  return nodeListToArray(item.querySelectorAll("calcite-combobox-item"));
}
function hasActiveChildren(node) {
  const items = nodeListToArray(node.querySelectorAll("calcite-combobox-item"));
  return items.filter((item) => item.selected).length > 0;
}
function getDepth(element) {
  if (!Build.isBrowser) {
    return 0;
  }
  const result = document.evaluate("ancestor::calcite-combobox-item", element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return result.snapshotLength;
}

export { ComboboxItemGroup as C, ComboboxChildSelector as a, getItemChildren as b, ComboboxItem as c, getAncestors as d, getDepth as e, getItemAncestors as g, hasActiveChildren as h };

//# sourceMappingURL=utils2.js.map