/**
 * Created by 马霄雷 on 2017/7/13.
 */
import React, { Component } from 'react';
import './Header.css';
import $ from 'jquery';

class Header extends Component{

    constructor(){
        super()
        this.state={
            'head':[{title:'',id:''}]
        }
    }
    componentDidMount(){
        $.ajax({
            url:"http://localhost:3500/get/text",
            type:"get",
            async:true,
            success:function (e) {
                this.setState({'head':e})
            }.bind(this)
        })
    }
    render(){
        return (
            <div className="shareHeader">
                <div className="shMain">
                    <span>School Design</span>
                    <ul>
                        {
                            this.state.head.map(function(e){
                                return (<li key={e.id}><a href="#">{e.title}</a></li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header