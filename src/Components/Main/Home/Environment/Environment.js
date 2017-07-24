import React, { Component } from 'react';
import './Environment.css';

class Environment extends Component{
    render(){
        return (
            <div className="environment">
                <div className="learncon">
                    <div className="envirtop">
                        <h2 className="learnh">教学环境</h2>
                        <p>TEACHING ENVIRONMENT</p>
                        <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgnuX-wAUo186-xwcwqAE4XA.png"/>
                    </div>
                    <div className="envirbot clear">
                        <div className="envirbot_one left">
                            <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgzsD-wAUo5tzzhwUwxgI40AI.png"/>
                            <a href="#">知识渊博者</a>
                        </div>
                        <div className="envirbot_two left clear">
                            <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAg0MD-wAUo6JKizwcw4gM4Ww.png"/>
                            <div className="left">
                                <a href="#">凡与思考</a>
                                <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAg2MD-wAUotp7v-AMw6wE44wE.png"/>
                            </div>
                            <img className="right" src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAg1cD-wAUomM7YbzDWATj4Ag.png"/>
                        </div>
                        <div className="envirbot_three left">
                            <a href="#">关爱他人者</a>
                            <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAg18D-wAUoyqmMrQMwwgI4xwI.png"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Environment