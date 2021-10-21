import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Proyecto React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Item1</Nav.Link>
                        <Nav.Link href="#link">Item2</Nav.Link>
                        <Nav.Link href="#link">Item3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}