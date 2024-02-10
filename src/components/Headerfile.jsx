import { Container } from "react-bootstrap"
import "./headerfile.css"
import Row from 'react-bootstrap/Row' ;
import Col from 'react-bootstrap/Col' ;

function Headerfile (){
    return(
    <div className="header">
            <Container className="home ">
                <Row>
                    <div className="title col-md-6">
                        <h2>HELLO!</h2>
                        <h3>Welcome to</h3>
                        <h2>Kabar6.com</h2>
                    </div>
                    <div className="section col-md-5">
                        <img src='./public/img/logo_removebackground.png' className="imageheader"></img>
                    </div>
                </Row>
            </Container>
    </div>
    ); 
}
export default Headerfile;