import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "./styles.css";
import {Link} from 'react-router-dom';


class CustomCarousel extends Component {
    render(){
      return (
        <div>
        <Carousel autoPlay={true} interval={3000} showThumbs={false} showStatus={false}>
          <Link to="/"><img className="slide-carousel" src={require('./../img/Carousel-1.png')} alt="Third slide"/>
          </Link>
        <div>
          <Link to="/">
          <img className="slide-carousel" src={require('./../img/Carousel-2.png')} alt="Second slide"/>
          </Link>
        </div>
        <div>
          <Link to="/"><img className="slide-carousel" src={require('./../img/Carousel-3.png')} alt="Third slide"/>
          </Link>
        </div>
        <div>
          <Link to="/"><img className="slide-carousel" src={require('./../img/Carousel-4.png')} alt="Third slide"/>
          </Link>
        </div>
        <div>
          <Link to="/"><img className="slide-carousel" src={require('./../img/Carousel-5.png')} alt="Third slide"/>
          </Link>
        </div>
      </Carousel>
      </div>
        );
    }

    componentDidMount(){
            const script = document.createElement("script");

            script.innerHTML = "if (window.addEventListener){ window.addEventListener(\"message\", function(event) { if(event.data.length >= 22) { if( event.data.substr(0, 22) == \"__MM-LOCATION.REDIRECT\") location = event.data.substr(22); } }, false); } else if (window.attachEvent){ window.attachEvent(\"message\", function(event) { if( event.data.length >= 22) { if ( event.data.substr(0, 22) == \"__MM-LOCATION.REDIRECT\") location = event.data.substr(22); } }, false); } ";
            script.async = true;

            document.body.appendChild(script);
    }
}

export default CustomCarousel;
