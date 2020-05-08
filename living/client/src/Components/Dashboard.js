
import React, { useState } from "react";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Nav,
  Col,
  Row,
  Container,
  Jumbotron,
  Card,
  ListGroup,
} from "react-bootstrap";
import House from "./images/homeNew.png";
import York from "./images/yorkTownNew.jpg";
import City from "./images/cityNew.jpg";
import Bright from "./images/BrightlightsNew.jpg";
import Nice from "./images/niceCityNew.jpg";
import Seattle from "./images/SeattleNew.jpg";
import Golden from "./images/goldenGateNew.jpg";
import MetLife from "./images/metLifeNew.jpg";
import Coast from "./images/coastNew.jpg";
import Mountain from "./images/mountainNew.jpg";
import View from "./images/viewNew.jpg";
import Rent from "./images/house-clipart.jpg";
import Money from "./images/moneybag.jpg";
import Health from "./images/health.png";
import Book from "./images/school.jpg";
import Econ from "./images/econ.png";
import "./css/Dashboard.css";
import API from "../utils/API";

let cityList = [
  York,
  City,
  Bright,
  Nice,
  Seattle,
  Golden,
  Coast,
  MetLife,
  Mountain,
  View,
];
let cityLoad = cityList[Math.floor(Math.random() * cityList.length)];

