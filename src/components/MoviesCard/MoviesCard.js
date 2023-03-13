import React from "react";

import iconFlag from '../../images/flag.svg';
import iconDelete from '../../images/delete.svg'
import './MoviesCard.css';

export const MoviesCard = ({ film, saved }) => {
	const isFilmChecked = (`movie__btn ${film.checked ? 'movie__btn_active' : ''}`)
	return (
		<div className="movies__item movie">
			<div className="movie__flex">
				<div className="movie__info">
					<div className="movie__title">{film.title}</div>
					<time className="movie__duration">{film.duration}</time>
				</div>
				<div className="movie__img-check">
					<button type="button" className={saved ? 'delete-btn' : isFilmChecked}>
						<img src={saved ? iconDelete : iconFlag} alt="" />
					</button>
				</div>
			</div>
			<div className="movie__image">
				<img src={film.imgSrc} alt={film.title} />
			</div>
		</div>
	)
}