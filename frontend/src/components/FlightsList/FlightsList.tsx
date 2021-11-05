import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { useQuery } from '../../hooks/useQuery';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { fetchFlights } from '../../store/action-creator/flight';
import Flight from './Flight/Flight';
import  style from './FlightsList.module.scss';

const FlightsList: React.FC = () => {
	let query = useQuery();
  const dispatch = useDispatch()
	const {loading, error, flights} = useTypeSelector(state => state.flight)
	
	
  useEffect(() => {
    dispatch(fetchFlights({arrival: `${query.get('arrival')}`, departure: `${query.get('departure')}`, date: `${query.get('date')}`}))
  }, [dispatch])

  if (loading)
    return <h1>load</h1>

  if (error)
    return <h1>{error}</h1>

	return (
		<div className={style.flights}>
			{
				flights.map((elem) => 
									<Flight key={elem.id}
									scheduledDeparture={elem.scheduledDeparture}
									scheduledArrival={elem.scheduledArrival}
									arrivalcity={elem.arrivalAutopark.parkName}
									departurecity={elem.departureAutopark.parkName}
									duration={elem.duration}
									amount={elem.amount}
									status={elem.status}/>)
			}
		</div>
	)
}

export default FlightsList