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

// Componant to show the combined final totals for <Properties /> and <CashItemList /> Not sure where to put this.
  
  render() {

    const bt = this.props.billFinalTotal
    const total = bt[1] + bt[2] + bt[3] + bt[4] + bt[5] + bt[6] + bt[7]
    return (
      <div className="networth-total-box">
        <h6 className="total-header">TOTAL</h6>
        <div className="total-number">${total}</div>
      </div>
    )
  }
}

class App extends React.Component {
  // This is the main container component
  // This should own the final total state?

  constructor(props) {
    super()

    this.state = {
      billFinalTotal: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0},
      //finalPropertyValueTotal: [] // Initializing array to store all the subtotals.
    };
    this.handleCashInput = this.handleCashInput.bind(this)
    //this.handlePropertyValueInput = this.handlePropertyValueInput.bind(this)

    ReactGA.initialize('UA-92696610-1'); // Google Analytics stuff
    ReactGA.pageview('/');
  }

  handleCashInput(id, newBillFinalTotal) { // This is logging the calculated bill subtotal - which is what I want. 
    const cashTemp = { ...this.state.billFinalTotal, [id]: +newBillFinalTotal}
    this.setState({
      billFinalTotal: cashTemp
    }) 
  }

  // handlePropertyValueInput(newFinalPropertyValueTotal) {
  //   console.log('property subtotal: ' + newFinalPropertyValueTotal)
  //   // const propertyTemp = this.state.finalPropertyValueTotal.push(newFinalPropertyValueTotal)
  //   console.log('finalPropertyValueTotal array contents: ' + propertyTemp)
  //   console.log('final prop total: ' + this.state.finalPropertyValueTotal.reduce((a,b) => a + b, 0 ))
  // }

  render() {

    const billsNode = bills.bills.map((bill)=> {
      return (
        <CashItemsList key={bill.id} bill={bill} onChange={this.handleCashInput} />
      )
    })

    const subPropertyNode = subproperties.subproperties.map((subproperty)=> {
      return (
        <SubProperty key={subproperty.id} subproperty={subproperty} />
      )
    })

    const propertyNode = data.properties.map((property)=> {
      return (  
        <Property key={property.id} property={property} onChange={this.handlePropertyValueInput} />
      )
    })

    return (
      <div>
        <div className="app-header">
          <div className="logo-wrapper text-center">
            <h3 className="kabel-font-main title-logo">MONOPOLY</h3>
            <h4 className="kabel-font-sub">CALCULATOR</h4>
          </div>
          <NetWorthTotal billFinalTotal={this.state.billFinalTotal} />
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
                <div className="row text-center">
                  <div className="col-xs-12 cash-total">
                    <h4>Cash Total: </h4>
                  </div>
                </div>
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

