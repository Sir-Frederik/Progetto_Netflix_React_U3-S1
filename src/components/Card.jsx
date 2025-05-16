import { Col } from "react-bootstrap";
import image from "../assets/placeholder.png";
const Card = function () {
  return (
    <Col className="mb-2 text-center">
      <img className="img-fluid" src={image} />
    </Col>
  );
};

export default Card;
