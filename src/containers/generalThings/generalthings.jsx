import React, { Component } from 'react'
import './generalthings.styl'

class GeneralThings extends Component {
  render () {
    return (
      <div>
        <div className="m-header">
          <header>
            <div className="hd-top">
              <div className="top-row">
                <div className="row-left">
                  <a className="goTo"><i className="icon house"></i></a>
                </div>
                <div className="row-middle">
                  <a href="javascript:;" className="m-f">发现</a>
                  <a href="javascript:;" className="m-j">甄选家</a>
                </div>
                <div className="row-right">
                  <a className="r-cart">
                    <i><span></span></i>
                  </a>
                  <a href="javascript:;" className="r-rear">
                    <i></i>
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="m-tab">
          <div className="tab-b">
            <a href="javascript:;" className="item active">推荐</a>
            <a href="javascript:;" className="item">达人</a>
            <a href="javascript:;" className="item">上新</a>
            <a href="javascript:;" className="item">晒单</a>
            <a href="javascript:;" className="item">HOME</a>
          </div>
        </div>
        <div>
          <div className="m-main">
            <div className="m-tpls one">
              <div className="one-pic"><img src={require('./images/one.jpg')} alt="xx"/></div>
            </div>
            <div className="m-tpls m-tpls-picker">
              <a href="javascript:;" className="u-flexbox">
                <div className="info">
                  <div className="u-name">
                    <span className="ava"><img src={require('./images/x1.png')} alt="xx"/></span>
                    <span>服装组: 小服</span>
                  </div>
                  <div className="title">双11忘买羽绒服？没关系，还有双12！</div>
                  <div className="desc">双12时髦保暖羽绒服低至6折</div>
                  <div className="u-rcount">
                    <i className="ico"></i>
                    <span>59.6k人看过</span>
                  </div>
                </div>
                <div className="u-pic">
                  <img src={require('./images/r1.jpg')}
                       style={{width: 100 + '%', height: 100 + '%'}}/>
                </div>
              </a>
            </div>
            <div className="m-tpls m-tpls-rec">
              <a href="javascript:;" className="recs">
                <div className="u-name">
                  <span className="ava"><img src={require('./images/x2.png')} alt=""/></span>
                  <span>选妹</span>
                </div>
                <div className="title">揭秘2018严选商品线隐藏进阶之路，为美好生活品质加分</div>
                <div className="u-pic"><img src={require('./images/r2.jpg')} alt=""/></div>
                <div className="u-rcount">
                  <i className="ico"></i>
                  <span>14w人看过</span>
                </div>
              </a>
            </div>
            <div className="m-tpls m-tpls-rec">
              <a href="javascript:;" className="recs">
                <div className="u-name">
                  <span className="ava"><img src={require('./images/x2.png')} alt=""/></span>
                  <span>选妹</span>
                </div>
                <div className="title">能让幸福感飙升的实用好物，每样都是快乐源泉!</div>
                <div className="u-pic"><img src={require('./images/r3.jpg')} alt=""/></div>
                <div className="u-rcount">
                  <i className="ico"></i>
                  <span>10w人看过</span>
                </div>
              </a>
            </div>
            <div className="m-tpls m-tpls-picker">
              <a href="javascript:;" className="u-flexbox">
                <div className="info">
                  <div className="u-name">
                    <span className="ava"><img src={require('./images/x3.png')} alt="xx"/></span>
                    <span>智造组：涛姐</span>
                  </div>
                  <div className="title">论除螨，它比阳光更专业</div>
                  <div className="desc">还好我一早入手了自己研发的严选除螨仪，它的存在让我觉得心安了很多。</div>
                  <div className="u-rcount">
                    <i className="ico"></i>
                    <span>50.2k人看过</span>
                  </div>
                </div>
                <div className="u-pic">
                  <img src={require('./images/r4.jpg')}
                       style={{width: 100 + '%', height: 100 + '%'}}/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
  }
  }

  export default GeneralThings
