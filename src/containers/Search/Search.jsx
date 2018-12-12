import React, {Component} from 'react'
import {connect} from 'react-redux'  //生成容器组件
import {inrement,incrmentAsync} from '../../store/actions'
import './Search.styl'

class Search extends Component {
  render() { //重写方法
    const {count,inrement,incrmentAsync} = this.props
    return (
      <div>
        <div>{count}</div>
        <button onClick={() => {inrement(2)}}>立即增加</button>
        <button onClick={() => {incrmentAsync(2)}}>异步增加</button>
      </div>
    )
  }
}

export default connect(
  state => ({count:state.count}),  //一般属性
  {inrement,incrmentAsync} //分发action，最后去更新状态
)(Search)


/*
容器组件的作用：给UI组件传递属性数据
  一般属性：读取state中的特定数据

  函数属性：
  <Home count = { state.count }
*/