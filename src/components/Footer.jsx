import { Link, animateScroll as scroll } from 'react-scroll'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
function Footer() {


  return (
    <Container className="reallycoolfeet" fluid>
      <footer>
        <Row className="mx-5 mb-4">
          <Col>
          <img
              src="img/logo.jpeg"
              width="60%"
              height="40%"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          <h2><b>Kabar6.com</b></h2>
          <p>Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna
aliqua.</p>
          </Col>
          <Col>
            <b>Important Links</b>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col>
            <b>Contact</b>
            <ul className="list-unstyled">
              <li>Gmail</li>
              <li>lorem ipsum</li>
              <li>Phone number</li>
              <li>Other Phone number</li>
            </ul>
          </Col>
          <Col>
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