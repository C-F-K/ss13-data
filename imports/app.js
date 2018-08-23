import React, { Component } from 'react';

import AISpeaker from '../imports/ai_speak';
import DataGridContainer from '../imports/datagrid_container';
import CollectionSelector from '../imports/collection_selector';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container app-level">
                <AISpeaker/>
                <DataGridContainer collection="test"/>
            </div>
        );
    }
}

/* <CollectionSelector ref={collection => this.collection = collection} /> */

/**
 * cyka BLYAT
 * collection selects correctly, but has to be communicated up to app and then back down to datagrid
 * can also just get the cursor in the collectionselector? idk
 * FOR NOW maybe not MVP idk
 */