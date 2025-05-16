import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

const MyNav = function () {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img src={logo} style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">TV Shows</Nav.Link>
          <Nav.Link href="#pricing">Movies</Nav.Link>
          <Nav.Link href="#pricing">Recently Added</Nav.Link>
          <Nav.Link href="#pricing">My List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
