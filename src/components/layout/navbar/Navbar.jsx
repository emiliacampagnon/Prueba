import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <img
        src="https://res.cloudinary.com/dxzytrwpw/image/upload/v1711544966/vb_qtkbhz.png"
        width={150}
        alt="LogoViu"
      />
      <Container>
        <Navbar.Brand href="#home">Viu Bikinis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Swimwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Fitness</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Urban</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <FaCartShopping size={30} /> <h5>5</h5>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
