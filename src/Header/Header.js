import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {

    render() {
        return (
            <div id='header' style={this.headerStyle} >
                <div id='website-title' style={this.websiteTitleStyle}>
                    <h1 style={{ margin: 0 }}>REACT !!</h1>
                </div>
                <div id='buttons' style={this.buttonContainerStyle}>
                    <button style={this.buttonsStyle}>Button 1</button>
                    <button style={this.buttonsStyle}>Button 2</button>
                    <button style={this.buttonsStyle}>Button 3</button>
                    <button style={this.buttonsStyle}>Button 4</button>
                    <button style={this.buttonsStyle}>Button 5</button>
                </div>
            </div>
        )
    }

}
