
import React, { Component } from 'react'
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';

import PeoplePage from '../people-page';
import './app.css';
import SwappiService from '../../services/swapi';
import Row from '../Row';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry/error-boundry';


export default class app extends Component {
  swapiService = new SwappiService()
  state = {
    showRandomPlanet: true,
    selectedPerson: 5
  }
  onItemSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }
  render() {
    const planet = this.state.showRandomPlanet ?  <RandomPlanet /> : null;
    const itemList = (
       <ItemList 
          onItemSelected={this.onPersonSelected}
          getData = {this.swapiService.getAllPlanets}
          renderItem = {({ name,gender,birthYear })=> `${name} (${gender} - ${birthYear})`}
      />
    );
    const { getPerson, getStarship } = this.swapiService;
    const personDetails = (
      <ItemDetails itemId={11}
        getData={getPerson}
        getImageUrl={this.swapiService.getPersonImage}
      />
    )
    const starShipDetails = (
      <ItemDetails 
      itemId={5}
      getData={getStarship}
      getImageUrl={this.swapiService.getStarshipImage}
      />
    )
    return (
      <ErrorBoundry>
        <Header />
        {planet}
        <Row left={personDetails} right={starShipDetails} />
        <PeoplePage />
      </ErrorBoundry>
    );
  }
}
