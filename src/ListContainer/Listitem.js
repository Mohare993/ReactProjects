import React, { Component } from 'react';

export class ListItem extends Component {
    render() {
        return(
            <div>
                <p>ID: {this.props.item.id}</p>
                <p>Name: {this.props.item.name}</p>
            </div>
        )
    }
}
