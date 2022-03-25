import React, { useState } from "react";
import Logo from "./Logo";
import Social_Icons from "./Social_Icons";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
	const [toggle, setToggle] = useState(false);
	console.log(toggle);
	return (
		<nav className="nav-container" id="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<Logo />
					<FaBars className="burguer-icon" onClick={() => setToggle(!toggle)} />
				</div>
				<div className={`nav-footer ${toggle ? "show-container" : ""}`}>
					<NavLinks />
					<Social_Icons />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
