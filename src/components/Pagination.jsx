import React from 'react'

class Pagination extends React.Component {
  /**
   * skip to the first page
   */
  firstPage () {
    this.props.changePageNumber(1)
    this.props.getPageParams(1)
  }

  /**
   * Skip to the previous page
   */
  previousPage () {
    const {
      currentPage
    } = this.props

    if (currentPage - 1 !== 0) {
      this.props.changePageNumber(currentPage - 1)
      this.props.getPageParams(currentPage - 1)
    } else {
      this.props.changePageNumber(1)
    }
  }

  /**
   * Skip to the last page
   */
  lastPage () {
    const {
      totalPageCount
    } = this.props

    this.props.changePageNumber(totalPageCount)
    this.props.getPageParams(totalPageCount)
  }

  /**
   * Skip to next page
   */
  nextPage () {
    const {
      totalPageCount,
      currentPage
    } = this.props

    if (currentPage + 1 > totalPageCount) {
      this.props.changePageNumber(totalPageCount)
      this.props.getPageParams(totalPageCount)
    } else {
      this.props.changePageNumber(currentPage + 1)
      this.props.getPageParams(currentPage + 1)
    }
  }
  render () {
    const {
      currentPage,
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
          onClick={this.nextPage.bind(this, currentPage, totalPageCount)}
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

Pagination.defaultProps = {
  currentPage: 1
}

export default Pagination
