import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Header/Header";
import "./Navbar.scss";

interface NavbarProps{
	routs: any[];
}

const Navbar: React.FC<NavbarProps> = ({routs}) => {
	return (
		<nav className="navbar">
			<Header theme='dark'/>
			<div className="navbar__links">
				<ul>
					{
						routs.map((elem, index) => 
						<NavLink key={index} to={elem.route} 
							className={isActive => "navbar__link" + (isActive ? " navbar__link__selected" : "")}>
							{elem.name}
						</NavLink>
						)
					}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;