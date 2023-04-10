import type { Components, JSX } from "../types/components";

interface ComponentGallery extends Components.ComponentGallery, HTMLElement {}
export const ComponentGallery: {
  prototype: ComponentGallery;
  new (): ComponentGallery;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
