import React, { useState } from "react";
import { Auth } from "../Auth";

import './Login.css';

export const Login = () => {
	const [email, setEmail] = useState('pochta@yandex.ru');
	const [pass, setPass] = useState('')
	return (
		<Auth
			title={'Рады видеть!'}
			btnName={'Войти'}
			btnSubTitle={'Еще не зарегистрированы?'}
			btnLink={'Регистрация'}
			btnNavLink={'/signup'}
		>
			<label htmlFor="auth-email" className="auth__input-label">E-mail
				<input
					type="email"
					name=""
					id="auth-email"
					className="auth__input"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<label htmlFor="auth-pass" className="auth__input-label ">Пароль
				<input
					noValidate
					type="password"
					name=""
					id="auth-pass"
					className="auth__input"
					value={pass}
					onChange={(e) => setPass(e.target.value)}
				/>
			</label>
			<p hidden className="auth__error">Что-то пошло не так...</p>
		</Auth>
	)
}