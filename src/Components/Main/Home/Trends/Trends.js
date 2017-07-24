import React, { Component } from 'react';
import './Trends.css';

class Trends extends Component{
    render(){
        return (
            <div className="trends">
                <div className="trendscon">
                    <div className="trendstop">
                        <h2>最新动态</h2>
                        <p>TELATEST NEWS</p>
                        <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgnOv-wAUogNXsqgcwqgE4YQ.png" />
                    </div>
                    <div className="trendsbot clear">
                        <div className="trendbot_con right">
                            <div className="trendbot_one">
                                <p><span>温馨.暖心——记小学部二年级期末散学礼</span><span>2017-03-28</span></p>
                                <p>7月8日，年级组散学典礼如期而至。早上八点多，二年级各班教室的走廊上早已有家长在耐心等候，虽然烈日炎炎，工作繁忙，但是家长们仍然提前到校。他们在一起交流，分享教育心得...</p>
                            </div>
                            <div className="trendbot_one">
                                <p><span>小学部四年级散学礼温暖人心</span><span>2017-03-28</span></p>
                                <p>为了让孩子们度过一个安全、充实、有意义的暑假，指导家长做好对孩子假期生活的安排，7月8日下午，四五年级的学生和家长怀着激动的心情早早地踏进了校园，参加了各班散学礼...</p>
                            </div>
                            <div className="trendbot_one">
                                <p><span>小学部获广东省第六届"小小科学家"科学活动...</span><span>2017-03-28</span></p>
                                <p>今天从广东教育学会传来了喜讯！我校小学部学生参加广东省第六届“小小科学家”科学活动获奖了！科学组的老师替全校的师生，向获奖的同学表示热烈的祝贺...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Trends