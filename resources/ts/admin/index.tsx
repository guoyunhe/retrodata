import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./bootstrap";

const root = document.getElementById("app-root");

if (root) {
    ReactDOM.render(<App />, root);
}
