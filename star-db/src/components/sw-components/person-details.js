import React from 'react'
import ItemDetails, { Record } from '../item-details'
import { withSwapiService } from '../hoc-helpers'
const PersonDetails = ({itemId, getImageUrl, getData}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getData}
      getImageUrl={getImageUrl}
    >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
}

const mapMethodsTopProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}

export default withSwapiService(PersonDetails, mapMethodsTopProps)
