import { EventEmitter } from '../../stencil-public-runtime';
import { SearchFilters } from '../../utils/search';
export declare class ComponentGalleryFilterSidebar {
  filters: Record<string, Array<string>>;
  filtersUpdated: EventEmitter<SearchFilters>;
  private filtersEl;
  onFilterChanged(_event: any): void;
  render(): any;
}
