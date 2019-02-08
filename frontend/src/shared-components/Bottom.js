import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './jumbotron.css'

class Bottom extends Component {
    render() {
        const hasDescription = this.props.description != null;
            if (hasDescription)
            {
                return (
                    <section className="jumbotron bottom text-center">
                    <div className="bottom-container">
                    <p>{this.props.description}<a href="mailto:contacto@gerenciamientomk.com">contacto@gerenciamientomk.com</a></p>
                    </div>
                    </section>
                    );
            }
        }
    }

export default Bottom;