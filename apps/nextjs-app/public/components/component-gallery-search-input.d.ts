import type { Components, JSX } from "../types/components";

interface ComponentGallerySearchInput extends Components.ComponentGallerySearchInput, HTMLElement {}
export const ComponentGallerySearchInput: {
  prototype: ComponentGallerySearchInput;
  new (): ComponentGallerySearchInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
