import React from 'react'
import { useState } from 'react';
import {Button,Navbar,Nav,Form,FormControl,NavDropdown,Container} from 'react-bootstrap'


function Header(){
  const [showSearchInput,setsearch]=useState(false);


    return (
        <>
        
    <Navbar  expand="lg" fixed="top" className="header">
  <Navbar.Brand href="#" className="brand" ><h1>MovieSTAN</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll" className="justify-content-center ">
    
      <Nav.Link href="#action1" className="menu-items"><h5>Home</h5></Nav.Link>
      <Nav.Link href="#action1" className="menu-items"><h5>TV SHows</h5></Nav.Link>
      <Nav.Link href="#action1" className="menu-items"><h5>Movies</h5></Nav.Link>
      <Nav.Link href="#action1" className="menu-items"><h5>UP comming</h5></Nav.Link>
    </Navbar.Collapse>
    <Navbar.Collapse>
    <Form className="d-flex search">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2 search-input"
        aria-label="Search"
        style={{display:showSearchInput?"block":"none"}}
      />
      <Button variant="outline-success" onClick={()=>{setsearch(!showSearchInput)}} >Search</Button>
    </Form>
    </Navbar.Collapse>
  
</Navbar>
        </>
    )
}
export default Header;