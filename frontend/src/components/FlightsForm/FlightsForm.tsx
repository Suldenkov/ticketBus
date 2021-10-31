import React, { useState } from "react";
import { Isort } from "../../models/sortFlights";
import FlightsFilter from "../FlightsFilter/FlightsFilter";
import FlightsList from './../FlightsList/FlightsList';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import {useDispatch} from 'react-redux';
import style from './FlightsForm.module.scss';
import { flightActionTypes } from "../../models/flight";


const FlightsForm: React.FC = () => {
	const [selectedSort, setSelectedSort] = useState<Isort>({active:'scheduledDeparture', kind:'bottom'});
	const {flights} = useTypeSelector(state => state.flight)
	const dispatch = useDispatch()

	const sortFlights = (selectedSort:Isort):void =>{
		setSelectedSort(selectedSort);
		dispatch({type:flightActionTypes.SORT_FLIGHTS, payload:{flights:flights, ...selectedSort}})
	}

	return (
		<div className={style.form}>
			<FlightsFilter 
			selectedSort={selectedSort}
			onChange={sortFlights}/>
			<FlightsList/>
		</div>
		)
}

export default FlightsForm