import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function About (){
    return(
        <>
        <Container>
            <Row><h1 className="text-center">About</h1></Row>
            <Row>
                <Col>
                    <img src="img/logo.jpeg" alt="" className="img-fluid"/>
                </Col>
                <Col>
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