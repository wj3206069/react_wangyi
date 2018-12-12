/*
包含多个action creator函数的模块
*/
import {reqHomeList,reqCateList} from '../api'

import {
  INCREMENT, RECEIVEHOMELIST,REAEIVEAUTO
} from './action-types'

//同步action
export const inrement = (number) => ({type:INCREMENT,data:number})

//接收主页数据的同步action
export const receiveHomeList = (homeList) => ({type:RECEIVEHOMELIST,data:homeList})

//接收主页数据的同步action
export const receiveAuto = (autoList) => ({type:REAEIVEAUTO,data:autoList})


//异步action
export const incrmentAsync = (number) => {
  return dispatch => {
    //1.执行异步代码
      setTimeout(() => {
        //2.有了结果后，分发同步action
        dispatch(inrement(number))
      },1000)
  }
}

//获取主页数据列表
export function getHomeData() {
  return async dispatch => {
    //1.发送异步ajax请求
    const result = await reqHomeList()
    //2.根据结果分发对应的同步action
    if(result.code === '200'){
      console.log("a1");
      const homeList = result.data
      dispatch(receiveHomeList(homeList))
    }
  }
}

//获取推荐数据列表
export function getAuto() {
  return async dispatch => {
    //1.发送异步ajax请求
    const result = await reqCateList()
    //2.根据结果分发对应的同步action
    if(result.code === '200'){
      const autoList = result.data
      console.log(autoList);
      dispatch(receiveAuto(autoList))
    }
  }
}