import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/index.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <MyNav />
      <Container fluid className="px-4">
        <Header />

        <Gallery title="Trending Now" saga="Looney%20Tunes" />
        <Gallery title="Watch it Again" saga="Harry%20Potter" />
        <Gallery title="New Releases" saga="Dreamworks" />
      </Container>
    </>
  );
}

export default App;
