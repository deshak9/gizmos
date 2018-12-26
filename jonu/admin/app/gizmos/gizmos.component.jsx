import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import SubmitGizmo from './submit.gizmo.jsx';
import UpdateGizmo from './update.gizmo.jsx';
import SubmitAvailability from './submit.availability.jsx';


class Gizmos extends React.Component {
    render() {
        return (
            <div>
                <SubmitGizmo></SubmitGizmo>
                <br/>
                <br/>
                <UpdateGizmo></UpdateGizmo>
                <SubmitAvailability></SubmitAvailability>
            </div>
        );
    }
}

export default Gizmos;