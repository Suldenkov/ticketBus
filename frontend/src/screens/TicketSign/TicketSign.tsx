import React from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import MyButton from "../../components/Button/Button";
import Ticket from "../../components/Ticket/Ticket";
import { useQuery } from "../../hooks/useQuery";
import TicketService from "../../services/ticket.service";
import './TicketSign.scss';

interface TicketSignProps{
	seats: number[]
}

const TicketSign: React.FC<TicketSignProps> = ({children, seats}) => {
	let query = useQuery()
	const history = useHistory()
	let arr = Array<any>(Number(query.get('amount'))).fill({firstName: '', lastName: '', document: '', patronymic: '', birthday: '', gender: ''})
	
	const {control, register, handleSubmit,formState: { errors }} = useForm<any>({ defaultValues: {tickets: arr}});
	const { fields } = useFieldArray({
    control,
    name: "tickets",
  });

	const onSubmit: SubmitHandler<any> = (data) => {
		const req = {...data, flight: query.get('flight'), seats: seats}
    TicketService.BuyTickets(req)
		// .then((data) => console.log(data))
		// .catch((error) => console.log(error))
		history.push('/')
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
					<div>
						<MyButton name="Купить" onClick={null} className="ticket_sign__button"/>
					</div>
				</form>
				{children}
			</div>
		</div>
	)
}

export default TicketSign