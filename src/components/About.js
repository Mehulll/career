import React from 'react'
import aboutus from './aboutus.jpg'
import './About.css'

function About(){
    return (    
        <div>
            <img src = {aboutus} alt = "aboutus" />
            <p class = "Aboutus">About us</p>
            <p class = "Information">This website comes out in frustration when I was trying to figure out what's new I can do keeps me happy and what I enjoy. I cannot find a single website which can provide me all option that why we decide to make this website where you can find all information that you want to pursue in your life just at one click and all others options that you have never listen So, keep exploring and keep learning.</p>
        </div>
    );
}

export default About;