import React, { Component } from 'react';
import { listData } from './Listdata';
import { ListItem } from './Listitem';

class ListContainer extends Component {

    render() {
        return(
            <div>
                {this.generateListItems()}
            </div>
        )
    }

    generateListItems() {

        const listItems = listData.map((item) => 
            <ListItem item={item} />)

        return listItems;

    }

}

export default ListContainer;