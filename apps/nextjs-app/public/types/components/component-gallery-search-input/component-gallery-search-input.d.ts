import { EventEmitter } from "../../stencil-public-runtime";
export declare class ComponentGallerySearchInput {
  /**
   * Query string to show in input.
   * Search function happens outside this component
   */
  query: string;
  search: EventEmitter<string>;
  onInput(event: any): void;
  render(): any;
}
