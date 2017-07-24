import React, { Component } from 'react';
import './Foot.css';

class Foot extends Component{
    render(){
        return (
            <div className="footer">
                <div className="footercon">
                    <div className="scdesign">
                        SCHOOL DESIGN
                    </div>
                    <div className="footmid clear">
                        <div className="address">
                            <span>公司地址</span> : <span>XXX省XXX市XXX县XXX路XXX号</span>
                        </div>
                        <div className="email">
                            <span>邮箱</span> : <span>contact@fkadjkhsf.com</span>
                        </div>
                        <div className="phone">
                            <span>联系电话</span> : <span>020-000000</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Foot