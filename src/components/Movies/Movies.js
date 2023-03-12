import React from "react";
import { Footer } from "../Footer";
import { MoviesCardList } from "../MoviesCardList";
import { Navigation } from "../Navigation";
import { PopupMenu } from "../PopupMenu";
import { SearchForm } from "../SearchForm";

export const Movies = ({menuOpened, setMenuOpened, menuClosed}) => {
	return (
		<div className="wrapper">
			<Navigation setIsOpened={setMenuOpened}/>
			<main className="main">
				<SearchForm />
				<div className="container">
					<div className="line line_grey"></div>
				</div>
				<MoviesCardList saved={false}/>
				<PopupMenu isOpened={menuOpened} menuClosed={menuClosed}/>
			</main>

			<Footer />
		</div>

	)
}