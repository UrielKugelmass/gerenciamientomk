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

import {obras_data} from './ObrasData';

class Obras extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    data: obras_data
  };

}
render() {
  let result = (
    <>
    <Jumbotron title="Obras" description="Aquí se pueden ver algunos de nuestros clientes que confiaron en nuestros servicios:"></Jumbotron>
      <div className="album py-5 bg-light listingPage">
        <div className="container">
          <div className="row">
            {this.state.data.map(obj => (
              <ObrasCard
                image={obj.img}
                title={obj.title}
                id={obj.id}
                year={obj.year}
                description={obj.description}
              />
            ))}
          </div>
        </div>
      </div>
      <Bottom description="Por consultas: "></Bottom>
    </>
  );
  return result;
};
}
export default Obras;