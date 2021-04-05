import React from 'react'
import './portfolio.css'

const Portfolio = () => {
    return (
        <div id="work" className="container">
        <section id="project">
          <h1 class="projects">Projects</h1>
          <div class="row">
            <div class="col col-12 col-lg-3 col-xl-3 col-xxl-3">
              <a href="https://charlestbell.github.io/ctyFaktz/"> <img class="city" src="pictures/cityfaktz.png"
                  alt="city website" srcset=""/> </a>
               </div>
               <div class="col col-12 col-lg-9 col-xl-9 col-xxl-9">
                <p class="pro">CtyFaktz! City search made fun. <br/>
                  A website that has useful and fun facts about your favorite cities. <br/>
                  It's a new way of looking at your favorite towns!</p>
               </div>
          </div>
          <div class="row">
            <div class="col col-12 col-lg-3 col-xl-3 col-xxl-3">
              <a href="https://chefs-kiss.herokuapp.com/"> <img class= "city" src="pictures/Screenshot (52).png" alt="chef website"/> </a>
            </div>
            <div class="col col-12 col-lg-9 col-xl-9 col-xxl-9">
              <p class="pro">
                Chef's Kiss.<br/>
                 Cooking made social and simple.
                 <br/>
                A place where you can share, view and post your favorite recipes!
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col col-12 col-lg-3 col-xl-3 col-xxl-3">
              <a href="https://pacific-lowlands-24304.herokuapp.com/index"> <img class="city" src="pictures/burger.png"
                  alt="burger"/> </a>
               </div>  
               <div class="col col-12 col-lg-9 col-xl-9 col-xxl-9">
                <p class="pro"> Eat Da Burger <br/>
                  A Node.js , Express and Handlebars application that allows you to input your favorite burgers and devour them! <br/>
                   I used MySQL to create the database that holds all the information. <br/>
                    Also deployed the app using Heroku you can see below.
                  </p>
               </div>
          </div>
          <div class="row">
            <div class="col col-12 col-lg-3 col-xl-3 col-xxl-3">
              <a href="https://intense-castle-01702.herokuapp.com/stats"> <img class="city" src="pictures/fitness.png"
                  alt="burger"/> </a>
               </div>  
               <div class="col col-12 col-lg-9 col-xl-9 col-xxl-9">
                <p class="pro"> Fitness Tracker <br/>
                 A fitness app that allows to track all of your workouts <br/>
                  By storing all the data with MongoDB we can keep a record of all you completed and occuring workouts. <br/>
                  </p>
               </div>
          </div>
          <div class="row">
            <div class="col col-12 col-lg-3 col-xl-3 col-xxl-3">
              <a href="https://radiant-chamber-40061.herokuapp.com/"> <img class="city" src="pictures/employeeD.png"
                  alt="burger"/> </a>
               </div>  
               <div class="col col-12 col-lg-9 col-xl-9 col-xxl-9">
                <p class="pro"> Employee Directory <br/>
                 A React application that stores employee information<br/>
                  Using React and Axios you can search for your employees by name, birthday or email.<br/>
                  </p>
               </div>
          </div>
          </section>
  </div>
    )
}

export default Portfolio
