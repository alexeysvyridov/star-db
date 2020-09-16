
import React, { Component } from 'react'
import SwappiService from '../../services/swapi'
import '../item-details'
export default class ItemDetails extends Component {
  swapiService = new SwappiService();
  state = {
    item: null,
    image: null
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
    const { personId, getData,getImageUrl } = this.props;
    console.log(personId);
    if(!personId) {
      return
    }

     getData(personId)
      .then((item) => {
        this.setState({ 
          item: item,
          image: getImageUrl(item) })
      })
  }
  render() {
    const { item, image } = this.state;
    if(!item) {
      return <span>Select Person from the list</span>
    }
    const {id, gender,name, birth_year, eye_color } = item;
    console.log(this.state.item);
    return (
      <div className="item-details card">
        <img className="item-image"
             src={image} />
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
