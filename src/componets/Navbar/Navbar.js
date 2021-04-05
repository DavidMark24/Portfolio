import React from 'react'

const Navbar = () => {
    return (
            <nav class="navbar  navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html"> DJ</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#about-me">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#project">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="pictures/David-Johnson.pdf" download> Resume </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
}

export default Navbar
