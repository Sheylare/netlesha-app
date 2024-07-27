import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <Navbar className="navBar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="navBar">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Movies">Movies</Nav.Link>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="100"
                height="100"
              />
            </Navbar.Brand>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
