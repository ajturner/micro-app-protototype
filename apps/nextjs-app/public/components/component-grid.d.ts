import type { Components, JSX } from "../types/components";

interface ComponentGrid extends Components.ComponentGrid, HTMLElement {}
export const ComponentGrid: {
  prototype: ComponentGrid;
  new (): ComponentGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
