import { Col, Row } from "react-bootstrap";

const Footer = () => (
  <footer>
    <Row className="justify-content-center mt-5">
      <Col xs={6}>
        <Row>
          <Col className="mb-2">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </Col>
        </Row>
        <Row xs={1} sm={2} md={4}>
          <Col className="footer-links">
            <p>
              <a href="#" alt="footer link">
                Audio and Subtitles
              </a>
            </p>
            <p>
              <a href="#" alt="footer link">
                Media Center
              </a>
            </p>
            <p>
              <a href="#" alt="footer link">
                Privacy
              </a>
            </p>
            <p>
              <a href="#" alt="footer link">
                Contact us
              </a>
            </p>
          </Col>

          <Col className="footer-links">
            <p>
              <a href="#" alt="footer link">
                Audio Description
              </a>
            </p>
            <p>
              <a href="#" alt="footer link">
                Investor Relations
              </a>
            </p>
            <p>
              <a href="#" alt="footer link">
                Legal Notices
              </a>
            </p>
          </Col>

          <Col className="footer-links">
            <p>
              <a href="#" alt="footer link">
                Help Center
              </a>
            </p>
            <p>
              <a href="#" alt="footer link">
                Jobs
              </a>
            </p>
            <p>
              <a href="#" alt="footer link">
                Cookie Preferences
              </a>
            </p>
          </Col>

          <Col className="footer-links">
            <p>
              <a href="#" alt="footer link">
                Gift Cards
              </a>
            </p>
            <p>
              <a href="#" alt="footer link">
                Terms of Use
              </a>
            </p>
            <p>
              <a href="#" alt="footer link">
                Corporate Information
              </a>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  </footer>
);
export default Footer;
