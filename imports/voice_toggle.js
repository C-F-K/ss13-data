import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class VoiceToggle extends Component {
	constructor(props) {
        super(props);
        this.changeVoice = this.changeVoice.bind(this);
        this.state = {
            enabled: false
        };
	}
	
	render() {
		return (
            <label className="switch">
			<input type="checkbox" onChange={this.changeVoice} checked={this.state.enabled} />
                <span className="slider round"></span>
                <span className="switch-label">{this.state.enabled ? "David" : "Zira"}</span>
			</label>
        );
    }

    changeVoice() {
        this.setState({enabled: !this.state.enabled});
        this.value = this.state.enabled ? "Zira" : "David";
    }
}