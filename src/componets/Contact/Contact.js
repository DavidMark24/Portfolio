import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div id = "contacts" className="container">
            <section id="contact">
      <h1 class="contact">Contact</h1>
      <form class="form">
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Name"/>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Email"/>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1"></textarea>
        </div>
        <div class="form-row text-center mt-3">
          <div class="col">
            <button type="button" class="btn btn-secondary">Sumbit</button>
          </div>
        </div>
      </form>
      <div class="icon">
        <a href="https://www.linkedin.com/in/davidjohnson24/"> <i class="fab fa-linkedin fa-3x"> </i> </a>
        <a href="https://github.com/DavidMark24"> <i class="fab fa-github-square fa-3x"> </i> </a>
        <a href="https://twitter.com/jaayrza"> <i class="fab fa-twitter-square fa-3x"> </i> </a>
      </div>
      </section>
        </div>
    )
}

export default Contact
