import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Home from '../Main/Home/Home.js';
import Foot from '../Foot/Foot.js';

class School extends Component{
    render(){
        return (
            <div>
                <Header />
                <Home />
                <Foot />
            </div>
        )
    }
}
export default School