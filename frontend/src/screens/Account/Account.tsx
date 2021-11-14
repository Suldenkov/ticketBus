import React from "react";
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import Profile from "../Profile/Profile";
import Header from "./../Home/Header/Header";
import History from "../History/History";
import "./Account.scss";

const Account: React.FC = () => {
	let { path, url } = useRouteMatch();

	return(
		<div className="account">
			<BrowserRouter>
				<Switch>
					<Route exact path={`${path}/profile`}>
						<Profile/>
					</Route>
					<Route exact path={`${path}/history`}>
						<History/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default Account