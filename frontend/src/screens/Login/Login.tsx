import React, { useState } from "react";
import MyButton from "../../components/Button/Button";
import MyInput from "../../components/MyInput/MyInput";
import { Iparam } from "../../models/login";
import style from './Login.module.scss';

import {useDispatch} from 'react-redux';
import { fetchUser } from "../../store/action-creator/user";

const Login:React.FC = () => {

	const dispatch = useDispatch()

	const [param, setParam] =  useState<Iparam>({username:'', password: ''})


	const onClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		dispatch(fetchUser(param))
	}


	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setParam({...param, [e.target.name]: e.target.value})
	}

	return (
		<div className={style.login}>
			<form className={style.form}>
				<MyInput placeholder="Имя пользователя" value={param.username} onChange={onChange} name='username'/>
				<MyInput placeholder="Пароль" value={param.password} onChange={onChange} name='password'/>
				<MyButton name="Войти" onClick={onClick}/>
			</form>
		</div>
	)
}

export default Login