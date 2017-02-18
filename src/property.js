import React from 'react';
import { Grid } from 'react-bootstrap';
import PropertyValues from './property-values';
import PropertyName from './property-name';
import PropertyValuesTotal from './property-values-total';

export default React.createClass ({
  // This should be the parent/container for <PropertyName />, <PropertyValues /> and <PropertyValuesTotal />.
  // This should be a child to <App />
  displayName: 'Property',

  getInitialState() {
    return { propertyValueTotal: ''};
  },

  changeValueTotal(newValueTotal) {
  	this.setState ({
  		propertyValueTotal: newValueTotal
  	})
  },

  render() {

    const { property } = this.props

    return (
      
      <div className="container">
        <div className="row properties-item">
          <div className="col-xs-12">
            <PropertyName property={property} />
            <PropertyValues property={property} onClick={this.changeValueTotal} />
            <PropertyValuesTotal propertyValueTotal={this.state.propertyValueTotal} />
          </div>
        </div>
      </div> 
    );
  }
})