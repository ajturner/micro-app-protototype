import { SearchFilters } from '../../utils/search';
export declare class ComponentGallery {
  /**
   * Set the type & status filters on the gallery.
   * Each filter type is `and` (both), while the array are `or` (any of)
   * Example: filters={ type: ['Discussions', 'Telemetry], status: ['Production']}
   */
  filters: Record<string, Array<string>>;
  /**
   * Set the query string to search the title
   */
  query: string;
  components: any[];
  filteredComponents: any[];
  filterOptions: Record<string, Array<string>>;
  searchIndex: import("fuse.js").default<any>;
  componentWillLoad(): Promise<void>;
  /**
   * Load the data/components.json configuration file
   */
  private loadConfig;
  /**
   * Sort components by lowercase title
   * @param components array of components to srt
   */
  private sortComponents;
  /**
   * Small function to check if filters are empty or not
   * @param filters
   */
  private checkFiltersExist;
  handleSearch(): void;
  handleQuery(query: string): void;
  handleFilterUpdated(filters?: SearchFilters): void;
  render(): any;
}
