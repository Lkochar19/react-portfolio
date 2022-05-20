import React from 'react'
import '../../App.css'
import resume from './resume.png'
import '../About.css'

export default function Resume() {
    return <img src={resume} alt="resume"
    style={{ alignSelf: 'center' }}/>;
}