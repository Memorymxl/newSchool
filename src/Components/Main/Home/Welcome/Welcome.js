/**
 * Created by 马霄雷 on 2017/7/21.
 */
import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component{
    render(){
        return (
            <div className="welcome">
                <div className="welcon">
                    <div className="weltop">
                        <h2>欢迎来到EDUCATION幼儿园</h2>
                        <p>WELCOME TO EDUCATION KINDERGARTEN</p>
                        <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAg4cP-wAUo6drX8QEwqgE4YA.png"/>
                    </div>
                    <div className="welfour clear">
                        <div className="baby left clear">
                            <img className="left" src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgtsD-wAUolvfmhgYwSTg-.png"/>
                            <div className="welright right">
                                <p>0-2岁</p>
                                <p>148</p>
                            </div>
                        </div>
                        <div className="child left clear">
                            <img className="left" src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgusD-wAUo2fD36gYwUzhG.png"/>
                            <div className="welright right">
                                <p>3-6岁</p>
                                <p>231</p>
                            </div>
                        </div>
                        <div className="man left clear">
                            <img className="left" src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgvsD-wAUo1v_RlwMwSzhG.png"/>
                            <div className="welright right">
                                <p>男孩</p>
                                <p>368</p>
                            </div>
                        </div>
                        <div className="woman left clear">
                            <img className="left" src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgwMD-wAUoz97EkwYwUDhG.png"/>
                            <div className="welright right">
                                <p>女孩</p>
                                <p>278</p>
                            </div>
                        </div>
                    </div>
                    <div className="weltext">
                        东方幼儿园创办于1992年9月，一园四址规模， 42个班级，一千多名幼儿,教职工220名。东方幼儿园在育人环境上充分体现尊重与关爱儿童的理念，每处园所构思新颖、独具一格，均设有大型室内溜冰场、室内温水游泳池、大型运动器具、翻斗乐、玩沙池、植物园、浴室、洗衣房等，有设备先进的科技活动室、舞蹈房、建构室、围棋室、图书室、电脑室、钢琴房、古筝室、手风琴房等。各班均有独立的活动室、卧室、饭厅、洗手间、衣帽间等，并配有多媒体电脑、液晶电视、钢琴、录像机、投影仪、冷暖空调、衣橱、小床、玩具橱与桌椅等。
                    </div>
                    <a href="#">查看更多</a>
                </div>
            </div>
        )
    }
}
export default Welcome