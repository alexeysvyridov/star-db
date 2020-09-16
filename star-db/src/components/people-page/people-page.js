import React, { Component } from 'react'
import Row from '../Row'
import SwapiService from '../../services/swapi'
import ItemList from '../item-list'
import ErrorBoundry from '../error-boundry'
import ItemDetails from '../item-details'
import PersonDetails from '../person-details'
export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 11
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        >
         {(i) => (
           `${i.name} ${i.gender} ${i.birthYear}}`
         ) } 
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
