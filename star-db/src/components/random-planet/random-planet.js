import React from 'react'
import SwapiService from '../../services/swapi'
import './random-planet.css'
export default class RandomPlanet extends React.Component {
    constructor() {
        super()
        this.updatePlanet()
    }
    swapiService = new SwapiService()
    state = {
        planet: {}
    }
    onPlanetLoaded = (planet) => {
        this.setState({planet});
    }
    updatePlanet() {
        const id = Math.floor((Math.random()*25) ) + 2  ;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded);
    }
    render() {
    
        const { planet: {name, population, rotationPeriod, diameter, id} } = this.state;
        console.log(id);
        return (
            <div className="random-planet jumbotron rounded">
            <img className="planet-image"
                 src= { `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div>
              <h4>{name}</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="term">Population</span>
                  <span>{population}</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Rotation Period</span>
                  <span>{rotationPeriod}</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Diametr</span>
                  <span>{diameter}</span>
                </li>
              </ul>
            </div>
          </div>
        )
    }
}
