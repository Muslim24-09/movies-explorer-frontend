import React, { useState } from "react";
import { Navigation } from "../Navigation";
import { PopupMenu } from "../PopupMenu";

import './Profile.css';

export const Profile = ({ menuOpened, setMenuOpened, menuClosed }) => {
	const [value, setValue] = useState('Виталий');
	const [email, setEmail] = useState("pochta@yandex.ru");
	return (

		<section className="profile">
			<Navigation setIsOpened={setMenuOpened} />
			<main className="main">
				<section className="profile container">
					<h1 className="profile__title">Привет, <span className="profile__name">Виталий</span>!</h1>
					<form action="#" className="profile__form" noValidate>
						<label htmlFor="input-name" className="profile__input-label">Имя
							<input
								type="text"
								id="input-name"
								className="profile__input-name"
								value={value}
								onChange={(e) => setValue(e.target.value)} />
						</label>
						<label htmlFor="input-email" className="profile__input-label">E-mail
							<input
								type="email"
								name=""
								id=""
								className="profile__input-email"
								value={email}
								onChange={(e) => setEmail(e.target.value)} />
						</label>
						<button type="button" className="profile__btn-edit">Редактировать</button>
						<button type="button" className="profile__logout">Выйти из аккаунта</button>
					</form>
				</section>
				<PopupMenu isOpened={menuOpened} menuClosed={menuClosed} />
			</main>
		</section>
	)
}