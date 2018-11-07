import React from 'react'

class Pagination extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 1
    }
  }

  /**
   * skip to the first page
   */
  firstPage () {
    this.setState({
      currentPage: 1
    })
    this.props.getPageParams(1)
  }

  /**
   * Skip to the previous page
   */
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

  /**
   * Skip to the last page
   */
  lastPage () {
    const {
      totalPageCount
    } = this.props
    this.setState({
      currentPage: totalPageCount
    })
    this.props.getPageParams(totalPageCount)
  }

  /**
   * Skip to next page
   */
  nextPage () {
    const {
      currentPage
    } = this.state
    const {
      totalPageCount
    } = this.props

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
      currentPage
    } = this.state

    const {
      totalPageCount
    } = this.props

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
