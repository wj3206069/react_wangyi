import React, { Component } from 'react'
import LoginHeader from '../../components/loginHeader/loginHeader'
import './personal.styl'

class Personal extends Component {

  handleClick = (path) => {
    //跳转到指定的路由路径
    console.log(path);
    this.props.history.replace(path)
  }

  render () {
    return (
      <div>
        <LoginHeader/>
        <div style={{height: 1292 + 'px'}} className="loginTypesWrap">
          <div className="m-loginTypes">
            <div className="cont">
              <div className="logoWrap">
                <img src={require("./images/low.png")}/>
              </div>
              <div className="btnWrap">
                <div onClick={()=>this.handleClick('/phone')} className="w-button w-button-xl w-button-block">
                  <i className="u-icon u-icon-loginPhone"></i>
                  <span>手机号码登录</span>
                </div>
                <div  onClick={() => this.handleClick('/email')} className="w-button w-button-xl w-button-block w-button-ghostRed">
                  <i className="u-icon u-icon-loginMail"></i>
                  <span>邮箱账号登录</span>
                </div>
                <div className="btn" onClick={() => this.handleClick('/register')}>
                  <span>手机号快捷注册</span>
                  <i className="u-icon u-icon-arrow-right3"></i>
                </div>
              </div>
            </div>
            <div className="thirdWrap">
              <div className="itemWrap">
              <span className="item">
                <i className="icon icon-weixin"></i>
               <span className="name">微信</span>
              </span>
              </div>
              <div className="itemWrap">
              <span className="item">
                <i className="icon icon-qq"></i>
               <span className="name">QQ</span>
              </span>
              </div>
              <div className="itemWrap">
              <span className="item">
                <i className="icon icon-weibo"></i>
               <span className="name">微博</span>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Personal
