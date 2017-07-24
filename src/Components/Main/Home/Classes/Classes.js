import React, { Component } from 'react';
import './Classes.css';

class Classes extends Component{
    render(){
        return (
            <div className="classes">
                <div className="classes_back">
                    <div className="classescon">
                        <div className="classestop">
                            <h2 className="classh">班级设置</h2>
                            <p>CLASS SETTING</p>
                            <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgy8--wAUonL6hSzCqAThe.png"/>
                        </div>
                        <div className="classestype clear">
                            <div className="type left">
                                <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgwsD-wAUosLWAtwEwuQE4uAE.png"/>
                                <a className="xtb" href="#">小托班</a>
                                <p>适合年龄为1.5—3岁的宝宝，从家庭到集体生活的过渡，需要注重融入集体及生活自理能力。</p>
                            </div>
                            <div className="type left">
                                <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgw8D-wAUowbvi0AIwuQE4uAE.png"/>
                                <a className="xtb" href="#">普通班</a>
                                <p>适合年龄为3-5岁的宝宝，注重促进身体正常发育和技能的协调发展，增强体质。</p>
                            </div>
                            <div className="type left">
                                <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgxcD-wAUotuGULDC6ATi4AQ.png"/>
                                <a className="xtb" href="#">国际班</a>
                                <p>适合年龄为3-6岁的宝宝，注重国语和英语表达沟通能力的学习培养，纯外教授课教学环境。</p>
                            </div>
                            <div className="type left">
                                <img src="http://11822707.s61i.faiusr.com/4/AD0I88zRBRAEGAAgx8D-wAUokK-fogMwuQE4uAE.png"/>
                                <a className="xtb" href="#">学前班</a>
                                <p>合年龄6-7岁的宝宝，注重培养宝宝热爱和主动学习的能力，培养锻炼孩子的观察力。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Classes

