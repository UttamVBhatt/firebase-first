import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
            <Link
              style={{ marginLeft: "1rem", textDecoration: "none" }}
              to="/book/list"
            >
              Listing Page
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
