import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class CollectionSelector extends Component {
    constructor(props) {
        super(props);
        this.changeCollection = this.changeCollection.bind(this);
        this.value = "";
    }

    render() {
        return (
            <div className="container collSelect">
                <form className="coll-select-form" onSubmit={this.changeCollection}>
                    <label>
                        Selected collection
                        <input type="text" ref={selectColl => this.selectColl = selectColl}/>
                    </label>
                    <Button block bsSize="small" type="submit">Select</Button>
                </form>
                
            </div>
        );
    }

    changeCollection(e) {
        e.preventDefault();
        this.value = this.selectColl.value;
    }
}