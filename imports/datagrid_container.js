import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { withTracker } from 'meteor/react-meteor-data';
import DataGrid from './datagrid'
// import {} from 'rand_gen';


export default DataGridContainer = withTracker(props => {
    console.log(props.collection);
    // FOR LATER: 
    // if collection exists, get it
    // if it doesn't, create it
	return {
        // randGen me up some bitches, store it in Mongo, get a cursor, blat it at the griddy boi
        crewData: []
	};
})(DataGrid);