import React from "react"
import Navbar from './componets/Navbar/Navbar'
import Intro from './componets/Intro/Intro'
import AboutMe from './componets/AboutMe/AboutMe'
import Portfolio from './componets/Portfolio/Portfolio'
import Contact from './componets/Contact/Contact'
import Footer from './componets/Footer/Footer'

function App() {
  return (
    <div>
   <Navbar />
   <Intro />
   <AboutMe />
   <Portfolio />
   <Contact />
   <Footer />
    </div>
  );
}

export default App;
