declare module WrapperSet {
}
declare module SampleSet1 {
}
declare module SampleSet2 {
}
declare class SampleSet3 {
    private set;
}
declare class SampleSet4 {
    private var;
    set: any;
}
declare class SampleSet5 {
    set(): void;
    method(set: any): void;
    private func;
}
interface SampleSet6 {
    set: any;
}
declare function methodSet(set: any): void;
declare var set: any;
