import React, { Component } from "react";
import API from "./utils/API";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        loggedIn: false,
        user: null
    }

    componentDidMount() {
        console.log(this.state);
        this.isLoggedIn();
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
                    console.log("log in successful");
                    console.log(this.state);
                    window.location.href = '/profile';
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
                    console.log(this.state)
                } else {
                    console.log(user.data);
                }
            });
        }
    }

    isLoggedIn = ()=> {
        if (!this.state.loggedIn) {
            API.isLoggedIn().then(user => {
                console.log(user);
                if(user.data.loggedIn) {
                    this.setState({
                        loggedIn: true,
                        user: user.data.user
                    });
                     
                } else {
                    console.log(user.data.message);
                }
            })
        }
    }

    render() {
        const contextValue = {
            data: this.state,
            inputChange: this.handleInputChange,
            handleLogin: this.handleLogin,
            handleSignup: this.handleSignup
        }
        return (
            <UserContext.Provider value={
                contextValue
            }>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider

