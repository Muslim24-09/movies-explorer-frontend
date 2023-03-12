import React from "react";
import { Link, NavLink } from "react-router-dom";

import './Navigation.css';

// переименовать классы

export const Navigation = ({setIsOpened}) => {
	const handleOpen = () => {
		setIsOpened(true)
	}
	return (
		<nav className="navigation container">
			<div className="navigation__links">
				<NavLink to="/" className="logo" />
				<div className="navigation__flex">
					<NavLink to="/movies" className="films_active">Фильмы</NavLink>
					<NavLink to="/saved-movies" className="films">Сохранённые фильмы</NavLink>
				</div>
			</div>
			<Link to='/profile' className="navigation__account ">Аккаунт</Link>
			<button type="menu" className="navigation__burger" onClick={handleOpen}></button>
		</nav>		
	)
}