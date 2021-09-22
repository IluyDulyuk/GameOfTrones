import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {
  
    state = {
        openRandomChar: true
    }

    onToggleChar = () => {
        this.setState(() => {
            const openRandomCharValue = !this.state.openRandomChar;

            return {
                openRandomChar: openRandomCharValue
            }
        })
    }

    render() {
        const {openRandomChar} = this.state;

        const content = openRandomChar ? <RandomChar/> : null
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {content}
                            <ToggleCharBtn onToggleChar={this.onToggleChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails/>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
};

const ToggleCharBtn = ({onToggleChar}) => {
    
    return (
        <button type="button" class="btn btn__toggle btn-dark" onClick={() => onToggleChar()}>Toggle random shar</button>
    )
}