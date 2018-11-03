import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CarFiltersArea from '../../components/CarFiltersArea'
import AvailableCarsArea from '../../components/AvailableCarsArea'
import * as carsActions from '../../actions/cars'

class CarsView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  componentDidMount () {
    // if (!this.props.tenants.tenants.length > 0 && !this.props.tenants.isGettingTenants) {
    //   this.props.tenantsActions.getAllTenants()
    // }
    this.props.carsActions.getAllCars()
  }

  render () {
    // let currentView
    // if (currentTenantDashboardView === 'talent') {
    //   currentView = <TenantList tenants={tenants} />
    // }
    console.log('props', this.props)
    return (
      <div>
        <Header />
        <div className='container'>
          <CarFiltersArea />
          <AvailableCarsArea />
        </div>
        <Footer />
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
