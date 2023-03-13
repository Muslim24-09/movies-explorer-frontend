import React from "react";
import { NavTab } from "../NavTab";


import './Promo.css';

export const Promo = () => {
	return (
		<section className="promo container">
			<div className="promo__wrapper">
				<div className="promo__flex">
					<h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
					<NavTab />
				</div>
			</div>
		</section>
	)
}