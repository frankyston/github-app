'use strict'

import React, { PropTypes } from 'react'

const Actions = ({ handleShowRepos, handleShowStarred }) => (
  <div className='actions'>
    <button onClick={handleShowRepos}>Ver repositórios</button>
    <button onClick={handleShowStarred}>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  handleShowRepos: PropTypes.func.isRequired,
  handleShowStarred: PropTypes.func.isRequired
}

export default Actions
