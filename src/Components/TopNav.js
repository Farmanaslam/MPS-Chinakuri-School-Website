import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image, Row ,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function TopNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="justify-content-between">
        <Col md={2}>
          <div className="d-flex align-items-center">
            <Image id="logo"src="/images/logo.png"></Image>
            <Navbar.Brand href="#home" className="fs-5"> Modern Public School, Chinakuri</Navbar.Brand>
          </div>
        </Col>
        
        <Col md={2}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/" href="/">Home</Nav.Link>
          <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/aboutschool'>About School</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/ourmembers'>
                Our Members
              </NavDropdown.Item>
             
            </NavDropdown>
          
            <NavDropdown title="Our School" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Admission</NavDropdown.Item> */}
              {/* <NavDropdown.Item as={Link} to='/feestructure'>
                Fee Structure
              </NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.3">Syllabus</NavDropdown.Item> */}
              
              <NavDropdown.Item as={Link} to='/mandatorydisclosure'>
                Mandatory Disclosure
              </NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to='/rules'>Rules and Regulations</NavDropdown.Item>

              
              <NavDropdown.Item as={Link} to='/schoolhours'>School Hours</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link as={Link} to='/events?loc=events'>Events</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
