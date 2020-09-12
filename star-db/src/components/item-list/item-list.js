
import React, { Component } from 'react'
import './item-list.css'
import SwappiService from '../../services/swapi'
import Spinner from '../spinner/spinner'

export default class ItemList extends Component {
    swapiService = new SwappiService()
    state = {
        peopleList: null
    }
    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((list) => this.setState({
                peopleList:list
            }))
    }
    getList = (peopleList) => {
        let {onItemSelected} = this.props
        return  peopleList.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={(() =>{onItemSelected(id)})}
                >
                    {name}
                </li>
            )
        })
    }
    render() {

        const { peopleList } = this.state;
        if(!peopleList ) {
            return <Spinner />
        }
        const items = this.getList(peopleList)
        return (
            <div className="container-block" >
             <ul className="item-list list-group">
                {items}
             </ul>
            </div>
        )
    }
}
