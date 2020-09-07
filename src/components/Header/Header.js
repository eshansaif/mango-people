import React from 'react';
import { Navbar, Nav, NavDropdown, Container,Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    const total = props.cart.reduce((total,course) => total + course.price,0);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
                <Container>
                <Navbar.Brand href="#home">Mango-People</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">All courses</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    {/* <NavDropdown title="Course type" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Nav>
                    
                    <Navbar.Brand className="cart-n-price" href="#cart"> <FontAwesomeIcon icon={faShoppingCart} /> <Badge variant="light">{props.cart.length}</Badge> </Navbar.Brand>
                    <Navbar.Brand className="cart-n-price"  eventKey={2} >
                        ৳ <Badge variant="light">{total}</Badge>
                    </Navbar.Brand>
                    <Nav.Link href="#login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;