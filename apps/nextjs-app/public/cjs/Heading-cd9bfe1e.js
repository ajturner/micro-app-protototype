'use strict';

const index = require('./index-4922fbcf.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const Heading = (props, children) => {
  const HeadingTag = props.level ? `h${props.level}` : "div";
  delete props.level;
  return index.h(HeadingTag, { ...props }, children);
};

exports.Heading = Heading;
exports.constrainHeadingLevel = constrainHeadingLevel;

//# sourceMappingURL=Heading-cd9bfe1e.js.map