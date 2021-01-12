import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
// import GuestRoute from '../src/Components/GuestRoute/GuestRoute';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';



function App() {

  /*const [currentUser, setCurrentUser] = useState({
    isChecked: false,
    user: null,
  });*/

  return (
    <Router>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/registration' component={Registration}/>
      </Switch>
    </Router>
  );
}

export default App;