import React from "react";
import './style.css';

function AboutMe() {
    return (

        <div className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row align-items-center justify-content-around flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text">
                            <h2 className="text-center">Full Stack Web Developer</h2>

                            
        <div class="skills">
          <h3>Skills</h3>
          <div class="row center space-between">
            <p>HTML5</p>
            <p>CSS</p>
            <p>Bootstrap</p>
            <p>Javascript</p>
            <p>jQuery</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MySQL</p>
            <p>MongoDB</p>
          </div>
        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default AboutMe;