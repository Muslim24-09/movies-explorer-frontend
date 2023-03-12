import React from "react";

import './NavTab.css';

export const NavTab = () => {
	return (
		<nav className="promo__nav-tab nav-tab">
			<a href="#aboutProj" className="nav-tab__item">О проекте</a>
			<a href="#techs" className="nav-tab__item">Технологии</a>
			<a href="#student" className="nav-tab__item">Студент</a>
		</nav>
	)
}