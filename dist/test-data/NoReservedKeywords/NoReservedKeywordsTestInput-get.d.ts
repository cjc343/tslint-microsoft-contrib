declare module WrapperGet {
}
declare module SampleGet1 {
}
declare module SampleGet2 {
}
declare class SampleGet3 {
    private get;
}
declare class SampleGet4 {
    private var;
    get: any;
}
declare class SampleGet5 {
    get(): void;
    method(get: any): void;
    private func;
}
interface SampleGet6 {
    get: any;
}
declare function methodGet(get: any): void;
declare var get: any;
