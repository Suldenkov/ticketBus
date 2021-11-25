import React from 'react';
import { useHistory } from 'react-router';
import MyButton from '../Button/Button';
import './Flight.scss';

interface FlightProps{
	scheduledDeparture: string;
	scheduledArrival: string;
	arrivalcity: string;
	departurecity: string;
	duration:string;
	amount:string;
	status: number;
	id:number;
	className?:string;
}

const Flight : React.FC<FlightProps> = ({ scheduledDeparture, scheduledArrival, arrivalcity, departurecity, status, duration, amount, id, className = '' }) => {
	const history = useHistory()

	const send = () => {
		history.push(`/flight/${id}`)
	}

	return (
		<div className={`flight ${className}`}>
			<div className="content">
				<div className="flight__from">
					<span className="time">{scheduledDeparture.split(' ')[1]}</span>
					<span>{departurecity}</span>
				</div>
				<div className="flight__to">
					<span className="time">{scheduledArrival.split(' ')[1]}</span>
					<span>{arrivalcity}</span>
				</div>
				<div className="flight__gap">
					<span>{duration}</span>
				</div>
				<div className="flight__price">
					<span>{amount}₽</span>
				</div>
			</div>
			<MyButton onClick={send} name="Купить" className="flight_button"/>
			{/* <span>{st}</span> */}
		</div>
	)
}

export default Flight