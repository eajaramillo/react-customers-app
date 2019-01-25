import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {

  renderHome = () => <h1>Home</h1>;

  renderCustomerContainer = () => <h1>Customer Container</h1>;

  renderCustomerListContainer = () => <h1>Customer List Container</h1>;

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={HomeContainer} />
          <Route path="/customers" component={CustomersContainer} />
          <Switch>
            <Route path="/customers/new" component={NewCustomerContainer} />
            <Route path="/customers/:documento" 
                  render={props => <CustomerContainer dni={props.match.params.documento} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
