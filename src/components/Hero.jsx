import React from "react";
import NavBar from "./NavBar";
import "./hero.css";

const Hero = () => {
	return (
		<header className="header">
			<NavBar />
			<div className="hero">
				<div className="hero-info-container">
					<h1 className="main-title hero-title">Vanilla Land</h1>
					<p className="hero-text">
						As a big journey is made of many small steps, and big things are
						made of small pieces, here you can see some of the little steps I
						made on my way into the the mastery of the web devepment building
						blocks,
						<span> HTML5</span>,<span> CSS3</span> and <span>Javascript</span>
					</p>
					<a href="#projects">
						<button className="hero-btn">Go to Projects</button>
					</a>
				</div>
				<img src="../js-logo.png" alt="" className="hero-img" />
			</div>
		</header>
	);
};

export default Hero;
