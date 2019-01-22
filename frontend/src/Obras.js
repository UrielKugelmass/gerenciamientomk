import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import data from './ObrasData';
import Jumbotron from './shared-components/Jumbotron';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    margin: 'auto !important',
    width: '50%',
    height: '50%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function Obras(props) {
  const { classes } = props;
const test = './img/alo.jpg';

  return (
    <div >
    <Jumbotron title="Obras" description="Aquí se pueden ver algunos de nuestros clientes que confiaron en nuestros servicios:"></Jumbotron>
      <GridList className="Obras" cellHeight={200} spacing={1} className={classes.gridList}>
        {data.map((tile, index) => (
          <GridListTile key={tile.img} cols={2} rows={2}>
            <img src={(tile.img)} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={tile.description}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Obras.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Obras);