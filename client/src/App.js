import React from 'react';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/menu" component={MenuPage}/>
          {/* mypick, login 라우팅 */}
        </Switch>
      </>
    </Router>
  );
}

export default App;