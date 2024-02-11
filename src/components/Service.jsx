import { Container } from "react-bootstrap";
import Cardcustom from "./Cardcustom";
import "./Service.css"

function Service (){
    return(
     
        <Container className="text-center" id='Services'>      
            <h2 className="heading">SERVICES</h2>
            <Cardcustom />
            <div class="wave"></div>
        </Container>
    );
}
export default Service;
