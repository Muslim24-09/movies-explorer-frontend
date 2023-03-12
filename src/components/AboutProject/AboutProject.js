import React from "react";

import './AboutProject.css';

export const AboutProject = () => {
	return (
		<section className="about-project container" id={"aboutProj"}>
				<h2 className="about-project__title title">О проекте</h2>
				<div className="about-project__flex">
					<article className="about-project__article art-about-proj">
						<h3 className="art-about-proj__title title-article">Дипломный проект включал 5 этапов</h3>
						<p className="art-about-proj__text text-article">Составление плана, работу над бэкендом, вёрстку, добавление
							функциональности и финальные доработки.</p>
					</article>
					<article className="about-project__article art-about-proj">
						<h3 className="art-about-proj__title title-article">На выполнение диплома ушло 5 недель</h3>
						<p className="art-about-proj__text text-article">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
							было соблюдать, чтобы успешно защититься.</p>
					</article>
				</div>
				<div className="about-project__grid grid-about-proj">
					<p className="grid-about-proj__item grid-about-proj__item_first-line">1 неделя</p>
					<p className="grid-about-proj__item grid-about-proj__item_first-line">4 недели</p>
					<p className="grid-about-proj__item">Back-end</p>
					<p className="grid-about-proj__item">Front-end</p>
				</div>
			</section>
	)
}