import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'; // Bring in data from json file
import subproperties from './subproperties.json';
import Property from './property';
import SubProperty from './subproperty';
import { PageHeader, Navbar, DropdownButton, MenuItem, Form, Grid, Tab, Tabs } from 'react-bootstrap';



class NetWorthTotal extends React.Component {

  render() {

    return (
      <div className="networth-total-box">
        <h6 className="total-header">TOTAL</h6>
        <div></div>
      </div>
    )
  }
}

class App extends React.Component {
  // This is the main container component

  render() {
    const subPropertyNode = subproperties.subproperties.map(function(subproperty) {
      return (
        <SubProperty key={subproperty.id} subproperty={subproperty} />
      );
    });

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
        <div className="row content-wrapper">
        <div className="col-xs-12">
          <Tabs defaultActiveKey={1} id="asset-tabs">
            <Tab eventKey={1} title="Property Assets">
              <div className="row property-item-list-container">
                <ul className="list-unstyled properties-item">
                  {propertyNode}
                </ul>
              </div>
            </Tab>
            <Tab eventKey={2} title="Cash Assets">
              <div className="row subproperty-item-list-container">
                <ul className="list-unstyled properties-item">
                  {subPropertyNode}
                </ul>
              </div>
            </Tab>
          </Tabs>
          </div>
        </div>
        </div>
    );
  }
}

export default App;

