// Code YouTubeDebugger Component Here

import React, { PropTypes } from 'react'

class YoutubeDebugger extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateBtnClicked = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionBtnClicked = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render () {
    return( <div>
              <button className="bitrate" onClick={this.bitrateBtnClicked}> bitrate </button>
              <button className="resolution" onClick={this.resolutionBtnClicked}> resolution </button>
            </div>)
  }
}

export default YoutubeDebugger;
