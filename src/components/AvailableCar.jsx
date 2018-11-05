import React from 'react'
import { Link } from 'react-router-dom'

const AvailableCar = (props) => (
  <div className='available-car'>
    <div className='available-car__img--container' />
    <div className='available-car__details--container'>
      <div className='available-car__details'>
        <p className='available-cars__text available-cars__text--bold'>{`${props.modelName}`}</p>
        <div className='available-cars__text available-cars__text--small available-cars__width--max'>
          <p>{`Stock #
            ${props.stockNumber} -
            ${props.mileage.number} ${props.mileage.unit.toUpperCase()} -
            ${props.fuelType} -
            ${props.color}`}</p>
        </div>
        <Link
          to={`/car/${props.stockNumber}`}
          className='available-cars__text available-cars__text--small link__text--orange'
        >View details</Link>
      </div>
    </div>
  </div>
)

export default AvailableCar
