import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SectionProjects from "./components/SectionProjects";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import BackTopBtn from "./components/BackTopBtn";
import {
	dataProjects,
	dataProjectsCourses,
	dataProjectsSpecial,
} from "./dataProjects";

ReactDOM.render(
	<React.StrictMode>
		{document.addEventListener("DOMContentLoaded", () => {
			<Loading />;
		})}
		<Hero />
		<SectionProjects
			data={dataProjectsSpecial}
			title={"Special Project"}
			display={"flex"}
			width={"60%"}
		/>
		<SectionProjects
			data={dataProjects}
			title={"Basic Projects"}
			bgColor={"var(--js-color-200)"}
		/>
		<SectionProjects data={dataProjectsCourses} title={"Courses Projects"} />
		<Footer />
		<BackTopBtn />
	</React.StrictMode>,
	document.getElementById("root")
);
