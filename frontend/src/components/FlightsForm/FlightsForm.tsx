import React from "react";
import FlightsFilter from "../FlightsFilter/FlightsFilter";
import FlightsList from './../FlightsList/FlightsList';
import style from './FlightsForm.module.scss';

const FlightsForm: React.FC = () => {
	return (
		<div className={style.form}>
			<FlightsFilter/>
			<FlightsList/>
		</div>
		)
}

export default FlightsForm