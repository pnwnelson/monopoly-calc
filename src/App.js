import React from 'react';
import logo from './logo.svg';
import './App.css';
//import data from './data.json'; // Bring in data from json file - CURRENTLY DISABLED; USING JS OBJECT
import { Navbar, DropdownButton, MenuItem, Form, Grid } from 'react-bootstrap';

// Showing components starting with the bottom in the hierarchy.

class PropertyName extends React.Component { 
  // Child to Property.
  // This should show the names of each monopoly Property and include their colors via JSON className property.
  render() {

    const name = this.props.propertyNode.name.slice(0,3) // Showing just the first three letters of Property name.

    return 
      
      <div className={this.props.propertyNode.className}>
        <div className="prop-title-container">{name}</div>
      </div>  
  }
}

class PropertyValues extends React.Component { 
  // Child to Property.
  // This component should show a drop down menu to select the state (mortgaged, houses, etc) of the Property at the end of the game
  render() {

    const { owned } = this.props.propertyNode;
    const { mortgaged } = this.props.propertyNode;
    const { houseCost } = this.props.propertyNode;

    return 
      
      <div className="prop-values-container">
        <DropdownButton title="$">
          <button eventKey="o" value={owned}>O</button>
          <button eventKey="m" value={mortgaged}>M</button>
          <button className="green btn-selections" eventKey="1" value={owned + (houseCost * 1)}>1</button>
          <button className="green btn-selections" eventKey="2" value={owned + (houseCost * 2)}>2</button>
          <button className="green btn-selections" eventKey="3" value={owned + (houseCost * 3)}>3</button>
          <button className="green btn-selections" eventKey="4" value={owned + (houseCost * 4)}>4</button>
          <button className="red btn-selections" eventKey="h" value={owned + (houseCost * 5)}>H</button>
        </DropdownButton>
      </div>
  }
}

class PropertyValuesTotal extends React.Component { 
  // Child to Property.
  // This should show the user the total valuation of the property once they select the drop down menu
  render() {

    return 
        // need code to add up selection from <PropertyValues /> and display in a div
  }
}

class Property extends React.Component {
  // This should be the parent/container for <PropertyName />, <PropertyValues /> and <PropertyValuesTotal />.
  // This should be a child to <App />
  render() {

    const propertyNode = properties.map(function(property) {
      // Trying to bring in data about each property from either JS Object or JSON file.
      // Not sure where this should get put or the exact code that brings in the data.
      return (
        <li key={property}>{property}</li>
      );
    });

    return (
      
      <div className="container">
        <div className="row">
          <PropertyName name={this.props.propertyNode} key={this.props.propertyNode}/>
          <PropertyValues />
          <PropertyValuesTotal />
        </div>
      </div> 
    );
  }
}

class App extends React.Component {
  // This is the main container component
  render() {

    return (
      <div className="container">
        <div className="row">
          <h3>Monopoly Calculator</h3>
          <h6><i>Figure out the net worth of the game winner</i></h6>
          <ul className="list-unstyled properties-item">
            <Property />
          </ul>
        </div>
      </div>
    );
  }
}

var properties = [
// This is a temporary use of JS Object instead of JSON data file for troubleshooting.
  {
    id: 1,
    className: 'brown',
    name: 'Baltic Avenue',
    owned: 60,
    mortgaged: 30,
    houseCost: 50
  },
  {
    id: 2,
    className: 'light-blue',
    name: 'Oriental Avenue',
    owned: 100,
    mortgaged: 50,
    houseCost: 50
  },
  {
    id: 3,
    className: 'purple',
    name: 'St. Charles Place',
    owned: 140,
    mortgaged: 70,
    houseCost: 100
  }
];

export default App;
