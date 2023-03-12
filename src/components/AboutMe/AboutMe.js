import React from "react";
import { Link } from "react-router-dom";

import photo from '../../images/photo.png';
import './AboutMe.css';

export const AboutMe = () => {
	return (
		<section className="about-me" id={"student"}>
				<div className="container about-me__wrapper">
					<h2 className="about-me__title title title_student">Студент</h2>
					<div className="about-me__flex">
						<div className="about-me__info">
							<h3 className="about-me__name">Виталий</h3>
							<h4 className="about-me__about-short">Фронтенд-разработчик, 30 лет</h4>
							<p className="about-me__about-long">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть
								жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
								компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами
								и ушёл с постоянной работы.</p>
							<Link to={"https://github.com/Muslim24-09"} className="about-me__github">Github</Link>
						</div>
						<div className="about-me__image">
							<img src={photo} alt="me" title="photo" />
						</div>
					</div>
				</div>
			</section>
	)
}