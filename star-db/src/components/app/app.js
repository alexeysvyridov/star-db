import React, { Component } from 'react';
import Header from '../header';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi";
import DummySwapiService from '../../services/dummy-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import RandomPlanet from '../random-planet'
import { PeoplePage, PlanetsPage, StarshipsPage  } from '../pages';
import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StarshipDetails } from '../sw-components';
export default class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService
         ? DummySwapiService : SwapiService;
      return {
        swapiService:  new Service() 
      } 
    })
  };

  render() {

    return (
      <ErrorBoundry>
      <SwapiServiceProvider value={this.state.swapiService}>
      <Router>
        <div className="stardb-app">
          <Header onServiceChange={this.onServiceChange} />
          <RandomPlanet />
          <Route path="/people" render={() => <h2>People</h2> }/>
          <Route path="/" exact render={() => <h2>Wellom to StarDB</h2> }/>
          <Route path="/people" component={PeoplePage} />
          <Route path="/planets" component={PlanetsPage} />
          <Route path="/starships" exact component={StarshipsPage} />
          <Route path="/starships/:id" 
                 render={({ match }) => {
            const {id} = match.params;
           return  <StarshipDetails itemId={id} />
          }} />
        </div>
      </Router>
      </SwapiServiceProvider>
      
      </ErrorBoundry>
    );
  }
}