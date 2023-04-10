import type { Components, JSX } from "../types/components";

interface ComponentGalleryGrid extends Components.ComponentGalleryGrid, HTMLElement {}
export const ComponentGalleryGrid: {
  prototype: ComponentGalleryGrid;
  new (): ComponentGalleryGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
