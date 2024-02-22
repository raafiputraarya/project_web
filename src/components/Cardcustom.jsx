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
              <Card className='card1' data-aos="fade-right" data-aos-duration="2000" style={{ 
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
              <Card.Img className='card-img1' variant="top" src="/img/penyediajasaberita.png" />
              <Card.Body className=''>
                <Card.Title>Advertising website</Card.Title>
                <Card.Text className='cardtext'>
                  Melayani jasa pemasangan iklan untuk kebutuhan perseorangan maupun perusahaan di situs resmi Kabar6.com
                </Card.Text>
                <Button className='buttonCard1' variant="warning" href='#Contact' >Contact Now!</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className=''>
              <Card className='card2' data-aos="fade-up" data-aos-duration="2000" style={{
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
              <Card.Img className='card-img2' variant="top" src="/img/NewsUpdate2.png" />
              <Card.Body>
                <Card.Title>News Update</Card.Title>
                <Card.Text className='cardtext'>
                  Selalu update perkembangan berita mulai dari informasi seputar pemerintahan, politik, kriminal dan hukum serta kanal hiburan, komunitas, bisnis, kuliner, dan masih banyak lagi
                </Card.Text>
                <Button className='buttonCard2' variant="warning" href='https://kabar6.com/redaksi/' >Cek Now!</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className='card3'>
              <Card className='card' data-aos="fade-left" data-aos-duration="2000" style={{
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
              <Card.Img className='card-img3' variant="top" src="/img/Placement3.png" />
              <Card.Body>
                <Card.Title>Placement Artikel</Card.Title>
                <Card.Text className='cardtext'>
                  Menyediakan jasa Placement artikel dihalaman website resmi kabar6.com
                </Card.Text>
                <Button className='buttonCard3' variant="warning" href='#Contact'>Cantact Now!</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Stack>
      </Container>
    );
}
export default Cardcustom;
