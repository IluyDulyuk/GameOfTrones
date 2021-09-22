import React, {Component} from 'react';
import './itemList.css';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
export default class ItemList extends Component {

    state = {
        itemsList: null 
    }

    gotService = new GotService().getAllCharacter();

    componentDidMount = () => {
        this.gotService
            .then((itemsList) => {
                this.setState({
                    itemsList
                })
            })
    }

    renderItems = (arr) => {
        return arr.map((item, i) => {

            return (
                <li key={i} className="list-group-item" onClick={() =>  this.props.onUpdateChar(41 + i)}>
                    {item.name}
                </li>
            )
        })
    }

    render() {
        const {itemsList} =this.state;

        if(!itemsList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemsList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}