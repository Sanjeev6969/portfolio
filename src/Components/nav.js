import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png'
import { Link} from 'react-router-dom';
function Titlebar(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary border border-black">
      <Container>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Arava Surya Sanjeev
          </Navbar.Brand>
        </Container>
      </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav justify variant="underline" className="ms-auto">
          <Nav.Link as={Link} to="/About" className='text-primary-emphasis'>About</Nav.Link>
            <Nav.Link as={Link} to="/Qualification" className='text-primary-emphasis'>Qualification</Nav.Link>            
            <Nav.Link as={Link} to="/Experience" className='text-primary-emphasis'>Experience</Nav.Link>
            <Nav.Link as={Link} to="/Projects" className='text-primary-emphasis'>Projects</Nav.Link>          
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
    )
}


export default Titlebar