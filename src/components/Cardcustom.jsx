import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './Cardcustom.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row' ;
import Col from 'react-bootstrap/Col' ;

function Cardcustom(){
    return (
      <Container className='container'>
      <Stack direction="horizontal" gap={5} className="mx-auto">
          <Row className='mx-auto'>
            <Col className=''>
              <Card className='card1' style={{ 
                width: '21rem',
                color: 'black', 
                padding: '15px 10px 20px 10px',
                borderRadius:'20px',
                boxShadow: '5px 5px 5px 5px #e5e5e5',
                backgroundColor: '#FFE382',
                border:'0',
                margin: 'auto',
                opacity: '90%',
                }}>
              <Card.Img className='card-img1' variant="top" src="/img/gelas.png" />
              <Card.Body className=''>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button className='buttonCard1' variant="warning">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className=''>
              <Card className='card2' style={{
                 width: '21rem',
                 color: 'black', 
                 padding: '15px 10px 15px 10px',
                 borderRadius:'20px',
                 boxShadow: '5px 5px 5px 5px #e5e5e5',
                 backgroundColor: 'transparent',
                 border:'0',
                 margin: 'auto',
                 opacity: '90%',
                }}>
              <Card.Img className='card-img2' variant="top" src="/img/gelas.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button className='buttonCard2' variant="warning">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className='card3'>
              <Card className='card' style={{
                   width: '21rem',
                   color: 'black', 
                   padding: '15px 10px 15px 10px',
                   borderRadius:'20px',
                   boxShadow: '5px 5px 5px 5px #e5e5e5',
                   backgroundColor: '#FFE382',
                   border:'0',
                   margin: 'auto',
                   opacity: '90%',
              }}>
              <Card.Img className='card-img3' variant="top" src="/img/gelas.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button className='buttonCard3' variant="warning">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Stack>
      </Container>
    );
}
export default Cardcustom;
