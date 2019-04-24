import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Componente ejemplo</div>

                            <div className="card-body">
                                Yo soy un Componente ejemplo!
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
