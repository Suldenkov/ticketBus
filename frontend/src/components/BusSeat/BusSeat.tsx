import React from "react";
import './BusSeat.scss';

interface BusSeatProps{
	seat_no: number;
	className?: string;
}

const BusSeat:React.FC<BusSeatProps> = ({seat_no, className}) => {
	return (
		<div className={`bus_seat ${className}`}>
			<span>{seat_no}</span>
		</div>
	)
}

export default BusSeat