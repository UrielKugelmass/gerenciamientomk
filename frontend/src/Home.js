import React, { Component } from 'react';
import Jumbotron from './shared-components/Jumbotron'
import  Carousel  from "./shared-components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Bottom from './shared-components/Bottom';
import './index.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <Bottom description="Por consultas: "></Bottom>

            </div>
        );
    }
}

export default Home;