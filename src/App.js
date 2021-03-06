import React from "react";
import "./css/App.css";
import "./css/properties.css";
import "./css/cashAssets.css";
import data from "./data/data.json";
import subproperties from "./data/subproperties.json";
import bills from "./data/bills.json";
import Property from "./properties/property";
import SubProperty from "./properties/subproperty";
import CashItemsList from "./cash/cash-items-list";
import AdSenseMobile from "./adsense/ad-sense-mobile.js";
import AdSenseDesktop from "./adsense/ad-sense-desktop.js";
import AdSenseResponsive from "./adsense/ad-sense-responsive.js";
import ReactGA from "react-ga"; // Google Analytics
import { Navbar, Nav, Tab, Tabs } from "react-bootstrap";

class NetWorthTotal extends React.Component {
  // Componant to show the combined final totals for <Properties /> and <CashItemList /> Not sure where to put this

  render() {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }

    const bt = this.props.billFinalTotal;
    const pt = this.props.propertyFinalTotal;
    const spt = this.props.subPropertyFinalTotal;
    const total =
      bt[1] +
      bt[2] +
      bt[3] +
      bt[4] +
      bt[5] +
      bt[6] +
      bt[7] + // Bills
      pt[1] +
      pt[2] +
      pt[3] +
      pt[4] +
      pt[5] +
      pt[6] +
      pt[7] +
      pt[8] +
      pt[9] +
      pt[10] +
      pt[11] + // Properties
      pt[12] +
      pt[13] +
      pt[14] +
      pt[15] +
      pt[16] +
      pt[17] +
      pt[18] +
      pt[19] +
      pt[20] +
      pt[21] +
      pt[22] + //Properties
      spt[1] +
      spt[2] +
      spt[3] +
      spt[4] +
      spt[5] +
      spt[6]; // Sub Properites

    const totalWithCommas = numberWithCommas(total);

    return (
      <div className="w-50 w-25-l">
        <div className="fr flex flex-column items-center networth-total-box br3 br3-ns br--left ">
          <h6 className="total-header">YOUR NET WORTH</h6>
          <div className="total-number">${totalWithCommas}</div>          
        </div>
      </div>
    );
  }
}

class CashAssetsTotal extends React.Component {
  render() {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }

    function incomeTax() {
      if (taxTotal <= 200) {
        return taxTotal;
      } else {
        return 200;
      }
    }

    const bt = this.props.billFinalTotal;
    const total = bt[1] + bt[2] + bt[3] + bt[4] + bt[5] + bt[6] + bt[7];
    const totalWithCommas = numberWithCommas(total);
    const taxTotal = Math.round(total * 0.1);

