import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import data from './ObrasData';
import Jumbotron from './shared-components/Jumbotron';
import Bottom from './shared-components/Bottom';
import ObrasCard from './shared-components/ObrasCard';
import ImageGallery from 'react-image-gallery';
import './index.css';
import "react-image-gallery/styles/css/image-gallery.css";

import {obras_data} from './ObrasData';

class ObrasInstance extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    data: obras_data,
    id: this.props.match.params.id,
    obra: this.getObra(obras_data, this.props.match.params.id)
  };

}

getObra(obras, id) {
  for (var i=0; i<obras.length; i++){
    var obra = obras[i];
    if (obra.id == id) {
      return obra;
    }
  }
  return null;
}

makeOriginalImageArray(obra) {
  var result = [];
  obra.images.forEach(function(image) {
    result.push({original: image, thumbnail: image, description:obra.description, originalClass: "obras-foto", autoPlay: true});
  });
  return result;
}

getDescription(year) {
  //check if the string year contains a number
  return /\d/.test(year)? "Construido en " + year: "Actualmente " + year;
}

render() {
  const images = this.makeOriginalImageArray(this.state.obra);
  
  let result = (
    <>
    {/* <Jumbotron title={this.state.obra.title} description={this.getDescription(this.state.obra.year)}></Jumbotron> */}
      <div className="image-gallery-container">
        <ImageGallery className="image-gallery"items={images} />
      </div>
      <Bottom description="Por consultas: "></Bottom>
    </>
  );
  return result;
};
}
export default ObrasInstance;