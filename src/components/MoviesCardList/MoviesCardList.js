import React from "react";

import { MoviesCard } from "../MoviesCard";
import { films } from "../../utils/constants";

import './MoviesCardList.css';

export const MoviesCardList = ({ saved }) => {
	return (
		<section className="movies container">
			<div className="movies__grid">
				{
					(!saved)
						? films.map(film => <MoviesCard film={film} key={film._id} />)
						: films
							.filter(film => film.checked === true)
							.map(film => <MoviesCard film={film} key={film._id} saved={saved} />)
				}
			</div>
			<div className="movies__button">
				<button type="button" className="movies__btn">Ещё</button>
			</div>
		</section>
	)
}