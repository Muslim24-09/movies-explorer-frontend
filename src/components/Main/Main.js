import React from "react";
import { AboutMe } from "../AboutMe";
import { AboutProject } from "../AboutProject";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Portfolio } from "../Portfolio";
import { Promo } from "../Promo";
import { Techs } from "../Techs";

import './Main.css';

export const Main = () => {
	return (
		<div className="wrapper">
			<Header />
			<main>
				<Promo />
				<AboutProject />
				<Techs />
				<AboutMe />
				<Portfolio />
			</main>
			<Footer />
		</div>

	)
}