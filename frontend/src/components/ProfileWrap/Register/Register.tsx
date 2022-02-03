import React from 'react';
import {Formik,	Form} from 'formik';
import MyInput from '../../MyInput/MyInput';
import MyButton from '../../Button/Button';
import './Register.scss'
import UserService from '../../../services/user.service';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../../store/action-creator/user';


interface IRegisterProps{
	setModalVisible: any
}

interface RegisterFormValues{
	first_name: string,
  password: string,
  last_name: string,
  email: string,
  patronymic: string,
  document: string,
  phone: string
}

const Register:React.FC<IRegisterProps> = ({setModalVisible}) => {
	const dispatch = useDispatch();

	const initialValues: RegisterFormValues = {
		first_name: '',
		password: '',
		last_name: '',
		email: '',
		patronymic: '',
		document: '',
		phone: ''
	}

	return (
		<div className="register">
				<Formik
			initialValues={initialValues} 
			onSubmit={(values) => {
				UserService.registerUser(values)
				.then((res:any) => {
					if (res.status === 201){
						dispatch(fetchUser({email: values.email, password: values.password}))
						setModalVisible(false)
					}
				})
			}}
		>
			{({errors, handleChange, handleSubmit, values }: any) => (
				<Form className='register__form'>
					<div className="register__form_label">
						<label >
							Адрес электронной почты
							<MyInput value={values.email} onChange={handleChange('email')}  className="modal__form__element"/>
						</label>
					</div>
					<div className="register__form_label">
						<label>
							Пароль
							<MyInput value={values.password} onChange={handleChange('password')} className="modal__form__element" type='password'/>
						</label>
					</div>

					
					{/* <MyInput value={values.first_name} onChange={handleChange('first_name')}  className="modal__form__element"/>
					<MyInput value={values.last_name} onChange={handleChange('last_name')}  className="modal__form__element"/>
					<MyInput value={values.patronymic} onChange={handleChange('patronymic')}  className="modal__form__element"/>
					<MyInput value={values.document} onChange={handleChange('document')}  className="modal__form__element"/>
					<MyInput value={values.phone} onChange={handleChange('phone')}  className="modal__form__element"/> */}
					<MyButton name="Зарегестрироваться" onClick={handleSubmit} className="modal__form__element"/>
				</Form>
			)}
		</Formik>
		</div>
	)
};

export default Register;
