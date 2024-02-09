import { Container } from "react-bootstrap";
import Cardcustom from "./Cardcustom";
import "./Service.css"

function Service (){
    return(
     
        <Container className="text-center">      
            <h2 className="heading">SERVICES</h2>
            <Cardcustom />
        </Container>
    );
}
export default Service;
