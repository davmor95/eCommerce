import React, {useEffect, useState} from "react";
import '../App.css';
import {useLocation} from 'react-router-dom';
import {Navbar, Nav, Form, Button, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import LoginControl from "./LoginControl";


const MyNavBar = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("currentUser") === null ? false : true);
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("currentUser") === null ? false : true);
    }, [isLoggedIn]);
    localStorage.setItem("currentUser", "123");
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Health Care Centene</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home" className="nav-menu-items">Home</Nav.Link>
                <Nav.Link href="/contact"><span className="nav-menu-items">Contact</span></Nav.Link>
                <Nav.Link href="/admin"><span className="nav-menu-items">Admin</span></Nav.Link>
                {isLoggedIn &&
                <NavDropdown title="User" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>



                }
            </Nav>
            <LoginControl/>
        </Navbar>
        </>
    );
}

export default MyNavBar;
