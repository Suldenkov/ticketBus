import React from "react";
import MyInput from "../MyInput/MyInput";
import RadioButton from "./../RadioButton/RadioButton";
import {  UseFormRegister } from "react-hook-form"
import "./Ticket.scss";

interface TicketProps{
	id: number;
	register: UseFormRegister<any>;
	errors: any;
}

const Ticket:React.FC<TicketProps> = ({id, register, errors}) => {

	return (
		<div className="ticket">
			<div className="ticket__title">
				<h3>Биллет {id + 1}</h3>
			</div>
				<div className="ticket__field">
					<MyInput
						{...register(`tickets.${id}.firstName`, { required: true})}
						placeholder="Фамилия"
						className="ticket_input"
					/>
					{errors.firstName && <p>It field isrequired</p>}
					<MyInput
						{...register(`tickets.${id}.lastName`, { required: true})}
						placeholder="Имя"
						className="ticket_input"
					/>
					{errors.lastName && <p>It field isrequired</p>}
					<MyInput
						{...register(`tickets.${id}.patronymic`, { required: true})}
						placeholder="Отчество"
						className="ticket_input"
					/>
					{errors.patronymic && <p>It field isrequired</p>}
				</div>
				<div className="ticket__field">
					<RadioButton register={register} id={id} options={[{text: 'M'}, {text: 'Ж'}]} name="gender" className="ticket_radiobutton"/>
					<MyInput
						{...register(`tickets.${id}.document`, { required: true})}
						placeholder="Номер документа"
						className="ticket_input"
					/>
					{errors.document && <p>It field isrequired</p>}
					<MyInput
						{...register(`tickets.${id}.birthday`, { required: true})}
						placeholder="Дата рождения"
						className="ticket_input"
					/>
					{errors.birthday && <p>It field isrequired</p>}
				</div>
		</div>
	)
}

export default Ticket