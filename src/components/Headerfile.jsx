import { Container } from "react-bootstrap"
import "./headerfile.css"
import Row from 'react-bootstrap/Row' 
import Button from 'react-bootstrap/Button'
import 'aos/dist/aos.css';

function Headerfile (){
    return(
    <div className="header" id='Header'>
            <Container className="home">
                <Row>
                    <div className="sectionleft col-md-6" data-aos="fade-right" data-aos-duration="1000">
                        <h2 className='title1'>HELLO!</h2>
                        <h3 className='titlewelcome' >Welcome to</h3>
                        <h2 className='primarytitle' >Kabar6.com</h2>
                        <p className="subtitle"><b>Kabar6</b> merupakan media mainsterm yang lahir di Banten dengan motto Dari Banten untuk Indonesia. Menyajikan media nomer 1 yanng masih eksis sampai saat ini. Adapun sajian informasi yang diproduksi www.kabar6.com mulai dari berita seputar pemerintahan, politik, kriminal dan hukum.</p>
                        <Button className="Button" variant="warning" href='#Services' >Read now!</Button>
                    </div>
                    <div md={2} className="sectionright col-md-2"  data-aos="fade-left" data-aos-duration="2000">
                        <img src='img/logo.jpeg' className="imageheader"></img>
                    </div>
                </Row>
            </Container>
    </div>
    ); 
}
export default Headerfile;