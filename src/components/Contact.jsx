import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.css'

function Contact (){
    return(
        <>
        <Container className="px-5 coolcontact" fluid>
            <Row>
                <Col lg={6} md={12} className="rightborder pb-4">
                    <Form>
                    <Form.Group className="mb-3" controlId="Name">
                        <Form.Label>Nama :</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan Nama Anda..."/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Email">
                        <Form.Label>Email :</Form.Label>
                        <Form.Control type="email" placeholder="Masukkan Nama Email..."/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Subject">
                        <Form.Label>Subject :</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan Nama Subject..."/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Message">
                        <Form.Label>Message :</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col>
                <Col lg={6} md={12} className="wrongborder">
                    <h1>Contact :</h1>
                    <ul className="list-unstyled">
                        <li><i class="bi bi-youtube"></i>Loremipsumdolo@gmail.com</li>
                        <li>Loremipsumdolo</li>
                        <li>Loremipsumdolo</li>
                        <li>+1 812 7373 4545</li>
                        <li>Loremipsumdolo</li>
                    </ul>
                    <h2>Company Address :</h2>
                    <p>
                        Kantor pusat internasional CNN berada di CNN Center, 190 Marietta St NW,
                        Atlanta, GA 30303, Amerika Serikat. CNN juga memiliki studio di
                        Washington, D.C. dan Los Angeles, serta kantor di 30 Hudson Yards, New
                        York City
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Contact;