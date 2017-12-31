'use strict'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch, isDisable }) => (
  <div className='search'>
    <input type='text' placeholder='Digite o nome do usuário do github'
    onKeyUp={handleSearch} disabled={isDisable} />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired
}

export default Search
