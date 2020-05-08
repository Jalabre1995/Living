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
            <option value="New York">New York, NY</option>
            <option value="San Francisco">San Francisco, CA</option>
            <option value="Boston">Boston, MA</option>
            <option value="Jersey City">Jersey City, NJ</option>
            <option value="Washington">Washington, DC</option>
            <option value="Miami">Miami, FL</option>
            <option value="Chicago">Chicago, IL</option>
            <option value="Seattle">Seattle, WA</option>
            <option value="Philadelphia">Philadelphia, PA</option>
            <option value="Minneapolis">Minneapolis, MN</option>
            <option value="Portland">Portland, OR</option>
            <option value="Honolulu">Honolulu, HI</option>
            <option value="Newark">Newark, NJ</option>
            <option value="Baltimore">Baltimore, MD</option>
            <option value="Pittsburgh">Pittsburgh, PA</option>
            <option value="Atlanta">Atlanta, GA</option>
            <option value="Oakland">Oakland, CA</option>
            <option value="Madison">Madison, WI</option>
            <option value="Denver">Denver, CO</option>
            <option value="Los Angeles">Los Angeles, CA</option>
            <option value="San Jose">San Jose, CA</option>
            <option value="Sacramento">Sacramento, CA</option>
            <option value="Milwaukee">Milwaukee, WI</option>
            <option value="St. Louis">St. Louis, MO</option>
            <option value="Buffalo">Buffalo, NY</option>
            <option value="Austin">Austin, TX</option>
            <option value="San Diego">San Diego, CA</option>
            <option value="Cleveland">Cleveland, OH</option>
            <option value="New Orleans">New Orleans, LA</option>
            <option value="Orlando">Orlando, FL</option>
            <option value="St. Paul">St. Paul, MN</option>
            <option value="Long Beach">Long Beach, CA</option>
            <option value="Charlotte">Charlotte, NC</option>
            <option value="Santa Ana">Santa Ana, CA</option>
            <option value="Cincinnati">Cincinnati, OH</option>
            <option value="Tampa">Tampa, FL</option>
            <option value="Houston">Houston, TX</option>
            <option value="Dallas">Dallas, TX</option>
            <option value="Norfolk">Norfolk, VA</option>
            <option value="Lincoln">Lincoln, NE</option>
            <option value="Omaha">Omaha, NE</option>
            <option value="Columbus">Columbus, OH</option>
            <option value="Anaheim">Anaheim, CA</option>
            <option value="Boise">Boise, ID</option>
            <option value="Reno">Reno, NV</option>
            <option value="Nashville">Nashville, TN</option>
            <option value="Detroit">Detroit, MI</option>
            <option value="Irvine">Irvine, CA</option>
            <option value="Winston-Salem">Winston-Salem, NC</option>
            <option value="Las Vegas">Las Vegas, NV</option>
            <option value="Raleigh">Raleigh, NC</option>
            <option value="Fresno">Fresno, CA</option>
            <option value="Tucson">Tucson, AZ</option>
            <option value="Fremont">Fremont, CA</option>
            <option value="Kansas City">Kansas City, MO</option>
            <option value="Indianapolis">Indianapolis, IN</option>
            <option value="Stockton">Stockton, CA</option>
            <option value="Durham">Durham, NC</option>
            <option value="Alburquerque">Alburquerque, NM</option>
            <option value="Lexington">Lexington, KY</option>
            <option value="Laredo">Laredo, TX</option>
            <option value="Fort Worth">Fort Worth, TX</option>
            <option value="Anchorage">Anchorage, AK</option>
            <option value="Hialeah">Hialeah, FL</option>
            <option value="San Antonio">San Antonio, TX</option>
            <option value="Birmingham">Birmingham, AL</option>
            <option value="Phoenix">Phoenix, AZ</option>
            <option value="Greensboro">Greensboro, NC</option>
            <option value="Louisville">Lousiville, KY</option>
            <option value="Riverside">Riverside, CA</option>
            <option value="Lubbock">Lubbock, TX</option>
            <option value="Bakersfield">Bakersfield, CA</option>
            <option value="Chula Vista">Chula Vista, CA</option>
            <option value="Fort Wayne">Fort Wayne, IND</option>
            <option value="Colorado Springs">Colorado Springs, CO</option>
            <option value="Plano">Plano, TX</option>
            <option value="El Paso">El Paso, TX</option>
            <option value="Jacksonville">Jacksonville, FL</option>
            <option value="Corpus Christi">Corpus Christi, TX</option>
            <option value="Memphis">Memphis, TN</option>
            <option value="Wichita">Wichita, KS</option>
            <option value="St. Petersburg">St. Petersburg, FL</option>
            <option value="Oklahoma City">Oklahoma City, OK</option>
            <option value="Toledo">Toledo, OH</option>
            <option value="Baton Rouge">Baton Rouge, LA</option>
            <option value="Irving">Irving, TX</option>
            <option value="Tulsa">Tulsa, OK</option>
            <option value="Chandler">Chandler, AZ</option>
            <option value="Scottsdale">Scottsdale, AZ</option>
            <option value="San Bernadino">San Bernardino, CA</option>
            <option value="Mesa">Mesa, AZ</option>
            <option value="Garland">Garland, TX</option>
            <option value="Gilbert">Gilbert, AZ</option>
            <option value="Henderson">Henderson, NV</option>
            <option value="Arlington">Arlington, TX</option>
            <option vlaue="Glendale">Glendale, AZ</option>
            <option value="Aurora">Aurora, CO</option>
            <option value="Virgina Beach">Virginia Beach, VA</option>
            <option value="Cheasapeake">Cheasapeake, VA</option>
            <option value="North Las Vegas">North Las Vegas, NV</option>
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
