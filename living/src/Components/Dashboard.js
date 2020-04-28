import React, {Component} from 'react';
import {Navbar, Form, FormControl, Button, Nav, Col, Row, Container, Jumbotron, Card, ListGroup} from 'react-bootstrap';
import House from './images/home.png';
import York from './images/yorkTown.jpg';
import City from './images/city.jpg';
import Bright from './images/Brightlights.jpg';
import Nice from './images/niceCity.jpg';
import Seattle from './images/Seattle.jpg'
import './css/Dashboard.css';

let cityList = [York,City,Bright,Nice,Seattle];
let cityLoad = cityList[Math.floor(Math.random() * cityList.length)];

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

                <Container>

                    <Row>

                        <Col sm="12">
                        
                            <Card className="bg-dark text-white">
                                <Card.Img src={cityLoad} alt="Card image" height="600px" width="1000px"/>
                                <Card.ImgOverlay>
                                    <Card.Title><div className="title">Living.js</div></Card.Title>
                                </Card.ImgOverlay>
                            </Card>

                        </Col>

                    </Row>

                </Container>

                <Container fluid>

                    <Row>

                        <Col sm="2">

                            <Card style={{ width: '18rem' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="list1">Past Searches</ListGroup.Item>
                                    <ListGroup.Item>Miami</ListGroup.Item>
                                    <ListGroup.Item>Houston</ListGroup.Item>
                                    <ListGroup.Item>Las Vegas</ListGroup.Item>
                                    <ListGroup.Item>Seattle</ListGroup.Item>
                                    <ListGroup.Item>Washington</ListGroup.Item>
                                </ListGroup>
                            </Card>

                        </Col>

                        <Col sm="10">

                            <Jumbotron>
                                <h1>Welcome!</h1>
                                <p>
                                    This is a simple hero unit, a simple jumbotron-style component for calling
                                    extra attention to featured content or information.
                                </p>
                                <p>
                                    <Button variant="primary">Learn more</Button>
                                </p>
                            </Jumbotron>

                        </Col>

                    </Row>

                </Container>

            </div>

        )

    }

}