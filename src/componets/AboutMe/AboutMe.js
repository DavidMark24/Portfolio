import React from 'react'
import './about.css'

const AboutMe = () => {
    return (
        <div className="container">
        <section id="about-me">
          <h1 class="about"> About Me </h1>
          <div class="row">
            <div class="col col-12 col-lg-3 col-xl-3 col-xxl-3">
            <img class="me" src="pictures/index.jpg" alt="boy with video game controller"/> 
            </div>
            <div class="col col-12 col-lg-9 col-xl-9 col-xxl-9">
              <p class="aboutme">
                I'm a full stack developer from Moreno Valley, CA. <br/>
                I am currently a student at University of California, Riverside.<br/>
                I have a passion for creating dynamic applications and front end designs.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
};

export default AboutMe
