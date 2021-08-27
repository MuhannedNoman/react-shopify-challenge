import React from "react";
import { Row, Col, Container,Tooltip,OverlayTrigger,Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import { BsPlayFill ,BsFillXCircleFill} from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";

export default function Home(data) {
  const [ID, setId] = useState(0);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      remove from favorate list
    </Tooltip>
  );

  return (
    <div className="main">
     
        <Row>
      <Col>
      <Fade top key={ID}>
        <div className="movie-info">
          <h1>{data.data[ID].Title}</h1>
          <p>Year: {data.data[ID].Year}</p>
          <p>{data.data[ID].Type}</p>

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
      </Fade></Col>
      <Col>
          <div className="favorates">
            <Fade left>
         <div className="d-flex favorate">
          <div className="favorate-img"><OverlayTrigger
           placement="left"
           delay={{ show: 250, hide: 400 }}
           overlay={renderTooltip}
         >
    <button variant="success" className="cancle-button"><BsFillXCircleFill className="cancle"/></button>
       </OverlayTrigger>
         <img src={data.data[ID].Poster}></img></div>
          <div className="favorate-text"><h1>{data.data[ID].Title}</h1></div>
        </div>
        </Fade>
        
        
        </div>
        
        
      </Col>
      </Row>
      <Fade left key={data.data}>
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
