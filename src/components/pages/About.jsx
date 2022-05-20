import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';

export default function About() {
    return (
    <>
        <h1 className='about'>About Me</h1>
        <h2>hi</h2>
        <p>my name is LUCY.</p>
        <p>B.A. in Computer Science, NYU '23</p>
        I'm new to software development and excited to learn as much as I can!
    
        <p>Interests:</p>
        <li>Mobile App Development</li>
        <li>AI</li>

        <p>Outside Interests:</p>
        <li>Tattoo Designing</li>
        <li>Hiking</li>
        <li>Fitness and Nutrition</li>

        <Link to ='/resume'>Resume</Link> 
    
    </>
    )
}