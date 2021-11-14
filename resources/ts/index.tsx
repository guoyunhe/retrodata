import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./config/bootstrap";
import "./config/i18n";

const root = document.getElementById("app-root");

if (root) {
    ReactDOM.render(<App />, root);
}
