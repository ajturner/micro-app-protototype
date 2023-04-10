'use strict';

const index = require('./index-e13107cb.js');
const dom = require('./dom-706b487b.js');
const resources$1 = require('./resources-df2280b8.js');
const resources = require('./resources-ba28780d.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const overflowActionsDebounceInMs = 150;
const groupBufferPx = 2;
const getAverage = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
const geActionDimensions = (actions) => {
  const actionLen = actions?.length;
  return {
    actionWidth: actionLen ? getAverage(actions.map((action) => action.clientWidth || 0)) : 0,
    actionHeight: actionLen ? getAverage(actions.map((action) => action.clientHeight || 0)) : 0
  };
};
const getMaxActionCount = ({ width, actionWidth, layout, height, actionHeight, groupCount }) => {
  const maxContainerPx = layout === "horizontal" ? width : height;
  const avgItemPx = layout === "horizontal" ? actionWidth : actionHeight;
  return Math.floor((maxContainerPx - groupCount * groupBufferPx) / avgItemPx);
};
const getOverflowCount = ({ layout, actionCount, actionWidth, width, actionHeight, height, groupCount }) => {
  return Math.max(actionCount - getMaxActionCount({ width, actionWidth, layout, height, actionHeight, groupCount }), 0);
};
const queryActions = (el) => {
  return Array.from(el.querySelectorAll("calcite-action")).filter((action) => action.closest("calcite-action-menu") ? action.slot === resources.SLOTS.trigger : true);
};
const overflowActions = ({ actionGroups, expanded, overflowCount }) => {
  let needToSlotCount = overflowCount;
  actionGroups.reverse().forEach((group) => {
    let slottedWithinGroupCount = 0;
    const groupActions = queryActions(group).reverse();
    groupActions.forEach((groupAction) => {
      if (groupAction.slot === resources$1.SLOTS.menuActions) {
        groupAction.removeAttribute("slot");
        groupAction.textEnabled = expanded;
      }
    });
    if (needToSlotCount > 0) {
      groupActions.some((groupAction) => {
        const unslottedActions = groupActions.filter((action) => !action.slot);
        if (unslottedActions.length > 1 && groupActions.length > 2 && !groupAction.closest("calcite-action-menu")) {
          groupAction.textEnabled = true;
          groupAction.setAttribute("slot", resources$1.SLOTS.menuActions);
          slottedWithinGroupCount++;
          if (slottedWithinGroupCount > 1) {
            needToSlotCount--;
          }
        }
        return needToSlotCount < 1;
      });
    }
    index.forceUpdate(group);
  });
};

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const ICONS = {
  chevronsLeft: "chevrons-left",
  chevronsRight: "chevrons-right"
};
function getCalcitePosition(position, el) {
  return position || el.closest("calcite-shell-panel")?.position || "start";
}
function toggleChildActionText({ parent, expanded }) {
  queryActions(parent)
    .filter((el) => el.slot !== resources$1.SLOTS.menuActions)
    .forEach((action) => (action.textEnabled = expanded));
  parent
    .querySelectorAll("calcite-action-group, calcite-action-menu")
    .forEach((el) => (el.expanded = expanded));
}
const setTooltipReference = ({ tooltip, referenceElement, expanded, ref }) => {
  if (tooltip) {
    tooltip.referenceElement = !expanded && referenceElement ? referenceElement : null;
  }
  if (ref) {
    ref(referenceElement);
  }
  return referenceElement;
};
const ExpandToggle = ({ expanded, intlExpand, intlCollapse, toggle, el, position, tooltip, ref, scale }) => {
  const rtl = dom.getElementDir(el) === "rtl";
  const expandText = expanded ? intlCollapse : intlExpand;
  const icons = [ICONS.chevronsLeft, ICONS.chevronsRight];
  if (rtl) {
    icons.reverse();
  }
  const end = getCalcitePosition(position, el) === "end";
  const expandIcon = end ? icons[1] : icons[0];
  const collapseIcon = end ? icons[0] : icons[1];
  const actionNode = (index.h("calcite-action", { icon: expanded ? expandIcon : collapseIcon, onClick: toggle, scale: scale, text: expandText, textEnabled: expanded,
    // eslint-disable-next-line react/jsx-sort-props
    ref: (referenceElement) => setTooltipReference({ tooltip, referenceElement, expanded, ref }) }));
  return actionNode;
};

exports.ExpandToggle = ExpandToggle;
exports.geActionDimensions = geActionDimensions;
exports.getOverflowCount = getOverflowCount;
exports.overflowActions = overflowActions;
exports.overflowActionsDebounceInMs = overflowActionsDebounceInMs;
exports.queryActions = queryActions;
exports.toggleChildActionText = toggleChildActionText;

//# sourceMappingURL=ExpandToggle-fdbb813b.js.map