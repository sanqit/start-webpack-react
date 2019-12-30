import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss"

import  App from "./app";

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById("app"));
}

try {
    renderApp();
} catch (err) {
    console.log(`Logger:${err}`);
}