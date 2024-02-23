import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import './About.css'
function About (){
    return(
        <>
        <Container className="amazingAbout px-5" id="About" fluid>
            <Row><h1 className="title text-center mb-4 mt-5">ABOUT</h1></Row>
            <Row>
                <Col lg={6} md={12} className="d-flex mt-5 mb-5">
                    <img src="img/logo.jpeg" alt="" className="img-fluid mx-auto mt-1 mb-auto logoa"/>
                </Col>
                <Col lg={6} md={12} className=''>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="Profil">
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link eventKey="Profil">Profil</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="Latar">Latar Belakang</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="Profil">
                                    <p>
                                    Kabar6 lahir Tahun 2011 di Bawah bendera CV Karya Multi Media, kemudian berubah nama di bawah naungan CV.KABAR6 MULTI MEDIA, pada Tahun 2016 tanggal 14 April status legalitasnya menjadi PT KABAR6 MULT I MEDIA. Kemudian mengalami akta Perubahan Tanggal 22 Maret 2017 Nomer. 
                                    </p>
                                    <p>
                                    Meskipun berganti legalitas Poundernya hanya 1, yakni Almarhum Parluhutan Gultom, wartawan yang  mulai berkarir dari Harian Lampu Ijo, Pos Metro Jakarta, Koran Sore Sinar Harapan, dan  akhirnya menciptakan karya sendiri yakni kabar6.com, sekaligus pemilik media. Tahun 2021 beliau wafat diusia 47 Tahun karena sakit.
                                    </p>
                                    <p>
                                    Kini media masih eksis diterukan pengurus yang juga tertera di dalam legalitas PT.Kabar6 Multi Media. Komisari Irsa Pitri Damanik, Direktur Sukardin SH.MH, dan Direkrur Operasional Yudi Wibowo. Kepada 3 personil inilah media ini dititipkan almarhum Parluhutan Gultan yang biasa disebut Bang Luhut
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Latar">
                                    <p>
                                    Tingginya kebutuhan masyarakat akan informasi serta pesatnya pertumbuhan tekhnologi dewasa ini, menjadi salah satu dasar bagi kami dalam wadah PT KABAR6 MULTIMEDIA dengan Akta Perubahan  22 Maret 2017 Nomer 08 dan Nomer AHU-0007182.AH.01.02.Tahun 2017 serta Surat Pengukuhan PKP:-1S30PKP/WP J.08/KP.0303/2017 hadir melalui www.kabar6.com, untuk menyajikan informasi berbasis dunia internet kehadapan masyarakat.
                                    </p>
                                    <p>
                                    www.kabar6.com kiranya cukup mendapat apresiasi dari masyarakat Banten, khususnya Tangerang Raya. Terbukti, kabar6 sudah berusia 14 tahun, dan  kabar6.com kini sudah memiliki kunjungan hingga rata-rata mencapai 1.500.000 clikers perhari versi google analystic. 125-250 Ribu kunjungan per hari dari data administrator web kabar6.com
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default About;