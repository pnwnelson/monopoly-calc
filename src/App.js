import React from 'react';
import './css/App.css';
import './css/properties.css';
import './css/cashAssets.css';
import data from './data/data.json';
import subproperties from './data/subproperties.json';
import bills from './data/bills.json';
import Property from './properties/property';
import SubProperty from './properties/subproperty';
import CashItemsList from './cash/cash-items-list'
import ReactGA from 'react-ga' // Google Analytics
import { Navbar, Nav, Tab, Tabs } from 'react-bootstrap';

class NetWorthTotal extends React.Component {

// Componant to show the combined final totals for <Properties /> and <CashItemList /> Not sure where to put this
  
  render () {

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }

    const bt = this.props.billFinalTotal
    const pt = this.props.propertyFinalTotal 
    const spt = this.props.subPropertyFinalTotal
    const total = 
    bt[1] + bt[2] + bt[3] + bt[4] + bt[5] + bt[6] + bt[7] + // Bills
    pt[1] + pt[2] + pt[3] + pt[4] + pt[5] + pt[6] + pt[7] + pt[8] + pt[9] + pt[10] + pt[11] + // Properties
    pt[12] + pt[13] + pt[14] + pt[15] + pt[16] + pt[17] + pt[18] + pt[19] + pt[20] + pt[21] + pt[22] + //Properties
    spt[1] + spt[2] + spt[3] + spt[4] + spt[5] + spt[6] // Sub Properites

    const totalWithCommas = numberWithCommas(total)

    return (
      <div className="networth-total-box">
        <h6 className="total-header">YOUR NET WORTH</h6>
        <div className="total-number">${totalWithCommas}</div>
      </div>
    )
  }
}

class CashAssetsTotal extends React.Component {

  render () {

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }

    function incomeTax() {
      if (taxTotal <= 200) {
        return taxTotal
      } else {
        return 200
      }
    }

    const bt = this.props.billFinalTotal
    const total = bt[1] + bt[2] + bt[3] + bt[4] + bt[5] + bt[6] + bt[7]
    const totalWithCommas = numberWithCommas(total)
    const taxTotal = Math.round(total * .10)

    return (
      <div>
        <div className="cash-total text-center">
          <h4>CASH TOTAL: ${totalWithCommas}</h4>
          <p>INCOME TAX: ${incomeTax(taxTotal)}</p>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  // This is the main container component

  constructor(props) {
    super()

    this.state = {
      billFinalTotal: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0},
      propertyFinalTotal: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 
        10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17:0, 18: 0, 19: 0,
        20: 0, 21: 0, 22: 0},
      subPropertyFinalTotal: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0
      }
    };
    this.handleCashInput = this.handleCashInput.bind(this)
    this.handlePropertyValueInput = this.handlePropertyValueInput.bind(this)
    this.handleSubPropertyValueInput = this.handleSubPropertyValueInput.bind(this)

    ReactGA.initialize('UA-92696610-1'); // Google Analytics stuff
    ReactGA.pageview('/');
  }

  handleCashInput(id, newBillFinalTotal) {  
    const cashTemp = { ...this.state.billFinalTotal, [id]: +newBillFinalTotal}
    this.setState({
      billFinalTotal: cashTemp
    }) 
  }

  handlePropertyValueInput(id, newPropertyValueFinalTotal) {
    const propertyTemp = { ...this.state.propertyFinalTotal, [id]: +newPropertyValueFinalTotal}
    this.setState({
      propertyFinalTotal: propertyTemp
    })
  }

  handleSubPropertyValueInput(id, newFinalSubPropertyValueTotal) {
    const subPropertyTemp = { ...this.state.subPropertyFinalTotal, [id]: +newFinalSubPropertyValueTotal}
    this.setState({
      subPropertyFinalTotal: subPropertyTemp
    })
  }

  render() {

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }

    const billsNode = bills.bills.map((bill)=> {
      return (
        <CashItemsList key={bill.id} bill={bill} onChange={this.handleCashInput} />
      )
    })

    const propertyNode = data.properties.map((property)=> {
      return (  
        <Property key={property.id} property={property} onChange={this.handlePropertyValueInput} />
      )
    })

    const subPropertyNode = subproperties.subproperties.map((subproperty)=> {
      return (
        <SubProperty key={subproperty.id} subproperty={subproperty} onChange={this.handleSubPropertyValueInput} />
      )
    })

    return (
      <div>
        <div className="app-header">
          <div className="logo-wrapper text-center">
            <h3 className="kabel-font-main title-logo">MONOPOLY</h3>
            <h4 className="kabel-font-sub">CALCULATOR</h4>
          </div>
          <NetWorthTotal billFinalTotal={this.state.billFinalTotal} propertyFinalTotal={this.state.propertyFinalTotal} subPropertyFinalTotal={this.state.subPropertyFinalTotal} />
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
                  <CashAssetsTotal billFinalTotal={this.state.billFinalTotal} />
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

