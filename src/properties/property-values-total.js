import React from 'react';
//import { Form, Grid } from 'react-bootstrap';

export default React.createClass({

  // Child to Property.
  // This should show the user the total valuation of the property once they select the drop down menu
  displayName: 'PropertyValuesTotal',

  render() {
  // need code to add up selection from <PropertyValues /> and display in a div
  	const propertyValueTotal = this.props.propertyValueTotal

    return (
        <div className="property-value-total-box-container">
        	<div className="value-amount">
        		{propertyValueTotal}
        	</div>
        </div>
      )
  }
})