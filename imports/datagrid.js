import React, { Component } from 'react';
import Griddle, { connect as griddleConnect, plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { Button } from 'react-bootstrap';
import { Crew } from './collections';
import { generateCrewMembers, generateAntags, assignAntags, assignAntagTargets } from './rand_gen';
// import ReactJson from 'react-json-view';

export default class DataGrid extends Component {
    constructor(props) {
        super(props);
        this.getCssClassByJobSector = this.getCssClassByJobSector.bind(this);
        this.generate = this.generate.bind(this);
    }

    render() {
        const griddleLayout = ({Table, Pagination, Filter, SettingsWrapper}) => (
			<div>
                <Table/>
                <Pagination/>
			</div>
        );
        
        return (
            <div className="container data-grid">
                <Button className="generate-button" onClick={this.generate}>Generate</Button>
                <Griddle 
                    data={this.props.crewData}
                    plugins={[plugins.LocalPlugin]}
                    components={{Layout: griddleLayout}}>
                    <RowDefinition cssClassName={this.getCssClassByJobSector}>
                        <ColumnDefinition id="_id" isMetadata />
                        <ColumnDefinition id="name" visible />
                        <ColumnDefinition id="job" visible />
                        <ColumnDefinition id="dept" isMetadata />
                        <ColumnDefinition id="traitor" isMetadata />
                        <ColumnDefinition id="changeling" isMetadata />
                        <ColumnDefinition id="antag.type" visible />
                        <ColumnDefinition id="antag.objectives" visible />
                    </RowDefinition>
                </Griddle>
            </div>
        );
    }

    /* 
      <Griddle data={localData} plugins={[plugins.LocalPlugin]}>
    <RowDefinition>
      <ColumnDefinition id="name" />
      <ColumnDefinition id="location.state" title="State" />
    </RowDefinition>
  </Griddle>
    
    */
    /* <ColumnDefinition id="users" title=" " width="10%" visible={this.props.userIsAdmin} /> */
    /* <ColumnDefinition id="antag" visible customComponent={enhancedWithRowData(ReactJsonCustom)}/> */
    getCssClassByJobSector(data, index) {

        return "";
    }

    generate() {
        $('.generate-button').css("display","none");
        $('.pc-check:checked').each((i,e)=>{
            this.props.doNotGen.push(e.id);
        });

        var crew = generateCrewMembers(this.props.doNotGen);
        var antags = generateAntags(crew);
        var assignedCrew = assignAntags(crew, antags);
        var targetedCrew = assignAntagTargets(assignedCrew);

        targetedCrew.forEach(crew => {
            Crew.insert(crew);
        });
    }
}

/*
class ReactJsonCustom extends ReactJson {
    constructor(props) {
        super(props);
    }
}
const rowDataSelector = (state, { griddleKey }) => {
	return state.get('data').find(rowMap => rowMap.get('griddleKey') === griddleKey).toJSON();
};

const enhancedWithRowData = griddleConnect((state, props) => {
	return {
        rowData: rowDataSelector(state, props),
        src: rowDataSelector(state,props).antag
	};
});
*/