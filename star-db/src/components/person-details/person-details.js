
import React, { Component } from 'react'
import SwappiService from '../../services/swapi'

export default class PersonDetails extends Component {
  swapiService = new SwappiService();
  state = {
    person: null
  }
  componentDidMount = () => {
    this.updatePerson()
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    if(this.props.personId !== prevProps.personId) {
      this.updatePerson()
    }
  }
  updatePerson = () => {
    const { personId } = this.props;
    console.log(personId);
    if(!personId) {
      return
    }
    this.swapiService
      .getPerson(personId)
      .then((person) => {
        console.log(person);
        this.setState({ person: person })
      })
  }
  render() {
    if(!this.state.person) {
      return <span>Select Person from the list</span>
    }
    console.log(this.state.person);
    const {id, gender,name, birth_year, eye_color } = this.state.person;
    return (
      <div className="person-details card">
        <img className="person-image"
             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
        <div className="card-body">
          <h4> { name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender: </span>
              <span>{ gender }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year: </span>
              <span>{ birth_year }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color: </span>
              <span>{ eye_color }</span>
            </li> 
          </ul>
      </div>
    </div>
    )
  }
}
