import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './shared-components/Navbar';
import QuienesSomos from './QuienesSomos';
import Contacto from './Contacto';
import Servicios from './Servicios';
import Obras from './Obras';


class App extends Component {
    componentDidMount(){
    };
    render() {
        return (
          <>

            <Router>
              <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/quienesSomos" component={QuienesSomos} />
                    <Route path="/contacto" component={Contacto} />
                    <Route path="/servicios" component={Servicios} />
                    <Route path="/obras" component={Obras} />
                    {/* <Route path="/news/:id" component={NewsInstance} />
                    <Route path="/charities/:id" component={CharityInstance} />
                    <Route path="/states/:name" component={StateInstance} />
                    <Route path="/about" component={About} />
                    <Route path="/news" component={News} />
                    <Route path="/charities" component={Charities} />
                    <Route path="/states" component={States} /> */}
                </Switch>
              </div>
            </Router>
            </>
        );
    }
}

export default App;
