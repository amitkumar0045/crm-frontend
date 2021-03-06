import React from 'react'
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import logo from '../../assests/img/fuckUlogo.png'

export const Header = () => {
    return (
        <div>
            <Navbar
                collapseOnSelect
                bg="info"
                variant="dark" expand="md" >
                <Navbar.Brand>
                    <img src={logo} alt="logo" width="50px" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/dashboard">Tickets</Nav.Link>
                        <Nav.Link href="/dashboard">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
