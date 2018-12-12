import React, { Component } from 'react'
import './LoginSuccess.styl'

class LoginSuccess extends Component {
  handleClick = (path) => {
    //跳转到指定的路由路径
    this.props.history.replace(path)
  }

  render () {
    return (
      <div className="m-u" style={{height: 1430+"px", backgroundColor: '#f5f5f5'}}>
        <div className="g-row">
          <div className="m-profile">
            <div className="g-row">
              <div className="left">
                <img src={require("./images/people.png")} alt="" className="avatar"/>
                  <div className="info" onClick={()=> this.handleClick('/personal')}>
                    <p className="nickname" >登录/注册</p>
                <div className="membershipLevel"><span className="memberTitle0">普通用户</span></div>
              </div>
            </div>
            <div className="right">
              <a href="javascript:;"><i className="icon-normal u-icon-qrCodeInUcenter"></i></a>
              <div className="m-supermcEntrance">
                <i className="u-icon u-icon-supermember"></i>
                <div className="word">
                  <div className="line1">超级会员</div>
                  <div className="line2">
                    <span>立即试用</span>
                    <i className="u-icon-arrow"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="g-row">
      <div className="m-uMenu">
        <ul className="list">
          <li className="item">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-ulist"></i>
              <span className="txt">我的订单</span>
            </a>
          </li>
          <li className="item">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-upin"></i>
              <span className="txt">周六一起拼</span>
            </a>
          </li>
          <li className="item">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-uaftersale"></i>
              <span className="txt">售后服务</span>
            </a>
          </li>
          <li className="item">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-ulead"></i>
              <span className="txt">邀请返利</span>
            </a>
          </li>
          <li className="item">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-ucoupon"></i>
              <span className="txt">优惠券</span>
            </a>
          </li>
          <li className="item">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-uredpacket"></i>
              <span className="txt">我的红包</span>
            </a>
          </li>
          <li className="item">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-upreemption"></i>
              <span className="txt">优先购</span>
            </a>
          </li>
          <li className="item">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-ugiftcard"></i>
              <span className="txt">礼品卡</span>
            </a>
          </li>
          <li className="item">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-upoints"></i>
              <span className="txt">积分中心</span>
            </a>
          </li>
          <li className="item">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-umembershipBenefits"></i>
              <span className="txt">会员俱乐部</span>
            </a>
          </li>
          <li className="item">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-uaddress"></i>
              <span className="txt">地址管理</span>
            </a>
          </li>
          <li className="item">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-usecurity"></i>
              <span className="txt">帐号安全</span>
            </a>
          </li>
          <li className="item item-bottom">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-uhelp-kefu"></i>
              <span className="txt">帮助与客服</span>
            </a>
          </li>
          <li className="item item-bottom">
            <a href="javascript:;" className="m-uMenuItem">
              <i className="img u-icon u-icon-ufeedback"></i>
              <span className="txt">意见反馈</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="g-row">
      <button className="w-button w-button-xxl w-button-blocks w-button-white">退出登录</button>
  </div>
    <a href="javascript:;" className="bounsEntrance"></a>
  </div>
    )
  }
}

export default LoginSuccess
