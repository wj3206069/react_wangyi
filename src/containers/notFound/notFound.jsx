import React, { Component } from 'react'
import './notfound.styl'

class NotFound extends Component {
  handleClick = (path) => {
    //跳转到指定的路由路径
    this.props.history.replace(path)
  }

  render () {
    return (
      <div>
        <div className="m-hdWrap">
          <div className="m-hd">
            <div className="m-topBar">
              <div className="g-row">
                <a href='https://www.atguigu.com'>
                  <img src={require('./images/no.png')} alt="" className="logo"/>
                </a>
                <div className="right">
                  <a href='https://www.atguigu.com' className="login">登录</a>
                  <a href='https://www.atguigu.com' className="reg">注册</a>
                  <a href='javascript:;' className="cart" onClick={() => this.handleClick('/shopcart')}>
                    <i className="i-cart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m_main">
          <div className="m-top">
            <a href='https://www.atguigu.com'>
              <img src={require('./images/bj.png')} alt="" className="u-banner"/>
            </a>
            <div className="u-con">
              <a href='https://www.atguigu.com'><img src={require('./images/404.png')} alt="" className="tlt"/></a>
              <p className="tip">
                亲，你走得太远了
                <br/>
                好的生活，没那么贵，更没那么远
              </p>
              <a href='https://www.atguigu.com' className="btn-home">逛逛其他好物</a>
            </div>
          </div>
          <div className="m-port">
            <a className="u-act" href='https://www.atguigu.com'>
              <img src={require('./images/app.jpg')} alt="" className="imgs"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
