import { h } from './index-9b24d2d4.js';

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
  return h(HeadingTag, { ...props }, children);
};

export { Heading as H, constrainHeadingLevel as c };

//# sourceMappingURL=Heading-44708bf6.js.map