import { Col } from "react-bootstrap";
import image from "../assets/placeholder.png";
const Card = function (props) {
  return (
    <Col className="my-2 text-center">
      <img className="img-fluid" src={props.imgSrc} />
    </Col>
  );
};

export default Card;
