import { Container, Row } from "react-bootstrap";
import Card from "./Card";
const Gallery = function (props) {
  return (
    <Container fluid className="px-1">
      <h4> {props.title}</h4>
      <Row xs={1} sm={2} lg={4} xl={6} className="mb-4 gx-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Row>
    </Container>
  );
};
export default Gallery;
