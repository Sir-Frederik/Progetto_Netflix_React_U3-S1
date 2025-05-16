import { Container, Dropdown, Stack } from "react-bootstrap";

const Header = function () {
  return (
    <Container fluid className="px-4">
      <Stack direction="horizontal" className="justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <Dropdown className="mb-3 ms-4">
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Drama </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>{" "}
        </div>
      </Stack>
    </Container>
  );
};
export default Header;
