import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  renderHome = () => <h1>Home</h1>;

  renderCustomerContainer = () => <h1>Customer Container</h1>;

  renderCustomerListContainer = () => <h1>Customer List Container</h1>;

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/customers/new" component={this.renderCustomerNewContainer} />
          <Route path="/customers/:dni" component={this.renderCustomerContainer} />
          <Switch>
            <Route path="/customers" component={this.renderCustomerListContainer} />
            <Route path="/" component={this.renderHome} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
