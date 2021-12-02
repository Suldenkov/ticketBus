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

const Ticket:React.FC<TicketProps> = ({id, register, errors}) => {

	console.log(errors)
	return (
		<div className="ticket">
			<div className="ticket__title">
				<h3>Биллет {id + 1}</h3>
			</div>
				<div className="ticket__field">

					<Wraper label="Фамилия" className="ticket_input">
						<MyInput {...register(`tickets.${id}.firstName`, { required: true})}/>
					</Wraper>
					<Wraper label="Имя" className="ticket_input">
						<MyInput {...register(`tickets.${id}.lastName`, { required: true})}/>
					</Wraper>
					<Wraper label="Отчество" className="ticket_input">
						<MyInput {...register(`tickets.${id}.patronymic`, { required: true})}/>
					</Wraper>
				</div>
				<div className="ticket__field">
					<Wraper label="Пол">	
						<RadioButton register={register} id={id} options={[{text: 'M'}, {text: 'Ж'}]} name="gender" className="ticket_radiobutton"/>
					</Wraper>
					<Wraper label="Номер документа" className="ticket_input">
						<MyInput {...register(`tickets.${id}.document`, { required: true})}/>
					</Wraper>
					<Wraper label="Дата рождения" className="ticket_input">
						<MyInput {...register(`tickets.${id}.birthday`, { required: true})}/>
					</Wraper>
				</div>
		</div>
	)
}

export default Ticket