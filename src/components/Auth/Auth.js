import React from "react";
import { Link, NavLink } from "react-router-dom";

import './Auth.css';

export const Auth = ({title, btnName, btnSubTitle, btnLink, btnNavLink, children}) => {
	return(
		<div className="wrapper_auth">
		<header className="header">
			<div className="header__links">
				<Link to="/" className="logo" />
			</div>
		</header>
		<main className="main">
			<section className="auth">
				<h2 className="auth__title">{title}</h2>
				<form action="#" className="auth__form" noValidate>
					<div className="auth__top">
						{children}
					</div>
					<div className="auth__bottom">
						<button type="submit" className="auth__btn-submit">{btnName}</button>
						<p className="auth__info">{btnSubTitle}
							<NavLink to={btnNavLink} className="auth__login">{btnLink}</NavLink>
						</p>
					</div>
				</form>
			</section>
		</main>
	</div>
	)
}


