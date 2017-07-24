import React, { Component } from 'react';
import Banner from './Banner/Banner.js';
import Welcome from './Welcome/Welcome.js';
import Classes from './Classes/Classes.js';
import Feature from './Feature/Feature.js';
import Environment from './Environment/Environment.js';
import Trends from './Trends/Trends.js';

class Home extends Component{
    render(){
        return (
            <div>
                <Banner />
                <Welcome />
                <Classes />
                <Feature />
                <Environment />
                <Trends />
            </div>
        )
    }
}
export default Home