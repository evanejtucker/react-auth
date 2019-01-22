import React, { Component } from "react";
import API from "../../utils/API";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import "./Auth.scss";
import { UserConsumer } from '../../context';

class Auth extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    loggedIn: false,
    user: null
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    console.log(this.state)
    if (this.state.username && this.state.password) {
      API.login({
        username: this.state.username,
        password: this.state.password
      }).then(user => {
        if (user.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: user.data.user
          });
          console.log("log in successful")
        } else {
          console.log(user);
        }
      });
    }
  }

  handleSignup = event => {
    event.preventDefault();
    console.log(this.state)
    if (this.state.username && this.state.password) {
      API.signup({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      }).then(user => {
        if (user.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: user.data.user
          });
          console.log("log in successful")
        } else {
          console.log(user.data);
        }
        console.log(this.state)
      });
    }
  }

  render() {
    return (
      <UserConsumer>
      {({ username }) => (
      <div className="authBox">
      <h1>{username}</h1>
        {(this.props.action === "login") ? (
          <Login
            username={this.state.username}
            password={this.state.password}
            handleInputChange={this.handleInputChange}
            handleLogin={this.handleLogin}
          />
        ) : (
            <Signup
              firstname={this.state.firstname}
              lastname={this.state.lastname}
              email={this.state.email}
              username={this.state.username}
              password={this.state.password}
              handleInputChange={this.handleInputChange}
              handleSignup={this.handleSignup}
            />
          )}
      </div>
    )}
    </UserConsumer>
    );
  }
}

export default Auth;