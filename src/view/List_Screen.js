import React, { Component } from 'react';
import SubmitComp from '../components/submit/submitComp';
import SelectOrderComp from '../components/order/selectOrgerComp';
import Links from '../components/links/links';

class ListScreen extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <SubmitComp />
                <br />
                <SelectOrderComp />
                <Links />

            </div>
        );
    }

}

export default ListScreen;