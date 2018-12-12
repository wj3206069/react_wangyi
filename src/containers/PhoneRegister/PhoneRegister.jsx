import React, { Component } from 'react'
import LoginHeader from '../../components/loginHeader/loginHeader'
import './PhoneRegister.styl'

class PhoneRegister extends Component {


  handleClick = (path) => {
    //跳转到指定的路由路径
    this.props.history.replace(path)
  }

  render () {
    return (
      <div style={{backgroundColor: '#fff', height: 100 + '%'}}>
        <LoginHeader/>
        <div className="title">
          <span>手机号注册</span>
        </div>
        <div className="ursBox" style={{width: 100 + '%', height: 572 + 'px'}}>
          <div className="g-bd" id="cnt-box">
            <div className="m-cnt">
              <form id="login-form">
                <div className="m-container">
                  <div className="inputBox">
                    <div className="u-input box">
                      <label className="u-label f-dn">请输入手机号</label>
                      <input type="tel" className="dlemail" name="email" placeholder="请输入手机号" id="phoneipt"/>
                    </div>
                    <div className="u-tip">
                      <div className="u-success u-clear" id="auto-id-1544177887643"></div>
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
                  <div className="inputBox">
                    <div className="u-input box">
                      <label className="u-label f-dn">请输入密码</label>
                      <input type="tel" className="dlemail" name="email" placeholder="请输入密码"/>
                    </div>
                    <div className="u-tip">
                      <div className="u-success u-clear"></div>
                    </div>
                  </div>
                  <div className="f-cb loginbox">
                    <a tabIndex={8} id="submitBtn" className="u-loginbtn btncolor tabfocus">注册</a>
                  </div>
                  <div className="fur-item fur-agree">
                    <label>
                      <span className="u-zc-agree agreeSelect">
                      <input type="checkbox" className="zc-un-login"/></span>我同意
                      <a href="javascript:;">《服务条款》</a>和<a href="javascript:;">《网易隐私政策》</a>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="redundant" onClick={() => this.handleClick('/email')}>
          <span>邮箱账号注册</span>
          <i></i>
        </div>
      </div>
    )
  }
}

export default PhoneRegister
