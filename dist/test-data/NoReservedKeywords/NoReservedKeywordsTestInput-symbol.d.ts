declare module WrapperSymbol {
}
declare module SampleSymbol1 {
}
declare module SampleSymbol2 {
}
declare class SampleSymbol3 {
    private symbol;
}
declare class SampleSymbol4 {
    private var;
    symbol: any;
}
declare class SampleSymbol5 {
    symbol(): void;
    method(symbol: any): void;
    private func;
}
interface SampleSymbol6 {
    symbol: any;
}
declare function methodSymbol(symbol: any): void;
declare var symbol: any;
