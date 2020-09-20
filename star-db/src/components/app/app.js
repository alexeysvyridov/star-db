import React, { Component } from 'react';
import Header from '../header';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi"
import DummySwapiService from '../../services/dummy-service'
import { SwapiServiceProvider } from '../swapi-service-context'

import ItemList from '../item-list';

import './app.css';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components';
export default class App extends Component {
  onServiceChange = () => {
    console.log('change context');
  }

  swapiService = new DummySwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {
    return (
      <ErrorBoundry>
      <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app">
          <Header onServiceChange={this.onServiceChange}/>

          <PersonDetails itemId={11}/>
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9}/>
          <PersonList />
          <PlanetList />
          <StarshipList />

        </div>
      </SwapiServiceProvider>
      
      </ErrorBoundry>
    );
  }
}