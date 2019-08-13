import React, { Component } from 'react';
import UserDetails from './UserDetail';

class User extends Component {
    render() {

        const myUserData = { name: "John", lname: "Doe", Dob: "01/01/1990", City: "Salford" }

        return (
            <div>
                <h1>User</h1>
                <UserDetails userData={myUserData} />
            </div>
        );
    }
}

export default User;