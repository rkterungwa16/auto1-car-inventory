import React from 'react'

// First Previous Page 2 of 10 Next Last
class Pagination extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1,
      totalPageCount: null
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      totalPageCount: nextProps.totalPageCount
    })
  }
  firstPage () {
    this.setState({
      currentPage: 1
    })
    this.props.getPageParams(1)
  }
  previousPage () {
    const {
      currentPage
    } = this.state

    if (currentPage - 1 !== 0) {
      this.setState({
        currentPage: currentPage - 1
      })
      this.props.getPageParams(currentPage - 1)
    } else {
      this.setState({
        currentPage: 1
      })
    }
  }

  lastPage () {
    const {
      totalPageCount
    } = this.state
    this.setState({
      currentPage: totalPageCount
    })
    this.props.getPageParams(totalPageCount)
  }

  nextPage () {
    const {
      currentPage,
      totalPageCount
    } = this.state

    if (currentPage + 1 > totalPageCount) {
      this.setState({
        currentPage: totalPageCount
      })
      this.props.getPageParams(totalPageCount)
    } else {
      this.setState({
        currentPage: currentPage + 1
      })
      this.props.getPageParams(currentPage + 1)
    }
  }
  render () {
    const {
      currentPage,
      totalPageCount
    } = this.state

    return (
      <div className='pagination'>
        <a
          href='#view details'
          className='available-cars__text available-cars__text--small link__text--orange'
          onClick={this.firstPage.bind(this)}
        >First</a>
        <a
          href='#view details'
          className='available-cars__text available-cars__text--small link__text--orange'
          onClick={this.previousPage.bind(this)}
        >Previous</a>
        <a
          href='#view details'
          className='available-cars__text available-cars__text--small link__text--black'
        >{`Page ${currentPage} of ${totalPageCount}`}
        </a>
        <a
          href='#view details'
          className='available-cars__text available-cars__text--small link__text--orange'
          onClick={this.nextPage.bind(this)}
        >Next</a>
        <a
          href='#view details'
          className='available-cars__text available-cars__text--small link__text--orange'
          onClick={this.lastPage.bind(this)}
        >Last</a>
      </div>
    )
  }
}

export default Pagination
