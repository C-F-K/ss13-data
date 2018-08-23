import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import VoiceToggle from './voice_toggle';

export default class AISpeaker extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="container ai-speaker">
                <VoiceToggle ref={voice => this.voice = voice}/>
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
		Meteor.call('speak', this.speechText.value, this.voice.value);
	}
}