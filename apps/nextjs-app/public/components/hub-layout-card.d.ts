import type { Components, JSX } from "../types/components";

interface HubLayoutCard extends Components.HubLayoutCard, HTMLElement {}
export const HubLayoutCard: {
  prototype: HubLayoutCard;
  new (): HubLayoutCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
