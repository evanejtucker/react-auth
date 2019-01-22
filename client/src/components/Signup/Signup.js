import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

function Signup(props) {
    return (
        <div>
            <h2 className="loginTitle">Signup</h2>
            <hr/>
            <Form>
                <FormGroup>
                    <Label for="firstname">Firtname</Label>
                    <Input type="text" name="firstname" id="firstname" placeholder="firstname" value={props.firstname} onChange={props.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="lastname">Lastname</Label>
                    <Input type="text" name="lastname" id="lastname" placeholder="lastname" value={props.lastname} onChange={props.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="text" name="email" id="email" placeholder="email@email.com" value={props.email} onChange={props.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="username" value={props.username} onChange={props.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="password" value={props.password} onChange={props.handleInputChange} />
                </FormGroup>
                <Button onClick={props.handleSignup} color="primary" block>Signup</Button>
                <p className="signupLink">
                    <Link to="/login">already have an account?  Sign in here</Link>
                </p>
            </Form>
        </div>
    );
}

export default Signup;