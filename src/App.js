import MovieList from "./components/MovieList";
import { Col, Row } from "react-bootstrap";

// Styles
import { AppStyles } from "./AppStyle";
import NominatedList from "./components/NominatedList";

function App() {
  return (
    <AppStyles>
      <Row>
        <Col lg="6" md="12">
          <MovieList />
        </Col>
        <Col lg="6" md="12">
          <NominatedList />
        </Col>
      </Row>
    </AppStyles>
  );
}

export default App;
