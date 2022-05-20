import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import videos from '../img/video1.mp4'


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={videos} autoPlay muted />
            <h1>explore&enjoy!</h1>
        </div>
    )
}

export default HeroSection