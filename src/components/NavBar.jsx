import React from "react";
import Logo from "./Logo";
import Social_Icons from "./Social_Icons";
import NavLinks from "./NavLinks";

const NavBar = () => {
	return (
		<nav className="nav-container" id="navbar">
			<div className="nav-center">
				<Logo />
				<NavLinks />
				<Social_Icons />
			</div>
		</nav>
	);
};

export default NavBar;
