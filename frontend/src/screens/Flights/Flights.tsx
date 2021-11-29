import React, { useState } from "react";
import FlightsFilter from "../../components/FlightsFilter/FlightsFilter";
import FlightsList from '../../components/FlightsList/FlightsList';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import {useDispatch} from 'react-redux';
import './Flights.scss';
import { flightActionTypes, Isort } from "../../models/flight";
import FlightsSearch from "./../../components/FlightsSearch/FlightsSearch";
import Header from "./../../components/Header/Header";


const FlightsForm: React.FC = () => {
	const [selectedSort, setSelectedSort] = useState<Isort>({active:'scheduledDeparture', kind:'bottom'});
	const {flights} = useTypeSelector(state => state.flights)
	const dispatch = useDispatch()

	const sortFlights = (selectedSort:Isort):void =>{
		setSelectedSort(selectedSort);
		dispatch({type:flightActionTypes.SORT_FLIGHTS, payload:{flights:flights, ...selectedSort}})
	}

	return (
		<div className="flights">
			<Header theme='dark'/>
			<div className="flights_top">
				<FlightsSearch/>
			</div>
			<div className="flights_form">
				<FlightsFilter 
				selectedSort={selectedSort}
				onChange={sortFlights}/>
				<FlightsList/>
			</div>
		</div>
		)
}

export default FlightsForm