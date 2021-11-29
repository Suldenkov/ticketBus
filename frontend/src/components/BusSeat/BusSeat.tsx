import React, { useState } from "react";
import './BusSeat.scss';

interface BusSeatProps{
	seat_no: number;
	className?: string;
	setSelectPlace: any;
	selected: boolean;
}

const BusSeat:React.FC<BusSeatProps> = ({seat_no, setSelectPlace, selected, className = ''}) => {
	const [active, setActive] = useState<boolean>(selected) 

	const onClickSeatSelection = () => {
		setActive((oldActiveState) => !oldActiveState)
		if (!active)
			setSelectPlace((oldSelectState:[]) => [...oldSelectState, seat_no])
		else{
			setSelectPlace((oldSelectState:[]) => {
				const index = oldSelectState.findIndex(seat => seat === seat_no)
				return [...oldSelectState.slice(0, index), ...oldSelectState.slice(index + 1)]
			})
		}
	}

	return (
		<div className={`bus_seat ${className}${active ? ' bus_seat__select' : ''}`} onClick={onClickSeatSelection}>
			<span>{seat_no}</span>
		</div>
	)
}

export default BusSeat