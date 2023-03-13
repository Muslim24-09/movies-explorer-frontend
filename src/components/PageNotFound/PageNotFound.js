import React from "react";

import './PageNotFound.css';

export const PageNotFound = () => {
	return(
		<section className="not-found">
		<div className="not-found__flex">
			<div className="not-found__info">
				<p className="not-found__numbers">404</p>
				<p className="not-found__text">Страница не найдена</p>
			</div>
			<button to="/" className="not-found__link" onClick={() => window.history.go(-1)} >Назад</button>
		</div>
	</section>
	)
}