import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

class Signup extends Component {
    state = {
        validPassword: false,
        confirmPassword: ""
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentDidUpdate() {

        this.confirmPassword()
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    confirmPassword = () => {
        if (!this.state.validPassword && this.state.confirmPassword !== "" && this.state.confirmPassword === this.props.password) {
            this.setState({
                validPassword: true
            });
        }
        if (this.state.validPassword && this.state.confirmPassword !== this.props.password) {
            this.setState({
                validPassword: false
            });
        }
    }

    render() {
        return (
            <div>
                <h2 className="loginTitle">Signup</h2>
                <hr />
                <Form>
                    <FormGroup>
                        <Label for="firstname">Firtname</Label>
                        <Input type="text" name="firstname" id="firstname" placeholder="firstname" value={this.props.firstname} onChange={this.props.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Lastname</Label>
                        <Input type="text" name="lastname" id="lastname" placeholder="lastname" value={this.props.lastname} onChange={this.props.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" placeholder="email@email.com" value={this.props.email} onChange={this.props.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="username" value={this.props.username} onChange={this.props.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder=" confirm password" value={this.state.password} onChange={this.handleInputChange} />
                    </FormGroup>
                    {this.state.validPassword ? (
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