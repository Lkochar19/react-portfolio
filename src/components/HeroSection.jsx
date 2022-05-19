import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import videos from '../img/video1.mp4'


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={videos} autoPlay muted />
                <h1> Lucy Kocharian</h1>
                <div className="hero-btns">
                    <Button 
                    className='btns'
                    buttonStyle='btn-outline'
                    buttonSize='btn--large'
                    >
                        portfolio
                    </Button>
                </div>
        </div>
    )
}

export default HeroSection