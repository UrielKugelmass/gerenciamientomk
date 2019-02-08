import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class ObrasCard extends Component {
  render() {
    let description = this.props.description;
    let image = this.props.image;
    let id = this.props.id;
    let year = this.props.year;
    let title = this.props.title;
    return (
      <div className="col-md-4 d-flex">
        <div className="card mb-4 box-shadow d-flex flex-column">
          <img className="card-img-top d-flex" src={image} alt="Card cap" />
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
