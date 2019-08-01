import React from 'react'
import './Landing.css';
import landingpic from './landing.png'

function Landing(props) {

    
    return (
        <div>
        <h1>Make School Courses Told By Students</h1>
        <button class="button button4">VIEW COURSES</button>
        <div class="landing"><img src={landingpic} alt="" /></div>
        </div>
        )
}

export default Landing