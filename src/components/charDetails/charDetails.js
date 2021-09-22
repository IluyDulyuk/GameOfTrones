import React, {Component} from 'react';
import './charDetails.css';
import GotService from '../../services/gotService';
export default class CharDetails extends Component {

    state = {
        char: null
    }

    gotService = new GotService()

    updateChar = () => {
        const {charId} = this.props;

        if(!charId) {
            return;
        }
        
        this.gotService.getCharacter(charId)
            .then(char => {
                this.setState({
                    char
                })
            })

    }

    componentDidMount = () => {
        this.updateChar()
    }

    componentDidUpdate = (prev) => {
        if(this.props.charId !== prev.charId) {
            this.updateChar()
        }
    }
    
    render() {
        if(!this.state.char) {
            return (
                <span className="no-select__span">Please select char</span>
            )
        }

        const {name, gender, born, died, cultire} = this.state.char;


        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{cultire}</span>
                    </li>
                </ul>
            </div>
        );
    }
}