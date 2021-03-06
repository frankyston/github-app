'use strict'

import React, {PropTypes} from 'react'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <div className="avatar">
      <img src={userinfo.photo} />
    </div>
    <div className='info'>
      <a href={`https://github.com/${userinfo.login}`}>
        <h2>{userinfo.username}</h2>
      </a>

      <ul className='repos-info'>
        <li>Repositórios: {userinfo.repos}</li>
        <li>Seguidores: {userinfo.followers}</li>
        <li>Seguindo: {userinfo.following}</li>
      </ul>
    </div>
  </div>
)

UserInfo.propTypes = {
  username: PropTypes.shape({
    username: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
