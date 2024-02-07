import { Container } from "react-bootstrap";
import Cardcustom from "./Cardcustom";

function Service (){
    return(
        <Container className="mx-auto">      
            <h2 className="col-md-10 mx-auto text-align-center">SERVICES</h2>
            <Cardcustom />
        </Container>
    );
}
export default Service;
