import React from "react";

import './Techs.css'

export const Techs = () => {
	return (
		<section className="techs" id={"techs"}>
				<div className="container">
					<div className="techs__wrapper">
						<h2 className="techs__title title">Технологии</h2>
						<div className="techs__number-techs">7 технологий</div>
						<p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
						</p>
						<div className="techs__flex flex-techs">
							<div className="flex-techs__item">HTML</div>
							<div className="flex-techs__item">CSS</div>
							<div className="flex-techs__item">JS</div>
							<div className="flex-techs__item">React</div>
							<div className="flex-techs__item">Git</div>
							<div className="flex-techs__item">Express.js</div>
							<div className="flex-techs__item">mongoDB</div>
						</div>
					</div>
				</div>
			</section>
	)
}