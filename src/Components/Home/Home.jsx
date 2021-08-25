import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { BsPlayFill } from "react-icons/bs";
import { IoIosAdd, IoIosStar } from "react-icons/io";
import { useState } from "react";

export default function Home(data) {
  const [ID, setId] = useState(0);

  return (
    <div
      className="main"
      style={{
        background: `linear-gradient(to right, rgba(30, 30, 31, 0.9), rgba(32, 34, 36, 0.4)),url(${data.data[ID].Poster}) right top no-repeat`,
        backgroundSize: "100% 100%"
      }}
    >
      <Fade top>
        <div className="movie-info">
          <h1>{data.data[ID].Title}</h1>
          <p>Season 1 </p>
          <div>
            <p className="stars">
              <IoIosStar className="active" />
              <IoIosStar className="active" />
              <IoIosStar className="active" />
              <IoIosStar className="active" />
              <IoIosStar />
            </p>
          </div>
          <p>cinema | crime | action</p>

          <div>
            <div className="add">
              <button className="play-button">
                <BsPlayFill className="icon" />
              </button>

              <button>
                <IoIosAdd className="icon" />
              </button>
            </div>
          </div>
        </div>
      </Fade>

      <Fade left>
        <div className="movies">
          <Container>
            <Row>
              {data.data.slice(0, 7).map((result, id) => {
                return (
                  <Col key={id}>
                    <div
                      className={
                        ID === id ? "card-movies activeMovie" : "card-movies"
                      }
                      onClick={() => setId(id)}
                    >
                      <img alt = "Poster" src={result.Poster} />
                      <p>{result.Title}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </Fade>
    </div>
  );
}