function CitySearch() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState({});

  function CityCall() {

    if (!search) {
      return;
    }
    API.getNewYork(search)
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error("No result found");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setResult(res.data);
        console.log(res.data);
      })
      .catch((err) => err);
  }
  function Logout() {
    window.location.href = "http://localhost:3001/authentication/logout";
    window.localStorage.removeItem("isAuthenticated");
  }

  return (
    <div className="dashboard">
      <Navbar sticky="top" bg="white" variant="light">
        <Navbar.Brand href="">
          <img
            alt=""
            src={House}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {"Living.js"}
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>

          <Nav.Link href="/profile">Profile</Nav.Link>

          <Nav.Link onClick={Logout}>Logout</Nav.Link>
        </Nav>

        <Form inline>
          <FormControl
            as="select"
            placeholder="Search"
            className="mr-sm-2"
            input="search"
            onChange={(e) => setSearch(e.target.value)}
          >
           <option>Search City</option>
                            <option value = 'New York'>new-york</option>
                            <option value = 'San Francisco Bay Area'>san-francisco-bay-area</option>
                            <option value = 'Boston'>boston</option>
                            <option value = 'Washington DC'>washington-dc</option>
                            <option value = 'Miami'>miami</option>
                            <option value = 'Chicago'>chicago</option>
                            <option value = 'Seattle'>seattle</option>
                            <option value = 'Philadelphia'>philadelphia</option>
                            <option value = 'Minneapolis Saint Paul'>minneapolis-saint-paul</option>
                            <option value = 'Portland Oregon'>portland-or</option>
                            <option value = 'Honolulu'>honolulu</option>
                            <option value = 'Baltimore'>baltimore</option>
                            <option value = 'Pittsburgh'>pittsburgh</option>
                            <option value = 'Atlanta'>atlanta</option>
                            <option value = 'Madison'>madison</option>
                            <option value = 'Denver '>denver</option>
                            <option value = 'Los Angeles'>los-angeles</option>
                            <option value = 'San Jose'>san-jose</option>
                            <option value = 'Milwaukee'>milwaukee</option>
                            <option value = 'St. Louis'>st-louis</option>
                            <option value = 'Buffalo'>buffalo</option>
                            <option value = 'Austin'>austin</option>
                            <option value = 'Ausin '>san-diego</option>
                            <option value = 'Cleveland'>cleveland</option>
                            <option value = 'New Orleans'>new-orleans</option>
                            <option value = 'Orlando'>orlando</option>
                            <option value = 'Charlotte'>charlotte</option>
                            <option value = 'Cincinnati'>cincinnati</option>
                            <option value = 'Tampa Bay Area'>tampa-bay-area</option>
                            <option value = 'Houston'>houston</option>
                            <option value = 'Dallas'>dallas</option>
                            <option value = 'Omaha'>omaha</option>
                            <option value = 'Columbus'>columbus</option>
                            <option value = 'Boise'>boise</option>
                            <option value = 'Nashville'>nashville</option>
                            <option value = 'Detroit'>detroit</option>
                            <option value = 'Las Vegas'>las-vegas</option>
                            <option value = 'Raleigh'>raleigh</option>
                            <option value = 'Kansas City'>kansas-city</option>
                            <option value = 'Indianapolis'>indianapolis</option>
                            <option value = 'Albquerque'>albuquerque</option>
                            <option value = 'Anchorage'>anchorage</option>
                            <option value = 'San Antonio'>san-antonio</option>
                            <option value = 'Birmingham'>birmingham-al</option>
                            <option value = 'Phoenix'>phoenix</option>
                            <option value = 'Lousiville'>lousiville</option>
                            <option value = 'Colorado Springs'>colorado-springs</option>
                            <option value = 'Jacksonville'>jacksonville</option>
                            <option value = 'Memphis'>memphis</option>
                            <option value = 'Oklohoma City' >oklahoma-city</option>
          </FormControl>

          <Button variant="outline-danger" onClick={CityCall}>
            Search
          </Button>
        </Form>
      </Navbar>

      <Container>
        <Row>
          <Col sm="12">
            <Card className="bg-dark text-white">
              <Card.Img
                src={cityLoad}
                alt="Card image"
                height="300px"
                width="800px"
              />

              <Card.ImgOverlay>
                <Card.Title>
                  <div className="title">Living.js</div>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col sm="2">
            <Card style={{ width: "18rem" }}>
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
                    Living in "new city", your new salary will be estimated at
                    about...
                  </Col>
                </Row>

                <Row>
                  <Col sm="12" className="salary">
                    {result.salary}
                  </Col>
                </Row>

                <div className="darkgray">
                  <Row>
                    <Col lg="4" className="sub">
                      Living Cost
                    </Col>

                    <Col lg="4" className="sub">
                      Housing
                    </Col>

                    <Col lg="4" className="sub">
                      Healthcare
                    </Col>
                  </Row>

                  <Row className="icons">
                    <Col sm="4">
                      <img
                        src={Money}
                        alt="arrow"
                        className="icon"
                        height="150px"
                        width="150px"
                      />
                    </Col>

                    <Col sm="4">
                      <img
                        src={Rent}
                        alt="arrow"
                        className="icon"
                        height="150px"
                        width="150px"
                      />
                    </Col>

                    <Col sm="4">
                      <img
                        src={Health}
                        alt="arrow"
                        className="icon"
                        height="150px"
                        width="150px"
                      />
                    </Col>
                  </Row>

                  <Row className="percentages">
                    <Col sm="4" className="up">
                    {result.categories
                        ? result.categories[1].score_out_of_10
                        : null}%
                    </Col>

                    <Col sm="4" className="up">
                    {result.categories
                        ? result.categories[0].score_out_of_10
                        : null}%
                    </Col>

                    <Col sm="4" className="up">
                    {result.categories
                        ? result.categories[8].score_out_of_10
                        : null}%
                    </Col>
                  </Row>

                  <Row>
                    <Col sm="6" className="sub">
                      Education
                    
                    </Col>

                    <Col sm="6" className="sub">
                      Economy
                  
                    </Col>
                  </Row>

                  <Row className="icons">
                    <Col sm="6">
                      <img
                        src={Book}
                        alt="arrow"
                        className="icon"
                        height="150px"
                        width="150px"
                      />
                    </Col>

                    <Col sm="6">
                      <img
                        src={Econ}
                        alt="arrow"
                        className="icon"
                        height="150px"
                        width="150px"
                      />
                    </Col>
                  </Row>

                  <Row className="percentages">
                    <Col sm="6" className="up">
                    {result.categories
                        ? result.categories[9].score_out_of_10
                        : null}%
                    </Col>

                    <Col sm="6" className="up">
                    {result.categories
                        ? result.categories[11].score_out_of_10
                        : null}%
                    </Col>
                  </Row>
                </div>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CitySearch;
