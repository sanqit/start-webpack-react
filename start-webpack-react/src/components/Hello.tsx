import * as React from "react";
import "./Hello.scss";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        const {compiler, framework} = this.props;
        return <h1 className="hello">Hello from {compiler} and {framework}!</h1>;
    }
}