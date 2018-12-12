import React, { Component } from 'react'
import ImageCpmponent from '../../components/ImageCpmponent/ImageCpmponent'
import LoginHeader from '../../components/loginHeader/loginHeader'
import './PhoneLogin.styl'

class PhoneLogin extends Component {

  handleClick = (path) => {
    //跳转到指定的路由路径
    this.props.history.replace(path)
  }

  render () {
    return (
      <div style={{backgroundColor: '#fff', height: 100 + '%'}}>
        <LoginHeader/>
        <ImageCpmponent/>
        <div className="ursBox" style={{width: 100 + '%', height: 572 + 'px'}}>
          <div className="g-bd" id="cnt-box">
            <div className="m-cnt">
              <form id="login-form">
                <div className="m-container">
                  <div className="u-tab f-cb">
                    <a href="javascript:;" className="tab0">使用密码验证登录</a>
                  </div>
                  <div className="inputBox">
                    <div className="u-input box">
                      <label className="u-label f-dn">请输入手机号</label>
                      <input type="tel" className="dlemail" name="email" placeholder="请输入手机号" id="phoneipt"/>
                    </div>
                    <div className="u-tip">
                      <div className="u-success u-clear"></div>
                    </div>
                  </div>
                  <div className="m-pccnt f-cb">
                    <div className="m-pcbox">
                      <div className="inputBox m-mb m-pc f-fl">
                        <div className="u-input">
                          <label className="u-label f-dn">请输入短信验证码</label>
                          <input type="tel" tabIndex={5} maxLength={6} data-max-length="6" className="j-inputtext pcin"
                                 name="phonecode" placeholder="请输入短信验证码"/>
                        </div>
                      </div>
                      <div className="pcbtn f-fl">
                        <button className="tabfocus getsmscode">获取验证码</button>
                      </div>
                    </div>
                  </div>
                  <div className="f-cb loginbox">
                    <a tabIndex={8} id="submitBtn" className="u-loginbtn btncolor tabfocus">登录</a>
                  </div>
                  <div className="m-unlogin">
                    <a target="_blank" className="forgetpwdReg">遇到问题？</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="foot">
          <div onClick={() => this.handleClick('/personal')} className="other"><span>其他登录方式</span></div>
          <div onClick={() => this.handleClick('/register')} className="redundant">
            <span >注册帐号</span>
            <i></i>
          </div>
        </div>
      </div>
    )
  }
}

export default PhoneLogin
