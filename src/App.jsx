import React, { Component } from 'react'
import { Redirect, Switch, Route, withRouter } from 'react-router-dom'
import FooterGuide from './components/FooterGuide/FooterGuide'
import Home from './containers/home/home'
import Classify from './containers/classify/classify'
import GeneralThings from './containers/generalThings/generalthings'
import NotFound from './containers/notFound/notFound'
import Personal from './containers/personal/personal'
import ShopCart from './containers/shopCart/shopCart'
import PhoneRegister from './containers/PhoneRegister/PhoneRegister'
import PhoneLogin from './containers/PhoneLogin/PhoneLogin'
import EmailLogin from './containers/EmailLogin/EmailLogin'
import LoginSuccess from './containers/LoginSuccess/LoginSuccess'
import Search from './containers/Search/Search'

class App extends Component {
  render () {
    const path = this.props.location.pathname
    const showPaths = ['/home', '/classify', '/generalthings', '/shopcart', '/people']
    const showFooter = showPaths.indexOf(path) >= 0
    return (
      <div>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route path='/home' component={Home}/>
          <Route path='/classify' component={Classify}/>
          <Route path='/generalthings' component={GeneralThings}/>
          <Route path='/shopcart' component={ShopCart}/>
          <Route path='/personal' component={Personal}/>
          <Route path='/people' component={LoginSuccess}/>
          <Route path='/email' component={EmailLogin}/>
          <Route path='/phone' component={PhoneLogin}/>
          <Route path='/register' component={PhoneRegister}/>
          <Route path='/search' component={Search}/>
          <Route component={NotFound}/>
        </Switch>
        {showFooter ? <FooterGuide/> : null}
      </div>
    )
  }
}

export default withRouter(App)
