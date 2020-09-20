
import React from 'react'
import ItemDetails, {Record} from '../item-details';
import { withSwapiService } from '../hoc-helpers'
const PlanetDetails = (props) => {
  return (
          <ItemDetails {...props}
          >
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="costInCredits" label="Cost" />
            <Record field="diametr" label="Diametr" />
          </ItemDetails>
  )
}

const mapMethodsToPorps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getImageUrl
  }
}
export default withSwapiService(PlanetDetails, mapMethodsToPorps);