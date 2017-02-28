import React from 'react';

// Child to Property.
// This should show the user the total valuation of the selected property once they select the drop down menu

export default React.createClass({

  displayName: 'PropertyValuesTotal',

  render() {

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