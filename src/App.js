
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './compontes/Pages/Home.js';
import About from './compontes/Pages/About.js';
import Services from './compontes/Pages/Services.js';
import Contact from './compontes/Pages/Contact.js';
import { Routes, Route } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { SideBar } from './compontes/SideBar.js';
import Works from './compontes/Pages/Works.js';





function App() {
  return (
    <div className='bg-pattern'>
      <Row className='d-lg-flex d-sm-none ' >
        <Col lg="3" className='Sidebar d-lg-flex d-sm-none '>
          <SideBar />
        </Col>
        <Col lg="8" className=''>
          <Routes>
            <Route path='/'
              element={<Home />} />
            <Route path='/about'
              element={<About />} />
            <Route path='/works'
              element={<Works />} />
            <Route path='/services'
              element={<Services />} />
            <Route path='/contact'
              element={<Contact />} />
          </Routes>
        </Col>
      </Row>

      <div className='d-lg-none  '>
        <Home />
        <About />
        <Services />
        <Works />
        <Contact />
      </div>

    </div>


















  );
}

export default App;
