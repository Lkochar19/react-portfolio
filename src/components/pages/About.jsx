import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';
import '../About.css'

export default function About() {
    return (
    <>
    <div className ='about'>
        <h1>About Me</h1>
        <h2>Hi,</h2>
        <p>my name is Lucy.</p>
        <p>B.A. in Computer Science, NYU '23</p>
        --
        <p>I'm new to software development and excited to learn as much as I can!</p>

    
        <p className='bolddis'>Interests:</p>
        <li>Mobile App Development</li>
        <li>AI & Machine Learning</li>

        <p className='bolddis'>Outside Interests:</p>
        <li>Tattoo Designing</li>
        <li>Hiking</li>
        <li>Fitness and Nutrition</li>

        <p className='reslink'><Link to ='/resume'>Resume</Link></p>
        <Link to={{ pathname: "https://github.com/Lkochar19" }} target="_blank">Github</Link>
    </div>
    </>
    )
}
