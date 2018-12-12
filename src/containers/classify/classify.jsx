import React, { Component } from 'react'
import BScroll from 'better-scroll'
import './classify.styl'

import {connect} from 'react-redux'

import {getAuto} from '../../store/actions'

class Classify extends Component {
  componentDidMount () {
   new BScroll('.nav-list', {
      click: true
    })

    this.props.getAuto()
  }

  render () {
    return (
      <div className="classify">
        <div className="header" style={{height: 88 + 'px'}}>
          <div className="m-hd">
            <div className="search-item">
              <div className="s-int">
                <i></i>
                <span>搜索商品, 共19931款好物</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cateNav" style={{left: 0 + 'px'}}>
          <div style={{position: 'relative', width: 100 + '%', height: 100 + '%', overflow: 'hidden'}}
               className="nav-list">
            <ul className="nav-ul ul-l">
              <li className="item active">
                <a href="javascript:;" className="txt">12.12专区</a>
              </li>
              <li className="item">
                <a href="javascript:;" className="txt">冬季专区</a>
              </li>
              <li className="item">
                <a href="javascript:;" className="txt">爆品专区</a>
              </li>
              <li className="item">
                <a href="javascript:;" className="txt">新品专区</a>
              </li>
              <li className="item">
                <a href="javascript:;" className="txt">居家</a>
              </li>
              <li className="item">
                <a href="javascript:;" className="txt">鞋包配饰</a>
              </li>
              <li className="item">
                <a href="javascript:;" className="txt">服装</a>
              </li>
              <li className="item">
                <a href="javascript:;" className="txt">电器</a>
              </li>
              <li className="item">
                <a href="javascript:;" className="txt">洗护</a>
              </li>
              <li className="item">
                <a href="javascript:;" className="txt">饮食</a>
              </li>
              <li className="item">
                <a href="javascript:;" className="txt">餐厨</a>
              </li>
              <li className="item">
                <a href="javascript:;" className="txt">婴童</a>
              </li>
              <li className="item">
                <a href="javascript:;" className="txt">文体</a>
              </li>
              <li className="item">
                <a href="javascript:;" className="txt">特色区</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="cateList">
          <div className="tu" style={{backgroundImage: 'url(' + require('./images/mei.jpg') + ')'}}>
            <div className="tu-ctn"></div>
          </div>
          <div className="lists">
            <ul className="list">
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list1.png')} alt="x" className="cateImg"/>
                  <div className="name">三石福利价</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list2.png')} alt="x" className="cateImg"/>
                  <div className="name">严选明星价</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list3.png')} alt="x" className="cateImg"/>
                  <div className="name">开天辟地价</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list4.png')} alt="x" className="cateImg"/>
                  <div className="name">满200减100</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list5.png')} alt="x" className="cateImg"/>
                  <div className="name">居家单品直降</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list6.png')} alt="x" className="cateImg"/>
                  <div className="name">服装低至6折</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list7.png')} alt="x" className="cateImg"/>
                  <div className="name">鞋包配饰低至6折</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list8.png')} alt="x" className="cateImg"/>
                  <div className="name">饮食99选9</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list9.png')} alt="x" className="cateImg"/>
                  <div className="name">电器低至6.5折</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list10.png')} alt="x" className="cateImg"/>
                  <div className="name">洗护低至65折</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list11.png')} alt="x" className="cateImg"/>
                  <div className="name">餐厨单品直降</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list12.png')} alt="x" className="cateImg"/>
                  <div className="name">春风低至6.5折</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list13.png')} alt="x" className="cateImg"/>
                  <div className="name">婴童低至6.5折</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list14.png')} alt="x" className="cateImg"/>
                  <div className="name">百分百好评</div>
                </a>
              </li>
              <li className="list-item">
                <a href="javascript:;">
                  <img src={require('./images/list/list15.png')} alt="x" className="cateImg"/>
                  <div className="name">大家都在搜</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state =>　({autoList:state.autoList}),
  {getAuto}
) (Classify)
