import React from "react";

import iconSearch from '../../images/search.svg';
import iconSubmit from '../../images/submit.svg';
import iconSmalltumbActive from '../../images/smalltumb-active.svg'
import iconSmalltumbPassive from '../../images/smalltumb-passive.svg'

import './SearchForm.css';

export const SearchForm = () => {
	return (
		<section className="search container">
			<form action="#" className="search__form">
				<div className="search__left">
					<div className="search__image">
						<img src={iconSearch} alt="iconSearch" />
					</div>
					<input
						type="search"
						name="search"
						id="search"
						className="search__input"
						placeholder="Фильм" />
					<button type="submit" className="search__btn">
						<img src={iconSubmit} alt="iconSubmit" />
					</button>
					<div className="sep-line"></div>
				</div>
				<div className="checked">
					<input type="checkbox" name="shorts" id="shorts" defaultChecked />
					<div className="checked_active">
						<label htmlFor="shorts" className="checked__label">
							<img src={iconSmalltumbActive} alt="iconSmalltumbActive" />
							<p className="search__shorts">Короткометражки</p>
						</label>
					</div>
					<div className="checked_passive">
						<label htmlFor="shorts" className="checked__label">
							<img src={iconSmalltumbPassive} alt="iconSmalltumbPassive" />
							<p className="search__shorts">Короткометражки</p>
						</label>
					</div>
				</div>
			</form>
		</section>
	)
}