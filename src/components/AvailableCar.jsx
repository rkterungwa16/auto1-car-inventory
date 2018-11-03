import React from 'react'

const AvailableCar = (props) => (
  <div className='available-car'>
    <div className='available-car__img--container' />
    <div className='available-car__details--container'>
      <div className='available-car__details'>
        <p className='available-cars__text available-cars__text--bold'>{`${props.modelName}`}</p>
        <div className='available-cars__text available-cars__text--small available-cars__width--max'>
          <p>{`Stock # ${props.stockNumber} - ${props.mileage.number} - ${props.fuelType} - ${props.color}`}</p>
        </div>
        <a
          href='#view details'
          className='available-cars__text available-cars__text--small link__text--orange'>View details</a>
      </div>
    </div>
  </div>
)

export default AvailableCar
