import React from "react";
import { Link } from "react-router-dom";

import './Header.css';

export const Header = () => {
	return (
		<header className="header container">
			<Link to={'/'} className="logo" />
			<div className="registration-btns">
				<Link className="button-registration" to="/signup" >Регистрация</Link>
				<Link className="button-signin" to="/signin" >Войти</Link>
			</div>
		</header>
	)
}