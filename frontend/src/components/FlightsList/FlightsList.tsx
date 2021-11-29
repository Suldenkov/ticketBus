import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { useQuery } from '../../hooks/useQuery';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { fetchFlights } from '../../store/action-creator/flight';
import Flight from '../Flight/Flight';
import  style from './FlightsList.module.scss';

const FlightsList: React.FC = () => {
	let query = useQuery();
  const dispatch = useDispatch()
	const {loading, error, flights} = useTypeSelector(state => state.flights)
	
	
  useEffect(() => {
    dispatch(fetchFlights({arrival: `${query.get('arrival')}`, departure: `${query.get('departure')}`, date: `${query.get('date')}`}))
  }, [dispatch, query])

  if (loading)
	return <h1>load</h1>
	
  if (error)
	return <h1>{error}</h1>
	
	return (
		<div className={style.flights}>
			{
				flights.length
				?
					flights.map((elem) =>
							<Flight key={elem.id}
							id={elem.id}
							scheduledDeparture={elem.scheduledDeparture}
							scheduledArrival={elem.scheduledArrival}
							arrivalcity={elem.arrivalAutopark.parkName}
							departurecity={elem.departureAutopark.parkName}
							duration={elem.duration}
							amount={elem.amount}
							status={elem.status}/>)
				:
				<h3>К сожалению ничего нет, попробуйте посмотреть что-то ещё</h3>
			}
		</div>
	)
}

export default FlightsList