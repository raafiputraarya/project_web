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
                    <div className="sectionleft col-md-6">
                        <h2 className='title1' data-aos="fade-right" data-aos-duration="2000">HELLO!</h2>
                        <h3 className='titlewelcome' data-aos="fade-right" data-aos-duration="2000">Welcome to</h3>
                        <h2 className='primarytitle' data-aos="fade-right" data-aos-duration="2000">Kabar6.com</h2>
                        <p className="subtitle" data-aos="fade-right" data-aos-duration="2000"><b>Kabar6.com</b> merupakan media mainsterm yang lahir di Banten dengan motto Dari Banten untuk Indonesia. Menyajikan media nomer 1 yanng masih eksis sampai saat ini. Adapun sajian informasi yang diproduksi www.kabar6.com mulai dari berita seputar pemerintahan, politik, kriminal dan hukum.</p>
                        <Button className="Button" variant="warning" href='#Services' data-aos="fade-right" data-aos-duration="2000">Read now!</Button>
                    </div>
                    <div md={2} className="sectionright col-md-2"  data-aos="fade-left" data-aos-duration="2000">
                        <img src='/public/img/logo.jpeg' className="imageheader"></img>
                    </div>
                </Row>
            </Container>
    </div>
    ); 
}
export default Headerfile;