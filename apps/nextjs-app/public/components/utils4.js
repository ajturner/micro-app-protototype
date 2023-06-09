/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
/**
 * This module provides utils to fix positioning across shadow DOM in browsers that follow the updated offsetParent spec https://github.com/w3c/csswg-drafts/issues/159
 */
function offsetParent(element) {
  // Do an initial walk to check for display:none ancestors.
  for (let ancestor = element; ancestor; ancestor = flatTreeParent(ancestor)) {
    if (!(ancestor instanceof Element)) {
      continue;
    }
    if (getComputedStyle(ancestor).display === "none") {
      return null;
    }
  }
  for (let ancestor = flatTreeParent(element); ancestor; ancestor = flatTreeParent(ancestor)) {
    if (!(ancestor instanceof Element)) {
      continue;
    }
    const style = getComputedStyle(ancestor);
    // Display:contents nodes aren't in the layout tree so they should be skipped.
    if (style.display === "contents") {
      continue;
    }
    if (style.position !== "static" || style.filter !== "none") {
      return ancestor;
    }
    if (ancestor.tagName === "BODY") {
      return ancestor;
    }
  }
  return null;
}
function flatTreeParent(element) {
  if (element.assignedSlot) {
    return element.assignedSlot;
  }
  if (element.parentNode instanceof ShadowRoot) {
    return element.parentNode.host;
  }
  return element.parentNode;
}

export { offsetParent };

//# sourceMappingURL=utils4.js.map