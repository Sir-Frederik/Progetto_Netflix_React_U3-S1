import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/index.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <MyNav />
      <Header />
    </>
  );
}

export default App;
