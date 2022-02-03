import React, { useState } from "react";
import MyInput from "../../MyInput/MyInput";
import MyButton from "../../Button/Button";
import { Iparam } from "../../../models/login";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../store/action-creator/user";
import './Sign.scss'

interface IsignProps{
	setVisible: any;
}

const Sign:React.FC<IsignProps> = ({setVisible})  =>{

	const [param, setParam] =  useState<Iparam>({email:'', password: ''})
	const dispatch = useDispatch()

	const onClikAuthorize = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		dispatch(fetchUser(param))
		setVisible(false)
	}

	const onchangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
		setParam({...param, [e.target.name]: e.target.value})
	}

	return (
		<div className="form_wrap">
			<form className="modal__form">
					<MyInput placeholder="Имя пользователя" value={param.email} onChange={onchangeAccount} name='email' className="modal__form__element"/>
					<MyInput placeholder="Пароль" value={param.password} onChange={onchangeAccount} name='password' className="modal__form__element" type="password"/>
					<MyButton name="Войти" onClick={onClikAuthorize} className="modal__form__element"/>
			</form>
		</div>
	)
}

export default Sign;
