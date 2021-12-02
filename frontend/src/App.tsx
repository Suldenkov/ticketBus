import React, { useEffect } from 'react';
import './App.css';
import HomePage from './screens/Home/Home';
import {Route, Switch} from 'react-router-dom'
import FlightsForm from './screens/Flights/Flights';
import Account from './screens/Account/Account';
import {useDispatch} from 'react-redux';
import { checkAuth } from './services/auth.service';
import Purchase from './screens/Purchase/Purchase';

const App : React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('access')){
      checkAuth(dispatch)
    }
  }, [dispatch])
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/account">
          <Account/>
        </Route>
        <Route exact path='/flights'>
          <FlightsForm/>
        </Route>
        <Route path='/purchase'>
          <Purchase/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
