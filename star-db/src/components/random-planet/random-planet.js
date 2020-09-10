import React from 'react'
import earth from '../../assets/earth.jpg'
import './random-planet.css'
const RandomPlanet = () => {
    return (
        <div className="random-planet container-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className="random-img" src={earth} alt="earth"/>
                    </div>
                    <div className="col-md-8">
                        <h3>Planet Name</h3> 
                        <ul className="random-planet-info">
                            <li>Pupulation 123124</li>
                            <li>Rotation Period 43</li>
                            <li>Diameter 100</li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default RandomPlanet