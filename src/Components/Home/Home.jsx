import React from 'react'
import {Row,Col} from 'react-bootstrap'

export default function Home() {
   return (
      <div className="main">
         <div className="movie-info">
            <h1>the witcher</h1>
            <p>Season 1</p>
            <p>rating</p>
            <p>cinema | crime | action</p>
            <div>
               <Row>
                  <Col lg={1}>
                  <div>play</div>
                  </Col>
                  <Col lg={1}>
                  <div>favorate</div>
                  </Col>
               </Row>
            </div>

         </div>
         
      </div>
   )
}
