import React, { Component } from 'react'
import planet from '../../assets/neptun.png'

const styles = {width: '150px', height: '150px', borderRadius: '10px' }
export default class randomPlanet extends Component {
  render() {
    return (
      <div className="container random-planet-container">
        <div className="row">
          <div className="col-md-3">
            <img style={styles} src={planet} alt="planet"/>
          </div>
          <div className="col-md-9">
          <div className="planet-descriptions">
            <h3>Planet name</h3>
            <table>
              <tr>
                <td>Population 12345</td>
              </tr>
              <tr>
                <td>Rotation period 43</td>
              </tr>
              <tr>
                <td>Deamiter 43</td>
              </tr>
            </table>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
