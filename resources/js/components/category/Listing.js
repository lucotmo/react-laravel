import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Pagination from 'react-js-pagination'

export default class Listing extends Component {
    constructor()
    {
        super()
        this.state = {
            categories: [],
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 3,
            pageRangeDisplayed: 3
        }
        this.handlePageChange = this.handlePageChange.bind(this)
    }

    componentDidMount()
    {
        axios.get('http://react-laravel.test/api/category')
            .then(response=> {
                this.setState({categories:response.data.data})
            })
    }

    onDelete(category_id) {
        axios.delete('http://react-laravel.test/api/category/delete/'+category_id)
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

    handlePageChange(pageNumber) {
        //console.log(`active page is ${pageNumber}`)
        this.setState({activePage: pageNumber})
        axios.get('http://react-laravel.test/api/category?page='+pageNumber)
            .then(response=> {
                this.setState({
                    categories:response.data.data,
                    itemsCountPerPage:response.data.per_page,
                    totalItemsCount:response.data.total,
                    activePage:response.data.current_page
                })
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
                                            <Link to={`/category/edit/${category.id}`}>Edit</Link>
                                            <a href="#" onClick={this.onDelete.bind(this, category.id)}>Delete</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="d-flex justify-content-center">
                    <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange}
                    itemClass='page-item'
                    linkClass='page-link'
                    />
                </div>
            </div>
        );
    }
}
