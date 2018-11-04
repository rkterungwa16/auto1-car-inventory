import React from 'react'
import uniqId from 'uniqid'

class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dropdownIsOpen: false,
      selectedOption: [this.props.defaultDropdownTitle ? this.props.defaultDropdownTitle : ''],
      content: []
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.dropdownContent) {
      this.setState({
        content: this.formatData(nextProps.dropdownContent)
      })
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
    const {
      content
    } = this.state

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
      categories: state,
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
              ? 'list__item selected'
              : 'list__item'
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
      selectedOption,
      content
    } = this.state
    return (
      <div className='dropdown'>
        <button
          className='dropdown__btn'
          onClick={this.toggleList.bind(this)}
        ><span>{ selectedOption[0].title }</span><i className='fas fa-caret-down fa-2x' /></button>
        <div
          className={
            dropdownIsOpen
              ? 'dropdown__content dropdown__content--show'
              : 'dropdown__content'}
        >
          {
            dropdownIsOpen
              ? this.renderDropdownContents(content)
              : null
          }
        </div>
      </div>
    )
  }
}

export default Dropdown
