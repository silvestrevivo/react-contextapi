import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

export class Provider extends Component {
  state = {
    track_list: [],
    heading: 'Top 10 Tracks',
    dispatch: (title) => {
      axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
          title
        }&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`,
      )
      .then(res => {
        this.setState({ track_list: res.data.message.body.track_list })
      })
      .catch(err => console.log(err))
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_MM_KEY
        }`,
      )
      .then(res => {
        this.setState({ track_list: res.data.message.body.track_list })
      })
      .catch(err => console.log(err))
  }

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
  }
}

export const Consumer = Context.Consumer
