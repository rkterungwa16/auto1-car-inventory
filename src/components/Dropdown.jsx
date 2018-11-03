import React from 'react'

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
      listOpen: !prevState.listOpen
    }))
  }

  selectOption (tab) {
    const prevState = this.state.categories
    const state = prevState.map((value, index) => {
      const selectedState = {
        id: value.id,
        title: value.title,
        key: value.key,
        value: value.title,
        selected: tab === index ? !value.selected : false
      }
      return selectedState
    })

    const selected = state.filter(options => options.selected === true)
    this.setState({
      categories: state,
      selectedOption: selected
    })
    this.fireChangeEvent({ value: selected[0].id, label: selected[0].title })
  }

  fireChangeEvent (currentSelected) {
    if (currentSelected !== this.state.selectedOption && this.props.onChange) {
      this.props.onChange(currentSelected)
    }
  }

  renderDropdownContents (contentValues) {
    const renderedList = contentValues.map((value, index) => (
      <li
        key={value.id}
        className={
          value.selected
            ? 'anp-dropdown--option selected'
            : 'anp-dropdown--option'
        }
        onClick={() => { this.selectOption(index) }}
      >{value.title}</li>
    ))
    return renderedList
  }

  render () {
    const {
      dropdownContent
    } = this.props

    const {
      dropdownIsOpen,
      selectedOption
    } = this.state
    return (
      <div class='dropdown'>
        <button
          className='dropdown__btn'
          onClick={this.toggleList}
        >Dropdown</button>
        <span className='anp-dropdown--title'>
          { selectedOption[0].title }
        </span>
        <div className='dropdown__content'>
          <ul className='d-flex flex-column p-3'>
            {
              dropdownIsOpen
                ? this.renderDropdownContents(dropdownContent)
                : null
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Dropdown
