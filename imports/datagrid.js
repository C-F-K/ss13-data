import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';

export default class DataGrid extends Component {
    constructor(props) {
		super(props);
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
                    <RowDefinition>
                        <ColumnDefinition id="_id" isMetadata/>
                        <ColumnDefinition id="users" title=" " width="10%" visible={this.props.userIsAdmin} />
                    </RowDefinition>
                </Griddle>
            </div>
        );
    }
}