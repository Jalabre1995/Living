import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password:"",
            loginErrors:""
        };
        this.handleSubmit = this.handleSubmit.bind9(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        const { email, password} =this.state;
        axios
        .post(
            'http://localhost:3000/sessions',
        {
            usuer: {
                email: email,
                password:password
            }
        },
        {withCredentials: true}
        )
        .then(response =>{
            if(response.data.loggedIn === true) {
                this.props.handleSuccessfulAuth(response.data)
            }
        })
        .catch(error => {
            console.log(error);
        });
        event.preventDefault();
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type='email'
                    name='email'
                    palceholder='Email'
                    value={this.state.email}
                    onChnage={this.handleChange}
                    required
                    />
                    <input
                    type= 'password'
                    name= 'password'
                    placeholder='Password'
                    value={this.state.password}
                    onChnage= {this.handleChange}
                    required
                    /> 
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}
