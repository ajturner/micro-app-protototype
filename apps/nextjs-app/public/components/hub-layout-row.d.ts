import type { Components, JSX } from "../types/components";

interface HubLayoutRow extends Components.HubLayoutRow, HTMLElement {}
export const HubLayoutRow: {
  prototype: HubLayoutRow;
  new (): HubLayoutRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
