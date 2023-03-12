import React, { useState } from "react";
import { Auth } from "../Auth";

import './Register.css';

export const Register = () => {
	const [value, setValue] = useState('Виталий');
	const [email, setEmail] = useState('pochta@yandex.ru');
	const [pass, setPass] = useState('abrakadabra')
	return (
		<Auth
			title={'Добро пожаловать!'}
			btnName={'Зарегистрироваться'}
			btnSubTitle={'Уже зарегистрированы?'}
			btnLink={'Войти'}
			btnNavLink={'/signin'}
		>
			<label htmlFor="auth-name" className="auth__input-label">Имя
				<input
					type="text"
					name=""
					id="auth-name"
					className="auth__input"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</label>
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
				<input noValidate
					type="password"
					name=""
					id="auth-pass"
					className="auth__input auth__input_error"
					value={pass}
					onChange={(e) => setPass(e.target.value)} />
			</label>
			<p className="auth__error">Что-то пошло не так...</p>
		</Auth>
	)
}