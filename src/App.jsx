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

        <Gallery title="Trending Now" />
        <Gallery title="Watch it Again" />
        <Gallery title="New Releases" />
      </Container>
    </>
  );
}

export default App;
