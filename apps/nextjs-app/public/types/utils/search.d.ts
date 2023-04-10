import Fuse from 'fuse.js';
export declare function getIndex(): Fuse<any>;
export declare function createSearchIndex(): Fuse<any>;
export declare function addRecord(record: any): void;
export declare function getFilters(): {
  status: any[];
  type: any[];
};
export declare function buildSearchInput(query?: string, filters?: {}): Object;
export declare function search(query: any, filters: any): any[];
export type SearchFilters = Record<string, Array<string>>;
