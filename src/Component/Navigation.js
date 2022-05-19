import { Navbar, Nav, Container } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar variant="dark" style={{ backgroundColor: "#282c34" }}>
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
