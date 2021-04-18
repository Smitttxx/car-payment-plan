import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './css/App.sass'

import Footer from './js/components/Footer/Footer';
import Header from './js/components/Header/Header';
import SearchContainer from './js/containers/Search/SearchContainer';
import HomepageInfoContainer from './js/containers/Homepage/HomepageContainer';
import SearchResultsContainer from './js/containers/SearchResults/SearchResults';

const App = () => {
  return <Router>
    <div className="page-container">
    <Header />
    <Switch>   {/* This works as a break; when it hits a route it stops after that therefor it will not redirect */}
      <Route path="/" exact>
        <HomepageInfoContainer />
      </Route>  
      <Route path="/search" exact>
        <SearchContainer /> 
      </Route>  
      <Route path="/searchresults" exact>
        <SearchResultsContainer /> 
      </Route>  
      <Redirect to="/" />
    </Switch>
    <Footer />
    </div>
  </Router>
}

export default App;

