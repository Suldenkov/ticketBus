import React, { useState } from "react";
import MyInput from "../../components/MyInput/MyInput";
import "./Profile.scss";

const Profile: React.FC = () => {
	const [user, setUser] = useState({firstName:'', lastName: '', email: '', phone: ''})

	const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
		setUser({...user, [e.target.name]:e.target.value})
	}

	return (
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
						<MyInput placeholder='email' value={user.email} name='email' type='email' onChange={onChange} className='profile_input'/>
						<MyInput placeholder='Phone' value={user.phone} name='phone' onChange={onChange} type='phone' className='profile_input'/>
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
						<MyInput placeholder='First Name' value={user.firstName} name='firstName' onChange={onChange} className='profile_input'/>
						<MyInput placeholder='Last Name' value={user.lastName} name='lastName' onChange={onChange} className='profile_input'/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile