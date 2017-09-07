declare module WrapperRequire {
}
declare module SampleRequire1 {
}
declare module SampleRequire2 {
}
declare class SampleRequire3 {
    private require;
}
declare class SampleRequire4 {
    private var;
    require: any;
}
declare class SampleRequire5 {
    require(): void;
    method(require: any): void;
    private func;
}
interface SampleRequire6 {
    require: any;
}
declare function methodRequire(require: any): void;
