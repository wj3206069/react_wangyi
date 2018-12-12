/*
使用mockjs来mock数据/接口的模块
*/
import Mock from 'mockjs'
import homeList from './msite'


//暴露接口
console.log("mock了数据");
Mock.mock('/policyDescList',{code:'200',data:homeList})