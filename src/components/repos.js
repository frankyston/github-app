'use strict'

import React, {PropTypes} from 'react'

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h3>{title}</h3>
    <ul>
      {repos.map( (repo, index) => (
        <li key={index}><a href={repo.html_url}>{repo.name}</a></li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
