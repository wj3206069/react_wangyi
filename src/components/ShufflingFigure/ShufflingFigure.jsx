import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class ShufflingFigure extends Component {
  componentDidMount () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      loop: true,
      autoplay: true
    })
  }

  render () {
    return (
      <div className="lbt">
        <div className="m-slide">
          <div className="slide-con">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={require('./images/l1.jpg')} alt="xxx"/>
                </div>
                <div className="swiper-slide">
                  <img src={require('./images/l2.jpg')} alt="xxx"/>
                </div>
                <div className="swiper-slide">
                  <img src={require('./images/l3.jpg')} alt="xxx"/>
                </div>
                <div className="swiper-slide">
                  <img src={require('./images/l4.jpg')} alt="xxx"/>
                </div>
                <div className="swiper-slide">
                  <img src={require('./images/l5.jpg')} alt="xxx"/>
                </div>
                <div className="swiper-slide">
                  <img src={require('./images/l6.jpg')} alt="xxx"/>
                </div>
                <div className="swiper-slide">
                  <img src={require('./images/l7.jpg')} alt="xxx"/>
                </div>
                <div className="swiper-slide">
                  <img src={require('./images/l8.jpg')} alt="xxx"/>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShufflingFigure
