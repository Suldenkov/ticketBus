import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
} & RouteProps;

const ProtectedRoute:React.FC<ProtectedRouteProps> = ({isAuthenticated, authenticationPath, ...routeProps}) => {

	// console.log(isAuthenticated)
  if(isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: authenticationPath }}/>;
  }
}

export default ProtectedRoute