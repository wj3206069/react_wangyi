/*
redux最核心的管理对象：store
*/
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'  //中间件，可以发送异步active
import {composeWithDevTools} from 'redux-devtools-extension' //调试工具
import reducer from './reducer'

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))