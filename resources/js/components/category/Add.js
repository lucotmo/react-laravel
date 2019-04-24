import React, { Component } from 'react';

export default class Add extends Component {
    render() {
        return (
            <div className="content">
                <form>
                    <div className="form-group">
                        <label v-for="category_name">Category Name</label>
                        <input type="text" className="form-control" id="category_name" aria-describedby="emailHelp" placeholder="Enter Category" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
