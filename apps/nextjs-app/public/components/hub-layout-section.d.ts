import type { Components, JSX } from "../types/components";

interface HubLayoutSection extends Components.HubLayoutSection, HTMLElement {}
export const HubLayoutSection: {
  prototype: HubLayoutSection;
  new (): HubLayoutSection;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
