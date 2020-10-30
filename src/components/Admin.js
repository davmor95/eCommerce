import React from "react";
import {Button, Table} from "react-bootstrap";
import './Admin.css';
const Admin = (props) => {
    return (
        <div>
            <div className="titlePos">
                <h1>Admin Page</h1>
            </div>
            <br/>
            <div className="butpos">
                <Button variant="primary">Hide Users</Button>
                {" "}
                {" "}
                <Button variant="primary">Add New User</Button>
            </div>
            <div className="userData">
                <h3>User Data</h3>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
         </div>
        </div>
    );
}
export default Admin;
