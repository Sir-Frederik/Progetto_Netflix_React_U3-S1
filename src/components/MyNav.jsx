import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

const MyNav = function () {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="#home">
        {" "}
        <img src={logo} style={{ width: "100px", height: "55px" }} />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#prices" className="nav-link active fw-bold">
          Home
        </Nav.Link>
        <Nav.Link href="#">TV Shows</Nav.Link>
        <Nav.Link href="#">Movies</Nav.Link>
        <Nav.Link href="#">Recently Added</Nav.Link>
        <Nav.Link href="#">My List</Nav.Link>
      </Nav>
      <div className="d-flex align-items-center">
        <i className="bi bi-search icons"></i>
        <div id="kids" className="fw-bold">
          KIDS
        </div>
        <i className="bi bi-bell icons"></i>
        <i className="bi bi-person-circle icons"></i>
      </div>
    </Navbar>
  );
};

export default MyNav;
