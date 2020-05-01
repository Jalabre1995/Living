import React, {Component} from 'react';
import {Navbar, Form, FormControl, Button, Nav, Col, Row, Container, Jumbotron, Card, ListGroup} from 'react-bootstrap';
import House from './images/home.png';
import York from './images/yorkTown.jpg';
import City from './images/city.jpg';
import Bright from './images/Brightlights.jpg';
import Nice from './images/niceCity.jpg';
import Seattle from './images/Seattle.jpg';
import Golden from './images/goldenGate.jpg';
import MetLife from './images/metLife.jpg';
import Coast from './images/coast.jpg';
import Mountain from './images/mountain.jpg';
import View from './images/view.jpg';
import Arrow from './images/arrow.png';
import './css/Dashboard.css';

let cityList = [York,City,Bright,Nice,Seattle,Golden,Coast,MetLife,Mountain,View];
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

                        <Nav.Link href="/profile">Profile</Nav.Link>

                        <Nav.Link href="/login">Login</Nav.Link>
                   </Nav>

                    <Form inline>

                        <FormControl as="select" placeholder="Search" className="mr-sm-2">

                            <option>Search City</option>
                            <option>New York, NY</option>
                            <option>San Francisco, CA</option>
                            <option>Boston, MA</option>
                            <option>Jersey City, NJ</option>
                            <option>Washington, DC</option>
                            <option>Miami, FL</option>
                            <option>Chicago, IL</option>
                            <option>Seattle, WA</option>
                            <option>Philadelphia, PA</option>
                            <option>Minneapolis, MN</option>
                            <option>Portland, OR</option>
                            <option>Honolulu, HI</option>
                            <option>Newark, NJ</option>
                            <option>Baltimore, MD</option>
                            <option>Pittsburgh, PA</option>
                            <option>Atlanta, GA</option>
                            <option>Oakland, CA</option>
                            <option>Madison, WI</option>
                            <option>Denver, CO</option>
                            <option>Los Angeles, CA</option>
                            <option>San Jose, CA</option>
                            <option>Sacramento, CA</option>
                            <option>Milwaukee, WI</option>
                            <option>St. Louis, MO</option>
                            <option>Buffalo, NY</option>
                            <option>Austin, TX</option>
                            <option>San Diego, CA</option>
                            <option>Cleveland, OH</option>
                            <option>New Orleans, LA</option>
                            <option>Orlando, FL</option>
                            <option>St. Paul, MN</option>
                            <option>Long Beach, CA</option>
                            <option>Charlotte, NC</option>
                            <option>Santa Ana, CA</option>
                            <option>Cincinnati, OH</option>
                            <option>Tampa, FL</option>
                            <option>Houston, TX</option>
                            <option>Dallas, TX</option>
                            <option>Norfolk, VA</option>
                            <option>Lincoln, NE</option>
                            <option>Omaha, NE</option>
                            <option>Columbus, OH</option>
                            <option>Anaheim, CA</option>
                            <option>Boise, ID</option>
                            <option>Reno, NV</option>
                            <option>Nashville, TN</option>
                            <option>Detroit, MI</option>
                            <option>Irvine, CA</option>
                            <option>Winston-Salem, NC</option>
                            <option>Las Vegas, NV</option>
                            <option>Raleigh, NC</option>
                            <option>Fresno, CA</option>
                            <option>Tucson, AZ</option>
                            <option>Fremont, CA</option>
                            <option>Kansas City, MO</option>
                            <option>Indianapolis, IN</option>
                            <option>Stockton, CA</option>
                            <option>Durham, NC</option>
                            <option>Alburquerque, NM</option>
                            <option>Lexington, KY</option>
                            <option>Laredo, TX</option>
                            <option>Fort Worth, TX</option>
                            <option>Anchorage, AK</option>
                            <option>Hialeah, FL</option>
                            <option>San Antonio, TX</option>
                            <option>Birmingham, AL</option>
                            <option>Phoenix, AZ</option>
                            <option>Greensboro, NC</option>
                            <option>Lousiville, KY</option>
                            <option>Riverside, CA</option>
                            <option>Lubbock, TX</option>
                            <option>Bakersfield, CA</option>
                            <option>Chula Vista,  CA</option>
                            <option>Fort Wayne, IND</option>
                            <option>Colorado Springs, CO</option>
                            <option>Plano, TX</option>
                            <option>El Paso, TX</option>
                            <option>Jacksonville, FL</option>
                            <option>Corpus Christi, TX</option>
                            <option>Memphis, TN</option>
                            <option>Wichita, KS</option>
                            <option>St. Petersburg, FL</option>
                            <option>Oklahoma City, OK</option>
                            <option>Toledo, OH</option>
                            <option>Baton Rouge, LA</option>
                            <option>Irving, TX</option>
                            <option>Tulsa, OK</option>
                            <option>Chandler, AZ</option>
                            <option>Scottsdale, AZ</option>
                            <option>San Bernardino, CA</option>
                            <option>Mesa, AZ</option>
                            <option>Garland, TX</option>
                            <option>Gilbert, AZ</option>
                            <option>Henderson, NV</option>
                            <option>Arlington, TX</option>
                            <option>Glendale, AZ</option>
                            <option>Aurora, CO</option>
                            <option>Virginia Beach, VA</option>
                            <option>Cheasapeake, VA</option>
                            <option>North Las Vegas, NV</option>

                        </FormControl>

                        <Button variant="outline-danger">Search</Button>

                    </Form>
                </Navbar>

                <Container>

                    <Row>

                        <Col sm="12">
                        
                            <Card className="bg-dark text-white">

                                <Card.Img src={cityLoad} alt="Card image" height="500px" width="1000px"/>

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

                                <Container className="output">

                                    <Row>

                                        <Col sm="12" className="introSentence">
                                        
                                            Living in "new city", your new salary will be estimated at about...
                                        
                                        </Col>

                                    </Row>

                                    <Row>

                                        <Col sm="12" className="salary">
                                        
                                            "$123,000"
                                        
                                        </Col>

                                    </Row>

                                    <Row>

                                        <Col lg="4" className="sub">
                                        
                                            Rent

                                        </Col>

                                        <Col lg="4" className="sub">
                                        
                                            Groceries
                                        
                                        </Col>

                                        <Col lg="4" className="sub">
                                        
                                            Crime Rate
                                        
                                        </Col>

                                    </Row>

                                    <Row className="arrows">

                                        <Col sm="4">

                                            <img src={Arrow} alt="arrow" className="transform"/>

                                        </Col>

                                        <Col sm="4">

                                            <img src={Arrow} alt="arrow" className="transform"/>

                                        </Col>

                                        <Col sm="4">

                                            <img src={Arrow} alt="arrow" className="transform"/>

                                        </Col>

                                    </Row>

                                </Container>
                                
                            </Jumbotron>

                        </Col>

                    </Row>

                </Container>

            </div>

        )

    }

}