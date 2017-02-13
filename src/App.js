import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropertyValues from './property-values';
import PropertyName from './property-name';
import PropertyValuesTotal from './property-values-total';
import data from './data.json'; // Bring in data from json file
import { Header, Navbar, DropdownButton, MenuItem, Form, Grid } from 'react-bootstrap';


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
            <PropertyValues property={property}/>
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
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3 className="kabel-font">MONOPOLY <br/>CALCULATOR</h3>
            <NetWorthTotal />
          </div>
        </div>
        <div className="row">
          <ul className="list-unstyled properties-item">
            {propertyNode}
          </ul>
        </div>
      </div>
    );
  }
}
// <h6><i>Figure out the net worth of the game winner</i></h6>
export default App;

