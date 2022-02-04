import React, { useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import MyButton from "../../components/Button/Button";
import Ticket from "../../components/Ticket/Ticket";
import { useQuery } from "../../hooks/useQuery";
import TicketService from "../../services/ticket.service";
import { setSnackbar } from "../../store/reducers/UIReduser";
import {useDispatch} from 'react-redux';
import './TicketSign.scss';
import MyInput from "../../components/MyInput/MyInput";

interface TicketSignProps{
	seats: number[]
}

const TicketSign: React.FC<TicketSignProps> = ({children, seats}) => {
	let query = useQuery()
	const history = useHistory()
	const dispatch = useDispatch()
	let arr = Array<any>(Number(query.get('amount'))).fill({firstName: '', lastName: '', document: '', patronymic: '', birthday: '', gender: ''})
	
	const {control, register, handleSubmit,formState: { errors }} = useForm<any>({ defaultValues: {tickets: arr}});
	const { fields } = useFieldArray({
    control,
    name: "tickets",
  });

	const [email, setEmail] = useState('')

	const onSubmit: SubmitHandler<any> = (data) => {
		const req = {...data, flight: query.get('flight'), seats: seats}
    TicketService.BuyTickets(req)
		.then((data) => {
			if (data.status === 200){
				const param = {snackbarOpen: true, snackbarMessage: 'Покупка биллета: Успешно', snackbarType: 'success'}
				dispatch(setSnackbar(param))
				history.push('/')
			}
		})
		.catch((error) => {
			const param = {snackbarOpen: true, snackbarMessage: error, snackbarType: 'error'}
    	dispatch(setSnackbar(param))
		})
  }
	
	return(
		<div className="ticket_sign">
			<div className="ticket_sign__content">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="tickets">
							{fields.map((field, index) => 
							<Ticket key={index} id={index} register={register} errors={errors}/>
							)}
					</div>
					<div className="ticket_sign__support">
						<label >
							Адрес электронной почты.<br/> На него будут отправлены биллеты
							<MyInput value={email} onChange={(e:any) => setEmail(e.target.value)}  className="modal__form__element"/>
						</label>
					</div>
					<div>
						<MyButton name="Купить" onClick={null} className="ticket_sign__button"/>
					</div>
				</form>
				<div className="ticket_sign__info">
					{children}
				</div>
			</div>
		</div>
	)
}

export default TicketSign