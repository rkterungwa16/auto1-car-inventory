import React from 'react'

// First Previous Page 2 of 10 Next Last
const Pagination = () => (
  <div className='pagination'>
    <a
      href='#view details'
      className='available-cars__text available-cars__text--small link__text--orange'>First</a>
    <a
      href='#view details'
      className='available-cars__text available-cars__text--small link__text--orange'>Previous</a>
    <a
      href='#view details'
      className='available-cars__text available-cars__text--small link__text--black'>Page 2 of 10</a>
    <a
      href='#view details'
      className='available-cars__text available-cars__text--small link__text--orange'>Next</a>
    <a
      href='#view details'
      className='available-cars__text available-cars__text--small link__text--orange'>Last</a>
  </div>
)

export default Pagination
