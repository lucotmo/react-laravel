import React, { Component } from 'react';

import {Link, Route} from 'react-router-dom'
import Add from './Add'
import Listing from './Listing'
import Edit from './Edit'

export default class Category extends Component {
    render() {
        return (
            <div>
                <br />
                <div>
                    <Link to="/category" className="btn btn-primary" >Listing</Link> &nbsp;
                    <Link to="/category/Add" className="btn btn-primary">Add</Link>

                    <Route exact path="/category" component={Listing} />
                    <Route path="/category/Add" component={Add} />
                    <Route path="/category/edit/:id" component={Edit} />
                </div>
            </div>
        );
    }
}
