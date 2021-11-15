import React from 'react';
import './App.css';
import HomePage from './screens/Home/Home';
import {Route, Switch} from 'react-router-dom'
import FlightsForm from './screens/Flights/Flights';
import Account from './screens/Account/Account';


const App : React.FC = () => {
  
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
      </Switch>
    </div>
  );
}

export default App;
