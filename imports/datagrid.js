import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';

export default class DataGrid extends Component {
    constructor(props) {
        super(props);
        this.getCssClassByJobSector = this.getCssClassByJobSector.bind(this);
    }
    
    render() {
        const griddleLayout = ({Table, Pagination, Filter, SettingsWrapper}) => (
			<div>
				<Table/>
			</div>
        );
        
        return (
            <div className="container data-grid">
                <Griddle 
                    data={this.props.crewData}
                    plugins={[plugins.LocalPlugin]}
                    components={{Layout: griddleLayout}}>
                    <RowDefinition cssClassName={this.getCssClassByJobSector}>
                        <ColumnDefinition id="_id" isMetadata/>
                    </RowDefinition>
                </Griddle>
            </div>
        );
    }
    /* <ColumnDefinition id="users" title=" " width="10%" visible={this.props.userIsAdmin} /> */
    getCssClassByJobSector(data, index) {
        return "";
    }
}