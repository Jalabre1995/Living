
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
  const [search2, setSearch2] = useState("");
  const [result2, setResult2] = useState({});

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

      API.getNewYork(search2)
      .then((res) => {
        if (res.data.length === 0) {
          throw new Error("No result found");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setResult2(res.data);
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
          {"Living"}
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>

          <Nav.Link href="/profile">Profile</Nav.Link>

          <Nav.Link onClick={Logout}>Logout</Nav.Link>
        </Nav>

        <Form inline>
          <FormControl
            as="select"
            placeholder="search"
            className="mr-sm-2"
            input="search"
            onChange={(e) => setSearch(e.target.value)}
          >
           <option>Current City</option>
                            <option >new-york</option>
                            <option >san-francisco-bay-area</option>
                            <option >boston</option>
                            <option >washington-dc</option>
                            <option >miami</option>
                            <option >chicago</option>
                            <option >seattle</option>
                            <option >philadelphia</option>
                            <option >minneapolis-saint-paul</option>
                            <option >portland-or</option>
                            <option >honolulu</option>
                            <option >baltimore</option>
                            <option >pittsburgh</option>
                            <option >atlanta</option>
                            <option >madison</option>
                            <option >denver</option>
                            <option >los-angeles</option>
                            <option >san-jose</option>
                            <option >milwaukee</option>
                            <option >st-louis</option>
                            <option >buffalo</option>
                            <option >austin</option>
                            <option >san-diego</option>
                            <option >cleveland</option>
                            <option >new-orleans</option>
                            <option >orlando</option>
                            <option >charlotte</option>
                            <option >cincinnati</option>
                            <option >tampa-bay-area</option>
                            <option >houston</option>
                            <option >dallas</option>
                            <option >omaha</option>
                            <option >columbus</option>
                            <option >boise</option>
                            <option >nashville</option>
                            <option >detroit</option>
                            <option >las-vegas</option>
                            <option >raleigh</option>
                            <option >kansas-city</option>
                            <option >indianapolis</option>
                            <option >albuquerque</option>
                            <option >anchorage</option>
                            <option >san-antonio</option>
                            <option >birmingham-al</option>
                            <option >phoenix</option>
                            <option >lousiville</option>
                            <option >colorado-springs</option>
                            <option >jacksonville</option>
                            <option >memphis</option>
                            <option  >oklahoma-city</option>
          </FormControl>

         
        </Form>
        <Form inline>
          <FormControl
            as="select"
            placeholder="search"
            className="mr-sm-2"
            input="search"
            onChange={(e) => setSearch2(e.target.value)}
          >
           <option>New City</option>
                            <option >new-york</option>
                            <option >san-francisco-bay-area</option>
                            <option >boston</option>
                            <option >washington-dc</option>
                            <option >miami</option>
                            <option >chicago</option>
                            <option >seattle</option>
                            <option >philadelphia</option>
                            <option >minneapolis-saint-paul</option>
                            <option >portland-or</option>
                            <option >honolulu</option>
                            <option >baltimore</option>
                            <option >pittsburgh</option>
                            <option >atlanta</option>
                            <option >madison</option>
                            <option >denver</option>
                            <option >los-angeles</option>
                            <option >san-jose</option>
                            <option >milwaukee</option>
                            <option >st-louis</option>
                            <option >buffalo</option>
                            <option >austin</option>
                            <option >san-diego</option>
                            <option >cleveland</option>
                            <option >new-orleans</option>
                            <option >orlando</option>
                            <option >charlotte</option>
                            <option >cincinnati</option>
                            <option >tampa-bay-area</option>
                            <option >houston</option>
                            <option >dallas</option>
                            <option >omaha</option>
                            <option >columbus</option>
                            <option >boise</option>
                            <option >nashville</option>
                            <option >detroit</option>
                            <option >las-vegas</option>
                            <option >raleigh</option>
                            <option >kansas-city</option>
                            <option >indianapolis</option>
                            <option >albuquerque</option>
                            <option >anchorage</option>
                            <option >san-antonio</option>
                            <option >birmingham-al</option>
                            <option >phoenix</option>
                            <option >lousiville</option>
                            <option >colorado-springs</option>
                            <option >jacksonville</option>
                            <option >memphis</option>
                            <option  >oklahoma-city</option>
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
                  <div className="title">Living</div>
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
                  Maintaining you current salary, this is how far you can expect your expenses to be impacted ....
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
                    { Math.floor(result.categories 
                        ? result.categories[1].score_out_of_10
                        : null) * 10 - Math.floor(result2.categories ? result2.categories[1].score_out_of_10: null) * 10}% 
                    </Col>

                    <Col sm="4" className="up">
                    { Math.floor(result.categories 
                        ? result.categories[0].score_out_of_10
                        : null) * 10 - Math.floor(result2.categories ? result2.categories[0].score_out_of_10: null) * 10}%
                    </Col>

                    <Col sm="4" className="up">
                    { Math.floor(result.categories
                        ? result.categories[8].score_out_of_10
                        : null) * 10 - Math.floor(result2.categories ? result2.categories[8].score_out_of_10: null)* 10}%
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
                    { Math.floor(result.categories
                        ? result.categories[9].score_out_of_10
                        : null) * 10 - Math.floor(result2.categories ? result2.categories[9].score_out_of_10: null) * 10}%
                    </Col>

                    <Col sm="6" className="up">
                    {Math.floor(result.categories
                        ? result.categories[11].score_out_of_10
                        : null) *10 - Math.floor(result2.categories ? result2.categories[11].score_out_of_10: null) * 10}%
                    </Col>
                  </Row>
                </div>
              </Container>
              <Container className="output">
                <Row>
                  <Col sm="12" className="introSentence">
                   New City
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

                  

                  <Row className="percentages">
                    <Col sm="4" className="up">
                    { Math.floor(result2.categories 
                        ? result2.categories[1].score_out_of_10
                        : null) * 10  }%  
                    </Col>

                    <Col sm="4" className="up">
                    { Math.floor(result2.categories 
                        ? result2.categories[0].score_out_of_10
                        : null) * 10 }%
                    </Col>

                    <Col sm="4" className="up">
                    { Math.floor(result2.categories
                        ? result2.categories[8].score_out_of_10
                        : null) * 10}%
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


                  <Row className="percentages">
                    <Col sm="6" className="up">
                    { Math.floor(result2.categories
                        ? result2.categories[9].score_out_of_10
                        : null) * 10 }%
                    </Col>

                    <Col sm="6" className="up">
                    {Math.floor(result2.categories
                        ? result2.categories[11].score_out_of_10
                        : null) *10}%
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
