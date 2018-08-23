import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { Button } from 'react-bootstrap';

export default class DataGrid extends Component {
    constructor(props) {
        super(props);
        this.getCssClassByJobSector = this.getCssClassByJobSector.bind(this);
        this.generate = this.generate.bind(this);
    }

    componentDidUpdate() {
        console.log(this.props);
    }

    render() {
        const griddleLayout = ({Table, Pagination, Filter, SettingsWrapper}) => (
			<div>
				<Table/>
			</div>
        );
        
        return (
            <div className="container data-grid">
                <Button onClick={this.generate}>Generate</Button>
                <Griddle 
                    data={this.props.crewData}
                    plugins={[plugins.LocalPlugin]}
                    components={{Layout: griddleLayout}}>
                    <RowDefinition cssClassName={this.getCssClassByJobSector}>
                        <ColumnDefinition id="_id" visible />
                        <ColumnDefinition id="name" visible />
                        <ColumnDefinition id="job" visible />
                        <ColumnDefinition id="dept" isMetadata />
                        <ColumnDefinition id="traitor" isMetadata />
                        <ColumnDefinition id="changeling" isMetadata />
                        <ColumnDefinition id="antag" visible />
                    </RowDefinition>
                </Griddle>
            </div>
        );
    }
    /* <ColumnDefinition id="users" title=" " width="10%" visible={this.props.userIsAdmin} /> */
    getCssClassByJobSector(data, index) {
        
        return "";
    }

    generate() {
        $('.pc-check:checked').each((i,e)=>{
            this.props.doNotGen.push(e.id);
        });
        console.log(this.props.doNotGen);
    }
}