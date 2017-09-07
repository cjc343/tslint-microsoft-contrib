declare module WrapperModule {
}
declare module SampleModule1 {
}
declare module SampleModule2 {
}
declare class SampleModule3 {
    private module;
}
declare class SampleModule4 {
    private var;
    module: any;
}
declare class SampleModule5 {
    module(): void;
    method(module: any): void;
    private func;
}
interface SampleModule6 {
    module: any;
}
declare function methodModule(module: any): void;
