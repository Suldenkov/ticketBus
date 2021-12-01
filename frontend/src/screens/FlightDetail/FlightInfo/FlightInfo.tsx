import React from "react";
import './FlightInfo.scss';

interface FlightInfoProps{
	scheduledDeparture: string;
	scheduledArrival: string;
	amount: number;
	countPassenger: number;
	arrivPark: any;
	departPark: any;
}

const FlightInfo:React.FC<FlightInfoProps> = ({scheduledArrival, scheduledDeparture, amount, countPassenger, arrivPark, departPark}) => {
	const flightInfoElements:any[] = [
		{id: 1, title: 'Маршрут', subTitle: '', content: `${departPark['city']} → ${arrivPark['city']}`},
		{id: 2, title: 'Отправление', subTitle: scheduledDeparture, content: `${departPark['parkName']}  ${departPark['address']}`},
		{id: 3, title: 'Прибытие', subTitle: scheduledArrival, content: `${arrivPark['parkName']}  ${arrivPark['address']}`},
		{id: 4, title: 'Итоговая сумма', content: `${amount * countPassenger}₽`, subTitle: ''}
	]
	
	return (
		<div className="flight_info">
			{
				flightInfoElements.map(({id, title, subTitle, content}) => 
						<div key={id} className="flight_info__field">
							<span className="flight_info__title">{title}</span>
							{
								id === flightInfoElements.length
								? 
								<span>{`Цена за ${countPassenger} пассажира`}</span>
								:
								<span className="flight_info__subtitle">{subTitle}</span>
							}
							<span>{content}</span>
						</div>
				)
			}
		</div>
	)
}

export default FlightInfo