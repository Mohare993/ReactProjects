import React, { Component } from 'react';

class UserDetails extends Component {
    render() {
        return (<div>
            <li> First Name = {this.props.userData.name}</li>
            <li> Last Name = {this.props.userData.lname}</li>
            <li> Date of birth = {this.props.userData.Dob}</li>
            <li> City = {this.props.userData.City}</li>
        </div>
        );
    }
}

export default UserDetails;