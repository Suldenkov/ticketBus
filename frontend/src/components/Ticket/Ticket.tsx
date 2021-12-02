import React from "react";
import MyInput from "../MyInput/MyInput";
import RadioButton from "./../RadioButton/RadioButton";
import {  UseFormRegister } from "react-hook-form"
import "./Ticket.scss";
import Wraper from "../FormInput/FormInput";

interface TicketProps{
	id: number;
	register: UseFormRegister<any>;
	errors: any;
}


const checkErrors = (id: number, errors: any) =>{
	let err = errors?.tickets
	if (err !== undefined)
		return err[id]
	return null
}

const Ticket:React.FC<TicketProps> = ({id, register, errors}) => {
	let err = checkErrors(id, errors)


	return (
		<div className="ticket">
			<div className="ticket__title">
				<h3>Биллет {id + 1}</h3>
			</div>
				<div className="ticket__field">

					<Wraper label="Фамилия" className="ticket_input">
						<MyInput {...register(`tickets.${id}.firstName`, { required: `Укажите имя`})}/>
						{err?.firstName && <p className='ticket_input__error'>{err.firstName.message}</p>}
					</Wraper>
					<Wraper label="Имя" className="ticket_input">
						<MyInput {...register(`tickets.${id}.lastName`, { required: `Укажите имя`})}/>
						{err?.lastName && <p className='ticket_input__error'>{err.lastName.message}</p>}
					</Wraper>
					<Wraper label="Отчество" className="ticket_input">
						<MyInput {...register(`tickets.${id}.patronymic`, {required: `Укажите отчество`})}/>
						{err?.patronymic && <p className='ticket_input__error'>{err.patronymic.message}</p>}
					</Wraper>
				</div>
				<div className="ticket__field">
					<Wraper label="Пол">	
						<RadioButton register={register} id={id} options={[{text: 'M'}, {text: 'Ж'}]} name="gender" className="ticket_radiobutton"/>
						{err?.gender && <p className='ticket_input__error'>{err.gender.message}</p>}
					</Wraper>
					<Wraper label="Номер документа" className="ticket_input">
						<MyInput {...register(`tickets.${id}.document`, { required: 'Укажите серию и номер паспорта'})}/>
						{err?.document && <p className='ticket_input__error'>{err.document.message}</p>}
					</Wraper>
					<Wraper label="Дата рождения" className="ticket_input">
						<MyInput {...register(`tickets.${id}.birthday`, { required: 'Укажите дату рождения'})}/>
						{err?.birthday && <p className='ticket_input__error'>{err.birthday.message}</p>}
					</Wraper>
				</div>
		</div>
	)
}

export default Ticket