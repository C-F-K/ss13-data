import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import './main.html'; 
import App from '../imports/app';

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('render-target'));
});

function renderRoutes() {
    return (
        <div className="container top-level">
            <App/>
        </div>
    );
}