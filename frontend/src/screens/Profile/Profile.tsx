import React from "react";
import { useDispatch } from "react-redux";
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
		const res = await UserService.saveUser(user.data)
		console.log(res)
	}

	return (
			loading?
			<h3>Loading</h3>
			:
			<div className="profile">
				<div className="profile_content">
					<div className="profile_card">
						<div className="profile_title">
							<h3>Контактная информация</h3>	
						</div>
						<div className="profile_info">
							<div className="profile_info_about">
								<span>Используется для отправки электронного биллета, а также способ связи в случае отмены или изменения деталей поездки</span>
							</div>
							<MyInput placeholder='email' value={user.data.email} name='email' type='email' onChange={onChange} className='profile_input'/>
							{/* <MyInput placeholder='Phone' value={user.data.phone} name='phone' onChange={onChange} type='phone' className='profile_input'/> */}
						</div>
					</div>
					<div className="profile_card">
						<div className="profile_title">
									<h3>Личные данные</h3>
						</div>
						<div className="profile_info">	
							<div className="profile_info_about">
								<span>Используются как ваши данные при покупке биллета</span>
							</div>
							{/* <MyInput placeholder='First Name' value={user.firstName} name='firstName' onChange={onChange} className='profile_input'/> */}
							<MyInput placeholder='Last Name' value={user.data.last_name} name='last_name' onChange={onChange} className='profile_input'/>
						</div>
					</div>
					<button onClick={onClik}>Сохранить</button>
				</div>
			</div>
	)
}

export default Profile