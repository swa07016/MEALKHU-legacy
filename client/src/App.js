import React from 'react';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/menu" component={MenuPage}/>
          <Route exact path="/signin" component={SigninPage}/>
          <Route exact path="/signup" component={SignupPage}/>
          {/* mypick 라우팅 */}
        </Switch>
      </>
    </Router>
  );
}

export default App;