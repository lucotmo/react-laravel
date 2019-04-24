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

    onDelete(category_id) {
        axios.delete('http://react-laravel.test/category/delete/'+category_id)
            .then(response=> {
                let categories = this.state.categories
                for(var i=0; i< categories.length; i++)
                {
                    if(categories[i].id == category_id)
                    {
                        categories.splice(i, 1)
                        this.setState({categories: categories})
                    }
                }
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
                        <th scope="col">Actions</th>
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
                                        <td>
                                            <a href="#" onClick={this.onDelete.bind(this, category.id)}>Delete</a>
                                        </td>
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
