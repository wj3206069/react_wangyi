import React, { Component } from 'react'
import './ImageCpmponent.styl'

class ImageCpmponent extends Component {
  render () {
    return (
      <div className="logos">
        <img src={require('./images/logo.png')} alt="xxx"/>
      </div>
    )
  }
}

export default ImageCpmponent
