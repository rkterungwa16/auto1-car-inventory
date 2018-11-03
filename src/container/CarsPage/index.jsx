import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../components/Header'
// import Footer from '../../components/Footer'
import CarFiltersArea from '../../components/CarFiltersArea'
import AvailableCarsArea from '../../components/AvailableCarsArea'
import * as carsActions from '../../actions/cars'

class CarsView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cars: []
    }
  }

  componentDidMount () {
    this.props.carsActions.getAllCars()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.cars.cars) {
      this.setState({
        cars: nextProps.cars.cars
      })
    }
  }

  render () {
    console.log('state', this.state)
    const {
      cars
    } = this.state
    return (
      <div>
        <Header />
        <div className='container'>
          <CarFiltersArea />
          <AvailableCarsArea cars={cars} />
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CarsView)
