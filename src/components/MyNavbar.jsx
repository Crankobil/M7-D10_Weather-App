import { Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"

const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" id="navbar" className=" px-5 py-2">
        <Navbar.Brand href="#home" className="text-white"><h4>Strive Weather App</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#link">Forecast</Nav.Link>
            <Nav.Link href="#link">Favorites</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar