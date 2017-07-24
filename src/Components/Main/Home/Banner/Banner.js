import React, { Component } from 'react';
import { Carousel } from 'antd';
import './Banner.css';
import $ from 'jquery';

class Banner extends Component{
    constructor(){
        super()
        this.state={banner:[{img:"",id:''}]}
    }
    componentDidMount(){
        $.ajax({
            url:"http://localhost:3500/get/banner",
            type:"get",
            async:true,
            success:function (e) {

                this.setState({banner:e})
            }.bind(this)
        })
    }
    render(){
        return (
            <Carousel autoplay>
                {
                    this.state.banner.map(function(e){
                        return (<div key={e.id}><img src={e.img}/></div>)
                    })
                }
            </Carousel>
        )
    }
}
export default Banner

