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

            <img src="/img/logo.jpeg" className="d-inline-block img-fluid" alt="kabar6 logo" sizes='50%'/>
          </Col>
          <Col md={2} sm={6}>
            <b>Kabar6.com</b>
            <p>Kabar6 merupakan media mainsterm yang lahir di Banten dengan motto Dari Banten untuk Indonesia.</p>
          </Col>
          <Col md={2} sm={4}>
            <b>Important Links</b>
            <ul className="list-unstyled">
              <li><a href='#Header'>Home</a></li>
              <li><a href='#Services'>Services</a></li>
              <li><a href='#About'>About</a></li>
              <li><a href='#Contact'>Contact</a></li>
            </ul>
          </Col>
          <Col md={3} sm={4}>
            <b>Contact</b>
            <ul className="list-unstyled">
              <li><a href='https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=kabarenam6@gmail.com'>Gmail</a></li>
              <li><a href='mailto:kabar6.com'>Yahoo</a></li>
              <li><a href='https://api.whatsapp.com/send/?phone=%2B628158407736&text&type=phone_number&app_absent=0'>Phone number</a></li>
              <li><a href='tel:021 2275 6598'>Other Phone number</a></li>
            </ul>
          </Col>
          <Col md={3} sm={4}>
            <b>Social Media</b>
            <ul className="list-unstyled">
              <li><a href='https://www.youtube.com/results?search_query=kabarenam_official'>Youtube</a></li>
              <li><a href='https://www.instagram.com/kabar6official/'>Instagram</a></li>
              <li><a href='https://twitter.com/Kabar6com'>Twitter</a></li>
              <li><a href='https://api.whatsapp.com/send/?phone=%2B628158407736&text&type=phone_number&app_absent=0'>Whatsapp</a></li>
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