import React, {useState} from "react";
import {Button, Form, Nav} from "react-bootstrap";
import Login from "./Login";
const LoginControl = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("currentUser") === null ? false : true);


    const routeLogin = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
        return(
            <div>
                <Login/>
            </div>
        );

    }

    const routeLogout = (event) => {
        event.preventDefault();
        setIsLoggedIn(false);
        //clear local storage in react
        localStorage.clear();
    }
    return(
        <Form inline>
            {isLoggedIn ? <Button onClick={routeLogout}>Logout</Button> : <Button onClick={routeLogin}>Login </Button>}
        </Form>
    );
}

export default LoginControl;
