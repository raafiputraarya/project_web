import { Link, animateScroll as scroll } from 'react-scroll'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
function Footer() {


  return (
    <Container className="reallycoolfeet" fluid>
      <footer>
        <Row className="mb-4 text-center">
          <Col md={2} sm={6}>
<<<<<<< HEAD
            <img src="/img/logo.jpeg" className="d-inline-block img-fluid" alt="kabar6 logo" sizes='50%'/>
=======
            <img src="img/logo.jpeg" className="d-inline-block img-fluid logoa" alt="kabar6 logo" sizes='50%'/>
>>>>>>> abde5941832b73308d0079e08ca1e9a9b24bf0d3
          </Col>
          <Col md={2} sm={6}>
            <b>Kabar6.com</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
          <Col md={2} sm={4}>
            <b>Important Links</b>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={3} sm={4}>
            <b>Contact</b>
            <ul className="list-unstyled">
              <li>Gmail</li>
              <li>lorem ipsum</li>
              <li>Phone number</li>
              <li>Other Phone number</li>
            </ul>
          </Col>
          <Col md={3} sm={4}>
            <b>Social Media</b>
            <ul className="list-unstyled">
              <li>Youtube</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-center">
          &#169; 2024 Copyright : PT Kabar6.com
        </Row>
      </footer>
    </Container>
  );
}
export default Footer;