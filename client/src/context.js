import React, { Component } from "react";
import API from "./utils/API";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        username: "jjjjj",
        password: "",
        loggedIn: false,
        user: null,
        inputChange: this.handleInputChange,
        login: this.handleLogin
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

    testfunction = (e)=> {
        e.preventDefault()
        console.log('test function working')
    }

    render() {
        return (
            <UserContext.Provider value={
                // {
                //     state: this.state,
                //     actions: {
                //         login: this.handleLogin,
                //         inputChange: this.handleInputChange
                //     }
                // }
                this.state
                }>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider

