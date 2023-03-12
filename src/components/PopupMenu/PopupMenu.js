import React from "react";
import { Link } from "react-router-dom";

import './PopupMenu.css';
import iconClose from '../../images/delete.svg';

export const PopupMenu = ({ isOpened, menuClosed }) => {
	return (
		<div className={isOpened ? 'popup' : "popup hidden"}>
			<div className="blackout "></div>
			<nav className="popup-menu">
				<button className="popup-menu__close" type="button" onClick={menuClosed}>
					<img src={iconClose} alt="iconClose" />
				</button>
				<ul className="popup-menu__links">
					<li className="popup-menu__link" onClick={menuClosed}><Link to="/">Главная</Link></li>
					<li className="popup-menu__link" onClick={menuClosed}><Link to="/movies">Фильмы</Link></li>
					<li className="popup-menu__link" onClick={menuClosed}><Link to="/saved-movies">Сохранённые фильмы</Link></li>
				</ul>
				<div className="popup-menu__btn">
					<Link className="popup-menu__account" to="/profile">Аккаунт</Link>
				</div>
			</nav>
		</div>
	)
}