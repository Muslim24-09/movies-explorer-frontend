import React from "react";

import './Footer.css';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<div className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</div>
					<div className="footer__flex">
						<div className="footer__year">&#169;2023</div>
						<div className="footer__links">
							<a href="https://practicum.yandex.ru/profile/web/" className="footer__link">Яндекс.Практикум</a>
							<a href="https://github.com/Muslim24-09" className="footer__link">Github</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}