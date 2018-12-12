import React, { Component } from 'react'
import './FooterGuide.styl'
import { withRouter } from 'react-router-dom'

class FooterGuide extends Component {
  handleClick = (path) => {
    //跳转到指定的路由路径
    this.props.history.replace(path)
  }

  render () {
    const path = this.props.location.pathname
    return (
      <footer className="footer_guide border-1px">
        <span className={path === '/home' ? 'guide_item on' : 'guide_item'} onClick={() => this.handleClick('/home')}>
          <span className="item_icon">
            <i className="icon icon_home"></i>
          </span>
          <span>首页</span>
        </span>
        <span className={path === '/classify' ? 'guide_item on' : 'guide_item'}
              onClick={() => this.handleClick('/classify')}>
          <span className="item_icon">
            <i className="icon icon_classify"></i>
          </span>
          <span>分类</span>
        </span>
        <span className={path === '/generalthings' ? 'guide_item on' : 'guide_item'} onClick={() => this.handleClick('/generalthings')}>
          <span className="item_icon">
            <i className="icon icon_topic"></i>
          </span>
          <span>识物</span>
        </span>
        <span className={path === '/shopcart' ? 'guide_item on' : 'guide_item'} onClick={() => this.handleClick('/shopcart')}>
          <span className="item_icon">
            <i className="icon icon_shopcart"></i>
          </span>
          <span>购物车</span>
        </span>
        <span className={path === '/people' ? 'guide_item on' : 'guide_item'}
              onClick={() => this.handleClick('/people')}>
          <span className="item_icon">
            <i className="icon icon_login"></i>
          </span>
          <span>个人</span>
        </span>
      </footer>
    )
  }
}

export default withRouter(FooterGuide) //使用withRouter来包装一个UI组件，是为了让普通的UI组件具有路由组件的一些方法(location, history)