    return (
      <div>
        <div className="cash-total text-center">
          <h4>CASH TOTAL: ${totalWithCommas}</h4>
          <p>INCOME TAX: ${incomeTax(taxTotal)}</p>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  // This is the main container component

  constructor(props) {
    super();

    this.state = {
      billFinalTotal: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0
      },
      propertyFinalTotal: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0,
        21: 0,
        22: 0
      },
      subPropertyFinalTotal: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
      }
    };
    this.handleCashInput = this.handleCashInput.bind(this);
    this.handlePropertyValueInput = this.handlePropertyValueInput.bind(this);
    this.handleSubPropertyValueInput = this.handleSubPropertyValueInput.bind(
      this
    );

    ReactGA.initialize("UA-92696610-1"); // Google Analytics stuff
    ReactGA.pageview("/");
  }

  handleCashInput(id, newBillFinalTotal) {
    const cashTemp = { ...this.state.billFinalTotal, [id]: +newBillFinalTotal };
    this.setState({
      billFinalTotal: cashTemp
    });
  }

  handlePropertyValueInput(id, newPropertyValueFinalTotal) {
    const propertyTemp = {
      ...this.state.propertyFinalTotal,
      [id]: +newPropertyValueFinalTotal
    };
    this.setState({
      propertyFinalTotal: propertyTemp
    });
  }

  handleSubPropertyValueInput(id, newFinalSubPropertyValueTotal) {
    const subPropertyTemp = {
      ...this.state.subPropertyFinalTotal,
      [id]: +newFinalSubPropertyValueTotal
    };
    this.setState({
      subPropertyFinalTotal: subPropertyTemp
    });
  }

  render() {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }

    const billsNode = bills.bills.map(bill => {
      return (
        <CashItemsList
          key={bill.id}
          bill={bill}
          onChange={this.handleCashInput}
        />
      );
    });

    const propertyNode = data.properties.map(property => {
      return (
        <Property
          key={property.id}
          property={property}
          onChange={this.handlePropertyValueInput}
        />
      );
    });

    const subPropertyNode = subproperties.subproperties.map(subproperty => {
      return (
        <SubProperty
          key={subproperty.id}
          subproperty={subproperty}
          onChange={this.handleSubPropertyValueInput}
        />
      );
    });

    return (
      <div className="relative">
        <div className="flex flex-column container-page-width center">
          <div className="flex flex-column items-center">
            <div className="fixed flex flex-wrap items-center justify-between app-header">
              <div className="w-50 w-25-l pl3 pl0-l">
                <div className="fl flex flex-column items-center">
                  <h3 className="kabel-font-main title-logo">MONOPOLY</h3>
                  <h4 className="kabel-font-sub">CALCULATOR</h4>                  
                </div>
              </div>
              <h4 className="w-50-l dn db-l sub-header f3-l">
                Figure out the net worth of the game winner!
              </h4>
              <NetWorthTotal
                billFinalTotal={this.state.billFinalTotal}
                propertyFinalTotal={this.state.propertyFinalTotal}
                subPropertyFinalTotal={this.state.subPropertyFinalTotal}
              />
              <h4 className="db-m dn-ns sub-header f4 center">
                Figure out the net worth of the game winner!
              </h4>
            </div>
            <div className="flex flex-column w-100 main-section">
              <div className="flex flex-row">
                <div className="w-100 relative">
                  <Tabs defaultActiveKey={1} id="asset-tabs" className="center relative">
                    <div className="db dn-ns fixed items-center justify-center ad-sense-container bg-white z-999">
                    <div className="tc pt3 f7 gray">Ads help support this site! Thanks for your support!</div>
                      <AdSenseResponsive
                        client="ca-pub-6063578944512286"
                        slot="8034558454"
                        format="auto"
                      />          
                    </div>
                    <div className="dn db-ns fixed items-center justify-center ad-sense-container bg-white z-999">
                    <div className="tc pt3 f7 gray">Ads help support this site! Thanks for your support!</div>
                      <AdSenseDesktop
                        client="ca-pub-6063578944512286"
                        slot="9906828034"
                      />          
                    </div>
                    <Tab eventKey={1} title="Property Assets">
                      <div className="flex flex-row justify-center property-item-list-container">
                        <ul className="list-unstyled properties-item">
                          {propertyNode}
                        </ul>
                      </div>
                      <div className="dn db-ns items-center justify-center ad-sense-container-2 bg-white z-999">
                        <AdSenseDesktop
                          client="ca-pub-6063578944512286"
                          slot="6243695446"
                        />          
                      </div>
                      <div className="flex flex-row justify-center subproperty-item-list-container">
                        <ul className="list-unstyled properties-item">
                          {subPropertyNode}
                        </ul>
                      </div>
                    </Tab>
                    <Tab eventKey={2} title="Cash Assets" className="flex center">
                      <div className="flex flex-row items-center justify-center cash-asset-container">
                        <ul className="w-100 pl0">
                          {billsNode}
                        </ul>
                      </div>
                      <div className="flex flex-row justify-center cash-total-box">
                        <div className="text-center">
                          <CashAssetsTotal
                            billFinalTotal={this.state.billFinalTotal}
                          />
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
          <div className="github-link">
            <a
              href="https://github.com/pnwnelson/monopoly-calc/issues"
              target="bob_dole"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
