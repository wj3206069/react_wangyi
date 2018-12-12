import React, { Component } from 'react'
import './home.styl'
import BScroll from 'better-scroll'
import ShufflingFigure from '../../components/ShufflingFigure/ShufflingFigure'
import PrivateOrdering from '../../components/privateOrdering/privateOrdering'

import {getHomeData} from '../../store/actions'
import {connect} from 'react-redux'


class Home extends Component {
  componentDidMount () {
   new BScroll('.inner', {
      scrollX: true
    })

    this.props.getHomeData()

    console.log(this.props.homeList);
  }

  render () {
    return (
      <div className="home">
        <div className="header">
          <div className="m-hd">
            <div className="head-top">
              <a href="javascript:;" className="logoss"></a>
              <div className="search">
                <i className="search-i"></i>
                <span className="search-s">搜索商品, 共19915款好物</span>
              </div>
              <div className="login">登录</div>
            </div>
            <div className="head-bot">
              <div className="bot-list">
                <header className="list-head">
                  <div className="inner">
                    <div className="inner-list">
                      <div className="tab active"><span className="txt">推荐</span></div>
                      <div className="tab">
                        <span className="txt">居家</span>
                      </div>
                      <div className="tab">
                        <span className="txt">鞋包配饰</span>
                      </div>
                      <div className="tab">
                        <span className="txt">服装</span>
                      </div>
                      <div className="tab">
                        <span className="txt">电器</span>
                      </div>
                      <div className="tab">
                        <span className="txt">洗护</span>
                      </div>
                      <div className="tab">
                        <span className="txt">饮食</span>
                      </div>
                      <div className="tab">
                        <span className="txt">餐厨</span>
                      </div>
                      <div className="tab">
                        <span className="txt">婴童</span>
                      </div>
                      <div className="tab">
                        <span className="txt">文体</span>
                      </div>
                      <div className="tab">
                        <span className="txt">特色区</span>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
              <div className="bot-all">
                <div className="liner"></div>
                <div className="toggle">
                  <div className="icon"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShufflingFigure/>
        <div className="severIndex">
          <ul className="grow">
            <li className="item">
              <a href="javascript:;">
                <i className="u-icon" style={{backgroundImage: 'url(' + require('./images/xuan.png') + ')'}}></i>
                <span className="txt">网易自营品牌</span>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;">
                <i className="u-icon" style={{backgroundImage: 'url(' + require('./images/xuan.png') + ')'}}></i>
                <span className="txt">30天无忧退货</span>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;">
                <i className="u-icon" style={{backgroundImage: 'url(' + require('./images/xuan.png') + ')'}}></i>
                <span className="txt">48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <div className="shop-list">
              <div className="lists">
                <div className="container">
                  <div className="wrapper">
                    <div className="slide">
                      <a href="javascript:;" className="list-item">
                        <div className="icon"><img src={require('./images/list1.png')} alt="xx"/></div>
                        <div className="txt">居家</div>
                      </a>
                      <a href="javascript:;" className="list-item">
                        <div className="icon"><img src={require('./images/list2.png')} alt="xx"/></div>
                        <div className="txt">鞋包配饰</div>
                      </a>
                      <a href="javascript:;" className="list-item">
                        <div className="icon"><img src={require('./images/list3.png')} alt="xx"/></div>
                        <div className="txt">服装</div>
                      </a>
                      <a href="javascript:;" className="list-item">
                        <div className="icon"><img src={require('./images/list4.png')} alt="xx"/></div>
                        <div className="txt">电器</div>
                      </a>
                      <a href="javascript:;" className="list-item">
                        <div className="icon"><img src={require('./images/list5.png')} alt="xx"/></div>
                        <div className="txt">运动鞋</div>
                      </a>
                      <a href="javascript:;" className="list-item">
                        <div className="icon"><img src={require('./images/list6.png')} alt="xx"/></div>
                        <div className="txt">零食</div>
                      </a>
                      <a href="javascript:;" className="list-item">
                        <div className="icon"><img src={require('./images/list7.png')} alt="xx"/></div>
                        <div className="txt">卫生纸</div>
                      </a>
                      <a href="javascript:;" className="list-item">
                        <div className="icon"><img src={require('./images/list8.png')} alt="xx"/></div>
                        <div className="txt">餐厨</div>
                      </a>
                      <a href="javascript:;" className="list-item">
                        <div className="icon"><img src={require('./images/list9.png')} alt="xx"/></div>
                        <div className="txt">文体</div>
                      </a>
                      <a href="javascript:;" className="list-item">
                        <div className="icon"><img src={require('./images/list10.png')} alt="xx"/></div>
                        <div className="txt">超级秒杀</div>
                      </a>
                    </div>
                  </div>
                  <div className="pagination"></div>
                </div>
              </div>
            </div>
            <div className="shop-rush">
              <div className="one">
                <div className="one-i"><img src={require('./images/rush.gif')}/></div>
              </div>
              <div className="two">
                <div>
                  <a href="javascript:;" className="promItem">
                    <div className="my-img">
                      <img src={require('./images/rush1.png')}/>
                    </div>
                  </a>
                  <a href="javascript:;" className="promItem">
                    <div className="my-img">
                      <img src={require('./images/rush2.png')}/>
                    </div>
                  </a>
                </div>
              </div>
              <div className="three">
                <div>
                  <a href="javascript:;" className="promItem1">
                    <div className="my-img">
                      <img src={require('./images/rush3.png')}/>
                    </div>
                  </a>
                  <a href="javascript:;" className="promItem2">
                    <div className="my-img">
                      <img src={require('./images/rush4.png')}/>
                    </div>
                  </a>
                </div>
              </div>
              <div className="liner-bot"></div>
            </div>
            <div className="shop-ceo">
              <a href="javascript:;"><img src={require('./images/ceo.png')}/></a>
            </div>
            <div className="shop-four">
              <div>
                <a href="javascript:;">
                  <div className="title">12.12爱吃福利社</div>
                  <div className="desc">暖冬美食荟萃</div>
                  <div className="picList">
                    <img src={require('./images/pic1.png')} alt="xx" className="pic"/>
                    <img src={require('./images/pic2.png')} alt="xx" className="pic"/>
                  </div>
                </a>
                <a href="javascript:;">
                  <div className="title">12月必买好物</div>
                  <div className="desc">冬日小确幸指南</div>
                  <div className="picList">
                    <img src={require('./images/pic3.png')} alt="xx" className="pic"/>
                    <img src={require('./images/pic4.png')} alt="xx" className="pic"/>
                  </div>
                </a>
                <a href="javascript:;">
                  <div className="title">12.12数码家电狂欢</div>
                  <div className="desc">惊爆低至6.5折</div>
                  <div className="picList">
                    <img src={require('./images/pic5.png')} alt="xx" className="pic"/>
                    <img src={require('./images/pic6.png')} alt="xx" className="pic"/>
                  </div>
                </a>
                <a href="javascript:;">
                  <div className="title">12.12鞋包配饰庆典</div>
                  <div className="desc">冬日抗寒低至6折</div>
                  <div className="picList">
                    <img src={require('./images/pic7.png')} alt="xx" className="pic"/>
                    <img src={require('./images/pic8.png')} alt="xx" className="pic"/>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <PrivateOrdering/>
      </div>
    )
  }
}

export default connect(
 state => ({homeList:state.homeList}) ,
  {getHomeData}
)(Home)
