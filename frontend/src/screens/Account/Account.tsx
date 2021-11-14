import React from "react";
import { BrowserRouter, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Profile from "../Profile/Profile";
import History from "../History/History";
import "./Account.scss";
import Navbar  from "./../../components/Navbar/Navbar";

const Account: React.FC = () => {
	let { path } = useRouteMatch();

	let route = [
		{id:1, route:`${path}/profile`, name:'Профиль'},
		{id:2, route:`${path}/history`, name:'История покупок'},
	]

	return(
		<div className="account">
				<Navbar routs={route}/>
				<Switch>
					<Route exact path={`${path}/profile`}>
						<Profile/>
					</Route>
					<Route exact path={`${path}/history`}>
						<History/>
					</Route>
					<Redirect to={`${path}/profile`}/>
				</Switch>
		</div>
	)
}

export default Account