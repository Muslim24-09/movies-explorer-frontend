import React from "react";


import arrow from '../../images/arrow.svg';
import './Portfolio.css';

export const Portfolio = () => {
	return (
		<section className="portfolio container">
			<h2 className="portfolio__title title-portfolio">
				Портфолио
			</h2>
			<ul className="portfolio__list">
				<li className="portfolio__item">
					<p>Статичный сайт
						<a
							target={"_blank"}
							rel="noreferrer"
							href="https://Muslim24-09.github.io/how-to-learn/"
							className="portfolio__link">
							<img src={arrow} alt="" />
						</a>
					</p>
				</li>
				<li className="portfolio__item">
					<p>Адаптивный сайт
						<a
							target={"_blank"}
							rel="noreferrer"
							href="https://muslim24-09.github.io/russian-travel/"
							className="portfolio__link">
							<img src={arrow} alt="" />
						</a>
					</p>
				</li>
				<li className="portfolio__item">
					<p>Одностраничное приложение
						<a
							target={"_blank"}
							rel="noreferrer"
							href='https://mooslim-mesto.nomoredomainsclub.ru'
							className="portfolio__link">
							<img src={arrow} alt="" /></a>
					</p>
				</li>
			</ul>
		</section>
	)
}