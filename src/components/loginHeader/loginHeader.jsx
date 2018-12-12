import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import './loginHeader.styl'

class LoginHeader extends Component {

  /*static propTypes = {
    handleClick:PropTypes.func.isRequired
  }*/
  handleClick = (path) => {
    //跳转到指定的路由路径
    this.props.history.replace(path)
  }

  render () {
    return (
      <div className="hdWraper" style={{height: 1.16 + 'rem'}}>
        <div className="m-hd">
          <div className="m-topBar">
            <div className="bd">
              <div className="row">
                <i className="u-icon-home" onClick={()=> this.handleClick('/home')}></i>
                <a href="javascript:;"><i className="u-icon-logo"></i></a>
                <div className="right">
                  <a onClick={() => this.handleClick('/search')} href="javascript:;" className="m-search"><i className="u-sear"></i></a>
                  <router-link className="m-cart" to="/shopcart"><i className="u-cart"></i></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginHeader)
