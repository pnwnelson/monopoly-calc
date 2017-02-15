import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'; // Bring in data from json file
import PropertyValues from './property-values';
import PropertyName from './property-name';
import PropertyValuesTotal from './property-values-total';
import { PageHeader, Navbar, DropdownButton, MenuItem, Form, Grid } from 'react-bootstrap';


class Property extends React.Component {
  // This should be the parent/container for <PropertyName />, <PropertyValues /> and <PropertyValuesTotal />.
  // This should be a child to <App />
  render() {

    const { property } = this.props

    return (
      
      <div className="container">
        <div className="row properties-item">
          <div className="col-xs-12">
            <PropertyName property={property}/>
            <PropertyValues property={property} />
            <PropertyValuesTotal />
          </div>
        </div>
      </div> 
    );
  }
}

class NetWorthTotal extends React.Component {

  render() {

    return (
      <div className="networth-total-box">
        <h6 className="total-header">TOTAL</h6>
      </div>
    )
  }
}

class App extends React.Component {
  // This is the main container component

  render() {

    const propertyNode = data.properties.map(function(property) {
      return (
        <Property key={property.id} property={property} />

      );
    });

    return (
      <div>
        <div className="app-header">
          <h3 className="kabel-font-main">MONOPOLY</h3><h4 className="kabel-font-sub">CALCULATOR</h4>
          <NetWorthTotal />
          <h6 className="sub-header">Figure out the net worth of the game winner</h6>
        </div>
        <div className="container">
          <div className="row property-item-list-container">
            <ul className="list-unstyled properties-item">
              {propertyNode}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
// <h6><i>Figure out the net worth of the game winner</i></h6>
export default App;

