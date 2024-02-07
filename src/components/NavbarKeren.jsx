import { Link } from "react-scroll";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarKeren.css'
function NavbarKeren() {

    //a lot of code
    return (
      <Navbar expand="lg" className="reallycoolnav">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="img/logo.jpeg"
              width="15%"
              height="15%"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Kabar6.com
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">Header</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
  }
  export default NavbarKeren;