import React from 'react';
import { withSwapiService } from '../hoc-helpers';
import ItemDetails, { Record } from '../item-details';


const StarShipDetails = (props) => {
    return (
      <ItemDetails {...props} >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    )
  }
const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarhipImage
  }
}
export default withSwapiService(StarShipDetails, mapMethodsToProps);