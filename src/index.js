import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SectionProjects from "./components/SectionProjects";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import dataProjects from "./dataProjects";

ReactDOM.render(
	<React.StrictMode>
		{document.addEventListener("DOMContentLoaded", () => {
			<Loading />;
		})}

		<Hero />
		<SectionProjects data={dataProjects} title={"Basic Projects"} />
		<SectionProjects data={dataProjects} title={"Courses Projects"} />
	</React.StrictMode>,
	document.getElementById("root")
);
