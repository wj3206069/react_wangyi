import React, { Component } from 'react'
import './shopCart.styl'

class ShopCart extends Component {
  render () {
    return (
      <div>
        <div className="shop-row">
          <div className="shop-main">
            <div className="wraper" style={{height: 88+'px'}}>
              <div className="m-hd">
                <div className="m-cartHd">
                  <span className="logs">购物车</span>
                  <div className="rights">
                    <a href="javascript:;" className="cart-coupon">
                      <span className="txt">领券</span>
                    </a>
                    <span className="cart-btn"></span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul className="lists">
                <li className="item">
                  <i className="u-icon"></i>
                  <span>48小时快速退款</span>
                </li>
                <li className="item">
                  <i className="u-icon"></i>
                  <span>48小时快速退款</span>
                </li>
                <li className="item">
                  <i className="u-icon"></i>
                  <span>满88元免邮费</span>
                </li>
              </ul>
            </div>
            <div className="m-page m-page-noCart">
              <div className="container">
                <div className="img"></div>
                <div className="txt">
                  <div className="noCart-login">
                    <div className="noCart-title">去添加点什么吧</div>
                    <div className="noCart-btn">登录</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShopCart
