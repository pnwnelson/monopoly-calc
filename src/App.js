import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import data from './data/data.json';
import subproperties from './data/subproperties.json';
import bills from './data/bills.json';
import Property from './properties/property';
import SubProperty from './properties/subproperty';
import CashItemsList from './cash/cash-items-list'
import ReactGA from 'react-ga' // Google Analytics
import { Navbar, Nav, Tab, Tabs } from 'react-bootstrap';


class NetWorthTotal extends React.Component {

// Compenant to show the combined final totals for <Properties /> and <CashItemList /> Not sure where to put this.

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

  constructor(props) {
    super()

    this.state = {
      finalBillTotal: [] // Initializing array to store all the subtotals together?
    };

    ReactGA.initialize('UA-92696610-1'); // Google Analytics stuff
    ReactGA.pageview('/');
  }

  handleBillChange() { // Attempt at creating a final total when subtotals change.
    const test = this.state.finalBillTotal
    this.setState({
      finalBillTotal: test + 1
    })
    console.log(this.state.finalBillTotal)
  }

  render() {

    const billsNode = bills.bills.map((bill)=> {
      return (
        <CashItemsList key={bill.id} bill={bill} onChange={this.handleBillChange}/>
      )
    })

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
          <div className="logo-wrapper text-center">
            <h3 className="kabel-font-main title-logo">MONOPOLY</h3>
            <h4 className="kabel-font-sub">CALCULATOR</h4>
          </div>
          <NetWorthTotal />
          <h6 className="sub-header">Figure out the net worth of the game winner</h6>
        </div>
        <div>
          <div className="row-fluid content-wrapper">
          <div className="col-xs-12">
            <Tabs defaultActiveKey={1} id="asset-tabs">
              <Tab eventKey={1} title="Property Assets">
                <div className="row property-item-list-container">
                  <ul className="list-unstyled properties-item">
                    {propertyNode}
                  </ul>
                </div>
                <div className="row subproperty-item-list-container">
                  <ul className="list-unstyled properties-item">
                    {subPropertyNode}
                  </ul>
                </div>
              </Tab>
              <Tab eventKey={2} title="Cash Assets">
                <div className="row property-item-list-container">
                  <ul className="list-unstyled properties-item">
                    {billsNode}
                  </ul>
                </div>
                {this.state.finalBillTotal}<br/>
                I can't figure out how to update the state of a json array's key and I'm getting quite ticked about it.
              </Tab>
            </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

