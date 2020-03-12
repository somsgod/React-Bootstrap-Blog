import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/configureStore";

const { PUBLIC_URL } = process.env;

ReactDOM.render(
	<App store={store} basename={PUBLIC_URL}/>,
	document.getElementById("root")
);
