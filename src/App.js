import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './app.css';
import { Main } from './pages'
//import './nav.css';
export  const App = () =>{
        return(
        <div className="app">
                <Router>
        {/* <ScrollToTop/> */}
        <Switch>
          <Route path="/" exact component={Main} />
          <Redirect to="/" />
        </Switch>
      </Router>
        </div>
        );
}

export default  App;
