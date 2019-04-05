import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageLoader from 'react-load-image';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/core';
const override = css`
position: relative;
left: 35%;
`;


function Preloader(props) {
  return (<ClipLoader
    css={override}
    sizeUnit={"px"}
    size={150}
    color={'#123abc'}
    loading={true}
  />);
}

class ObrasCard extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  handleImageLoaded() {
    this.setState({ loading: false });
  }
  renderImage(image) {
      return (<img className="card-img-top d-flex" src={image}  onLoad={this.handleImageLoaded} alt="Card cap" />);

  }

  

  render() {
    let description = this.props.description;
    let image = this.props.image;
    let id = this.props.id;
    let year = this.props.year;
    let title = this.props.title;
    return (
      <div className="col-md-4 d-flex">
        <div className="card mb-4 box-shadow d-flex flex-column">
        <ImageLoader
    src={image}
  ><img className="card-img-top d-flex"/><div>Error!</div><Preloader /></ImageLoader>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <Link to={`/obras/${id}`} className="btn btn-primary mt-auto">
              Ver Obra
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ObrasCard;
