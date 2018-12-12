/*
产生初始化状态或新的状态的reducer函数
*/
import {combineReducers} from 'redux'
import {INCREMENT, RECEIVEHOMELIST,REAEIVEAUTO} from "./action-types";

//管理主页数据
const homeData = []
function homeList(state = homeData, action) {
  switch (action.type) {
    case RECEIVEHOMELIST:
      return action.data
    default:
      return state
  }
}

//推荐列表数据
const autoDate = {}
function autoList(state = autoDate,action) {
  switch (action.type) {
    case REAEIVEAUTO:
      return action.data
    default:
      return state
  }
}

const initCount = 0
function count(state = initCount, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    default:
      return state
  }
}



//向外暴露的是多个reducer整合后的reducer
//新的reducer管理的状态：{}
export default combineReducers({
  count,
  homeList,
  autoList
})