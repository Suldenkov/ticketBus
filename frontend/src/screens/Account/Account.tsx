import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Profile from "../Profile/Profile";
import History from "../History/History";
import "./Account.scss";
import Navbar  from "./../../components/Navbar/Navbar";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import Loader from "../../components/Loader/Loader";

const Account: React.FC = () => {
	let { path } = useRouteMatch();
	const {loading, user} = useTypeSelector(type => type.auth)

	let route = [
		{id:1, route:`${path}/profile`, name:'Профиль'},
		{id:2, route:`${path}/history`, name:'История покупок'},
	]

	return(
		loading?
			<Loader/>
			:
			user.isAuth?
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
			:
			<h3>404</h3>
	)
}

export default Account