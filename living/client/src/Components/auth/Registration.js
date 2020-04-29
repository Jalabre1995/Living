import React, {Component} from 'react';
import axios from 'axios'

export default class Registration extends Component{
    constructor(props) {
        super(props);

        this.state= {
            email: "",
            password: "",
            password_conformation: "",
            registrationErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange= this.handleChange.bind(this); 
       
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    ///////Calling the api////
    handleSubmit(event){
        axios.post('https://localhost:3000', {
            user: {
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_conformation
            },
        },
        ///// Putting in this argument as true is important because this is what is telling the api that its okay to set that cookie in our client.
        ////If you don't have this, then our application is going to think that its not okay, and say the user is logged in but not at the same time. 
        {withCredentials: true}
        ).then(response => {
            console.log(response, 'registration res');
        })
        .catch(error => {
            console.log(error);
        })

        event.preventDefault();
        }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input 
                type='email'
                name='email' placeholder= 'Email'
                value={this.state.email} 
                onChange={this.handleChange}
                required 
                />
                <input 
                type='password'
                name='password' placeholder= 'Password'
                value={this.state.password} 

                onChange={this.handleChange}
                required 
                />
                <input 
                type='password'
                name='password_confirmation' 
                placeholder= 'Password confirmation'
                value={this.state.password_conformation} 
                onChange={this.handleChange}
                required 
                />

                <button type='submit'>Register</button>
                
                </form>
            </div>
        )
            
        
    }
}