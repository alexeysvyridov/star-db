
import React, { Component } from 'react'
import './item-list.css'
// import SwappiService from '../../services/swapi'
import Spinner from '../spinner/spinner'

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
 
        const { getData } = this.props;
        getData()
            .then((list) =>{
                this.setState({
                    itemList:list
                });
            }) 
    };



    renderItems = (list) => {
        return list.map((item) => {
            const { id } = item;
            if(!this.props.children) {
                return
            }
            const  label  = this.props.children(item)
            return (
                <li
                    className="list-group-item"
                    key={id}
                    onClick={() => {
                        this.props.onItemSelected(id);
                    }}
                >
                    {label}
                </li>
            );
        });
    };

    render() {

        const { itemList } = this.state;
        if(!itemList ) {
            return <Spinner />
        }
        const items = this.renderItems(itemList)
        return (
            <div className="container-block" >
             <ul className="item-list list-group">
             {items}
             </ul>
            </div>
        )
    }
}
