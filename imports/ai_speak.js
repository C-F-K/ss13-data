import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class AISpeaker extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="container ai-speaker">
                <form className="ai-speak-form" onSubmit={this.handleSubmit}>
                <label>
                    Text
                    <input type="text" ref={speechText => this.speechText = speechText} />
                </label>
                <Button block bsSize="large" type="submit">Say</Button>
                </form>
            </div>
        );
    }

    handleSubmit(e) {
		e.preventDefault();
		Meteor.call('speak', this.speechText.value);
	}
}