import React from 'react'

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
        content: nextProps.dropdownContent
      })
    }
  }

  toggleList () {
    this.setState(prevState => ({
      dropdownIsOpen: !prevState.dropdownIsOpen
    }))
  }

  selectOption (tab) {
    const {
      content
    } = this.state
    const state = content.map((value, index) => {
      const selectedState = {
        title: value,
        selected: tab === index ? !value.selected : false
      }
      return selectedState
    })

    const selected = state.filter(options => options.selected === true)
    this.setState({
      categories: state,
      selectedOption: selected
    })
    this.fireChangeEvent({ label: selected[0].title })
  }

  fireChangeEvent (currentSelected) {
    if (currentSelected !== this.state.selectedOption && this.props.onChange) {
      this.props.onChange(currentSelected)
    }
  }

  renderDropdownContents (contentValues) {
    const renderedList = contentValues.map((value, index) => (
      <div
        key={value}
        className={
          value.selected
            ? 'list__item selected'
            : 'list__item'
        }
        onClick={() => { this.selectOption(index) }}
      >{value}</div>
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
      <div className='dropdown'>
        <button
          className='dropdown__btn'
          onClick={this.toggleList.bind(this)}
        ><span>None</span><i className='fas fa-caret-down fa-2x' /></button>
        <span className='anp-dropdown--title'>
          { selectedOption[0].title }
        </span>
        <div
          className={
            dropdownContent
              ? 'dropdown__content dropdown__content--show'
              : 'dropdown__content'}
        >
          {
            dropdownIsOpen
              ? this.renderDropdownContents(dropdownContent)
              : null
          }
        </div>
      </div>
    )
  }
}

export default Dropdown
