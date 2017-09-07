declare module static {
}
declare module SampleStatic1 {
}
declare module SampleStatic2 {
}
declare class SampleStatic3 {
    private static;
}
declare class SampleStatic4 {
    private var;
    static: any;
}
declare class SampleStatic5 {
    static(): void;
}
interface SampleStatic6 {
    static: any;
}
declare function methodStatic(static: any): void;
declare var static: any;
