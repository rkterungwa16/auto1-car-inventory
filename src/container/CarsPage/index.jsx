import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../components/Header'
// import Footer from '../../components/Footer'
import CarFiltersArea from '../../components/CarFiltersArea'
import AvailableCarsArea from '../../components/AvailableCarsArea'
import * as carsActions from '../../actions/cars'
import * as colorsActions from '../../actions/colors'
import * as manufacturersActions from '../../actions/manufacturers'

class CarsView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cars: [],
      colors: [],
      manufacturers: [],
      selectedColor: '',
      selectedManufacturer: '',
      selectedSortOrder: '',
      selectedPage: 1
    }
  }

  componentDidMount () {
    this.props.carsActions.getAllCars()
    this.props.colorsActions.getAllColors()
    this.props.manufacturersActions.getAllManufacturers()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.cars.cars) {
      this.setState({
        cars: nextProps.cars.cars
      })
    }

    if (nextProps.colors.colors) {
      this.setState({
        colors: nextProps.colors.colors
      })
    }

    if (nextProps.colors.colors) {
      this.setState({
        manufacturers: nextProps.manufacturers.manufacturers
      })
    }
  }

  getColorsFilterParams (color) {
    this.setState({
      selectedColor: color
    })
  }

  getManufacturersFilterParams (manufacturer) {
    this.setState({
      selectedManufacturer: manufacturer
    })
  }

  formatDropdownData (data) {
    let formattedData = []
    if (data.length > 1) {
      formattedData = data.map((member) => member.name)
    }
    return formattedData
  }

  getFilteredCarList () {
    const {
      selectedColor,
      selectedManufacturer,
      selectedSortOrder,
      selectedPage
    } = this.state
    this.props.carsActions.getAllCars({
      manufacturer: selectedManufacturer,
      color: selectedColor,
      sort: selectedSortOrder,
      page: selectedPage
    })
  }

  render () {
    const {
      cars,
      manufacturers,
      colors
    } = this.state

    return (
      <div>
        <Header />
        <div className='container'>
          <CarFiltersArea
            colors={colors}
            manufacturers={this.formatDropdownData(manufacturers)}
            getColorsFilterParams={this.getColorsFilterParams.bind(this)}
            getFilteredCarList={this.getFilteredCarList.bind(this)}
            getManufacturersFilterParams={this.getManufacturersFilterParams.bind(this)}
          />
          <AvailableCarsArea cars={cars} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars,
    colors: state.colors,
    manufacturers: state.manufacturers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    carsActions: bindActionCreators(carsActions, dispatch),
    colorsActions: bindActionCreators(colorsActions, dispatch),
    manufacturersActions: bindActionCreators(manufacturersActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsView)
