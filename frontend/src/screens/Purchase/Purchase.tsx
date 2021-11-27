import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import FlightDetail from "../FlightDetail/FlightDetail";
import TicketSign from "../TicketSign/TicketSign";
import "./Purchase.scss";

const Purchase:React.FC = () => {
	let { path } = useRouteMatch();
	
	return (
		<div className="purchase">
			<Navbar routs={[]}/>
			<Switch>
				<Route exact path={`${path}/flight/:id`}>
						<FlightDetail path={`${path}/ticket`}/>
				</Route>
				<Route exact path={`${path}/ticket`}>
					<TicketSign/>
				</Route>
			</Switch>
		</div>
	)
}

export default Purchase