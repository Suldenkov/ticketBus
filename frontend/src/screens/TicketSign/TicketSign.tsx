import React from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Ticket from "../../components/Ticket/Ticket";
import FlightDetail from "../FlightDetail/FlightDetail";
import FlightInfo from "../FlightDetail/FlightInfo/FlightInfo";
import FlightPrompt from "../FlightDetail/FlightPrompt/FlightPrompt";
import Navbar from './../../components/Navbar/Navbar';
import './TicketSign.scss';

const TicketSign: React.FC = () => {
	const {
		control,
    register,
    handleSubmit,
		formState: { errors }
  } = useForm<any>({
    defaultValues: {
      ticket: [
				{id: 1, firstName: '', lastName: '', document: '', patronymic: '', birthday: ''},
				{id: 2, firstName: '', lastName: '', document: '', patronymic: '', birthday: ''},
				{id: 3, firstName: '', lastName: '', document: '', patronymic: '', birthday: ''},
			]
    }});

	const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "ticket",
  });

	const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  }
	
	return(
		<div className="ticket_sign">
			<Navbar routs={[]}/>
			<div className="ticket_sign__content">
				<div className="tickets">
					<form onSubmit={handleSubmit(onSubmit)}>
						{fields.map((field, index) => 
						<Ticket key={field.id} id={index + 1} register={register} errors={errors}/>
						)}
						<input type="submit" />
					</form>
				</div>
				<FlightInfo scheduledArrival='' scheduledDeparture='' amount={200} countPassenger={100}/>
			</div>
		</div>
	)
}

export default TicketSign