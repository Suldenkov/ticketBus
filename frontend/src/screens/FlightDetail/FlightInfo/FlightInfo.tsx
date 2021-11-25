import React from "react";
import './FlightInfo.scss';

interface FlightInfoProps{
	scheduledDeparture: string;
	scheduledArrival: string;
	amount: number;
	countPassenger: number;
}

const FlightInfo:React.FC<FlightInfoProps> = ({scheduledArrival, scheduledDeparture, amount, countPassenger}) => {
	const flightInfoElements:any[] = [
		{id: 1, title: 'Маршрут', content: ''},
		{id: 2, title: 'Отправление', content: scheduledDeparture},
		{id: 3, title: 'Прибытие', content: scheduledArrival},
		{id: 4, title: 'Итоговая сумма', content: `${amount * countPassenger}₽`}
	]
	
	return (
		<div className="flight_info">
			{
				flightInfoElements.map(({id, title, content}) => 
						<div key={id} className="flight_info_field">
							<span className="flight_info_title">{title}</span>
							{
								id === flightInfoElements.length
								? 
								<span>{`Цена за ${countPassenger} пассажира`}</span>
								:
								''
							}
							<span>{content}</span>
						</div>
				)
			}
		</div>
	)
}

export default FlightInfo