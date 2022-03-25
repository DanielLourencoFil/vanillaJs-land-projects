import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Hero from "./components/Hero";
import Loading from "./components/Loading";

ReactDOM.render(
	<React.StrictMode>
		{document.addEventListener("DOMContentLoaded", () => {
			<Loading />;
		})}
		<Hero />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
