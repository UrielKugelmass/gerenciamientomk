import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './jumbotron.css'

class Bottom extends Component {
    render() {
        const hasDescription = this.props.description != null;
            if (hasDescription)
            {
                return (
                    <section className="jumbotron bottom text-center">
                    <div className="direccion">Av. Luis P. Ponce 1302/1102</div>
                    <div className="row">
                    <div className="lugar">Montevideo - Uruguay</div>
                    <span className="consultas">{this.props.description} <a href="mailto:contacto@gerenciamientomk.com"> contacto@gerenciamientomk.com</a></span>
                    <Image className="logo-bottom" src={require('./../img/MK-logo.jpg')} alt="Second slide"/>                    
                    </div>        
                    <div className="direccion">(598)27088265 - (598)94441078 - (598)94441019</div>

                    </section>
                    );
            }
        }
    }

export default Bottom;