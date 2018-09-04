import React, { Component } from 'react'

import { Consumer } from '../../context'

class Search extends Component {
  state = {
    trackTitle: '',
  }

  findTrack = (e, value) => {
    e.preventDefault()
    value.dispatch(this.state.trackTitle)
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music" /> Search for a song
              </h1>
              <p className="lead text-center">Get the lyrics for a song</p>
              <form onSubmit={(e) => this.findTrack(e, value)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="song title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button className="btn btn-primary btn-lg btn-block mb-5">Get track lyrics</button>
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Search
