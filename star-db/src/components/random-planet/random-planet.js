import React from "react";
import SwapiService from "../../services/swapi";
import "./random-planet.css";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
export default class RandomPlanet extends React.Component {

  componentDidMount () {
    this.updatePlanet()
  }

  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false
  };
  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };
  onError = (err) => {
    this.setState({
        error: true,
        loading: false
    })
  }
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
  }
  render() {
    const {  planet, loading, error } = this.state;
    const errorMessage = error ? <ErrorIndicator />: null;
    const spinner = loading ? <Spinner /> : null;
    const hasData = !(loading || error)
    const content = hasData ?  <PlanetView planet={planet} /> : null;
    return (
        <div className="random-planet jumbotron rounded">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
  }
}

const PlanetView = ({planet}) => {
    const { name, population, rotationPeriod, diameter, id }
    = planet;
  return (
    <React.Fragment>
      <img
        alt="planet"
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
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
    </React.Fragment>
  );
};
