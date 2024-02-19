import React from 'react'
import aboutimage from '../images/about.png';
function About() {
    return (
        <div id='about'>
            <div className="about-image">
                <img src={aboutimage} alt="" />

            </div>

            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae explicabo fugiat illum,
                    voluptate aut, fuga cupiditate quasi voluptatibus dolore eligendi ratione et.
                    Tenetur, aperiam? Numquam.</p>
                    <button>READ MORE</button>
            </div>

        </div>
    )
}

export default About
