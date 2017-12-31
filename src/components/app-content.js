'use strict'

import React, {PropTypes} from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred, handleSearch, handleShowRepos, handleShowStarred, isFetching }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} isDisable={isFetching}/>
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions handleShowRepos={handleShowRepos} handleShowStarred={handleShowStarred} />}
    {!!repos.length && <Repos className="repos" title="Repositórios:" repos={repos} />}
    {!!starred.length && <Repos className="starred" title="Favoritos:" repos={starred} />}

  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleShowRepos: PropTypes.func.isRequired,
  handleShowStarred: PropTypes.func.isRequired
}

export default AppContent
