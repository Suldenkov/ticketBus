import React, { useState } from "react";
import MyInput from "../MyInput/MyInput";
import MyButton from "../Button/Button";
import { Iparam } from "../../models/login";
import './Modal.scss';
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/action-creator/user";

interface ModalProps{
	setVisible: any;
}
const Modal:React.FC<ModalProps> = ({setVisible}) => {

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

	const onClikClose = (e: any) => {
		if (e.target.dataset.close)
			setVisible(false)
	}

	return(
		<div className="modal">
			<div data-close="1" onClick={onClikClose} className="modal_overlay">
				<div className="modal_window">
					<div className="modal_header">
						<span className="modal__title">Вход</span>
						<span data-close="1" className="modal__close">&times;</span>
					</div>
					<div className="modal_body">
							<form className="modal__form">
								<MyInput placeholder="Имя пользователя" value={param.email} onChange={onchangeAccount} name='email' className="modal__form__element"/>
								<MyInput placeholder="Пароль" value={param.password} onChange={onchangeAccount} name='password' className="modal__form__element" type="password"/>
								<MyButton name="Войти" onClick={onClikAuthorize} className="modal__form__element"/>
							</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal