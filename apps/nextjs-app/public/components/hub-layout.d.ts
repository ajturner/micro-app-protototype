import type { Components, JSX } from "../types/components";

interface HubLayout extends Components.HubLayout, HTMLElement {}
export const HubLayout: {
  prototype: HubLayout;
  new (): HubLayout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
