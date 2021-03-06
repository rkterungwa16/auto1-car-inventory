import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CarFiltersArea from '../components/CarFiltersArea'
import AvailableCarsArea from '../components/AvailableCarsArea'
import * as carsActions from '../actions/cars'
import * as colorsActions from '../actions/colors'
import * as manufacturersActions from '../actions/manufacturers'

class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cars: [],
      colors: [],
      currentPage: 1,
      isGettingCars: false,
      manufacturers: [],
      selectedColor: '',
      selectedManufacturer: '',
      selectedSortOrder: 'None',
      selectedPage: 1,
      totalPageCount: null
    }
  }

  componentDidMount () {
    this.props.carsActions.getAllCars()
    this.props.colorsActions.getAllColors()
    this.props.manufacturersActions.getAllManufacturers()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.cars.cars !== this.props.cars.cars) {
      this.setState({
        cars: nextProps.cars.cars,
        totalPageCount: nextProps.cars.totalPageCount
      })
    }

    if (nextProps.cars.currentPage !== this.props.cars.currentPage) {
      this.setState({
        currentPage: nextProps.cars.currentPage
      })
    }

    if (nextProps.colors.colors !== this.props.colors.colors) {
      this.setState({
        colors: nextProps.colors.colors
      })
    }

    if (nextProps.manufacturers.manufacturers !== this.props.manufacturers.manufacturers) {
      this.setState({
        manufacturers: nextProps.manufacturers.manufacturers
      })
    }

    if (this.props.cars.isFetchingCars !== nextProps.cars.isFetchingCars) {
      this.setState({ isGettingCars: nextProps.cars.isFetchingCars })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.selectedPage !== this.state.selectedPage) {
      this.getFilteredCarList()
    }
  }

  getSortFilterParams (sortOrder) {
    this.setState({
      selectedSortOrder: sortOrder
    })
  }

  getPageParams (page) {
    this.setState({
      selectedPage: page
    })
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
    let {
      selectedColor,
      selectedManufacturer,
      selectedSortOrder,
      selectedPage
    } = this.state

    if (selectedSortOrder === 'None') {
      selectedSortOrder = ''
    }

    if (selectedSortOrder === 'Mileage - Ascending') {
      selectedSortOrder = 'asc'
    }

    if (selectedSortOrder === 'Mileage - Descending') {
      selectedSortOrder = 'des'
    }

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
      colors,
      totalPageCount,
      isGettingCars,
      currentPage
    } = this.state

    if (isGettingCars) {
      return (
        <h1>Loading</h1>
      )
    }
    return (
      <div className='container-wrapper'>
        <Header />
        <div className='container'>
          <CarFiltersArea
            colors={colors}
            manufacturers={this.formatDropdownData(manufacturers)}
            getColorsFilterParams={this.getColorsFilterParams.bind(this)}
            getFilteredCarList={this.getFilteredCarList.bind(this)}
            getManufacturersFilterParams={this.getManufacturersFilterParams.bind(this)}
          />

          <AvailableCarsArea
            cars={cars}
            totalPageCount={totalPageCount}
            getSortFilterParams={this.getSortFilterParams.bind(this)}
            getPageParams={this.getPageParams.bind(this)}
            currentPage={currentPage}
            changePageNumber={this.props.carsActions.changePageNumber}
          />

        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars,
    totalPageCount: state.cars.totalPageCount,
    currentPage: state.cars.currentPage,
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
