import React from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import MyButton from "../../components/Button/Button";
import Ticket from "../../components/Ticket/Ticket";
import { useQuery } from "../../hooks/useQuery";
import './TicketSign.scss';

const TicketSign: React.FC = ({children}) => {
	let query = useQuery()
	const history = useHistory()
	let arr = Array<any>(Number(query.get('amount'))).fill({firstName: '', lastName: '', document: '', patronymic: '', birthday: '', gender: ''})
	
	const {control, register, handleSubmit,formState: { errors }} = useForm<any>({ defaultValues: {ticket: arr}});
	const { fields } = useFieldArray({
    control,
    name: "ticket",
  });

	const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  }
	
	const onClickGoBack = () => {
		history.goBack()
	}
	
	return(
		<div className="ticket_sign">
			<div className="ticket_sign__content">
				<button onClick={onClickGoBack}>Назад</button>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="tickets">
							{fields.map((field, index) => 
							<Ticket key={index} id={index} register={register} errors={errors}/>
							)}
							<MyButton name="Оплатить" onClick={null}/>
					</div>
				</form>
				{children}
			</div>
		</div>
	)
}

export default TicketSign