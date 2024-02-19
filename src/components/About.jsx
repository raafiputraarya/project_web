import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'
function About (){
    return(
        <>
        <Container className="amazingAbout px-5" id="About" fluid>
            <Row><h1 className="title text-center mb-4 mt-5">ABOUT</h1></Row>
            <Row>
<<<<<<< HEAD
                <Col lg={6} md={12} className="d-flex mb-5 mt-3">
                    <img src="/img/logo.jpeg" alt="" className="img-fluid mx-auto mt-1 mb-auto logoAbout"/>
=======
                <Col lg={6} md={12} className="d-flex">
                    <img src="img/logo.jpeg" alt="" className="img-fluid mx-auto mt-1 mb-auto logoa"/>
>>>>>>> abde5941832b73308d0079e08ca1e9a9b24bf0d3
                </Col>
                <Col lg={6} md={12} className='mb-5 mt-3'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusm sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusm sed do eiusmod
                    tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do </p>
                    <p>
                    eiusm sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.Lorem ipsum dolor sit amet,
                    consectetur

                    adipisicing elit, sed do eiusm sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit, sed do eiusm
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default About;