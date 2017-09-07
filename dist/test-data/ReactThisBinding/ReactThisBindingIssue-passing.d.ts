import React = require('react');
export declare class BaseClass extends React.Component<{}, {}> {
    notALocalMethod(): void;
}
export declare class MyComponent extends BaseClass {
    constructor(props: any, context: any);
    private listener1();
    private listener2();
    private listener3;
    render(): JSX.Element;
}
