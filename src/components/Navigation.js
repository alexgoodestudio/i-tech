import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "../css/index.css"

function Navigation () {
  return (
      <Navbar className="Navbar " variant="dark">
        <Container>
          <Navbar.Brand href="/">i TECH</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Work</Nav.Link>
                <Nav.Link href="/subscribe">Subscribe</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigation;