import React, { useState } from "react";
import MyInput from "../MyInput/MyInput";
import MyButton from "../Button/Button";
import { Iparam } from "../../models/login";
import './Modal.scss';
import { login } from "../../services/auth.service";

interface ModalProps{
	setVisible: any;
}
const Modal:React.FC<ModalProps> = ({setVisible}) => {

	const [param, setParam] =  useState<Iparam>({username:'', password: ''})

	
	const onClikAuthorize = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		login(param)
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
						<span className="modal_title">Вход</span>
						<span data-close="1" className="modal_close">&times;</span>
					</div>
					<div className="modal_body">
							<form className="modal_form">
								<MyInput placeholder="Имя пользователя" value={param.username} onChange={onchangeAccount} name='username' className="modal_form_element"/>
								<MyInput placeholder="Пароль" value={param.password} onChange={onchangeAccount} name='password' className="modal_form_element" type="password"/>
								<MyButton name="Войти" onClick={onClikAuthorize} className="modal_form_element"/>
							</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal