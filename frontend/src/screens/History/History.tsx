import React from "react";
import Flight from "../../components/Flight/Flight";
import "./History.scss";

const History: React.FC = () => {
	let mas = [
		{id: 1, arrival:'Казань', departure: 'Москва'},
		{id: 2, arrival:'Казань', departure: 'Москва'},
		{id: 3, arrival:'Казань', departure: 'Москва'},
		{id: 4, arrival:'Казань', departure: 'Москва'}
	]

	return(
		<div className="history">
			{
				mas.length ?
				mas.map((elem) => <div key={elem.id} className="history_block">
					<Flight
					id={elem.id}
					scheduledArrival='2143 19:00' 
					scheduledDeparture='2143 13:00'
					arrivalcity={elem.arrival}
					departurecity={elem.departure}
					status={400} duration='5:00'
					amount='500'
					className="history_block__element"/>
				</div>)
				:
				<span>У вас нет завершенных поездок</span>	
			}
		</div>
	)
}

export default History