import React from "react";
import MyInput from "../MyInput/MyInput";
import MyCheckbox from "../MySelect/MySelect";
import {  UseFormRegister } from "react-hook-form"
import "./Ticket.scss";

interface TicketProps{
	id: number;
	register: UseFormRegister<any>;
	errors: any;
}

const Ticket:React.FC<TicketProps> = ({id, register, errors}) => {

	// console.log(errors)

	return (
		<div className="ticket">
			<div className="ticket__title">
				<h3>Биллет {id}</h3>
			</div>
				<div className="ticket__field">
					<MyInput
						{...register(`ticket.${id}.firstName`, { required: true})}
						placeholder="Фамилия"
						className="ticket_input"
					/>
					{errors.firstName && <p>It field isrequired</p>}
					<MyInput
						{...register(`ticket.${id}.lastName`, { required: true})}
						placeholder="Имя"
						className="ticket_input"
					/>
					{errors.lastName && <p>It field isrequired</p>}
					<MyInput
						{...register(`ticket.${id}.patronymic`, { required: true})}
						placeholder="Отчество"
						className="ticket_input"
					/>
					{errors.patronymic && <p>It field isrequired</p>}
				</div>
				<div className="ticket__field">
					<MyCheckbox options={[{text: 'M'}, {text: 'Ж'}]} name="gender" className="ticket_radiobutton"/>
					<MyInput
						{...register(`ticket.${id}.document`, { required: true})}
						placeholder="Номер документа"
						className="ticket_input"
					/>
					{errors.document && <p>It field isrequired</p>}
					<MyInput
						{...register(`ticket.${id}.birthday`, { required: true})}
						placeholder="Дата рождения"
						className="ticket_input"
					/>
					{errors.birthday && <p>It field isrequired</p>}
				</div>
		</div>
	)
}

export default Ticket