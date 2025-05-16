import { Container, Row } from "react-bootstrap";
import Card from "./Card";
import { Component } from "react";
class Gallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    error: null,
  };

  fetchImage = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=d4ad55d7&s=${this.props.saga}`);

      if (response.ok) {
        const data = await response.json();

        if (data.Search) {
          this.setState({
            movies: data.Search,
            isLoading: false,
          });
        }
      } else {
        this.setState({
          error: `Errore nella richiesta: ${response.status}`,
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({
        error: error.message,
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchImage();
  }
  render() {
    const { movies, isLoading, error } = this.state;
    return (
      <Container fluid className="px-1">
        <h4> {this.props.title}</h4>
        <Row xs={1} sm={2} lg={4} xl={6} className="mb-4 gx-2">
          {movies.slice(0, 6).map((movie) => (
            <Card key={movie.imdbID} imgSrc={movie.Poster} />
          ))}
        </Row>
      </Container>
    );
  }
}
export default Gallery;
