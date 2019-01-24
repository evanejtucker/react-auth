import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import { Link } from "react-router-dom";

class Signup extends Component {
    state = {
        validPassword: false,
        confirmPassword: false,
        validEmail: false,
        validForm: false,
        password: "",
        passwordMessage: "",
        validField: {
            firstname: false,
            lastname: false,
            email: false,
            username: false,
            password: false,
            password2: false
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.validatePassword();
    }

    componentDidUpdate() {
        this.confirmPassword();
        this.validatePassword();
        this.passwordMessage();
        this.validateEmail();
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    // checks if 2 password fields match
    confirmPassword = () => {
        if (!this.state.confirmPassword && this.state.password !== "" && this.state.password === this.props.password) {
            this.setState({
                confirmPassword: true
            });
        }
        if (this.state.confirmPassword && this.state.password !== this.props.password) {
            this.setState({
                confirmPassword: false
            });
        }
    }

    // checks is password meets regex test (at least 8 letters, 1 capital and 1 number)
    validatePassword = ()=> {
        let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
        let valid = strongPassword.test(this.props.password);
        if (!this.state.validPassword && valid) {
            console.log("password is valid");
            this.setState({
                validPassword: true
            });
        }
        if (this.state.validPassword && !valid) {
            console.log("password is not valid");
            this.setState({
                validPassword: false
            });
        }
    }

    // displays the password message if it exists
    passwordMessage = () => {
        let message = "at least 8 letters, 1 capital & 1 number"
        if (this.props.password !== "" && !this.state.validPassword && this.state.passwordMessage !== message) {
            this.setState({
                passwordMessage: message
            });
        }
        if (this.state.validPassword && this.state.passwordMessage !== "") {
            this.setState({
                passwordMessage: ""
            });
        }
        if (this.state.passwordMessage === message && this.props.password === "") {
            this.setState({
                passwordMessage: ""
            });
        } 
    }

    // uses regex to check is email is valid
    validateEmail = () => {
        let validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let valid = validEmail.test(this.props.email);
        if (!this.state.validEmail && valid) {
            console.log("email is valid");
            this.setState({
                validEmail: true
            });
        }
        if (this.state.validEmail && !valid) {
            console.log("email is not valid");
            this.setState({
                validEmail: false
            });
        }
    }

    isValid = () => {
        return false;
    }

    render() {
        return (
            <div>
                <h2 className="loginTitle">Signup</h2>
                <hr />
                {this.props.message?(
                    <Alert type="danger">{this.props.message}</Alert>
                ): (
                    <p></p>
                )}
                <Form>
                    <FormGroup>
                        <Label for="firstname">Firtname</Label>
                        <Input type="text" name="firstname" id="firstname" placeholder="firstname" value={this.props.firstname} onChange={this.props.handleInputChange} valid={this.state.validField.firstname}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Lastname</Label>
                        <Input type="text" name="lastname" id="lastname" placeholder="lastname" value={this.props.lastname} onChange={this.props.handleInputChange} valid={this.state.validField.lastname}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="email@email.com" value={this.props.email} onChange={this.props.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="username" value={this.props.username} onChange={this.props.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} />
                        <FormText>{this.state.passwordMessage}</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input type="password" name="password" id="confirmPassword" placeholder="confirm password" value={this.state.password} onChange={this.handleInputChange} />
                    </FormGroup>
                    {(this.state.confirmPassword && this.state.validPassword  && this.state.validEmail) ? (
                        <Button onClick={this.props.handleSignup} color="primary" block>Signup</Button>
                    ) : (
                        <Button onClick={this.props.handleSignup} color="danger" block disabled>Signup</Button>
                    )}
                    <p className="signupLink">
                        <Link to="/login">already have an account?  Sign in here</Link>
                    </p>
                </Form>
            </div>
        );
    }
}

export default Signup;