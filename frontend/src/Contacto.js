import React, { Component } from 'react';
import './Contacto.css';

import Typing from 'react-typing-animation';

import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Textarea from 'muicss/lib/react/textarea';

class Contacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            message:'',
        }
    }

    handleName = (data) => {
        // data.preventDefault();
        this.state.name = data.target.value;
    }

    handleMessage = (data) => {
        // data.preventDefault();
        this.state.message = data.target.value;
    }

    handleEmail = (data) => {
        // data.preventDefault();
        this.setState({
            email: data.target.value
        })
        this.state.email = data.target.value;
    }

    handleSubmit = (data) => {
        data.preventDefault()
        alert(this.state.name);
    }

    render(){
        return(
        <iframe className="form" src="https://docs.google.com/forms/d/e/1FAIpQLScKzmrIPuUoWibSPZsiMOKITQfBZuhEhk8DDQvoZxAGmo9Neg/viewform?embedded=true" width="640" height="1167" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        )
    }
}
export default Contacto;
