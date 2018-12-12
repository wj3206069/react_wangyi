import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './private-ordering.styl'

class PrivateOrdering extends Component {
  componentDidMount () {
    new Swiper('.swiper-containers', {
      pagination: {
        el: '.swiper-pagination',
      },
      loop: true
    })
  }

  render () {
    return (
      <div className="private">
        <div className="private-title">
          <div className="left"><span>私人订制</span></div>
        </div>
        <div className="private-lbt">
          <div className="swiper-containers">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <li className="item">
                  <a href="javascript:;" className="good">
                    <div className="tupian">
                      <div><img src={require('./images/a/a1.png')} alt="xxx"/></div>
                    </div>
                    <div className="name">
                      <span>天然成分足贴 祛除湿气</span>
                      <span className="price">
                      <span className="priceInner">
                        <span>￥58</span>
                      </span>
                    </span>
                    </div>
                    <div className="specification">
                      <div>倭</div>
                      <div>寇</div>
                      <div>制</div>
                      <div>造</div>
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:;" className="good">
                    <div className="tupian">
                      <div><img src={require('./images/a/a2.png')} alt="xxx"/></div>
                    </div>
                    <div className="name">
                      <span>30包 谷风一木小卷纸囤...</span>
                      <span className="price">
                      <span className="priceInner">
                        <span>￥76.9</span>
                      </span>
                    </span>
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:;" className="good">
                    <div className="tupian">
                      <div><img src={require('./images/a/a3.png')} alt="xxx"/></div>
                    </div>
                    <div className="name">
                      <span>日式和风超声波香薰机</span>
                      <span className="price">
                      <span className="priceInner">
                        <span>￥168</span>
                      </span>
                    </span>
                    </div>
                  </a>
                </li>
              </div>
              <div className="swiper-slide">
                <li className="item">
                  <a href="javascript:;" className="good">
                    <div className="tupian">
                      <div><img src={require('./images/a/a4.png')} alt="xxx"/></div>
                    </div>
                    <div className="name">
                      <span>3双/5双装 女式日系罗...</span>
                      <span className="price">
                      <span className="priceInner">
                        <span>￥36.9</span>
                      </span>
                    </span>
                    </div>
                    <div className="specification">
                      <div>5</div>
                      <div>色</div>
                      <div>可</div>
                      <div>选</div>
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:;" className="good">
                    <div className="tupian">
                      <div><img src={require('./images/a/a5.png')} alt="xxx"/></div>
                    </div>
                    <div className="name">
                      <span>网易智造T300无线吸尘...</span>
                      <span className="price">
                      <span className="priceInner">
                        <span>￥1229</span>
                      </span>
                    </span>
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:;" className="good">
                    <div className="tupian">
                      <div><img src={require('./images/a/a6.png')} alt="xxx"/></div>
                    </div>
                    <div className="name">
                      <span>头层牛皮制作，自动扣设计更方便</span>
                      <span className="price">
                      <span className="priceInner">
                        <span>￥109</span>
                      </span>
                    </span>
                    </div>
                  </a>
                </li>
              </div>
              <div className="swiper-slide">
                <li className="item">
                  <a href="javascript:;" className="good">
                    <div className="tupian">
                      <div><img src={require('./images/a/a7.png')} alt="xxx"/></div>
                    </div>
                    <div className="name">
                      <span>即食燕窝 70克*6瓶 ...</span>
                      <span className="price">
                      <span className="priceInner">
                        <span>￥258</span>
                      </span>
                    </span>
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:;" className="good">
                    <div className="tupian">
                      <div><img src={require('./images/a/a8.png')} alt="xxx"/></div>
                    </div>
                    <div className="name">
                      <span>泰国制造 天然乳胶枕 护...</span>
                      <span className="price">
                      <span className="priceInner">
                        <span>￥199</span>
                      </span>
                    </span>
                    </div>
                    <div className="specification">
                      <div>泰</div>
                      <div>国</div>
                      <div>制</div>
                      <div>造</div>
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:;" className="good">
                    <div className="tupian">
                      <div><img src={require('./images/a/a9.png')} alt="xxx"/></div>
                    </div>
                    <div className="name">
                      <span>懒人抹布</span>
                      <span className="price">
                      <span className="priceInner">
                        <span>￥13.99</span>
                      </span>
                    </span>
                    </div>
                  </a>
                </li>
              </div>
              <div className="swiper-slide">
                <li className="item">
                  <a href="javascript:;" className="good">
                    <div className="tupian">
                      <div><img src={require('./images/a/a10.png')} alt="xxx"/></div>
                    </div>
                    <div className="name">
                      <span>每日坚果</span>
                      <span className="price">
                      <span className="priceInner">
                        <span>￥29.9</span>
                      </span>
                    </span>
                    </div>
                    <div className="specification">
                      <div>2</div>
                      <div>个</div>
                      <div>规</div>
                      <div>格</div>
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:;" className="good">
                    <div className="tupian">
                      <div><img src={require('./images/a/a11.png')} alt="xxx"/></div>
                    </div>
                    <div className="name">
                      <span>严选礼品卡 100元面值</span>
                      <span className="price">
                      <span className="priceInner">
                        <span>￥100</span>
                      </span>
                    </span>
                    </div>
                  </a>
                </li>
                <li className="item">
                  <a href="javascript:;" className="good">
                    <div className="tupian">
                      <div><img src={require('./images/a/a12.png')} alt="xxx"/></div>
                    </div>
                    <div className="name">
                      <span>网易智造双光源记忆护目灯</span>
                      <span className="price">
                      <span className="priceInner">
                        <span>￥199</span>
                      </span>
                    </span>
                    </div>
                    <div className="specification">
                      <div>2</div>
                      <div>色</div>
                      <div>可</div>
                      <div>选</div>
                    </div>
                  </a>
                </li>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default PrivateOrdering
