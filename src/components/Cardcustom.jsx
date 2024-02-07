import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './Cardcustom.css'
import Container from 'react-bootstrap/Container';

function Cardcustom(){
    return (
      <Container>
      <Stack direction="horizontal" gap={5} className=" col-md-12 mx-auto">
          <Card style={{ 
            width: '30rem',
            color: 'blue', 
            padding: '15px 10px 15px 10px',
            margin: '10px 0px 45px 0px',
            borderRadius:'20px',
            boxShadow: '5px 5px 5px 5px #e5e5e5',
            backgroundColor: '#e4762b',
            }}>
          <Card.Img className='card-img' variant="top" src="img/gelas.png" />
          <Card.Body className=''>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{
              width: '30rem',
              color: 'blue', 
              padding: '15px 10px 15px 10px',
              margin: '10px 0px 45px 0px',
              borderRadius:'15px',
              bgColors:'blue',
            }}>
          <Card.Img variant="top" src="img/gelas.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{
               width: '30rem',
               color: 'blue', 
               padding: '15px 10px 15px 10px',
               margin: '10px 0px 45px 0px',
               borderRadius:'15px',
               bgColors:'blue',
           }}>
          <Card.Img variant="top" src="img/gelas.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
    
      </Stack>
      </Container>
    );
}
export default Cardcustom;
