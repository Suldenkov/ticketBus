import React from "react";
import Ticket from "../../components/Ticket/Ticket";
import Navbar from './../../components/Navbar/Navbar';
import './TicketSign.scss';

const TicketSign: React.FC = () => {
	const tickets:any[] = [
		{id: 1}
	]
	return(
		<div className="ticket_sign">
			<Navbar routs={[]}/>
			{
				tickets.map((ticket) => <Ticket key={ticket.id} id={ticket.id}/>)
			}
		</div>
	)
}

export default TicketSign