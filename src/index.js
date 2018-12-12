import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import 'lib-flexible'
import './Mock/mockServer'

import * as serviceWorker from './serviceWorker'

import App from './App'

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))

serviceWorker.unregister()
