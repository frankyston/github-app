'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  getGithubUrl(username, type){
    const usernameInternal = username ? `/${username}` : ''
    const typeInternal = type ? `/${type}` : ''
    return `https://api.github.com/users${usernameInternal}${typeInternal}`
  }

  handleSearch(e) {
    const keyCode = e.witch || e.keyCode
    const ENTER = 13
    const value = e.target.value
    const target = e.target
    if(keyCode === ENTER){
      this.setState({ isFetching: true })
      ajax().get(this.getGithubUrl(value))
      .then((user) => {
        this.setState({
          userinfo: {
            username: user.name,
            login: user.login,
            photo: user.avatar_url,
            repos: user.public_repos,
            followers: user.followers,
            following: user.following
          },
          repos: [],
          starred: []
        })
      })
      .always(() => {
        this.setState({ isFetching: false })
      })
    }
  }

  handleShowRepos(e) {
    ajax().get(this.getGithubUrl(this.state.userinfo.login, 'repos'))
    .then((repos) => {
      this.setState({
        repos: repos
      }, () => {
        this.setState({
          starred: []
        })
      })
    })
  }

  handleShowStarred(e) {
    ajax().get(this.getGithubUrl(this.state.userinfo.login, 'starred'))
    .then((starred) => {
      this.setState({
        starred: starred
      }, () => {
        this.setState({
          repos: []
        })
      })
    })
  }

  render(){
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        isFetching={this.state.isFetching}
        handleSearch={(e) => this.handleSearch(e)}
        handleShowRepos={(e) => this.handleShowRepos(e)}
        handleShowStarred={(e) => this.handleShowStarred(e)}
      />
    )
  }
}

export default App
