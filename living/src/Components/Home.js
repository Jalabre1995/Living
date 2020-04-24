
import React, {Component} from 'react';
import House from './images/home.png'
import { Button } from "react-mdl";
import { bounceInDown, fadeIn } from "react-animations";
import Radium, {StyleRoot} from 'radium';
<<<<<<< HEAD
<<<<<<< HEAD
import './css/Home.css';
=======
>>>>>>> bc8171c4dbd6014cee0e47d7fbb04a7e432806ff
=======
>>>>>>> bc8171c4dbd6014cee0e47d7fbb04a7e432806ff

const styles = {

    bounceInDown : {

        animation : 'x 2s',
        animationName : Radium.keyframes(bounceInDown, "bounceInDown")

    },
    fadeIn : {
        animation : 'x 2s',
        animationName : Radium.keyframes(fadeIn, "fadeIn")
    }

}


export default class Home extends Component {
 

    render() {
        return(
            <div className="home">

            <StyleRoot>
<<<<<<< HEAD
<<<<<<< HEAD

            <img src={House} alt="home" height="200px" width="200px" style={styles.bounceInDown}/>

            </StyleRoot>
            
            <h1 className="header" stye={styles.fadeIn}>Living.js</h1>

            <p className="fade" >Welcome to the Application that will help you find the best place to live!</p>

            <Button raised colored className="fade">Begin Search</Button>
=======

            <img src={House} alt="home" height="200px" width="200px" style={styles.bounceInDown}/>

            </StyleRoot>
            
            <h1 className="header" stye={styles.fadeIn}>Living.js</h1>

>>>>>>> bc8171c4dbd6014cee0e47d7fbb04a7e432806ff
            <p className="fade" >Welcome to the Application that will help you find a better place to live!</p>

=======

            <img src={House} alt="home" height="200px" width="200px" style={styles.bounceInDown}/>

            </StyleRoot>
            
            <h1 className="header" stye={styles.fadeIn}>Living.js</h1>

            <p className="fade" >Welcome to the Application that will help you find a better place to live!</p>

>>>>>>> bc8171c4dbd6014cee0e47d7fbb04a7e432806ff
            <Button raised colored className="fade hover">Begin Search</Button>

            </div>
        )
    }
}

