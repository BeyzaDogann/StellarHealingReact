import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/log-img/logo.jpg';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';



function NavigationBar() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.search.value;
    console.log("Arama Sorgusu: ", searchQuery);

    axios.post('/api/search', { query: searchQuery })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Hatalı!", error);
      });
  };

  return (
    <Navbar bg="secondary" expand="lg" >
      <Navbar.Brand href="/Home">
        <img
          src={logo}
          alt="Logo"
          width="70"
          height="70"
          className="d-inline-block my-3 mx-5 "
          style={{ borderRadius: '50%', marginRight: '10px' }}
        />
        <span className='ms-2' style={{fontWeight:'bold', fontSize:'24px', color:'lightblue'}}>Stellar Healing</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Home" className="active">Anasayfa</Nav.Link>
          <Nav.Link as={Link} to="/About">Hakkımda</Nav.Link>
          <NavDropdown title="Terapiler" id="nav-dropdown">
            <NavDropdown.Item as={Link} to="/neck-hernia">Boyun Fıtığı</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/imp">Donuk Omuz</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/desk-worker">Masa Başı Çalışanlar için Egzersizler</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/Contact">İletişim</Nav.Link>
        </Nav>
          <SearchForm />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;