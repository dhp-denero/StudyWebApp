import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/home" component={HomePage}/>
        <Route exact path="">
          <Redirect to={'/login'}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;
