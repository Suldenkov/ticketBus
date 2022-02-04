import React from "react";
import { useDispatch } from "react-redux";
import MyButton from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import MyInput from "../../components/MyInput/MyInput";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { authActionTypes } from "../../models/user";
import UserService from "../../services/user.service";
import "./Profile.scss";

const Profile: React.FC = () => {
	const {loading, user} = useTypeSelector(type => type.auth)
	const dispatch = useDispatch()

	const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
		dispatch({type: authActionTypes.FETCH_AUTH_SUCCES, payload: { ...user.data, [e.target.name]:e.target.value}})
	}

	const onClik = async(e: any) => {
		e.preventDefault()
		await UserService.saveUser(user.data)
	}

	return (
			loading?
			<Loader/>
			:
			<div className="profile">
				<div className="profile__content">
					<div className="profile__card">
						<div className="profile__title">
							<h3>Контактная информация</h3>	
						</div>
						<div className="profile_info">
							<div className="profile_info__about">
								<span>Используется для отправки электронного биллета, а также способ связи в случае отмены или изменения деталей поездки</span>
							</div>
							<div className="profile_info__input">
								<MyInput placeholder='email' value={user.data.email} name='email' type='email' onChange={onChange} className='profile__input'/>
								<MyInput placeholder='Phone' value={user.data.phone} name='phone' onChange={onChange} className='profile__input'/>
							</div>
						</div>
					</div>
					<div className="profile__card">
						<div className="profile__title">
									<h3>Личные данные</h3>
						</div>
						<div className="profile_info">	
							<div className="profile_info__about">
								<span>Используются как ваши данные при покупке биллета</span>
							</div>
							<div className="profile_info__input">
								<MyInput placeholder='First Name' value={user.data.first_name} name='firstName' onChange={onChange} className='profile_input'/>
								<MyInput placeholder='Last Name' value={user.data.last_name} name='last_name' onChange={onChange} className='profile__input'/>
							</div>
						</div>
					</div>
				</div>
				<MyButton onClick={onClik} name="Сохранить" className="profile_info__button"/>
			</div>
	)
}

export default Profile