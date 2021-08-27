import MovieList from "./components/MovieList";
import { Col, Row } from "react-bootstrap";

// Styles
import { AppStyles } from "./AppStyle";
import Nominates from "./components/MovieList/Nominates";
import NominateProvider from "./components/Store/nominateStore";

function App() {
  return (
    <AppStyles>
      <h1>Movies and Beyond ... 😎</h1>
      <NominateProvider>
        <Row>
          <Col lg="6" md="12">
            <MovieList />
          </Col>
          <Col lg="6" md="12">
            <Nominates />
          </Col>
        </Row>
      </NominateProvider>
    </AppStyles>
  );
}

export default App;
