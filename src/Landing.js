import React from 'react'
import './Landing.css';
import landingpic from './landing.png'

function Landing(props) {

    
    return (
        <div>
        <h1>Make School Courses Told By Students</h1>
        <button class="button button4">VIEW COURSES</button>
        <img src={landingpic} alt="LandingPic" />
        </div>
        )
}

export default Landing