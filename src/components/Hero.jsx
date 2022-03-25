import React from "react";

const Hero = () => {
	return (
		<header className="hero">
			<div className="hero-info-container">
				<h1 className="main-title hero-title">Vanilla Land</h1>
				<p className="hero-text">
					As a big journey is made of many small steps, and big things are made
					of small components, here you can see some of the little pieces I made
					on my way into the the mastery of the webdevepment building blocks,
					<span> HTML5</span>,<span> CSS3</span> and <span>Javascript</span>
				</p>
				<a href="#projects">
					<button className="hero-btn">Go to Projects</button>
				</a>
			</div>
			<img src="../js-logo.png" alt="" className="hero-img" />
		</header>
	);
};

export default Hero;
// vanilla-projects\src\js-logo.jpg
// D:\Programação\gitfolder\my_projects\javascript-projects\vanilla-projects\src\js.jpg   html, css and javascript logos
