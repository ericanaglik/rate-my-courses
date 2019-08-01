import React from 'react'
import './Landing.css';
import landingpic from './landing.png'

function Landing(props) {

    
    return (
        <div>
        <div class="maintext">
        <h1>Make School</h1>
        <h1>Courses</h1>
        <h1>Told By Students</h1>
        </div>
        <button class="button button4">VIEW COURSES</button>
        <div class="landing"><img src={landingpic} alt="" /></div>
        </div>
        )
}

export default Landing