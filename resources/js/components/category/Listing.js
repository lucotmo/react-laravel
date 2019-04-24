import React, { Component } from 'react';
import axios from 'axios'


export default class Listing extends Component {
    constructor()
    {
        super()
        this.state = {
            categories: []
        }
    }

    componentDidMount()
    {
        axios.get('http://react-laravel.test/category')
            .then(response=> {
                this.setState({categories:response.data})
            })
    }

    render() {
        return (
            <div className="content">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map(category=> {
                                return (
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{category.name}</td>
                                        <td>{category.active==1 ? ('Active') : ('Inactive')}</td>
                                        <td>{category.created_at}</td>
                                        <td>{category.updated_at}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
