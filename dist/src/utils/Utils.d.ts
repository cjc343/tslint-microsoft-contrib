export declare module Utils {
    function exists<T>(list: T[], predicate: (t: T) => boolean): boolean;
    function contains<T>(list: T[], element: T): boolean;
    function removeAll<T>(source: T[], elementsToRemove: T[]): T[];
    function remove<T>(source: T[], elementToRemove: T): T[];
    function trimTo(source: string, maxLength: number): string;
}
