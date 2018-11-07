import React from 'react'
import uniqId from 'uniqid'

class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dropdownIsOpen: false,
      selectedOption: [this.props.defaultDropdownTitle ? this.props.defaultDropdownTitle : '']
    }
  }

  toggleList () {
    this.setState(prevState => ({
      dropdownIsOpen: !prevState.dropdownIsOpen
    }))
  }

  formatData (data) {
    const formattedData = data.map(value => {
      return {
        id: uniqId('dd'),
        title: value,
        value,
        selected: false,
        key: value.toLowerCase()
      }
    })
    return formattedData
  }

  selectOption (tab) {
    const content = this.formatData(this.props.dropdownContent)
    // Mark selected value
    const state = content.map((value, index) => {
      const selectedState = {
        id: value.id,
        title: value.title,
        key: value.key,
        value: value.title,
        selected: tab === index ? !value.selected : false
      }
      return selectedState
    })

    // Get element selected
    const selected = state.filter(options => options.selected === true)

    this.setState({
      selectedOption: selected
    })
    this.fireChangeEvent({ value: selected[0].id, label: selected[0].title })
  }

  fireChangeEvent (currentSelected) {
    if (currentSelected !== this.state.selectedOption && this.props.getFilterParams) {
      this.props.getFilterParams(currentSelected.label)
    }
  }

  renderDropdownContents (contentValues) {
    if (contentValues) {
      const renderedList = contentValues.map((value, index) => (
        <div
          key={value.id}
          className={
            value.selected
              ? 'dropdown-list__item selected'
              : 'dropdown-list__item'
          }
          onClick={() => { this.selectOption(index) }}
        >{value.title}</div>
      ))
      return renderedList
    }
  }

  render () {
    const {
      dropdownIsOpen,
      selectedOption
    } = this.state
    return (
      <div className='dropdown'>
        <button
          className='dropdown__btn'
          onClick={this.toggleList.bind(this)}
        >
          <span
            className='dropdown__text--medium'
          >{ selectedOption[0].title }
          </span><i className='fas fa-caret-down fa-2x' />
        </button>
        <div
          className={
            dropdownIsOpen
              ? 'dropdown__content dropdown__content--show'
              : 'dropdown__content'}
        >
          {
            dropdownIsOpen
              ? this.renderDropdownContents(this.formatData(this.props.dropdownContent))
              : null
          }
        </div>
      </div>
    )
  }
}

export default Dropdown
