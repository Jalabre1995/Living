import React, {Component} from 'react';
import House from './images/home.png';
import { Button } from "react-bootstrap";
import { bounceInDown, fadeIn } from "react-animations";
import Radium, {StyleRoot} from 'radium';
import './css/Home.css';


const styles = {
  bounceInDown: {
    animation: "x 2s",
    animationName: Radium.keyframes(bounceInDown, "bounceInDown"),
  },
  fadeIn: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

export default class Home extends Component {

 

    render() {
        return(
            <div className="home">

            <StyleRoot>

            <img src={House} alt="home" height="200px" width="200px" style={styles.bounceInDown} className="house"/>

            </StyleRoot>
            
            <h1 className="header">Living.js</h1>

            <p className="font">Welcome to the Application that will help you find the best place to live!</p>

            <Button className="font btn" variant="danger">Begin Search</Button>

            </div>

        )
    }

}
