import React, { Component } from "react";
import "./Profile.scss";
import { UserConsumer } from '../../context';


function Profile(props) {
    return (
        <UserConsumer>
        {({ data, inputChange, handleLogin, handleSignup }) => (
        <div className="profileBox">
            <h1>{data.loggedIn}</h1>
            {(data.user)? (
                <h1> Welcome {data.user.firstname}</h1>
            ): (
                <h1> Log in to view this page </h1>
            )}
        </div>
      )}
      </UserConsumer>
    )
    
}

export default Profile;