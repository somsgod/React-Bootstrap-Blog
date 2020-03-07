import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const { PUBLIC_URL } = process.env;

ReactDOM.render(
	<App basename={PUBLIC_URL}/>,
	document.getElementById("root")
);
