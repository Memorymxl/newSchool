import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component{
    render(){
        return (
            <div className="feature">
                <div className="featurecon">
                    <div className="featuretop">
                        <h2>特色教学</h2>
                        <p>CHARACTERISTIC TEACHING</p>
                        <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgo9j-wAUorIj6pAUwqgE4XQ.png" />
                    </div>
                    <div className="featuretype clear">
                        <div className="feature_one left">
                            <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgwdv-wAUotPnI2gUw0wI49AE.png"/>
                            <h3><span>美术</span><span>FINE ARTS</span></h3>
                            <p>关于儿童美术教育的核心理念，朱敬一- 知名艺术家，艺术普及专家提出了“感知力是美学的第一要义”这个观点。</p>
                            <a className="more" href="#">查看更多</a>
                        </div>
                        <div className="feature_one left">
                            <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgw9v-wAUosrCf1gMw0wI49QE.png"/>
                            <h3><span>体育</span><span>SPORTS</span></h3>
                            <p>主观能动性发展对体育生活的积极情感态度发展为第一重要价值；学习方法和思维方法为第二重要价值。</p>
                            <a className="more" href="#">查看更多</a>
                        </div>
                        <div className="feature_one left">
                            <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgxdv-wAUorOjvHDDTAjj0AQ.png"/>
                            <h3><span>益智</span><span>PUZZLE</span></h3>
                            <p>儿童通过游戏活动在现实和想像的空间中往来,体验到各种新鲜的感受,学习到各种知识,构建起自我身心发展的“里程碑” 。</p>
                            <a className="more" href="#">查看更多</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Feature