import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ()=>{
    return <>
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand >My Stocks</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    </>
}
export default Header;