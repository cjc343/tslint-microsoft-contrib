declare module package {
}
declare module SamplePackage1 {
}
declare module SamplePackage2 {
}
declare class SamplePackage3 {
    private package;
}
declare class SamplePackage4 {
    private var;
    package: any;
}
declare class SamplePackage5 {
    package(): void;
}
interface SamplePackage6 {
    package: any;
}
declare function methodPackage(package: any): void;
declare var package: any;
