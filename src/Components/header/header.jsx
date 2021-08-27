import React from "react";
// import { useState } from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl
} from "react-bootstrap";
// import Fetch from "../Fetch/Fetch";

export default function Header() {
  return (
    <div>
      <Navbar expand="lg" fixed="top" className="header">
        <Navbar.Brand href="#" className="brand">
          <h1>MovieSTAN</h1>
        </Navbar.Brand>
       
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex  search just">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 search-input"
              aria-label="Search"
            />
            <button  className="search-btn">Search</button>

          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );}