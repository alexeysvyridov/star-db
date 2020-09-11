
import React, { Component } from 'react'
import SwappiService from '../../services/swapi'

export default class PersonDetails extends Component {
  swapiService = new SwappiService()
  state = {
    person: null
  }

  componentDidMount = () => {
    this.updatePerson()
  }
  
  updatePerson = () => {
    const { personId } = this.props;
    if(!personId) {
      return
    }
    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({person})
      })
  }
  render() {
    if(!this.state.person) {
      return <span>Select Person from the list</span>
    }
    const { id, gender, birthYear, eye_color } = this.state.person;
    return (
      <div className="person-details card">
        <img className="person-image"
          src="" />
        <div className="card-body">
          <h4>R2-D2</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>male</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>red</span>
            </li>
          </ul>
      </div>
    </div>
    )
  }
}
