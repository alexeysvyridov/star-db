import React, { Component } from 'react';
import Header from '../header';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi"

import { SwapiServiceProvider } from '../swapi-service-context'

import ItemList from '../item-list';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

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

    const {
            getAllPeople,
            getAllPlanets } = this.swapiService;
    return (
      <ErrorBoundry>
      <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app">
          <Header />

          <ItemList
            getData={getAllPeople}
            onItemSelected={() => {}}>

            { ({name}) => <span>{name}</span> }
          </ItemList>

          <ItemList
            getData={getAllPlanets}
            onItemSelected={() => {}}>

            { ({name}) => <span>{name}</span> }
          </ItemList>

        </div>
      </SwapiServiceProvider>
      
      </ErrorBoundry>
    );
  }
}