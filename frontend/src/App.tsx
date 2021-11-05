import React from 'react';
import './App.css';
import HomePage from './screens/Home/Home';
import {Route} from 'react-router-dom'
import Login from './screens/Login/Login';
import FlightsForm from './components/FlightsForm/FlightsForm';


const App : React.FC = () => {
  
  return (
    <div className="App">
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route exact path="/log">
        <Login/>
      </Route>
      <Route exact path='/flights'>
        <FlightsForm/>
      </Route>
    </div>
  );
}

export default App;
