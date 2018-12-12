/*
    包含n个接口请求函数的模块
    每个函数的返回值是promise
 */
import ajax from './ajax'

const BASE = '/163'
const API = '/api'

export const reqHomeList = () => ajax('/policyDescList') //获取主页
export const reqCateList = () => ajax(BASE+'/topic/v1/find/recManual.json') //获取推荐
export const reqSceneLight = () => ajax('/sceneLight') //获取爱吃福利社
export const reqKingKong = () => ajax('/kingKongModule') //获取十张小图
export const reqFocusList = () => ajax('/focusList') //获取轮播图
export const reqBigPro = () => ajax('/bigPromotionModule') //获取动态图
export const reqCateGory = () => ajax('/cateGory') //获取分类数据
export const reqGeneralData = () => ajax('/generalData') //获取识物数据

// [发送短信验证码](发送短信验证码)<br/>
export const reqSendCode = (phone) => ajax(BASE + '/sendcode', {phone})
//邮箱密码登录
export const reqLoginPwd = (name, pwd) => ajax(BASE + '/login_pwd', {name, pwd}, 'POST')
//手机号验证码登录
export const reqLoginSms = (phone, code) => ajax(BASE + '/login_sms', {phone, code}, 'POST')
//获取用户信息
export const reqUserInfo = () => ajax(BASE + '/userinfo')
//退出用户
export const reqLogOut = () => ajax(BASE + '/logout')
