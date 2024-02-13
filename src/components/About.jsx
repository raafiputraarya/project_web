import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'
function About (){
    return(
        <>
        <Container className="amazingAbout px-5" fluid>
            <Row><h1 className="text-center">About</h1></Row>
            <Row>
                <Col lg={6} md={12} className="d-flex">
                    <img src="img/logo.jpeg" alt="" className="img-fluid mx-auto mt-1 mb-auto logoAbout"/>
                </Col>
                <Col lg={6} md={12}>
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