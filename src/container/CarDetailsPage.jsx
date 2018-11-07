import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

import * as carsActions from '../actions/cars'

class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      car: {},
      isGettingCar: false,
      addingCarError: null
    }
  }

  componentDidMount () {
    const {
      match
    } = this.props
    this.props.carsActions.getSingleCar(match.params.stockNumber)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.cars.car !== this.props.cars.car) {
      this.setState({
        car: nextProps.cars.car
      })
    }

    if (this.props.cars.isFetchingSingleCar !== nextProps.cars.isFetchingSingleCar) {
      this.setState({ isGettingCar: nextProps.cars.isFetchingSingleCar })
    }

    if (this.props.cars.addingCarError !== nextProps.cars.addingCarError) {
      this.setState({ addingCarError: nextProps.cars.addingCarError })
    }
  }

  /**
   * add particular car to favorites list
   * @param {Object} car Object containing car details
   * @return {*} none
   */
  addFavoriteCar (car) {
    this.props.carsActions.addFavoriteCar(car)
  }

  render () {
    const {
      isGettingCar
    } = this.state
    const {
      car
    } = this.state
    console.log('car details props', this.props.cars.addingCarError)
    if (isGettingCar) {
      return (
        <h1>Loading</h1>
      )
    }
    return (
      <Fragment>
        <Header />
        <div className='car-view'>
          <div className='car-details'>
            <h1
              className='car-details__text--xlarge car-details__text--margin'
            >
              {car.modelName}
            </h1>
            <h2
              className='car-details__text--large car-details__text--margin'
            >
              {`Stock #
              ${car.stockNumber} -
              ${car.mileage ? `${car.mileage.number} ${car.mileage.unit.toUpperCase()}` : 'none'}-
              ${car.fuelType} -
              ${car.color}`}
            </h2>
            <p className='car-details__text--small car-details__text--margin'>
            This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in
            this page are not definitive and may change due to bad weather
            conditions.
            </p>
          </div>
          <div className='save-car'>
            <div className='save-car__text'>
              <p className='save-car__text--small'>
              If you like this car, click the button and
              save it in your collection of favourite
              items.
              </p>
            </div>
            <div className='save-car__btn--wrapper'>
              <Button
                text='Save'
                handleClick={this.addFavoriteCar.bind(this, car)}
              />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    carsActions: bindActionCreators(carsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
