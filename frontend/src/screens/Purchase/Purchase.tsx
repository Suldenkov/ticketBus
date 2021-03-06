import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { useGetPlace } from "../../hooks/useGetPlace";
import { useQuery } from "../../hooks/useQuery";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { fetchFlightDetail } from "../../store/action-creator/flightDetail";
import FlightDetail from "../FlightDetail/FlightDetail";
import FlightInfo from "../FlightDetail/FlightInfo/FlightInfo";
import TicketSign from "../TicketSign/TicketSign";
import Navigation from "./Navigation/Navigation";
import "./Purchase.scss";

const Purchase:React.FC = () => {
	const query = useQuery()
	const id = useMemo(() => query.get('flight'), [query])
	const {flight} = useTypeSelector(state => state.flight)
	let { path } = useRouteMatch();
	const dispatch = useDispatch()
	const [selectPlace, setSelectPlace] = useGetPlace(query)

	
	useEffect(() => {
		if (id){
				dispatch(fetchFlightDetail(id))
		}
	}, [id, dispatch])

	const childrenElem =
		(<FlightInfo
			arrivPark={flight.arrivalAutopark}
			departPark={flight.departureAutopark}
			scheduledArrival={flight.scheduledArrival}
			scheduledDeparture={flight.scheduledDeparture}
			amount={Number(flight.amount)}
			countPassenger={selectPlace.length}
		/>)
	
	return (
		<div className="purchase">
			<Navbar routs={[]}/>
			<Navigation/>
			<Switch>
				<Route exact path={`${path}/flight`}>
					<FlightDetail path={`${path}/ticket`} selectPlace={selectPlace} setSelectPlace={setSelectPlace} children={childrenElem}/>
				</Route>
				<Route exact path={`${path}/ticket`}>
					<TicketSign children={childrenElem} seats={selectPlace}/>
				</Route>
			</Switch>
		</div>
	)
}

export default Purchase