import React, { Component } from 'react';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Add from './Add'
import Listing from './Listing'

export default class Category extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to="/category">Listing</Link>
                        <Link to="/category/Add">Add</Link>

                        <Route exact path="/category" component={Listing} />
                        <Route exact path="/category/Add" component={Add} />
                    </div>
                </Router>
            </div>
        );
    }
}
