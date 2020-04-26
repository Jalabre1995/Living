import React, {Component} from 'react';
import {Navbar, Form, FormControl, Button, Nav} from 'react-bootstrap';
import House from './images/home.png';
import './css/Dashboard.css';

export default class Dashboard extends Component{

    render(){

        return(

            <div className="dashboard">

                <Navbar sticky="top" bg="white" variant="light">

                    <Navbar.Brand href="">

                        <img
                            alt=""
                            src={House}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                         />{'Living.js'}
                       
                    </Navbar.Brand>

                    <Nav className="mr-auto">

                        <Nav.Link href="/">Home</Nav.Link>

                        <Nav.Link href="/login">Login</Nav.Link>

                        <Nav.Link href=""></Nav.Link>
                   </Nav>

                    <Form inline>

                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                        <Button variant="outline-danger">Search</Button>

                    </Form>
                </Navbar>

            </div>

        )

    }

}