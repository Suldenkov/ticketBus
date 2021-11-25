import React, { useState } from "react";
import MyInput from "../MyInput/MyInput";
import MyCheckbox from "../MySelect/MySelect";
import "./Ticket.scss";

interface TicketProps{
	id: number;
}

const Ticket:React.FC<TicketProps> = ({id}) => {
	const [data, setData] = useState({firstName: '', lastName: '', patronymic: ''})

	const onChangeInputHandler = (e:any) => {
		setData((oldData:any) => ({...oldData, [e.target.name] : e.taget.value}))
	}

	return (
		<div className="ticket">
			<div className="ticket__title">
				<h3>Биллет {id}</h3>
			</div>
			<div className="ticket__field">
				<MyInput placeholder="Фамилия" name="firstName" onChange={onChangeInputHandler} value={data.firstName} className="ticket_input"/>
				<MyInput placeholder="Имя" name="lastName" onChange={onChangeInputHandler} value={data.lastName} className="ticket_input"/>
				<MyInput placeholder="Отчество" name="patronymic" onChange={onChangeInputHandler} value={data.patronymic} className="ticket_input"/>
			</div>
			<div className="ticket__field">
				<MyCheckbox options={[{text: 'M'}, {text: 'Ж'}]} name="gender"/>
				<MyInput placeholder="Имя" name="lastName" onChange={onChangeInputHandler} value={data.lastName} className="ticket_input"/>
				<MyInput placeholder="Отчество" name="patronymic" onChange={onChangeInputHandler} value={data.patronymic} className="ticket_input"/>
			</div>
		</div>
	)
}

export default Ticket