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
                <div>
                    <span>Player Characters</span>
                    <form className="pc-form">
                        <label>
                            <input id="HoS" className="pc-check" type="checkbox"/>
                            HoS
                        </label>
                        <label>
                            <input id="CE" className="pc-check" type="checkbox"/>
                            CE
                        </label>
                        <label>
                            <input id="CMO" className="pc-check" type="checkbox"/>
                            CMO
                        </label>
                        <label>
                            <input id="RD" className="pc-check" type="checkbox"/>
                            RD
                        </label>
                        <label>
                            <input id="QM" className="pc-check" type="checkbox"/>
                            QM
                        </label>
                        <label>
                            <input id="AI" className="pc-check" type="checkbox"/>
                            AI
                        </label><br/>
                        <label>
                            <input id="Detective" className="pc-check" type="checkbox"/>
                            Detective
                        </label>
                        <label>
                            <input id="Lawyer" className="pc-check" type="checkbox"/>
                            Lawyer
                        </label>
                        <label>
                            <input id="Miner" className="pc-check" type="checkbox"/>
                            Miner
                        </label>
                        <label>
                            <input id="Botanist" className="pc-check" type="checkbox"/>
                            Botanist
                        </label>
                        <label>
                            <input id="Bartender" className="pc-check" type="checkbox"/>
                            Bartender
                        </label>
                        <label>
                            <input id="Chaplain" className="pc-check" type="checkbox"/>
                            Chaplain
                        </label>
                    </form>
                </div>
                <DataGridContainer collection="test" doNotGen={[]}/>
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